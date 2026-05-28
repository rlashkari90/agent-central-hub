const assert = require("assert");
const core = require("./listing-intelligence-core.js");

const walkthrough = {
  propertyName: "123 Main Street",
  overviewNotes: "Bright layout with seller-confirmed updates.",
  systems: [
    { id: "roof", label: "Roof", verification: "unverified" },
    { id: "hvac", label: "HVAC", verification: "verified" },
  ],
  rooms: [
    {
      id: "kitchen",
      name: "Kitchen",
      photos: [
        {
          id: "photo",
          aiOutput: { original: true },
          suggestions: [
            {
              id: "approved",
              text: "Appears to have substantial storage.",
              finalText: "Appears to have substantial storage.",
              status: "approved",
              needsVerification: false,
            },
            {
              id: "pending",
              text: "Appears to have quartz counters.",
              finalText: "Appears to have quartz counters.",
              status: "pending",
              needsVerification: true,
            },
          ],
        },
      ],
    },
  ],
};

const analysis = core.analyzeRoomImage({ roomName: "Kitchen", fileName: "kitchen.jpg" });
assert.ok(analysis.suggestions.length > 0, "analysis should return suggestions");
assert.ok(analysis.suggestions.every((item) => /appears|visible|may/i.test(item.text)), "visual suggestions should use uncertain language");

const cleaned = core.guardCopy("Brand new 5 years old quartz counters in perfect condition");
assert.ok(!/brand new|5 years old|quartz|perfect condition/i.test(cleaned), "guardCopy should remove restricted unconfirmed claims");

const approved = core.getApprovedFeatures(walkthrough);
assert.strictEqual(approved.length, 1, "only approved suggestions should flow into final features");

const copy = core.generateListingCopy(walkthrough, "mls");
assert.ok(copy.includes("substantial storage"), "copy should include approved features");
assert.ok(!copy.includes("quartz"), "copy should not include pending features");

const checklist = core.buildVerificationChecklist(walkthrough);
assert.ok(checklist.some((item) => item.label.includes("Roof")), "unverified systems should be in checklist");

console.log("Listing Intelligence guardrail tests passed");
