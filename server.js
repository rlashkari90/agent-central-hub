const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");
const dbPath = path.join(dataDir, "db.json");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";
const sessionTtlMs = 1000 * 60 * 60 * 24 * 14;
const adminEmail = (process.env.ADMIN_EMAIL || "admin@llhomesteam.com").toLowerCase();
const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
const sessions = new Map();

const staticTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json; charset=utf-8",
};

function createId() {
  return crypto.randomUUID ? crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(String(password), salt, 120000, 32, "sha256").toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  if (!stored || !stored.includes(":")) return false;
  const [salt, expected] = stored.split(":");
  const actual = hashPassword(password, salt).split(":")[1];
  return crypto.timingSafeEqual(Buffer.from(actual, "hex"), Buffer.from(expected, "hex"));
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function defaultDb() {
  return {
    users: [
      {
        id: createId(),
        name: "Reza Lashkari",
        email: adminEmail,
        passwordHash: hashPassword(adminPassword),
        role: "admin",
        memberType: "team",
        status: "active",
        authProvider: "password",
        lastLogin: todayIso(),
        notifications: { push: false, email: false },
      },
      {
        id: createId(),
        name: "Alex Lane",
        email: "alex.lane@example.com",
        passwordHash: hashPassword("agent123"),
        role: "agent",
        memberType: "team",
        status: "active",
        authProvider: "password",
        lastLogin: "",
        notifications: { push: false, email: false },
      },
    ],
    state: {
      "agentHub.users": [],
      "agentHub.announcements": [],
      "agentHub.chatMessages": [],
      "agentHub.tasks": [],
      "agentHub.appointments": [],
      "agentHub.trainingVault": null,
      "agentHub.canvaTemplates": null,
      "agentHub.listingWalkthroughs": [],
      "agentHub.accessSettings": null,
    },
    outbox: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function ensureDb() {
  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dbPath)) {
    const db = defaultDb();
    db.state["agentHub.users"] = db.users.map(publicUser);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  }
}

function readDb() {
  ensureDb();
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

function writeDb(db) {
  db.updatedAt = new Date().toISOString();
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

function publicUser(user) {
  const { passwordHash, ...safe } = user;
  return safe;
}

function normalizeMemberType(value) {
  return value === "mentee" || value === "upline" ? value : "team";
}

function parseCookies(req) {
  return Object.fromEntries(
    String(req.headers.cookie || "")
      .split(";")
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const index = entry.indexOf("=");
        return [decodeURIComponent(entry.slice(0, index)), decodeURIComponent(entry.slice(index + 1))];
      }),
  );
}

function getSession(req) {
  const token = parseCookies(req).ach_session;
  if (!token) return null;
  const session = sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }
  return session;
}

function setSession(res, user) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, { userId: user.id, expiresAt: Date.now() + sessionTtlMs });
  res.setHeader("Set-Cookie", `ach_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${Math.floor(sessionTtlMs / 1000)}`);
}

function clearSession(res, req) {
  const token = parseCookies(req).ach_session;
  if (token) sessions.delete(token);
  res.setHeader("Set-Cookie", "ach_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0");
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 25_000_000) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function getAuthedUser(req, db) {
  const session = getSession(req);
  if (!session) return null;
  return db.users.find((user) => user.id === session.userId) || null;
}

function requireUser(req, res, db) {
  const user = getAuthedUser(req, db);
  if (!user) {
    sendJson(res, 401, { error: "Not signed in" });
    return null;
  }
  return user;
}

function syncPublicUsers(db) {
  db.state["agentHub.users"] = db.users.map(publicUser);
}

async function handleApi(req, res, pathname) {
  const db = readDb();

  if (pathname === "/api/health") {
    sendJson(res, 200, { ok: true, service: "Agent Central Hub", time: new Date().toISOString() });
    return;
  }

  if (pathname === "/api/auth/login" && req.method === "POST") {
    const body = await readBody(req);
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    let user = db.users.find((candidate) => candidate.email.toLowerCase() === email);
    if (!user) {
      user = {
        id: createId(),
        name: email.split("@")[0].split(/[._-]/).filter(Boolean).map((part) => part[0].toUpperCase() + part.slice(1)).join(" ") || "Agent",
        email,
        passwordHash: hashPassword(password || "agent123"),
        role: email === adminEmail ? "admin" : "agent",
        memberType: "team",
        status: "active",
        authProvider: "password",
        lastLogin: todayIso(),
        notifications: { push: false, email: false },
      };
      db.users.push(user);
    } else if (user.authProvider !== "google" && !verifyPassword(password, user.passwordHash)) {
      sendJson(res, 403, { error: user.role === "admin" ? "Admin password is configured on the server." : "Incorrect email or password." });
      return;
    }
    user.lastLogin = todayIso();
    user.status = "active";
    syncPublicUsers(db);
    writeDb(db);
    setSession(res, user);
    sendJson(res, 200, { user: publicUser(user), state: db.state });
    return;
  }

  if (pathname === "/api/auth/google-demo" && req.method === "POST") {
    const body = await readBody(req);
    const email = String(body.email || "alex.lane@example.com").trim().toLowerCase();
    let user = db.users.find((candidate) => candidate.email.toLowerCase() === email);
    if (!user) {
      user = {
        id: createId(),
        name: "Alex Lane",
        email,
        passwordHash: "",
        role: "agent",
        memberType: "team",
        status: "active",
        authProvider: "google",
        lastLogin: todayIso(),
        notifications: { push: false, email: false },
      };
      db.users.push(user);
    }
    user.lastLogin = todayIso();
    syncPublicUsers(db);
    writeDb(db);
    setSession(res, user);
    sendJson(res, 200, { user: publicUser(user), state: db.state });
    return;
  }

  if (pathname === "/api/auth/logout" && req.method === "POST") {
    clearSession(res, req);
    sendJson(res, 200, { ok: true });
    return;
  }

  if (pathname === "/api/bootstrap" && req.method === "GET") {
    const user = requireUser(req, res, db);
    if (!user) return;
    sendJson(res, 200, { user: publicUser(user), state: db.state });
    return;
  }

  if (pathname.startsWith("/api/state/") && (req.method === "PUT" || req.method === "POST")) {
    const user = requireUser(req, res, db);
    if (!user) return;
    const key = decodeURIComponent(pathname.replace("/api/state/", ""));
    if (!key.startsWith("agentHub.")) {
      sendJson(res, 400, { error: "Unsupported state key" });
      return;
    }
    const body = await readBody(req);
    db.state[key] = body.value;
    if (key === "agentHub.users" && user.role === "admin" && Array.isArray(body.value)) {
      body.value.forEach((incoming) => {
        const existing = db.users.find((candidate) => candidate.email.toLowerCase() === String(incoming.email || "").toLowerCase());
        if (existing) {
          existing.name = incoming.name || existing.name;
          existing.memberType = normalizeMemberType(incoming.memberType);
          existing.status = incoming.status || existing.status;
          existing.authProvider = incoming.authProvider || existing.authProvider;
          existing.lastLogin = incoming.lastLogin || existing.lastLogin;
        }
      });
      syncPublicUsers(db);
    }
    writeDb(db);
    sendJson(res, 200, { ok: true });
    return;
  }

  if (pathname === "/api/me" && req.method === "PATCH") {
    const user = requireUser(req, res, db);
    if (!user) return;
    const body = await readBody(req);
    user.name = String(body.name || user.name).trim();
    user.phone = String(body.phone || user.phone || "").trim();
    user.title = String(body.title || user.title || "").trim();
    user.profileImage = body.profileImage || "";
    user.notifications = body.notifications || user.notifications || { push: false, email: false };
    syncPublicUsers(db);
    writeDb(db);
    sendJson(res, 200, { user: publicUser(user) });
    return;
  }

  if (pathname === "/api/email/announcement" && req.method === "POST") {
    const user = requireUser(req, res, db);
    if (!user || user.role !== "admin") {
      sendJson(res, 403, { error: "Admin only" });
      return;
    }
    const body = await readBody(req);
    const recipients = db.users.filter((candidate) => candidate.email && candidate.status !== "invited").map((candidate) => candidate.email);
    db.outbox.push({
      id: createId(),
      type: "announcement",
      recipients,
      subject: body.subject || "Announcement",
      message: body.message || "",
      link: body.link || "",
      createdAt: new Date().toISOString(),
      status: process.env.SMTP_HOST ? "queued" : "draft-only",
    });
    writeDb(db);
    sendJson(res, 200, { ok: true, recipients, delivery: process.env.SMTP_HOST ? "queued" : "saved-to-outbox" });
    return;
  }

  sendJson(res, 404, { error: "API route not found" });
}

function serveStatic(req, res, pathname) {
  const cleanPath = decodeURIComponent(pathname === "/" ? "/index.html" : pathname);
  const filePath = path.normalize(path.join(rootDir, cleanPath));
  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, content) => {
    if (error) {
      fs.readFile(path.join(rootDir, "index.html"), (fallbackError, fallback) => {
        if (fallbackError) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(fallback);
      });
      return;
    }
    res.writeHead(200, { "Content-Type": staticTypes[path.extname(filePath)] || "application/octet-stream" });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url.pathname);
      return;
    }
    serveStatic(req, res, url.pathname);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Server error" });
  }
});

ensureDb();
server.listen(port, host, () => {
  console.log(`Agent Central Hub running at http://${host}:${port}`);
});
