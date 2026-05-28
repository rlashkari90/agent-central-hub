const loginView = document.querySelector("#loginView");
const appView = document.querySelector("#appView");
const loginForm = document.querySelector("#loginForm");
const googleLogin = document.querySelector("#googleLogin");
const signOut = document.querySelector("#signOut");
const accountButton = document.querySelector("#accountButton");
const accountMenu = document.querySelector("#accountMenu");
const openProfileInfo = document.querySelector("#openProfileInfo");
const openAccountSettings = document.querySelector("#openAccountSettings");
const openPasswordSettings = document.querySelector("#openPasswordSettings");
const settingsDialog = document.querySelector("#settingsDialog");
const closeSettingsModal = document.querySelector("#closeSettingsModal");
const settingsTitle = document.querySelector("#settingsTitle");
const profileSettingsForm = document.querySelector("#profileSettingsForm");
const appearanceSettingsForm = document.querySelector("#appearanceSettingsForm");
const passwordSettingsForm = document.querySelector("#passwordSettingsForm");
const accessSettingsForm = document.querySelector("#accessSettingsForm");
const notificationSettingsForm = document.querySelector("#notificationSettingsForm");
const profilePhotoPreview = document.querySelector("#profilePhotoPreview");
const profilePhoto = document.querySelector("#profilePhoto");
const clearProfilePhoto = document.querySelector("#clearProfilePhoto");
const profileName = document.querySelector("#profileName");
const profileEmail = document.querySelector("#profileEmail");
const profilePhone = document.querySelector("#profilePhone");
const profileTitle = document.querySelector("#profileTitle");
const themePalette = document.querySelector("#themePalette");
const themeMode = document.querySelector("#themeMode");
const themeAccentColor = document.querySelector("#themeAccentColor");
const themeGoldColor = document.querySelector("#themeGoldColor");
const themePanelColor = document.querySelector("#themePanelColor");
const themeAccentSwatch = document.querySelector("#themeAccentSwatch");
const themeGoldSwatch = document.querySelector("#themeGoldSwatch");
const themePanelSwatch = document.querySelector("#themePanelSwatch");
const loginEmail = document.querySelector("#loginEmail");
const currentPassword = document.querySelector("#currentPassword");
const newPassword = document.querySelector("#newPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const accessMemberType = document.querySelector("#accessMemberType");
const accessFeatureList = document.querySelector("#accessFeatureList");
const pushNotifications = document.querySelector("#pushNotifications");
const emailNotifications = document.querySelector("#emailNotifications");
const pushNotificationState = document.querySelector("#pushNotificationState");
const emailNotificationState = document.querySelector("#emailNotificationState");
const menuToggle = document.querySelector("#menuToggle");
const sidebar = document.querySelector("#sidebar");
const dashboardPage = document.querySelector("#dashboardPage");
const dashboardModeToggle = document.querySelector("#dashboardModeToggle");
const adminDashboardView = document.querySelector("#adminDashboardView");
const teamTileGrid = document.querySelector("#teamTileGrid");
const openAdminTileModal = document.querySelector("#openAdminTileModal");
const adminTileDialog = document.querySelector("#adminTileDialog");
const adminTileForm = document.querySelector("#adminTileForm");
const closeAdminTileModal = document.querySelector("#closeAdminTileModal");
const cancelAdminTile = document.querySelector("#cancelAdminTile");
const adminTileType = document.querySelector("#adminTileType");
const customAdminTileFields = document.querySelector("#customAdminTileFields");
const adminTileTitle = document.querySelector("#adminTileTitle");
const adminTileSubtitle = document.querySelector("#adminTileSubtitle");
const adminTileUrl = document.querySelector("#adminTileUrl");
const adminTileImage = document.querySelector("#adminTileImage");
const openInviteUser = document.querySelector("#openInviteUser");
const inviteDialog = document.querySelector("#inviteDialog");
const inviteForm = document.querySelector("#inviteForm");
const closeInviteModal = document.querySelector("#closeInviteModal");
const cancelInvite = document.querySelector("#cancelInvite");
const inviteMode = document.querySelector("#inviteMode");
const inviteMemberType = document.querySelector("#inviteMemberType");
const inviteName = document.querySelector("#inviteName");
const inviteEmail = document.querySelector("#inviteEmail");
const invitePassword = document.querySelector("#invitePassword");
const invitePasswordLabel = document.querySelector("#invitePasswordLabel");
const sendInvite = document.querySelector("#sendInvite");
const totalUsers = document.querySelector("#totalUsers");
const activeUsers = document.querySelector("#activeUsers");
const inactiveUsers = document.querySelector("#inactiveUsers");
const listingWalkthroughUsers = document.querySelector("#listingWalkthroughUsers");
const inactiveUserList = document.querySelector("#inactiveUserList");
const userListTitle = document.querySelector("#userListTitle");
const adminUserPanel = document.querySelector("#adminUserPanel");
const toggleUserList = document.querySelector("#toggleUserList");
const adminAnnouncementPanel = document.querySelector("#adminAnnouncementPanel");
const toggleAnnouncementManager = document.querySelector("#toggleAnnouncementManager");
const openAnnouncementEditor = document.querySelector("#openAnnouncementEditor");
const activeAnnouncementTab = document.querySelector("#activeAnnouncementTab");
const archiveAnnouncementTab = document.querySelector("#archiveAnnouncementTab");
const announcementAdminList = document.querySelector("#announcementAdminList");
const announcementDialog = document.querySelector("#announcementDialog");
const announcementForm = document.querySelector("#announcementForm");
const announcementDialogTitle = document.querySelector("#announcementDialogTitle");
const closeAnnouncementModal = document.querySelector("#closeAnnouncementModal");
const cancelAnnouncement = document.querySelector("#cancelAnnouncement");
const announcementTitleInput = document.querySelector("#announcementTitleInput");
const announcementMessage = document.querySelector("#announcementMessage");
const announcementPlacement = document.querySelector("#announcementPlacement");
const announcementEmailAgents = document.querySelector("#announcementEmailAgents");
const announcementRunDate = document.querySelector("#announcementRunDate");
const announcementLink = document.querySelector("#announcementLink");
const announcementFile = document.querySelector("#announcementFile");
const clearAnnouncementFile = document.querySelector("#clearAnnouncementFile");
const saveAnnouncement = document.querySelector("#saveAnnouncement");
const announcementAttachment = document.querySelector("#announcementAttachment");
const announcementPopupDialog = document.querySelector("#announcementPopupDialog");
const announcementPopupTitle = document.querySelector("#announcementPopupTitle");
const announcementPopupMessage = document.querySelector("#announcementPopupMessage");
const announcementPopupAttachment = document.querySelector("#announcementPopupAttachment");
const closeAnnouncementPopup = document.querySelector("#closeAnnouncementPopup");
const dismissAnnouncementPopup = document.querySelector("#dismissAnnouncementPopup");
const previousAnnouncement = document.querySelector("#previousAnnouncement");
const nextAnnouncement = document.querySelector("#nextAnnouncement");
const announcementCarouselCount = document.querySelector("#announcementCarouselCount");
const addWin = document.querySelector("#addWin");
const addLoss = document.querySelector("#addLoss");
const generateWinLossReport = document.querySelector("#generateWinLossReport");
const toggleWinLossPanel = document.querySelector("#toggleWinLossPanel");
const winLossTiles = document.querySelector("#winLossTiles");
const winsList = document.querySelector("#winsList");
const lossesList = document.querySelector("#lossesList");
const winLossDialog = document.querySelector("#winLossDialog");
const winLossForm = document.querySelector("#winLossForm");
const winLossDialogTitle = document.querySelector("#winLossDialogTitle");
const closeWinLossModal = document.querySelector("#closeWinLossModal");
const cancelWinLoss = document.querySelector("#cancelWinLoss");
const winLossType = document.querySelector("#winLossType");
const winLossTitleInput = document.querySelector("#winLossTitleInput");
const winLossMessage = document.querySelector("#winLossMessage");
const saveWinLoss = document.querySelector("#saveWinLoss");
const winLossReportDialog = document.querySelector("#winLossReportDialog");
const winLossReportForm = document.querySelector("#winLossReportForm");
const closeWinLossReportModal = document.querySelector("#closeWinLossReportModal");
const cancelWinLossReport = document.querySelector("#cancelWinLossReport");
const winLossReportRange = document.querySelector("#winLossReportRange");
const customReportMonthsLabel = document.querySelector("#customReportMonthsLabel");
const customReportMonths = document.querySelector("#customReportMonths");
const winLossReportPreview = document.querySelector("#winLossReportPreview");
const worksheetPage = document.querySelector("#worksheetPage");
const calendarPage = document.querySelector("#calendarPage");
const tasksPage = document.querySelector("#tasksPage");
const canvaPage = document.querySelector("#canvaPage");
const directMailPage = document.querySelector("#directMailPage");
const listingIntelPage = document.querySelector("#listingIntelPage");
const trainingPage = document.querySelector("#trainingPage");
const openDashboard = document.querySelector("#openDashboard");
const open411 = document.querySelector("#open411");
const openCalendar = document.querySelector("#openCalendar");
const openCanva = document.querySelector("#openCanva");
const openChat = document.querySelector("#openChat");
const openDirectMail = document.querySelector("#openDirectMail");
const openListingIntel = document.querySelector("#openListingIntel");
const openTraining = document.querySelector("#openTraining");
const open411Tile = document.querySelector("#open411Tile");
const openCalendarTile = document.querySelector("#openCalendarTile");
const openTrainingTile = document.querySelector("#openTrainingTile");
const openChatTile = document.querySelector("#openChatTile");
const openDirectMailTile = document.querySelector("#openDirectMailTile");
const openListingIntelTile = document.querySelector("#openListingIntelTile");
const openTasksTile = document.querySelector("#openTasksTile");
const connectCanva = document.querySelector("#connectCanva");
const disconnectCanva = document.querySelector("#disconnectCanva");
const canvaStatus = document.querySelector("#canvaStatus");
const canvaStatusNote = document.querySelector("#canvaStatusNote");
const canvaCategorySections = document.querySelector("#canvaCategorySections");
const canvaTemplateDialog = document.querySelector("#canvaTemplateDialog");
const canvaTemplateForm = document.querySelector("#canvaTemplateForm");
const canvaTemplateDialogTitle = document.querySelector("#canvaTemplateDialogTitle");
const closeCanvaTemplateModal = document.querySelector("#closeCanvaTemplateModal");
const cancelCanvaTemplate = document.querySelector("#cancelCanvaTemplate");
const canvaTemplateCategory = document.querySelector("#canvaTemplateCategory");
const canvaTemplateEditingId = document.querySelector("#canvaTemplateEditingId");
const canvaTemplateTitle = document.querySelector("#canvaTemplateTitle");
const canvaTemplateUrl = document.querySelector("#canvaTemplateUrl");
const canvaTemplateDescription = document.querySelector("#canvaTemplateDescription");
const canvaTemplateImage = document.querySelector("#canvaTemplateImage");
const clearCanvaTemplateImage = document.querySelector("#clearCanvaTemplateImage");
const canvaTemplateImagePreview = document.querySelector("#canvaTemplateImagePreview");
const canvaAudienceTeam = document.querySelector("#canvaAudienceTeam");
const canvaAudienceMentee = document.querySelector("#canvaAudienceMentee");
const saveCanvaTemplate = document.querySelector("#saveCanvaTemplate");
const chatPage = document.querySelector("#chatPage");
const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const chatMessage = document.querySelector("#chatMessage");
const chatAttachment = document.querySelector("#chatAttachment");
const clearChatAttachment = document.querySelector("#clearChatAttachment");
const chatAttachmentSummary = document.querySelector("#chatAttachmentSummary");
const chatAttachmentPreview = document.querySelector("#chatAttachmentPreview");
const chatMessageCount = document.querySelector("#chatMessageCount");
const chatRoomTitle = document.querySelector("#chatRoomTitle");
const openMailerSettings = document.querySelector("#openMailerSettings");
const mailerOrderForm = document.querySelector("#mailerOrderForm");
const mailerApiStatus = document.querySelector("#mailerApiStatus");
const mailerCampaignName = document.querySelector("#mailerCampaignName");
const mailerProduct = document.querySelector("#mailerProduct");
const mailerTemplate = document.querySelector("#mailerTemplate");
const mailerQuantity = document.querySelector("#mailerQuantity");
const mailerScheduleDate = document.querySelector("#mailerScheduleDate");
const mailerListSource = document.querySelector("#mailerListSource");
const mailerAddress = document.querySelector("#mailerAddress");
const mailerListFile = document.querySelector("#mailerListFile");
const mailerMessage = document.querySelector("#mailerMessage");
const generateMailerProof = document.querySelector("#generateMailerProof");
const mailerProofPreview = document.querySelector("#mailerProofPreview");
const mailerEstimatedPieces = document.querySelector("#mailerEstimatedPieces");
const mailerEstimatedTotal = document.querySelector("#mailerEstimatedTotal");
const mailerOrderList = document.querySelector("#mailerOrderList");
const newWalkthrough = document.querySelector("#newWalkthrough");
const editPreviousWalkthroughs = document.querySelector("#editPreviousWalkthroughs");
const walkthroughSaveStatus = document.querySelector("#walkthroughSaveStatus");
const listingPropertyName = document.querySelector("#listingPropertyName");
const listingAddress = document.querySelector("#listingAddress");
const listingOverviewNotes = document.querySelector("#listingOverviewNotes");
const addSystemItem = document.querySelector("#addSystemItem");
const toggleSystemEdit = document.querySelector("#toggleSystemEdit");
const deleteSelectedSystems = document.querySelector("#deleteSelectedSystems");
const systemsTracker = document.querySelector("#systemsTracker");
const newRoom = document.querySelector("#newRoom");
const toggleRoomEdit = document.querySelector("#toggleRoomEdit");
const deleteSelectedRooms = document.querySelector("#deleteSelectedRooms");
const roomForm = document.querySelector("#roomForm");
const roomName = document.querySelector("#roomName");
const roomNotes = document.querySelector("#roomNotes");
const roomPhotoUpload = document.querySelector("#roomPhotoUpload");
const listingErrorState = document.querySelector("#listingErrorState");
const roomCards = document.querySelector("#roomCards");
const generatedListingCopy = document.querySelector("#generatedListingCopy");
const verificationChecklist = document.querySelector("#verificationChecklist");
const listingPresentationNotes = document.querySelector("#listingPresentationNotes");
const prospectiveListDate = document.querySelector("#prospectiveListDate");
const contractsSigned = document.querySelector("#contractsSigned");
const draftAndSendContracts = document.querySelector("#draftAndSendContracts");
const followUpPhone = document.querySelector("#followUpPhone");
const followUpEmail = document.querySelector("#followUpEmail");
const followUpText = document.querySelector("#followUpText");
const followUpDate = document.querySelector("#followUpDate");
const submitListingWalkthrough = document.querySelector("#submitListingWalkthrough");
const openCopyPanel = document.querySelector("#openCopyPanel");
const closeCopyPanel = document.querySelector("#closeCopyPanel");
const copyPanelDialog = document.querySelector("#copyPanelDialog");
const openVerificationPanel = document.querySelector("#openVerificationPanel");
const closeVerificationPanel = document.querySelector("#closeVerificationPanel");
const verificationPanelDialog = document.querySelector("#verificationPanelDialog");
const previousWalkthroughDialog = document.querySelector("#previousWalkthroughDialog");
const previousWalkthroughList = document.querySelector("#previousWalkthroughList");
const closePreviousWalkthroughs = document.querySelector("#closePreviousWalkthroughs");
const submitWalkthroughDialog = document.querySelector("#submitWalkthroughDialog");
const closeSubmitWalkthrough = document.querySelector("#closeSubmitWalkthrough");
const printWalkthrough = document.querySelector("#printWalkthrough");
const printPdfWalkthrough = document.querySelector("#printPdfWalkthrough");
const saveWalkthroughExport = document.querySelector("#saveWalkthroughExport");
const listingExportStatus = document.querySelector("#listingExportStatus");
const trainingCategoryGrid = document.querySelector("#trainingCategoryGrid");
const trainingLessonGrid = document.querySelector("#trainingLessonGrid");
const trainingLessonsTitle = document.querySelector("#trainingLessonsTitle");
const openTrackEditor = document.querySelector("#openTrackEditor");
const trackDialog = document.querySelector("#trackDialog");
const trackForm = document.querySelector("#trackForm");
const trackDialogTitle = document.querySelector("#trackDialogTitle");
const closeTrackModal = document.querySelector("#closeTrackModal");
const trackSelect = document.querySelector("#trackSelect");
const trackTitle = document.querySelector("#trackTitle");
const trackSummary = document.querySelector("#trackSummary");
const trackCover = document.querySelector("#trackCover");
const clearTrackCover = document.querySelector("#clearTrackCover");
const newTrackMode = document.querySelector("#newTrackMode");
const cancelTrack = document.querySelector("#cancelTrack");
const openTrainingUpload = document.querySelector("#openTrainingUpload");
const trainingUploadDialog = document.querySelector("#trainingUploadDialog");
const trainingUploadForm = document.querySelector("#trainingUploadForm");
const closeTrainingUpload = document.querySelector("#closeTrainingUpload");
const cancelTrainingUpload = document.querySelector("#cancelTrainingUpload");
const trainingCategory = document.querySelector("#trainingCategory");
const trainingUploadTitle = document.querySelector("#trainingUploadTitle");
const saveTrainingUpload = document.querySelector("#saveTrainingUpload");
const trainingTitle = document.querySelector("#trainingTitle");
const trainingDetail = document.querySelector("#trainingDetail");
const trainingAudienceTeam = document.querySelector("#trainingAudienceTeam");
const trainingAudienceMentee = document.querySelector("#trainingAudienceMentee");
const trainingChapterEditor = document.querySelector("#trainingChapterEditor");
const addTrainingChapter = document.querySelector("#addTrainingChapter");
const taskTileList = document.querySelector("#taskTileList");
const quickAddTask = document.querySelector("#quickAddTask");
const fullTaskList = document.querySelector("#fullTaskList");
const newTask = document.querySelector("#newTask");
const taskDialog = document.querySelector("#taskDialog");
const taskForm = document.querySelector("#taskForm");
const taskDialogTitle = document.querySelector("#taskDialogTitle");
const saveTaskButton = document.querySelector("#saveTaskButton");
const closeTaskModal = document.querySelector("#closeTaskModal");
const cancelTask = document.querySelector("#cancelTask");
const taskTitle = document.querySelector("#taskTitle");
const taskDueDate = document.querySelector("#taskDueDate");
const taskUrgency = document.querySelector("#taskUrgency");
const taskNotes = document.querySelector("#taskNotes");
const taskAddToCalendar = document.querySelector("#taskAddToCalendar");
const print411 = document.querySelector("#print411");
const submit411 = document.querySelector("#submit411");
const weekOfSelect = document.querySelector("#weekOfSelect");
const worksheetAgentName = document.querySelector("#worksheetAgentName");
const calendarProviderLabel = document.querySelector("#calendarProviderLabel");
const calendarConnectNote = document.querySelector("#calendarConnectNote");
const calendarGrid = document.querySelector("#calendarGrid");
const agendaList = document.querySelector("#agendaList");
const newAppointment = document.querySelector("#newAppointment");
const appointmentDialog = document.querySelector("#appointmentDialog");
const appointmentForm = document.querySelector("#appointmentForm");
const closeAppointmentModal = document.querySelector("#closeAppointmentModal");
const cancelAppointment = document.querySelector("#cancelAppointment");
const appointmentTitle = document.querySelector("#appointmentTitle");
const appointmentDate = document.querySelector("#appointmentDate");
const appointmentTime = document.querySelector("#appointmentTime");
const appointmentNotes = document.querySelector("#appointmentNotes");
const tileDialog = document.querySelector("#tileDialog");
const openTileModal = document.querySelector("#openTileModal");
const closeTileModal = document.querySelector("#closeTileModal");
const cancelTile = document.querySelector("#cancelTile");
const tileForm = document.querySelector("#tileForm");
const curatedTile = document.querySelector("#curatedTile");
const tileName = document.querySelector("#tileName");
const tileLink = document.querySelector("#tileLink");
const tileImage = document.querySelector("#tileImage");
const homeTiles = document.querySelector("#homeTiles");

function createId() {
  try {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  } catch (error) {
    // Fall back below when local file previews restrict browser crypto APIs.
  }
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

const backendAvailable = window.location.protocol === "http:" || window.location.protocol === "https:";
const backendStateKeys = new Set([
  "agentHub.users",
  "agentHub.announcements",
  "agentHub.chatMessages",
  "agentHub.tasks",
  "agentHub.appointments",
  "agentHub.trainingVault",
  "agentHub.canvaTemplates",
  "agentHub.listingWalkthroughs",
  "agentHub.accessSettings",
  "agentHub.directMailOrders",
  "agentHub.teamTileHidden",
  "agentHub.teamCustomTiles",
  "agentHub.teamTileOrder",
  "agentHub.teamTileCopy",
]);

async function apiRequest(path, options = {}) {
  if (!backendAvailable) throw new Error("Backend is not available from local file preview.");
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Server request failed.");
  return payload;
}

function hydrateBackendState(state = {}) {
  Object.entries(state).forEach(([key, value]) => {
    if (!key.startsWith("agentHub.")) return;
    try {
      if (value === null || value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      // Keep the app usable if browser storage is unavailable.
    }
  });
}

function syncBackendState(key, value) {
  if (!backendAvailable || !backendStateKeys.has(key)) return;
  apiRequest(`/api/state/${encodeURIComponent(key)}`, {
    method: "PUT",
    body: JSON.stringify({ value }),
  }).catch(() => {
    // The front end keeps working offline; the next save can retry.
  });
}

function readStorageValue(key, fallback = "") {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (error) {
    return fallback;
  }
}

function readStorageJson(key, fallback) {
  try {
    const value = readStorageValue(key, "");
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    try {
      localStorage.removeItem(key);
    } catch (removeError) {
      // Ignore storage cleanup failures in restricted local preview contexts.
    }
    return fallback;
  }
}

function writeStorageJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Local file previews can restrict storage; keep the in-memory prototype usable.
  }
  syncBackendState(key, value);
}

function writeStorageValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Local file previews can restrict storage; keep the in-memory prototype usable.
  }
  syncBackendState(key, value);
}

function removeStorageValue(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Local file previews can restrict storage; keep the in-memory prototype usable.
  }
}

function readSessionValue(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeSessionValue(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch (error) {
    // Pop-up tracking is optional in restricted local preview contexts.
  }
}

const curatedApps = {
  command: {
    name: "Command",
    link: "https://console.command.kw.com",
    image: "assets/command.svg",
  },
  mls: {
    name: "MLS",
    link: "https://www.mls.com",
    image: "assets/mls.svg",
  },
  calendar: {
    name: "Google Calendar",
    link: "https://calendar.google.com",
    image: "assets/calendar.svg",
  },
  drive: {
    name: "Google Drive",
    link: "https://drive.google.com",
    image: "assets/drive.svg",
  },
  dotloop: {
    name: "Dotloop",
    link: "https://www.dotloop.com",
    image: "assets/dotloop.svg",
  },
};

const themePalettes = {
  "black-white-gold": { accent: "#c98721", accentDark: "#9f6a16", gold: "#c98721", red: "#b42318", panel: "#ffffff" },
  "red-blue": { accent: "#1d4ed8", accentDark: "#1e3a8a", gold: "#dc2626", red: "#b91c1c", panel: "#ffffff" },
  "blue-white": { accent: "#2563eb", accentDark: "#1d4ed8", gold: "#93c5fd", red: "#dc2626", panel: "#ffffff" },
  "black-white": { accent: "#111827", accentDark: "#030712", gold: "#6b7280", red: "#b42318", panel: "#ffffff" },
  "blue-orange": { accent: "#1d4ed8", accentDark: "#1e40af", gold: "#f97316", red: "#dc2626", panel: "#ffffff" },
  "red-black-grey": { accent: "#b91c1c", accentDark: "#111827", gold: "#6b7280", red: "#b91c1c", panel: "#ffffff" },
  "red-white": { accent: "#dc2626", accentDark: "#991b1b", gold: "#f87171", red: "#b91c1c", panel: "#ffffff" },
};

const adminEmails = ["admin@llhomes.com", "admin@llhomesteam.com"];
const chatRooms = ["general", "contracts", "marketing"];
const accessFeatureDefinitions = [
  { id: "411", label: "411", page: "worksheet", selectors: ["#open411", '[data-dashboard-tile="411"]'] },
  { id: "crm", label: "CRM", selectors: ['[data-dashboard-tile="crm"]'] },
  { id: "scripts", label: "Scripts", selectors: ['[data-dashboard-tile="scripts"]'] },
  { id: "training", label: "Training Vault", page: "training", selectors: ["#openTraining", '[data-dashboard-tile="training"]'] },
  { id: "calendar", label: "Calendar", page: "calendar", selectors: ["#openCalendar", '[data-dashboard-tile="calendar"]'] },
  { id: "canva", label: "Canva Templates", page: "canva", selectors: ["#openCanva"] },
  { id: "chat", label: "Team Chat", page: "chat", selectors: ["#openChat", '[data-dashboard-tile="chat"]'] },
  { id: "direct-mail", label: "Direct Mail", page: "direct-mail", selectors: ["#openDirectMail", '[data-dashboard-tile="direct-mail"]'] },
  { id: "listing-intelligence", label: "Listing Intelligence", page: "listing-intelligence", selectors: ["#openListingIntel", '[data-dashboard-tile="listing-intelligence"]'] },
  { id: "tasks", label: "Tasks", page: "tasks", selectors: ['[data-dashboard-tile="tasks"]'] },
  { id: "links", label: "Links", selectors: [".home-base"] },
];
const defaultAccessSettings = {
  mentee: {
    "411": true,
    crm: true,
    scripts: true,
    training: true,
    calendar: true,
    canva: true,
    chat: false,
    "direct-mail": true,
    "listing-intelligence": false,
    tasks: true,
    links: true,
  },
  team: {},
  upline: {},
};
accessFeatureDefinitions.forEach((feature) => {
  defaultAccessSettings.team[feature.id] = true;
  defaultAccessSettings.upline[feature.id] = true;
});
const pageFeatureMap = accessFeatureDefinitions.reduce((map, feature) => {
  if (feature.page) map[feature.page] = feature.id;
  return map;
}, {});
function normalizeMemberType(value) {
  if (value === "mentee" || value === "upline") return value;
  return "team";
}

function normalizeChatRoom(value) {
  return chatRooms.includes(value) ? value : "general";
}

function memberTypeLabel(value) {
  const type = normalizeMemberType(value);
  if (type === "mentee") return "Mentee";
  if (type === "upline") return "Upline agent";
  return "Team member";
}

function normalizeAudience(audience) {
  if (!audience) return { team: true, mentee: true, upline: true };
  return {
    team: audience.team !== false,
    mentee: audience.mentee !== false,
    upline: audience.upline !== false,
  };
}

function getCurrentMemberType() {
  if (agent?.role === "admin") return "team";
  return normalizeMemberType(agent?.memberType);
}

function canViewAudience(item) {
  if (agent?.role === "admin") return true;
  const audience = normalizeAudience(item?.audience);
  return Boolean(audience[getCurrentMemberType()]);
}

function canAccessTeamOnlyFeatures() {
  return canAccessFeature("chat") && canAccessFeature("listing-intelligence");
}

function getAccessForType(type) {
  const normalizedType = normalizeMemberType(type);
  return {
    ...(defaultAccessSettings[normalizedType] || defaultAccessSettings.team),
    ...(accessSettings?.[normalizedType] || {}),
  };
}

function canAccessFeature(featureId) {
  if (!featureId || agent?.role === "admin") return true;
  return getAccessForType(getCurrentMemberType())[featureId] !== false;
}

function saveAccessSettings() {
  writeStorageJson("agentHub.accessSettings", accessSettings);
}

function getNotificationSettings() {
  return {
    push: agent?.notifications?.push === true,
    email: agent?.notifications?.email === true,
  };
}

function updateNotificationLabels() {
  if (!pushNotifications || !emailNotifications) return;
  pushNotificationState.textContent = pushNotifications.checked ? "On" : "Off";
  emailNotificationState.textContent = emailNotifications.checked ? "On" : "Off";
}

function readAudienceControls(teamControl, menteeControl) {
  const team = teamControl.checked;
  const mentee = menteeControl.checked;
  if (!team && !mentee) {
    teamControl.checked = true;
    menteeControl.checked = true;
    return { team: true, mentee: true };
  }
  return { team, mentee };
}

function writeAudienceControls(audience, teamControl, menteeControl) {
  const normalized = normalizeAudience(audience);
  teamControl.checked = normalized.team;
  menteeControl.checked = normalized.mentee;
}

const defaultTiles = [
  {
    id: createId(),
    name: "Lead Tracker",
    link: "https://docs.google.com/spreadsheets",
    image: "assets/tracker.svg",
  },
  {
    id: createId(),
    name: "Listing Checklist",
    link: "https://docs.google.com/document",
    image: "assets/checklist.svg",
  },
];

let agent = readStorageJson("agentHub.agent", null);
let personalTiles = readStorageJson("agentHub.tiles", null) || defaultTiles;
let worksheetData = readStorageJson("agentHub.worksheet411", {});
let calendarProvider = readStorageValue("agentHub.calendarProvider", "");
let canvaAccount = readStorageJson("agentHub.canvaAccount", null);
let teamCanvaTemplates = readStorageJson("agentHub.canvaTemplates", null) || null;
let directMailOrders = readStorageJson("agentHub.directMailOrders", null) || [];
let directMailConfig = readStorageJson("agentHub.directMailConfig", null) || {
  mode: "demo",
  apiBaseUrl: "",
  apiKey: "",
};
let listingWalkthrough = readStorageJson("agentHub.listingIntelligence", null) || createEmptyWalkthrough();
let savedListingWalkthroughs = readStorageJson("agentHub.listingWalkthroughs", null) || [];
let listingDriveExports = readStorageJson("agentHub.listingDriveExports", null) || [];
let systemEditMode = false;
let roomEditMode = false;
let chatRoomMessages = readStorageJson("agentHub.chatMessages", null) || [
  {
    id: createId(),
    author: "Reza Lashkari",
    role: "admin",
    room: "general",
    message: "Use this room for quick questions, contract help, marketing ideas, and team collaboration.",
    createdAt: new Date().toISOString(),
    attachments: [],
  },
];
let selectedChatRoom = normalizeChatRoom(readStorageValue("agentHub.selectedChatRoom", "general"));
const todayDate = new Date();
const todayIso = todayDate.toISOString().slice(0, 10);
const tomorrowIso = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 1).toISOString().slice(0, 10);
let appUsers = readStorageJson("agentHub.users", null) || [
  { id: createId(), name: "Alex Lane", email: "alex.lane@example.com", lastLogin: todayIso, status: "active", authProvider: "password", memberType: "team" },
  { id: createId(), name: "Nancy Leonardo", email: "nancy@example.com", lastLogin: "2026-05-02", status: "active", authProvider: "google", memberType: "team" },
  { id: createId(), name: "Jordan Smith", email: "jordan@example.com", lastLogin: "", status: "invited", authProvider: "password", memberType: "mentee" },
  { id: createId(), name: "Morgan Reed", email: "morgan@example.com", lastLogin: "2026-04-19", status: "active", authProvider: "password", memberType: "team" },
];
let announcements = readStorageJson("agentHub.announcements", null) || [
  {
    id: createId(),
    title: "This week's focus",
    message: "New listing presentation templates are live. Please review the buyer consultation update before Friday's coaching call.",
    placement: "widget",
    runDate: todayIso,
    link: "",
    fileName: "",
    fileData: "",
    status: "active",
  },
];
let announcementAdminTab = "active";
let editingAnnouncementId = null;
let announcementCarouselIndex = 0;
let userOverviewFilter = "all";
let clearExistingAnnouncementFile = false;
let clearExistingTrackCover = false;
let winLossItems = readStorageJson("agentHub.winLossItems", null) || [];
let winLossCollapsed = readStorageValue("agentHub.winLossCollapsed", "false") === "true";
let hiddenTeamTiles = readStorageJson("agentHub.teamTileHidden", null) || [];
let customTeamTiles = readStorageJson("agentHub.teamCustomTiles", null) || [];
let appointments = readStorageJson("agentHub.appointments", null) || [
  {
    id: createId(),
    title: "Buyer consultation",
    date: todayIso,
    time: "10:30",
    notes: "Prep financing questions",
    type: "appointment",
  },
  {
    id: createId(),
    title: "Listing follow-up",
    date: todayIso,
    time: "14:00",
    notes: "Send CMA update",
    type: "follow-up",
  },
  {
    id: createId(),
    title: "Open house prep",
    date: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 3).toISOString().slice(0, 10),
    time: "09:00",
    notes: "Print sign-in sheets",
    type: "appointment",
  },
];
let tasks = readStorageJson("agentHub.tasks", null) || [
  {
    id: createId(),
    title: "Call new buyer leads",
    dueDate: todayIso,
    urgency: "high",
    notes: "Prioritize internet registrations from this week.",
    addToCalendar: true,
    done: false,
  },
  {
    id: createId(),
    title: "Send listing CMA update",
    dueDate: todayIso,
    urgency: "medium",
    notes: "Include recent pending sales.",
    addToCalendar: false,
    done: false,
  },
  {
    id: createId(),
    title: "Confirm coaching call prep",
    dueDate: tomorrowIso,
    urgency: "medium",
    notes: "Review 411 before the call.",
    addToCalendar: false,
    done: false,
  },
  {
    id: createId(),
    title: "Post market update",
    dueDate: tomorrowIso,
    urgency: "low",
    notes: "Use Canva template.",
    addToCalendar: false,
    done: false,
  },
];
let editingTaskId = null;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const canvaTemplateCategories = [
  { id: "postcards", title: "Postcards", color: "#0f766e" },
  { id: "mailers", title: "Mailers", color: "#c98721" },
  { id: "flyers", title: "Flyers", color: "#b42318" },
  { id: "social", title: "Social", color: "#18212f" },
];
const defaultCanvaTemplates = {
  postcards: [
    {
      id: "just-listed-postcard",
      title: "Just Listed Postcard",
      url: "https://www.canva.com/search/templates?q=just%20listed%20postcard",
      description: "Neighborhood announcement postcard.",
      image: "",
    },
  ],
  mailers: [
    {
      id: "farm-mailer",
      title: "Farm Mailer",
      url: "https://www.canva.com/search/templates?q=real%20estate%20mailer",
      description: "Reusable market touch mailer.",
      image: "",
    },
  ],
  flyers: [
    {
      id: "open-house-flyer",
      title: "Open House Flyer",
      url: "https://www.canva.com/search/templates?q=open%20house%20flyer",
      description: "Print and social open house flyer.",
      image: "",
    },
  ],
  social: [
    {
      id: "market-update-social",
      title: "Market Update Social",
      url: "https://www.canva.com/search/templates?q=real%20estate%20market%20update%20social",
      description: "Quick stat post for social media.",
      image: "",
    },
  ],
};
if (!teamCanvaTemplates) {
  teamCanvaTemplates = JSON.parse(JSON.stringify(defaultCanvaTemplates));
}
const defaultTrainingVault = [
  {
    id: "buyer",
    title: "Buyer",
    summary: "Consultations, agency, offers, and client experience.",
    lessons: [
      { title: "Buyer consultation flow", type: "Video series", detail: "5 sections covering agenda, needs analysis, buyer agreement, and next steps." },
      { title: "Showing checklist", type: "Checklist", detail: "Pre-showing prep, safety, buyer feedback, and post-tour follow-up." },
      { title: "Writing winning offers", type: "Lesson", detail: "Terms, contingencies, timelines, and negotiation strategy." },
    ],
  },
  {
    id: "seller",
    title: "Seller",
    summary: "Listing appointments, pricing, prep, and launch plans.",
    lessons: [
      { title: "Listing presentation", type: "Video series", detail: "A section-by-section walkthrough for winning seller appointments." },
      { title: "Pre-list checklist", type: "Checklist", detail: "Photos, disclosures, staging, vendors, and launch assets." },
      { title: "Price adjustment scripts", type: "Script pack", detail: "Language for data-driven pricing conversations." },
    ],
  },
  {
    id: "contract",
    title: "Contract",
    summary: "Forms, timelines, contingencies, and compliance basics.",
    lessons: [
      { title: "Purchase agreement basics", type: "Lesson", detail: "Key contract sections, dates, deposits, and risk points." },
      { title: "Contingency timeline", type: "Checklist", detail: "Inspection, appraisal, loan, and removal deadlines." },
      { title: "Counter offer review", type: "Video", detail: "How to explain counter terms clearly to clients." },
    ],
  },
  {
    id: "lease",
    title: "Lease",
    summary: "Rental leads, lease packets, tenant screening, and move-in.",
    lessons: [
      { title: "Lease packet overview", type: "Checklist", detail: "Required documents, signatures, deposits, and delivery." },
      { title: "Tenant qualification", type: "Lesson", detail: "Screening criteria, application review, and fair housing reminders." },
      { title: "Move-in process", type: "Video", detail: "Walkthroughs, keys, condition reports, and communication." },
    ],
  },
  {
    id: "business",
    title: "My Business",
    summary: "Lead generation, database, schedule, tracking, and growth.",
    lessons: [
      { title: "Weekly 411 rhythm", type: "Video", detail: "How to connect goals, calendar blocks, tasks, and accountability." },
      { title: "Database growth plan", type: "Checklist", detail: "Daily contacts, tags, follow-up plans, and nurture systems." },
      { title: "Social media cadence", type: "Lesson", detail: "Content pillars, posting schedule, and lead capture." },
    ],
  },
];
let trainingVault = readStorageJson("agentHub.trainingVault", null) || defaultTrainingVault;
let selectedTrainingCategory = "buyer";
let trainingProgress = readStorageJson("agentHub.trainingProgress", {});
let editingTrainingPack = null;
let editingTrackId = selectedTrainingCategory;
let appTheme = readStorageJson("agentHub.theme", null) || { palette: "black-white-gold", mode: "day" };
let accessSettings = readStorageJson("agentHub.accessSettings", null) || defaultAccessSettings;

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function updateMemberAccessUi() {
  accessFeatureDefinitions.forEach((feature) => {
    const restricted = !canAccessFeature(feature.id);
    feature.selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList.toggle("access-hidden", restricted);
        element.setAttribute("aria-hidden", String(restricted));
      });
    });
  });
}

function renderAccessFeatureList() {
  if (!accessFeatureList || !accessMemberType) return;
  const type = normalizeMemberType(accessMemberType.value);
  const permissions = getAccessForType(type);
  accessFeatureList.innerHTML = "";
  accessFeatureDefinitions.forEach((feature) => {
    const row = document.createElement("label");
    row.className = "access-feature-row";
    row.innerHTML = `
      <span>${feature.label}</span>
      <input type="checkbox" data-access-feature="${feature.id}" ${permissions[feature.id] !== false ? "checked" : ""} />
    `;
    accessFeatureList.append(row);
  });
}

function applyAvatar(element, user) {
  if (!element) return;
  if (user?.profileImage) {
    element.textContent = "";
    element.style.backgroundImage = `url("${user.profileImage}")`;
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
  } else {
    element.style.backgroundImage = "";
    element.textContent = initials(user?.name || "Agent");
  }
}

function applyTheme() {
  const palette = { ...(themePalettes[appTheme.palette] || themePalettes["black-white-gold"]), ...(appTheme.colors || {}) };
  const dark = appTheme.mode === "dark";
  const panelColor = appTheme.colors?.panel || (dark ? "#111827" : palette.panel);
  const root = document.documentElement;
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--accent-dark", palette.accentDark);
  root.style.setProperty("--gold", palette.gold);
  root.style.setProperty("--red", palette.red);
  root.style.setProperty("--ink", dark ? "#f8fafc" : "#18212f");
  root.style.setProperty("--muted", dark ? "#aab4c2" : "#647083");
  root.style.setProperty("--line", dark ? "#334155" : "#dce2ea");
  root.style.setProperty("--page", dark ? "#0f172a" : "#f5f7fa");
  root.style.setProperty("--panel", panelColor);
  root.style.setProperty("--field", dark ? "#0b1220" : "#ffffff");
  root.style.setProperty("--soft", dark ? "#1e293b" : "#f8fafc");
  document.body.classList.toggle("dark-mode", dark);
  updateThemeColorControls();
}

function saveTheme() {
  writeStorageJson("agentHub.theme", appTheme);
  applyTheme();
}

function updateThemeColorControls() {
  if (!themeAccentColor) return;
  const palette = { ...(themePalettes[appTheme.palette] || themePalettes["black-white-gold"]), ...(appTheme.colors || {}) };
  const dark = appTheme.mode === "dark";
  const panelColor = appTheme.colors?.panel || (dark ? "#111827" : palette.panel);
  themeAccentColor.value = palette.accent;
  themeGoldColor.value = palette.gold;
  themePanelColor.value = panelColor;
  themeAccentSwatch.style.background = palette.accent;
  themeGoldSwatch.style.background = palette.gold;
  themePanelSwatch.style.background = panelColor;
}

function setAgent(nextAgent) {
  agent = {
    memberType: "team",
    role: "agent",
    ...nextAgent,
    memberType: normalizeMemberType(nextAgent.memberType),
  };
  writeStorageJson("agentHub.agent", agent);
  if (agent.role !== "admin") {
    upsertUserLogin(agent);
  }
  document.querySelector("#agentName").textContent = agent.name;
  document.querySelector(".agent-meta span").textContent = agent.role === "admin" ? "Administrator" : "Productivity Team";
  document.querySelector("#welcomeName").textContent = agent.name.split(" ")[0];
  document.querySelector("#accountLabel").textContent = agent.name;
  applyAvatar(document.querySelector("#agentInitials"), agent);
  applyAvatar(document.querySelector("#accountInitials"), agent);
  worksheetAgentName.textContent = `${agent.name}'s`;
  document.querySelectorAll(".admin-only").forEach((element) => {
    element.classList.toggle("is-hidden", agent.role !== "admin");
  });
  updateMemberAccessUi();
  dashboardModeToggle.checked = false;
  updateDashboardMode();
}

function showApp() {
  loginView.classList.add("is-hidden");
  appView.classList.remove("is-hidden");
  setAgent(agent || { name: "Alex Lane", email: "agent@example.com" });
  processAnnouncementSchedule();
  applyDashboardTileSettings();
  updateMemberAccessUi();
  renderTiles();
  renderTaskTile();
  if (window.location.hash === "#411") {
    showPage("worksheet");
  } else if (window.location.hash === "#calendar") {
    showPage("calendar");
  } else if (window.location.hash === "#tasks") {
    showPage("tasks");
  } else if (window.location.hash === "#canva") {
    showPage("canva");
  } else if (window.location.hash === "#chat") {
    showPage("chat");
  } else if (window.location.hash === "#mailers") {
    showPage("direct-mail");
  } else if (window.location.hash === "#listing-intelligence") {
    showPage("listing-intelligence");
  } else if (window.location.hash === "#training") {
    showPage("training");
  } else {
    showPage("dashboard");
  }
}

function showLogin() {
  appView.classList.add("is-hidden");
  loginView.classList.remove("is-hidden");
  accountMenu.classList.remove("open");
}

function showPage(page) {
  const featureId = pageFeatureMap[page];
  if (featureId && !canAccessFeature(featureId)) {
    alert("This area is not available for your account type.");
    showPage("dashboard");
    return;
  }

  dashboardPage.classList.toggle("is-hidden", page !== "dashboard");
  worksheetPage.classList.toggle("is-hidden", page !== "worksheet");
  calendarPage.classList.toggle("is-hidden", page !== "calendar");
  tasksPage.classList.toggle("is-hidden", page !== "tasks");
  canvaPage.classList.toggle("is-hidden", page !== "canva");
  chatPage.classList.toggle("is-hidden", page !== "chat");
  directMailPage.classList.toggle("is-hidden", page !== "direct-mail");
  listingIntelPage.classList.toggle("is-hidden", page !== "listing-intelligence");
  trainingPage.classList.toggle("is-hidden", page !== "training");
  if (page === "worksheet") {
    window.location.hash = "411";
  } else if (page === "calendar") {
    window.location.hash = "calendar";
    renderCalendar();
  } else if (page === "tasks") {
    window.location.hash = "tasks";
    renderTasks();
  } else if (page === "canva") {
    window.location.hash = "canva";
    renderCanvaPage();
  } else if (page === "chat") {
    window.location.hash = "chat";
    renderChatMessages();
  } else if (page === "direct-mail") {
    window.location.hash = "mailers";
    renderDirectMailPage();
  } else if (page === "listing-intelligence") {
    window.location.hash = "listing-intelligence";
    renderListingIntelligence();
  } else if (page === "training") {
    window.location.hash = "training";
    renderTraining();
  } else if (window.location.hash === "#411" || window.location.hash === "#calendar" || window.location.hash === "#tasks" || window.location.hash === "#canva" || window.location.hash === "#chat" || window.location.hash === "#mailers" || window.location.hash === "#listing-intelligence" || window.location.hash === "#training") {
    history.pushState("", document.title, window.location.pathname);
  }
}

function saveUsers() {
  writeStorageJson("agentHub.users", appUsers);
}

function upsertUserLogin(user) {
  const existing = appUsers.find((candidate) => candidate.email.toLowerCase() === user.email.toLowerCase());
  if (existing) {
    existing.name = user.name;
    existing.lastLogin = todayIso;
    existing.status = "active";
    existing.authProvider = user.authProvider || existing.authProvider || "password";
    existing.memberType = normalizeMemberType(user.memberType || existing.memberType);
  } else {
    appUsers.push({
      id: createId(),
      name: user.name,
      email: user.email,
      lastLogin: todayIso,
      status: "active",
      authProvider: user.authProvider || "password",
      memberType: normalizeMemberType(user.memberType),
    });
  }
  saveUsers();
}

function isActiveLast24Hours(user) {
  return user.lastLogin === todayIso;
}

function getListingWalkthroughAgentEmails() {
  const emails = new Set(
    savedListingWalkthroughs
      .map((walkthrough) => walkthrough.agentEmail)
      .filter(Boolean)
      .map((email) => email.toLowerCase()),
  );
  if ((savedListingWalkthroughs.length || listingWalkthrough.propertyName || listingWalkthrough.address || listingWalkthrough.rooms?.length) && agent?.email) {
    emails.add(agent.email.toLowerCase());
  }
  return emails;
}

function renderAdminDashboard() {
  processAnnouncementSchedule();
  const listingUserEmails = getListingWalkthroughAgentEmails();
  totalUsers.textContent = String(appUsers.length);
  activeUsers.textContent = String(appUsers.filter(isActiveLast24Hours).length);
  inactiveUsers.textContent = String(appUsers.filter((user) => !isActiveLast24Hours(user)).length);
  listingWalkthroughUsers.textContent = String(listingUserEmails.size);
  renderUserOverviewList();
  renderAnnouncementAdminList();
}

function getFilteredUsers() {
  if (userOverviewFilter === "active") {
    return appUsers.filter(isActiveLast24Hours);
  }
  if (userOverviewFilter === "inactive") {
    return appUsers.filter((user) => !isActiveLast24Hours(user));
  }
  if (userOverviewFilter === "listing") {
    const listingUserEmails = getListingWalkthroughAgentEmails();
    return appUsers.filter((user) => listingUserEmails.has(user.email.toLowerCase()));
  }
  return appUsers;
}

function newestAnnouncementText() {
  const newest = [...announcements].sort((a, b) => b.runDate.localeCompare(a.runDate))[0];
  return newest ? `${newest.title}: ${newest.message}` : "New content has been added to the hub.";
}

function openEmailDraft(to, subject, body, confirmation) {
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  window.setTimeout(() => {
    alert(confirmation);
  }, 250);
}

function emailAnnouncementToUsers(announcement) {
  const recipients = appUsers
    .filter((user) => user.email && user.status !== "invited")
    .map((user) => user.email)
    .filter((email, index, emails) => emails.indexOf(email) === index);
  if (!recipients.length) {
    alert("No active user emails are available for this announcement.");
    return;
  }
  if (backendAvailable) {
    apiRequest("/api/email/announcement", {
      method: "POST",
      body: JSON.stringify({
        subject: announcement.title,
        message: announcement.message,
        link: announcement.link,
      }),
    }).catch(() => {});
  }
  const attachmentLine = announcement.link ? `\n\nAttachment link:\n${announcement.link}` : "";
  openEmailDraft(
    recipients.join(","),
    announcement.title,
    `${announcement.message}${attachmentLine}`,
    "Announcement email draft created for active users and agents.",
  );
}

function renderUserOverviewList() {
  const users = getFilteredUsers();
  const titles = {
    all: "All users",
    active: "Active in the last 24 hours",
    inactive: "Have not logged in",
    listing: "Using listing walkthrough",
  };
  userListTitle.textContent = titles[userOverviewFilter];
  document.querySelectorAll(".user-stat-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.userFilter === userOverviewFilter);
  });
  inactiveUserList.innerHTML = "";

  if (!users.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No users in this view.";
    inactiveUserList.append(empty);
    return;
  }

  users.forEach((user) => {
    const row = document.createElement("article");
    row.className = "inactive-user-row";
    row.innerHTML = `
      <div>
        <strong>${user.name}</strong>
        <small>${user.email}</small>
        <small>${memberTypeLabel(user.memberType)}</small>
      </div>
      <time>${user.lastLogin || "Never logged in"}</time>
      <div class="user-row-actions">
        <button class="secondary-btn edit-user-type" type="button">Edit</button>
        <button class="secondary-btn reset-password" type="button" ${user.authProvider === "google" ? "disabled" : ""}>Reset password</button>
        <button class="secondary-btn nudge-user" type="button">Nudge</button>
      </div>
    `;
    row.querySelector(".edit-user-type").addEventListener("click", () => editUserAccountType(user.id));
    row.querySelector(".reset-password").addEventListener("click", () => {
      const resetLink = `${window.location.origin}${window.location.pathname}?reset=${encodeURIComponent(user.email)}`;
      openEmailDraft(
        user.email,
        "Reset your Agent Central password",
        `Hi ${user.name},\n\nUse this reset link to update your password:\n${resetLink}`,
        `Password reset email draft created for ${user.name}.`,
      );
    });
    row.querySelector(".nudge-user").addEventListener("click", () => {
      openEmailDraft(
        user.email,
        "New content has been added to Agent Central",
        `Hi ${user.name},\n\nNew content has been added to the hub.\n\nNewest announcement:\n${newestAnnouncementText()}`,
        `Nudge email draft created for ${user.name}.`,
      );
    });
    inactiveUserList.append(row);
  });
}

function editUserAccountType(userId) {
  const user = appUsers.find((candidate) => candidate.id === userId);
  if (!user) return;
  const nextType = prompt(
    `Change account type for ${user.name}.\n\nType one of: team, mentee, upline`,
    normalizeMemberType(user.memberType),
  );
  if (nextType === null) return;
  const cleanedType = nextType.trim().toLowerCase();
  if (!["team", "mentee", "upline"].includes(cleanedType)) {
    alert("Please enter team, mentee, or upline.");
    return;
  }
  user.memberType = normalizeMemberType(cleanedType);
  saveUsers();
  if (agent?.email?.toLowerCase() === user.email.toLowerCase()) {
    setAgent({ ...agent, memberType: user.memberType });
  }
  renderAdminDashboard();
  alert(`${user.name} is now set as ${memberTypeLabel(user.memberType)}.`);
}

function saveAnnouncements() {
  writeStorageJson("agentHub.announcements", announcements);
}

function getActiveWinLossItems() {
  const cutoff = Date.now() - 48 * 60 * 60 * 1000;
  return winLossItems
    .filter((item) => new Date(item.createdAt).getTime() >= cutoff)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function saveWinLossItems() {
  winLossItems = winLossItems.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  writeStorageJson("agentHub.winLossItems", winLossItems);
}

function createWinLossListItem(item) {
  const row = document.createElement("article");
  row.className = "win-loss-row";
  row.innerHTML = `
    <div>
      <strong>${item.title}</strong>
      <p>${item.message}</p>
    </div>
    <small>${item.agentName || "Team"} · ${new Date(item.createdAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</small>
  `;
  return row;
}

function renderWinLossFeed() {
  saveWinLossItems();
  const activeItems = getActiveWinLossItems();
  const wins = activeItems.filter((item) => item.type !== "loss");
  const losses = activeItems.filter((item) => item.type === "loss");
  winsList.innerHTML = "";
  lossesList.innerHTML = "";

  if (!wins.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state win-loss-empty";
    empty.textContent = "No wins posted in the last 48 hours.";
    winsList.append(empty);
  } else {
    wins.forEach((item) => winsList.append(createWinLossListItem(item)));
  }

  if (!losses.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state win-loss-empty";
    empty.textContent = "No losses posted in the last 48 hours.";
    lossesList.append(empty);
  } else {
    losses.forEach((item) => lossesList.append(createWinLossListItem(item)));
  }
}

function renderWinLossPanelState() {
  winLossTiles.classList.toggle("is-hidden", winLossCollapsed);
  toggleWinLossPanel.textContent = winLossCollapsed ? "+" : "−";
  toggleWinLossPanel.setAttribute("aria-expanded", String(!winLossCollapsed));
  toggleWinLossPanel.setAttribute("aria-label", winLossCollapsed ? "Expand wins and losses" : "Minimize wins and losses");
  writeStorageValue("agentHub.winLossCollapsed", String(winLossCollapsed));
}

function openWinLossDialog(type) {
  winLossForm.reset();
  winLossType.value = type;
  winLossDialogTitle.textContent = type === "loss" ? "Add loss" : "Add win";
  saveWinLoss.textContent = type === "loss" ? "Add loss" : "Add win";
  winLossDialog.showModal();
}

function syncProfilePreview() {
  applyAvatar(profilePhotoPreview, {
    name: profileName.value || agent?.name || "Agent",
    profileImage: agent?.profileImage || "",
  });
}

function openSettings(tab = "profile") {
  profileName.value = agent?.name || "";
  profileEmail.value = agent?.email || "";
  profilePhone.value = agent?.phone || "";
  profileTitle.value = agent?.title || "";
  loginEmail.value = agent?.email || "";
  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
  themePalette.value = appTheme.palette;
  themeMode.value = appTheme.mode;
  const notificationSettings = getNotificationSettings();
  if (pushNotifications) pushNotifications.checked = notificationSettings.push;
  if (emailNotifications) emailNotifications.checked = notificationSettings.email;
  updateNotificationLabels();
  updateThemeColorControls();
  if (accessMemberType) accessMemberType.value = getCurrentMemberType();
  renderAccessFeatureList();
  profilePhoto.value = "";
  syncProfilePreview();
  switchSettingsTab(tab === "access" && agent?.role !== "admin" ? "profile" : tab);
  accountMenu.classList.remove("open");
  accountButton.setAttribute("aria-expanded", "false");
  settingsDialog.showModal();
}

function switchSettingsTab(tab) {
  const titles = {
    profile: "User Profile",
    appearance: "Appearance",
    notifications: "Notifications",
    password: "Password",
    access: "Access",
  };
  settingsTitle.textContent = titles[tab] || "User Profile";
  document.querySelectorAll(".settings-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsTab === tab);
  });
  document.querySelectorAll("[data-settings-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.settingsPanel !== tab);
  });
}

function getReportRange() {
  const value = winLossReportRange.value;
  if (value === "1w") return { label: "1 week", days: 7 };
  if (value === "2w") return { label: "2 weeks", days: 14 };
  if (value === "1m") return { label: "1 month", months: 1 };
  if (value === "3m") return { label: "3 months", months: 3 };
  if (value === "6m") return { label: "6 months", months: 6 };
  if (value === "12m") return { label: "12 months", months: 12 };
  const months = Math.max(1, Number(customReportMonths.value || 1));
  return { label: `${months} month${months === 1 ? "" : "s"}`, months };
}

function getWinLossReportItems() {
  const range = getReportRange();
  const cutoff = new Date();
  if (range.days) {
    cutoff.setDate(cutoff.getDate() - range.days);
  } else {
    cutoff.setMonth(cutoff.getMonth() - range.months);
  }
  return winLossItems
    .filter((item) => new Date(item.createdAt) >= cutoff)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function updateWinLossReportControls() {
  const custom = winLossReportRange.value === "custom";
  customReportMonths.classList.toggle("is-hidden", !custom);
  customReportMonthsLabel.classList.toggle("is-hidden", !custom);
  const items = getWinLossReportItems();
  const wins = items.filter((item) => item.type !== "loss").length;
  const losses = items.filter((item) => item.type === "loss").length;
  winLossReportPreview.innerHTML = `
    <strong>${items.length} total item${items.length === 1 ? "" : "s"}</strong>
    <span>${wins} win${wins === 1 ? "" : "s"} · ${losses} loss${losses === 1 ? "" : "es"}</span>
    <small>Range: ${getReportRange().label}</small>
  `;
}

function pdfEscape(text) {
  return String(text).replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function wrapPdfText(text, maxLength = 84) {
  const words = String(text || "")
    .split(/\s+/)
    .filter(Boolean)
    .flatMap((word) => {
      if (word.length <= maxLength) return word;
      const chunks = [];
      for (let index = 0; index < word.length; index += maxLength) {
        chunks.push(word.slice(index, index + maxLength));
      }
      return chunks;
    });
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLength) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function buildWinLossReportLines(items, range) {
  const wins = items.filter((item) => item.type !== "loss");
  const losses = items.filter((item) => item.type === "loss");
  const lines = [
    "Wins & Losses Report",
    `Range: ${range.label}`,
    `Generated: ${new Date().toLocaleString("en-US")}`,
    `Totals: ${items.length} items | ${wins.length} wins | ${losses.length} losses`,
    "",
    "Wins",
  ];

  if (!wins.length) lines.push("No wins in this range.");
  wins.forEach((item) => {
    wrapPdfText(`- ${item.title} (${new Date(item.createdAt).toLocaleDateString("en-US")}, ${item.agentName || "Team"})`, 64).forEach((line) => lines.push(line));
    wrapPdfText(item.message, 62).forEach((line) => lines.push(`  ${line}`));
  });

  lines.push("", "Losses");
  if (!losses.length) lines.push("No losses in this range.");
  losses.forEach((item) => {
    wrapPdfText(`- ${item.title} (${new Date(item.createdAt).toLocaleDateString("en-US")}, ${item.agentName || "Team"})`, 64).forEach((line) => lines.push(line));
    wrapPdfText(item.message, 62).forEach((line) => lines.push(`  ${line}`));
  });

  return lines;
}

function createPdfBlob(lines) {
  const safeLines = lines.flatMap((line) => wrapPdfText(line, 70));
  const pageLineLimit = 42;
  const pages = [];
  for (let index = 0; index < safeLines.length; index += pageLineLimit) {
    pages.push(safeLines.slice(index, index + pageLineLimit));
  }
  if (!pages.length) pages.push(["Wins & Losses Report", "No items found."]);

  const objects = ["<< /Type /Catalog /Pages 2 0 R >>"];
  const pageRefs = pages.map((_, index) => `${3 + index * 2} 0 R`).join(" ");
  objects.push(`<< /Type /Pages /Kids [${pageRefs}] /Count ${pages.length} >>`);

  pages.forEach((pageLines, index) => {
    const pageObjectNumber = 3 + index * 2;
    const contentObjectNumber = pageObjectNumber + 1;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> /Contents ${contentObjectNumber} 0 R >>`);
    const content = [
      "BT",
      "/F1 11 Tf",
      "50 742 Td",
      "14 TL",
      ...pageLines.map((line, lineIndex) => `${lineIndex === 0 ? "" : "T*"}(${pdfEscape(line)}) Tj`),
      "ET",
    ].join("\n");
    objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  });

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function downloadWinLossReportPdf() {
  const range = getReportRange();
  const items = getWinLossReportItems();
  const lines = buildWinLossReportLines(items, range);
  const blob = createPdfBlob(lines);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  anchor.href = url;
  anchor.download = `wins-losses-report-${stamp}.pdf`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function processAnnouncementSchedule() {
  let changed = false;
  announcements = announcements.map((announcement) => {
    if (announcement.status === "active" && announcement.runDate < todayIso) {
      changed = true;
      return { ...announcement, status: "archived" };
    }
    return announcement;
  });
  if (changed) saveAnnouncements();
  renderActiveAnnouncementWidget();
  renderWinLossFeed();
  renderWinLossPanelState();
}

function renderActiveAnnouncementWidget() {
  const activeWidgets = announcements.filter((announcement) => announcement.status === "active" && announcement.placement === "widget" && announcement.runDate <= todayIso);
  const activePopup = announcements.find((announcement) => announcement.status === "active" && announcement.placement === "popup" && announcement.runDate <= todayIso);
  if (activeWidgets.length) {
    if (announcementCarouselIndex >= activeWidgets.length) {
      announcementCarouselIndex = 0;
    }
    const activeWidget = activeWidgets[announcementCarouselIndex];
    document.querySelector("#announcementTitle").textContent = activeWidget.title;
    document.querySelector(".announcement-panel p:not(.eyebrow)").textContent = activeWidget.message;
    renderAnnouncementAttachment(activeWidget);
    document.querySelector(".announcement-panel time").textContent = `Runs ${activeWidget.runDate}`;
    document.querySelector(".announcement-panel time").setAttribute("datetime", activeWidget.runDate);
    announcementCarouselCount.textContent = `${announcementCarouselIndex + 1} / ${activeWidgets.length}`;
    previousAnnouncement.disabled = activeWidgets.length < 2;
    nextAnnouncement.disabled = activeWidgets.length < 2;
  }
  if (activePopup && !readSessionValue(`announcementPopup.${activePopup.id}`) && agent?.role !== "admin") {
    showAnnouncementPopup(activePopup, true);
  }
}

function renderAnnouncementAttachment(announcement) {
  announcementAttachment.innerHTML = "";
  const isImage = announcement.fileData?.startsWith("data:image/");

  if (isImage) {
    const image = document.createElement("img");
    image.src = announcement.fileData;
    image.alt = announcement.fileName || announcement.title;
    announcementAttachment.append(image);
  }

  if (announcement.link) {
    const link = document.createElement("a");
    link.href = announcement.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Open attachment";
    announcementAttachment.append(link);
  }

  if (announcement.fileData && !isImage) {
    const download = document.createElement("a");
    download.href = announcement.fileData;
    download.download = announcement.fileName || "announcement-attachment";
    download.textContent = `Download ${announcement.fileName || "attachment"}`;
    announcementAttachment.append(download);
  }
}

function getActiveWidgetAnnouncements() {
  return announcements.filter((announcement) => announcement.status === "active" && announcement.placement === "widget" && announcement.runDate <= todayIso);
}

function showAnnouncementPopup(announcement, remember = false) {
  if (!announcementPopupDialog) return;
  announcementPopupTitle.textContent = announcement.title;
  announcementPopupMessage.textContent = announcement.message;
  announcementPopupAttachment.innerHTML = "";
  if (announcement.fileData?.startsWith("data:image/")) {
    const image = document.createElement("img");
    image.src = announcement.fileData;
    image.alt = announcement.fileName || announcement.title;
    announcementPopupAttachment.append(image);
  }
  if (announcement.link) {
    const link = document.createElement("a");
    link.href = announcement.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Open attachment";
    announcementPopupAttachment.append(link);
  }
  if (announcement.fileData && !announcement.fileData.startsWith("data:image/")) {
    const download = document.createElement("a");
    download.href = announcement.fileData;
    download.download = announcement.fileName || "announcement-attachment";
    download.textContent = `Download ${announcement.fileName || "attachment"}`;
    announcementPopupAttachment.append(download);
  }
  if (remember) {
    writeSessionValue(`announcementPopup.${announcement.id}`, "shown");
  }
  if (!announcementPopupDialog.open) {
    announcementPopupDialog.showModal();
  }
}

function renderAnnouncementAdminList() {
  const list = announcements.filter((announcement) => announcement.status === announcementAdminTab);
  announcementAdminList.innerHTML = "";
  activeAnnouncementTab.classList.toggle("active", announcementAdminTab === "active");
  archiveAnnouncementTab.classList.toggle("active", announcementAdminTab === "archived");

  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = announcementAdminTab === "active" ? "No active announcements." : "No archived announcements.";
    announcementAdminList.append(empty);
    return;
  }

  list.forEach((announcement) => {
    const item = document.createElement("article");
    item.className = "announcement-admin-item";
    item.innerHTML = `
      <div>
        <strong>${announcement.title}</strong>
        <p>${announcement.message}</p>
        <small>${announcement.placement === "popup" ? "Pop up" : "Widget"}${announcement.emailAgents ? " · Email enabled" : ""} · Run date ${announcement.runDate}</small>
        ${announcement.link ? `<a href="${announcement.link}" target="_blank" rel="noreferrer">Attachment link</a>` : ""}
        ${announcement.fileName ? `<small>File: ${announcement.fileName}</small>` : ""}
      </div>
      <div class="announcement-actions">
        <button class="secondary-btn edit-announcement" type="button">Edit</button>
        <button class="secondary-btn delete-announcement" type="button">Delete</button>
      </div>
    `;
    item.querySelector(".edit-announcement").addEventListener("click", () => openAnnouncementDialog(announcement.id));
    item.querySelector(".delete-announcement").addEventListener("click", () => {
      announcements = announcements.filter((candidate) => candidate.id !== announcement.id);
      saveAnnouncements();
      renderAnnouncementAdminList();
      renderActiveAnnouncementWidget();
    });
    announcementAdminList.append(item);
  });
}

function openAnnouncementDialog(announcementId = null) {
  editingAnnouncementId = announcementId;
  clearExistingAnnouncementFile = false;
  announcementForm.reset();
  const announcement = announcements.find((item) => item.id === announcementId);
  announcementDialogTitle.textContent = announcement ? "Edit announcement" : "Add announcement";
  saveAnnouncement.textContent = announcement ? "Save announcement" : "Add announcement";
  announcementRunDate.value = todayIso;
  if (announcement) {
    announcementTitleInput.value = announcement.title;
    announcementMessage.value = announcement.message;
    announcementPlacement.value = announcement.placement;
    announcementEmailAgents.checked = announcement.emailAgents === true;
    announcementRunDate.value = announcement.runDate;
    announcementLink.value = announcement.link;
  }
  announcementDialog.showModal();
}

function updateDashboardMode() {
  const isAdminView = agent?.role === "admin" && dashboardModeToggle.checked;
  const canEditTiles = agent?.role === "admin" && !isAdminView;
  document.querySelectorAll(".agent-dashboard-section").forEach((section) => section.classList.toggle("is-hidden", isAdminView));
  adminDashboardView.classList.toggle("is-hidden", !isAdminView);
  teamTileGrid.classList.toggle("editable-tiles", canEditTiles);
  teamTileGrid.querySelectorAll(".team-tile-resize").forEach((control) => {
    control.classList.toggle("is-hidden", !canEditTiles);
  });
  teamTileGrid.querySelectorAll(".tile-edit, .tile-delete").forEach((control) => {
    control.classList.toggle("is-hidden", agent?.role !== "admin");
  });
  teamTileGrid.querySelectorAll("[data-dashboard-tile]").forEach((tile) => {
    tile.draggable = canEditTiles;
  });
  if (isAdminView) {
    renderAdminDashboard();
  }
}

function saveTiles() {
  writeStorageJson("agentHub.tiles", personalTiles);
}

function renderTiles() {
  homeTiles.innerHTML = "";

  if (!personalTiles.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Add your favorite working links from the curated list or create a custom tile.";
    homeTiles.append(empty);
    return;
  }

  personalTiles.forEach((tile) => {
    const item = document.createElement("a");
    item.className = "tool-tile";
    item.href = tile.link;
    item.target = "_blank";
    item.rel = "noreferrer";
    item.innerHTML = `
      <img src="${tile.image || "assets/custom.svg"}" alt="" />
      <span>${tile.name}</span>
      <small>${new URL(tile.link).hostname.replace("www.", "")}</small>
    `;

    const remove = document.createElement("button");
    remove.className = "tile-remove";
    remove.type = "button";
    remove.setAttribute("aria-label", `Remove ${tile.name}`);
    remove.textContent = "×";
    remove.addEventListener("click", (event) => {
      event.preventDefault();
      personalTiles = personalTiles.filter((candidate) => candidate.id !== tile.id);
      saveTiles();
      renderTiles();
    });

    item.append(remove);
    homeTiles.append(item);
  });
}

function saveTeamTileVisibility() {
  writeStorageJson("agentHub.teamTileHidden", hiddenTeamTiles);
}

function saveCustomTeamTiles() {
  writeStorageJson("agentHub.teamCustomTiles", customTeamTiles);
}

function getStandardTeamTileIds() {
  return ["411", "crm", "scripts", "training", "calendar", "chat", "direct-mail", "listing-intelligence", "tasks"];
}

function createCustomTeamTile(tile) {
  const item = document.createElement("a");
  item.className = "tool-tile admin-tile custom-team-tile";
  item.href = tile.link;
  item.target = "_blank";
  item.rel = "noreferrer";
  item.dataset.dashboardTile = tile.id;
  item.dataset.customTile = "true";
  item.innerHTML = `
    <button class="tile-edit admin-only is-hidden" type="button" aria-label="Edit ${tile.name} tile">Edit</button>
    <button class="tile-delete admin-only is-hidden" type="button" aria-label="Delete ${tile.name} tile">Delete</button>
    <img src="${tile.image || "assets/custom.svg"}" alt="" />
    <span>${tile.name}</span>
    <small>${tile.subtitle || "Custom team link"}</small>
  `;
  return item;
}

function renderCustomTeamTiles() {
  teamTileGrid.querySelectorAll("[data-custom-tile='true']").forEach((tile) => tile.remove());
  customTeamTiles.forEach((tile) => {
    teamTileGrid.append(createCustomTeamTile(tile));
  });
}

function applyTeamTileVisibility() {
  const hidden = new Set(hiddenTeamTiles);
  teamTileGrid.querySelectorAll("[data-dashboard-tile]").forEach((tile) => {
    tile.classList.toggle("is-hidden", hidden.has(tile.dataset.dashboardTile));
  });
}

function deleteTeamTile(tile) {
  const tileId = tile.dataset.dashboardTile;
  if (tile.dataset.customTile === "true") {
    customTeamTiles = customTeamTiles.filter((item) => item.id !== tileId);
    saveCustomTeamTiles();
    tile.remove();
  } else if (!hiddenTeamTiles.includes(tileId)) {
    hiddenTeamTiles = [...hiddenTeamTiles, tileId];
    saveTeamTileVisibility();
    tile.classList.add("is-hidden");
  }
  saveDashboardTileOrder();
}

function restoreStandardTeamTile(tileId) {
  hiddenTeamTiles = hiddenTeamTiles.filter((id) => id !== tileId);
  saveTeamTileVisibility();
  const tile = teamTileGrid.querySelector(`[data-dashboard-tile="${tileId}"]`);
  if (tile) {
    tile.classList.remove("is-hidden");
    teamTileGrid.append(tile);
    saveDashboardTileOrder();
  }
}

function updateAdminTileForm() {
  const custom = adminTileType.value === "custom";
  customAdminTileFields.classList.toggle("is-hidden", !custom);
  adminTileTitle.required = custom;
  adminTileSubtitle.required = false;
  adminTileUrl.required = custom;
}

function applyDashboardTileSettings() {
  renderCustomTeamTiles();
  const tileCopy = readStorageJson("agentHub.teamTileCopy", {});
  Object.entries(tileCopy).forEach(([tileId, copy]) => {
    const tile = teamTileGrid.querySelector(`[data-dashboard-tile="${tileId}"]`);
    if (!tile) return;
    const title = tile.querySelector("span");
    const subtitle = tile.querySelector("small");
    if (title) title.textContent = copy.title;
    if (subtitle) subtitle.textContent = copy.subtitle;
  });

  const tileOrder = readStorageJson("agentHub.teamTileOrder", []);
  tileOrder.forEach((tileId) => {
    const tile = teamTileGrid.querySelector(`[data-dashboard-tile="${tileId}"]`);
    if (tile) teamTileGrid.append(tile);
  });

  applyTeamTileVisibility();
  applyDashboardTileSizes();
  setupDashboardTileEditing();
}

function saveDashboardTileOrder() {
  const order = [...teamTileGrid.querySelectorAll("[data-dashboard-tile]:not(.is-hidden)")].map((tile) => tile.dataset.dashboardTile);
  writeStorageJson("agentHub.teamTileOrder", order);
}

function saveDashboardTileCopy(tile) {
  const titleElement = tile.querySelector("span");
  const subtitleElement = tile.querySelector("small");
  const title = prompt("Tile title", titleElement?.textContent || "Tile");
  if (title === null) return;
  const subtitle = prompt("Tile subtitle", subtitleElement?.textContent || "");
  if (subtitle === null) return;

  const tileCopy = readStorageJson("agentHub.teamTileCopy", {});
  tileCopy[tile.dataset.dashboardTile] = { title: title.trim(), subtitle: subtitle.trim() };
  writeStorageJson("agentHub.teamTileCopy", tileCopy);
  applyDashboardTileSettings();
}

function getDashboardTileSizes() {
  return readStorageJson("agentHub.teamTileSizes", {});
}

function saveDashboardTileSizes(sizes) {
  writeStorageJson("agentHub.teamTileSizes", sizes);
}

function applyDashboardTileSizes() {
  const sizes = getDashboardTileSizes();
  teamTileGrid.querySelectorAll("[data-dashboard-tile]").forEach((tile) => {
    const size = sizes[tile.dataset.dashboardTile] || { col: 1, row: 1 };
    tile.classList.remove("tile-span-col-2", "tile-span-col-3", "tile-span-row-2");
    if (size.col > 1) tile.classList.add(`tile-span-col-${size.col}`);
    if (size.row > 1) tile.classList.add("tile-span-row-2");
    tile.dataset.tileSize = `${size.col}x${size.row}`;
  });
}

function resizeDashboardTile(tile, direction) {
  const sizes = getDashboardTileSizes();
  const current = sizes[tile.dataset.dashboardTile] || { col: 1, row: 1 };
  const next = { ...current };
  if (direction === "wider") next.col = Math.min(3, current.col + 1);
  if (direction === "narrower") next.col = Math.max(1, current.col - 1);
  if (direction === "taller") next.row = current.row === 2 ? 1 : 2;
  sizes[tile.dataset.dashboardTile] = next;
  saveDashboardTileSizes(sizes);
  applyDashboardTileSizes();
  teamTileGrid.classList.add("tile-resized");
  window.setTimeout(() => teamTileGrid.classList.remove("tile-resized"), 180);
}

function ensureTileResizeControls(tile) {
  if (tile.querySelector(".team-tile-resize")) return;
  const controls = document.createElement("div");
  controls.className = "team-tile-resize is-hidden";
  controls.draggable = false;
  controls.innerHTML = `
    <button type="button" data-tile-resize="narrower" title="Make tile smaller" aria-label="Make tile smaller">-</button>
    <button type="button" data-tile-resize="wider" title="Make tile wider" aria-label="Make tile wider">+</button>
    <button type="button" data-tile-resize="taller" title="Toggle tall tile" aria-label="Toggle tall tile">T</button>
  `;
  controls.querySelectorAll("button").forEach((button) => {
    button.draggable = false;
  });
  ["pointerdown", "mousedown", "touchstart", "dragstart"].forEach((eventName) => {
    controls.addEventListener(eventName, (event) => {
      event.stopPropagation();
      if (eventName === "dragstart") event.preventDefault();
    });
  });
  controls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tile-resize]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    resizeDashboardTile(tile, button.dataset.tileResize);
  });
  tile.append(controls);
}

function setupDashboardTileEditing() {
  let draggedTile = null;
  teamTileGrid.querySelectorAll("[data-dashboard-tile]").forEach((tile) => {
    ensureTileResizeControls(tile);
    tile.draggable = agent?.role === "admin";
    if (tile.dataset.editingSetup === "true") return;
    tile.dataset.editingSetup = "true";
    tile.addEventListener("dragstart", (event) => {
      if (agent?.role !== "admin" || dashboardModeToggle.checked) {
        event.preventDefault();
        return;
      }
      if (event.target.closest(".team-tile-resize, .tile-edit")) {
        event.preventDefault();
        return;
      }
      draggedTile = tile;
      tile.classList.add("tile-dragging");
      event.dataTransfer.effectAllowed = "move";
    });
    tile.addEventListener("dragenter", () => {
      if (draggedTile && draggedTile !== tile) tile.classList.add("drop-target");
    });
    tile.addEventListener("dragleave", () => tile.classList.remove("drop-target"));
    tile.addEventListener("dragover", (event) => {
      if (!draggedTile) return;
      event.preventDefault();
    });
    tile.addEventListener("drop", (event) => {
      event.preventDefault();
      tile.classList.remove("drop-target");
      if (!draggedTile || draggedTile === tile) return;
      teamTileGrid.insertBefore(draggedTile, tile);
      saveDashboardTileOrder();
      draggedTile = null;
    });
    tile.addEventListener("dragend", () => {
      draggedTile = null;
      teamTileGrid.querySelectorAll(".tile-dragging, .drop-target").forEach((item) => {
        item.classList.remove("tile-dragging", "drop-target");
      });
    });
    tile.querySelector(".tile-edit")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      saveDashboardTileCopy(tile);
    });
    tile.querySelector(".tile-delete")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      deleteTeamTile(tile);
    });
  });
  applyDashboardTileSizes();
  updateDashboardMode();
}

function populateSelect(select, values, selectedValue) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
  if (selectedValue && values.includes(selectedValue)) {
    select.value = selectedValue;
  }
}

function getFridays(monthIndex, year) {
  const fridays = [];
  const date = new Date(year, monthIndex, 1);
  while (date.getMonth() === monthIndex) {
    if (date.getDay() === 5) {
      fridays.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }));
    }
    date.setDate(date.getDate() + 1);
  }
  return fridays;
}

function saveWorksheet() {
  document.querySelectorAll("[data-save]").forEach((field) => {
    worksheetData[field.dataset.save] = field.isContentEditable ? field.textContent : field.value;
  });
  writeStorageJson("agentHub.worksheet411", worksheetData);
}

function clearOldPresetGoalValues() {
  const presetValues = {
    annualBuyerAppointments: "15",
    annualListingAppointments: "10",
    annualBuyers: "14",
    annualListings: "7",
    annualCloseBuyers: "9",
    annualCloseListings: "5",
    monthlyBuyerAppointments: "2",
    monthlyListingAppointments: "1",
    monthlyBuyers: "2",
    monthlyListings: "1",
    monthlyCloseBuyers: "1",
    monthlyCloseListings: "1",
    monthlyNet: "95550",
    monthlyVolume: "5880000",
  };

  if (worksheetData.clearedPresetGoals) return;

  Object.entries(presetValues).forEach(([key, value]) => {
    if (worksheetData[key] === value) {
      worksheetData[key] = "";
    }
  });
  worksheetData.clearedPresetGoals = true;
  writeStorageJson("agentHub.worksheet411", worksheetData);
}

function restoreWorksheet() {
  document.querySelectorAll("[data-save]").forEach((field) => {
    if (worksheetData[field.dataset.save] === undefined) return;
    if (field.isContentEditable) {
      field.textContent = worksheetData[field.dataset.save];
    } else {
      field.value = worksheetData[field.dataset.save];
    }
  });
}

function setupWorksheetOptions() {
  const currentMonth = new Date().getMonth();
  document.querySelectorAll(".month-options").forEach((select) => {
    populateSelect(select, monthNames, worksheetData[select.dataset.save] || monthNames[currentMonth]);
  });
  if (!worksheetData.weekOf) {
    weekOfSelect.valueAsDate = new Date();
  }
}

function normalizeWeeklyEditor(editor) {
  const text = editor.textContent
    .split(/\n+/)
    .map((line) => line.replace(/^•\s*/, "").trim())
    .filter(Boolean)
    .map((line) => `• ${line}`)
    .join("\n");
  editor.textContent = text;
}

function worksheetSummary() {
  const lines = [
    `${agent?.name || "Agent"} 411`,
    `Week of: ${weekOfSelect.value}`,
    "",
    "Weekly Goals:",
  ];

  document.querySelectorAll(".weekly-bullets").forEach((editor, index) => {
    lines.push(`Week ${index + 1}:`);
    lines.push(editor.textContent || "No goals entered");
  });

  return lines.join("\n");
}

function saveAppointments() {
  localStorage.setItem("agentHub.appointments", JSON.stringify(appointments));
}

function saveTasks() {
  localStorage.setItem("agentHub.tasks", JSON.stringify(tasks));
}

function taskCalendarId(taskId) {
  return `task-${taskId}`;
}

function syncTaskToCalendar(task) {
  appointments = appointments.filter((appointment) => appointment.id !== taskCalendarId(task.id));
  if (task.addToCalendar && !task.done) {
    appointments.push({
      id: taskCalendarId(task.id),
      title: task.title,
      date: task.dueDate,
      time: "09:00",
      notes: task.notes || `Task urgency: ${task.urgency}`,
      type: "follow-up",
    });
  }
  saveAppointments();
}

function openTaskDialog(taskId = null) {
  editingTaskId = taskId;
  taskForm.reset();
  const task = tasks.find((candidate) => candidate.id === taskId);
  taskDialogTitle.textContent = task ? "Task details" : "New task";
  saveTaskButton.textContent = task ? "Save task" : "Add task";

  if (task) {
    taskTitle.value = task.title;
    taskDueDate.value = task.dueDate;
    taskUrgency.value = task.urgency;
    taskNotes.value = task.notes;
    taskAddToCalendar.checked = task.addToCalendar;
  } else {
    taskDueDate.value = todayIso;
    taskUrgency.value = "medium";
    taskAddToCalendar.checked = false;
  }
  taskDialog.showModal();
}

function completeTask(taskId) {
  const task = tasks.find((candidate) => candidate.id === taskId);
  if (!task) return;
  task.done = true;
  task.addToCalendar = false;
  appointments = appointments.filter((appointment) => appointment.id !== taskCalendarId(taskId));
  saveAppointments();
  saveTasks();
  renderTasks();
  renderCalendar();
}

function renderTaskTile() {
  const openTasks = tasks.filter((task) => !task.done).slice(0, 3);
  taskTileList.innerHTML = "";

  if (!openTasks.length) {
    const empty = document.createElement("p");
    empty.className = "task-tile-empty";
    empty.textContent = "No open tasks.";
    taskTileList.append(empty);
    return;
  }

  openTasks.forEach((task) => {
    const item = document.createElement("div");
    item.className = `task-mini urgency-${task.urgency}`;
    item.innerHTML = `
      <input type="checkbox" />
      <span>${task.title}</span>
    `;
    item.addEventListener("click", () => openTaskDialog(task.id));
    item.querySelector("input").addEventListener("click", (event) => event.stopPropagation());
    item.querySelector("input").addEventListener("change", () => completeTask(task.id));
    taskTileList.append(item);
  });
}

function renderTasks() {
  renderTaskTile();
  fullTaskList.innerHTML = "";
  const openTasks = tasks.filter((task) => !task.done);

  if (!openTasks.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No open tasks. Add one to start the list.";
    fullTaskList.append(empty);
    return;
  }

  const groupedTasks = [
    { title: "Listings", items: openTasks.filter((task) => task.category === "Listings") },
    { title: "General", items: openTasks.filter((task) => task.category !== "Listings") },
  ].filter((group) => group.items.length);

  groupedTasks.forEach((group) => {
    const heading = document.createElement("h3");
    heading.className = "task-section-heading";
    heading.textContent = group.title;
    fullTaskList.append(heading);

    group.items.forEach((task) => {
    const item = document.createElement("article");
    item.className = `task-row urgency-${task.urgency}`;
    item.draggable = true;
    item.dataset.taskId = task.id;
    item.innerHTML = `
      <button class="drag-handle" type="button" aria-label="Drag task">☰</button>
      <input class="task-check" type="checkbox" aria-label="Complete ${task.title}" />
      <div class="task-row-main">
        <strong>${task.title}</strong>
        <p>${task.notes || "No notes added"}</p>
      </div>
      <time>${task.dueDate}</time>
      <span class="urgency-pill">${task.urgency}</span>
      <label class="calendar-toggle">
        <span>Add to calendar</span>
        <input type="checkbox" ${task.addToCalendar ? "checked" : ""} />
      </label>
    `;

    item.addEventListener("click", (event) => {
      if (event.target.closest("button, input, label")) return;
      openTaskDialog(task.id);
    });
    item.querySelector(".task-check").addEventListener("click", (event) => event.stopPropagation());
    item.querySelector(".task-check").addEventListener("change", () => completeTask(task.id));
    item.querySelector(".calendar-toggle input").addEventListener("change", (event) => {
      event.stopPropagation();
      task.addToCalendar = event.target.checked;
      syncTaskToCalendar(task);
      saveTasks();
      renderCalendar();
    });
    item.querySelector(".calendar-toggle").addEventListener("click", (event) => event.stopPropagation());
    item.querySelector(".drag-handle").addEventListener("click", (event) => event.stopPropagation());
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", task.id);
    });
    item.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      const draggedId = event.dataTransfer.getData("text/plain");
      const targetId = task.id;
      if (!draggedId || draggedId === targetId) return;
      const draggedIndex = tasks.findIndex((candidate) => candidate.id === draggedId);
      const targetIndex = tasks.findIndex((candidate) => candidate.id === targetId);
      const [draggedTask] = tasks.splice(draggedIndex, 1);
      tasks.splice(targetIndex, 0, draggedTask);
      saveTasks();
      renderTasks();
    });

    fullTaskList.append(item);
    });
  });
}

function formatAppointmentTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  return new Date(2026, 0, 1, hour, minute).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function renderCalendarConnection() {
  calendarProviderLabel.textContent = calendarProvider || "Not connected";
  calendarConnectNote.textContent = calendarProvider
    ? `Connected to ${calendarProvider} for this prototype. Live sync will use that provider's OAuth calendar API in production.`
    : "Choose a calendar provider to connect this hub with your appointments.";
}

function renderCalendar() {
  renderCalendarConnection();
  calendarGrid.innerHTML = "";
  const month = todayDate.getMonth();
  const year = todayDate.getFullYear();
  document.querySelector("#calendarTitle").textContent = `${monthNames[month]} ${year}`;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  dayNames.forEach((day) => {
    const heading = document.createElement("div");
    heading.className = "calendar-day-name";
    heading.textContent = day;
    calendarGrid.append(heading);
  });

  for (let index = 0; index < firstDay; index += 1) {
    const blank = document.createElement("div");
    blank.className = "calendar-cell muted-cell";
    calendarGrid.append(blank);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const isoDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const cell = document.createElement("button");
    cell.className = "calendar-cell";
    cell.type = "button";
    cell.innerHTML = `<span>${day}</span>`;

    appointments
      .filter((appointment) => appointment.date === isoDate)
      .slice(0, 3)
      .forEach((appointment) => {
        const event = document.createElement("small");
        event.className = appointment.type === "follow-up" ? "calendar-event follow-up" : "calendar-event";
        event.textContent = `${formatAppointmentTime(appointment.time)} ${appointment.title}`;
        cell.append(event);
      });

    cell.addEventListener("click", () => {
      appointmentDate.value = isoDate;
      appointmentTime.value = "09:00";
      appointmentTitle.value = "";
      appointmentNotes.value = "";
      appointmentDialog.showModal();
    });
    calendarGrid.append(cell);
  }

  renderAgenda();
}

function renderAgenda() {
  const todaysAppointments = appointments
    .filter((appointment) => appointment.date === todayIso)
    .sort((a, b) => a.time.localeCompare(b.time));

  agendaList.innerHTML = "";

  if (!todaysAppointments.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No appointments scheduled for today.";
    agendaList.append(empty);
    return;
  }

  todaysAppointments.forEach((appointment) => {
    const item = document.createElement("article");
    item.className = "agenda-item";
    item.innerHTML = `
      <time>${formatAppointmentTime(appointment.time)}</time>
      <div>
        <strong>${appointment.title}</strong>
        <p>${appointment.notes || "No notes added"}</p>
      </div>
    `;
    agendaList.append(item);
  });
}

function renderCanvaPage() {
  const connected = Boolean(canvaAccount);
  canvaStatus.textContent = connected ? `Connected as ${canvaAccount.email}` : "Not connected";
  canvaStatusNote.textContent = connected
    ? `Connected to Canva on ${new Date(canvaAccount.connectedAt).toLocaleDateString("en-US")}. Template links open directly in Canva.`
    : "Connect your Canva account to open team templates in Canva.";
  connectCanva.classList.toggle("is-hidden", connected);
  disconnectCanva.classList.toggle("is-hidden", !connected);
  canvaCategorySections.innerHTML = "";

  canvaTemplateCategories.forEach((category) => {
    const templates = (teamCanvaTemplates[category.id] || []).filter(canViewAudience);
    const section = document.createElement("section");
    section.className = "canva-category-section";
    section.innerHTML = `
      <div class="canva-category-header">
        <div>
          <p class="eyebrow">${category.title}</p>
          <h2>${category.title}</h2>
        </div>
        <div class="canva-carousel-actions">
          <button class="secondary-btn small admin-only ${agent?.role === "admin" ? "" : "is-hidden"}" type="button" data-canva-add="${category.id}">Add template</button>
          <button class="icon-btn canva-scroll" type="button" data-canva-scroll="${category.id}" data-direction="-1" aria-label="Scroll ${category.title} left">‹</button>
          <button class="icon-btn canva-scroll" type="button" data-canva-scroll="${category.id}" data-direction="1" aria-label="Scroll ${category.title} right">›</button>
        </div>
      </div>
      <div class="canva-carousel" data-canva-carousel="${category.id}"></div>
    `;
    const carousel = section.querySelector(".canva-carousel");
    if (!templates.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state canva-empty";
      empty.textContent = "No templates in this category yet.";
      carousel.append(empty);
    } else {
      templates.forEach((template) => carousel.append(createCanvaTemplateTile(template, category)));
    }
    canvaCategorySections.append(section);
  });
}

function createCanvaTemplateTile(template, category) {
  const card = document.createElement("article");
  card.className = "canva-template-card";
  card.dataset.templateId = template.id;
  card.dataset.categoryId = category.id;
  const preview = template.image
    ? `<img class="canva-template-preview" src="${template.image}" alt="${template.title}" />`
    : `<span class="canva-template-preview" style="background:${category.color}"></span>`;
  card.innerHTML = `
    ${preview}
    <strong>${template.title}</strong>
    <small>${category.title}</small>
    <p>${template.description || "Canva team template"}</p>
    <div class="canva-template-actions">
      <a class="secondary-btn small" href="${template.url}" target="_blank" rel="noreferrer">Open in Canva</a>
      <button class="secondary-btn small admin-only ${agent?.role === "admin" ? "" : "is-hidden"}" type="button" data-canva-edit>Edit</button>
      <button class="secondary-btn small admin-only ${agent?.role === "admin" ? "" : "is-hidden"}" type="button" data-canva-delete>Delete</button>
    </div>
  `;
  return card;
}

function saveCanvaTemplates() {
  writeStorageJson("agentHub.canvaTemplates", teamCanvaTemplates);
}

function openCanvaTemplateDialog(categoryId, templateId = "") {
  canvaTemplateForm.reset();
  canvaTemplateCategory.value = categoryId;
  canvaTemplateEditingId.value = templateId;
  canvaTemplateImagePreview.innerHTML = "";
  const template = templateId ? (teamCanvaTemplates[categoryId] || []).find((item) => item.id === templateId) : null;
  canvaTemplateDialogTitle.textContent = template ? "Edit Canva template" : "Add Canva template";
  saveCanvaTemplate.textContent = template ? "Save template" : "Add template";
  clearCanvaTemplateImage.dataset.clearExisting = "false";
  writeAudienceControls(template?.audience, canvaAudienceTeam, canvaAudienceMentee);
  if (template) {
    canvaTemplateTitle.value = template.title;
    canvaTemplateUrl.value = template.url;
    canvaTemplateDescription.value = template.description || "";
    if (template.image) {
      canvaTemplateImagePreview.innerHTML = `<img src="${template.image}" alt="${template.title}" />`;
    }
  }
  canvaTemplateDialog.showModal();
}

function connectCanvaAccount() {
  window.open("https://www.canva.com/login", "_blank", "noopener,noreferrer");
  const email = prompt("After signing in to Canva, enter the Canva account email to connect", agent?.email || "");
  if (!email) return;
  canvaAccount = { email, connectedAt: new Date().toISOString(), provider: "Canva" };
  localStorage.setItem("agentHub.canvaAccount", JSON.stringify(canvaAccount));
  renderCanvaPage();
}

function saveChatMessages() {
  localStorage.setItem("agentHub.chatMessages", JSON.stringify(chatRoomMessages));
}

function renderChatAttachment(attachment) {
  const item = document.createElement("a");
  item.className = "chat-attachment";
  item.href = attachment.data;
  item.download = attachment.name;
  item.target = "_blank";
  item.rel = "noreferrer";
  if (attachment.type.startsWith("image/")) {
    const image = document.createElement("img");
    image.src = attachment.data;
    image.alt = attachment.name;
    item.append(image);
  } else if (attachment.type.startsWith("video/")) {
    const video = document.createElement("video");
    video.src = attachment.data;
    video.controls = true;
    item.append(video);
  }
  const label = document.createElement("span");
  label.textContent = attachment.name;
  item.append(label);
  return item;
}

function renderChatMessages() {
  chatMessages.innerHTML = "";
  selectedChatRoom = normalizeChatRoom(selectedChatRoom);
  const activeRoomButton = document.querySelector(`[data-chat-room="${selectedChatRoom}"]`);
  chatRoomTitle.textContent = activeRoomButton?.dataset.chatRoomTitle || "General Help";
  document.querySelectorAll("[data-chat-room]").forEach((button) => {
    button.classList.toggle("active", button.dataset.chatRoom === selectedChatRoom);
  });
  const roomMessages = chatRoomMessages.filter((message) => (message.room || "general") === selectedChatRoom);
  chatMessageCount.textContent = `${roomMessages.length} ${roomMessages.length === 1 ? "message" : "messages"}`;

  roomMessages.forEach((message) => {
    const item = document.createElement("article");
    item.className = message.author === agent?.name ? "chat-message mine" : "chat-message";

    const meta = document.createElement("div");
    meta.className = "chat-message-meta";
    const author = document.createElement("strong");
    author.textContent = message.author;
    const time = document.createElement("time");
    time.dateTime = message.createdAt;
    time.textContent = new Date(message.createdAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
    meta.append(author, time);

    const body = document.createElement("p");
    body.textContent = message.message;

    item.append(meta, body);
    if (message.attachments?.length) {
      const attachments = document.createElement("div");
      attachments.className = "chat-attachments";
      message.attachments.forEach((attachment) => attachments.append(renderChatAttachment(attachment)));
      item.append(attachments);
    }
    chatMessages.append(item);
  });
  if (!roomMessages.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No messages in this room yet.";
    chatMessages.append(empty);
  }
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderChatAttachmentPreview() {
  const files = [...chatAttachment.files];
  chatAttachmentSummary.textContent = files.length ? `${files.length} file${files.length === 1 ? "" : "s"} attached` : "No files attached";
  chatAttachmentPreview.innerHTML = "";
  files.forEach((file) => {
    const item = document.createElement("span");
    item.textContent = file.name;
    chatAttachmentPreview.append(item);
  });
}

function saveDirectMailOrders() {
  localStorage.setItem("agentHub.directMailOrders", JSON.stringify(directMailOrders));
}

function saveDirectMailConfig() {
  localStorage.setItem("agentHub.directMailConfig", JSON.stringify(directMailConfig));
}

function getMailerEstimate() {
  const quantity = Number(mailerQuantity.value || 0);
  const rateByProduct = {
    postcard: 0.75,
    letter: 1.28,
    "snap-apart": 1.55,
  };
  return {
    pieces: quantity,
    total: quantity * (rateByProduct[mailerProduct.value] || 0.75),
  };
}

function getMailerPayload() {
  return {
    campaignName: mailerCampaignName.value.trim(),
    product: mailerProduct.value,
    template: mailerTemplate.value,
    quantity: Number(mailerQuantity.value || 0),
    scheduledDate: mailerScheduleDate.value,
    listSource: mailerListSource.value,
    target: mailerAddress.value.trim(),
    personalizationNotes: mailerMessage.value.trim(),
    agent: {
      name: agent?.name || "",
      email: agent?.email || "",
    },
    whiteLabel: true,
  };
}

async function callDirectMailProvider(action, payload) {
  if (directMailConfig.mode !== "live" || !directMailConfig.apiBaseUrl || !directMailConfig.apiKey) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return {
      id: `DM-${Date.now()}`,
      status: action === "proof" ? "proof-ready" : "submitted",
      providerMode: "demo",
      payload,
    };
  }

  const endpointByAction = {
    proof: "/proofs",
    order: "/orders",
  };
  const response = await fetch(`${directMailConfig.apiBaseUrl.replace(/\/$/, "")}${endpointByAction[action]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${directMailConfig.apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Direct mail ${action} failed with status ${response.status}`);
  }
  return response.json();
}

function updateMailerEstimate() {
  const estimate = getMailerEstimate();
  mailerEstimatedPieces.textContent = estimate.pieces.toLocaleString();
  mailerEstimatedTotal.textContent = estimate.total.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function renderDirectMailOrders() {
  mailerOrderList.innerHTML = "";
  if (!directMailOrders.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No direct mail orders have been submitted yet.";
    mailerOrderList.append(empty);
    return;
  }

  directMailOrders.forEach((order) => {
    const item = document.createElement("article");
    item.className = "mailer-order-item";
    item.innerHTML = `
      <div>
        <strong>${order.campaignName}</strong>
        <p>${order.productLabel} · ${order.quantity.toLocaleString()} pieces · ${order.target}</p>
      </div>
      <span>${order.status}</span>
      <time datetime="${order.createdAt}">${new Date(order.createdAt).toLocaleDateString("en-US")}</time>
    `;
    mailerOrderList.append(item);
  });
}

function renderDirectMailPage() {
  mailerScheduleDate.value ||= tomorrowIso;
  mailerApiStatus.textContent = directMailConfig.mode === "live" ? "Live integration" : "Demo mode";
  mailerApiStatus.classList.toggle("live", directMailConfig.mode === "live");
  updateMailerEstimate();
  renderDirectMailOrders();
}

async function handleGenerateMailerProof() {
  const payload = getMailerPayload();
  if (!payload.campaignName || !payload.target || !payload.scheduledDate) {
    mailerOrderForm.reportValidity();
    return;
  }
  generateMailerProof.disabled = true;
  generateMailerProof.textContent = "Generating...";
  try {
    const proof = await callDirectMailProvider("proof", payload);
    mailerProofPreview.innerHTML = `
      <strong>${payload.campaignName}</strong>
      <p>${payload.product.replace("-", " ")} using ${payload.template.replace("-", " ")} template</p>
      <small>Proof ${proof.id} is ready for review.</small>
    `;
  } catch (error) {
    mailerProofPreview.innerHTML = `<strong>Proof error</strong><p>${error.message}</p>`;
  } finally {
    generateMailerProof.disabled = false;
    generateMailerProof.textContent = "Generate proof";
  }
}

async function handleSubmitMailerOrder(event) {
  event.preventDefault();
  const payload = getMailerPayload();
  const estimate = getMailerEstimate();
  const file = mailerListFile.files[0];
  const listFile = file ? { name: file.name, type: file.type, data: await fileToDataUrl(file) } : null;
  const response = await callDirectMailProvider("order", { ...payload, listFile });
  directMailOrders.unshift({
    id: response.id,
    campaignName: payload.campaignName,
    product: payload.product,
    productLabel: payload.product.replace("-", " "),
    quantity: payload.quantity,
    target: payload.target,
    scheduledDate: payload.scheduledDate,
    total: estimate.total,
    status: response.status || "submitted",
    createdAt: new Date().toISOString(),
  });
  saveDirectMailOrders();
  mailerOrderForm.reset();
  mailerScheduleDate.value = tomorrowIso;
  renderDirectMailPage();
}

function openDirectMailSettings() {
  const mode = prompt("Integration mode: type demo or live", directMailConfig.mode);
  if (!mode) return;
  directMailConfig.mode = mode.trim().toLowerCase() === "live" ? "live" : "demo";
  if (directMailConfig.mode === "live") {
    directMailConfig.apiBaseUrl = prompt("Backend proxy URL for Direct Mail API", directMailConfig.apiBaseUrl || "https://your-domain.com/api/direct-mail") || "";
    directMailConfig.apiKey = prompt("Server-side API key reference or temporary sandbox key", directMailConfig.apiKey || "") || "";
  }
  saveDirectMailConfig();
  renderDirectMailPage();
}

function createEmptyWalkthrough() {
  return {
    id: createId(),
    propertyName: "",
    address: "",
    overviewNotes: "",
    systems: [
      { id: createId(), label: "Roof", age: "", updatedDate: "", verification: "unverified", notes: "" },
      { id: createId(), label: "HVAC", age: "", updatedDate: "", verification: "unverified", notes: "" },
      { id: createId(), label: "Water heater", age: "", updatedDate: "", verification: "unverified", notes: "" },
      { id: createId(), label: "Electrical", age: "", updatedDate: "", verification: "unverified", notes: "" },
    ],
    rooms: [],
    presentation: {
      notes: "",
      prospectiveListDate: "",
      contractsSigned: false,
      draftAndSendContracts: false,
      followUpVia: {
        phone: false,
        email: false,
        text: false,
      },
      followUpDate: "",
    },
    completedVerifications: {},
    updatedAt: new Date().toISOString(),
  };
}

function saveListingWalkthrough() {
  listingWalkthrough.propertyName = listingPropertyName.value.trim();
  listingWalkthrough.address = listingAddress.value.trim();
  listingWalkthrough.overviewNotes = listingOverviewNotes.value.trim();
  listingWalkthrough.agentEmail = listingWalkthrough.agentEmail || agent?.email || "";
  listingWalkthrough.agentName = listingWalkthrough.agentName || agent?.name || "";
  listingWalkthrough.presentation = {
    notes: listingPresentationNotes.value.trim(),
    prospectiveListDate: prospectiveListDate.value,
    contractsSigned: contractsSigned.checked,
    draftAndSendContracts: draftAndSendContracts.checked,
    followUpVia: {
      phone: followUpPhone.checked,
      email: followUpEmail.checked,
      text: followUpText.checked,
    },
    followUpDate: followUpDate.value,
  };
  listingWalkthrough.updatedAt = new Date().toISOString();
  localStorage.setItem("agentHub.listingIntelligence", JSON.stringify(listingWalkthrough));
  upsertSavedListingWalkthrough(listingWalkthrough);
  saveListingExports("autosave");
  walkthroughSaveStatus.textContent = "Saved locally";
}

function upsertSavedListingWalkthrough(walkthrough) {
  const snapshot = JSON.parse(JSON.stringify(walkthrough));
  snapshot.agentEmail = snapshot.agentEmail || agent?.email || "";
  snapshot.agentName = snapshot.agentName || agent?.name || "";
  const existingIndex = savedListingWalkthroughs.findIndex((item) => item.id === snapshot.id);
  if (existingIndex >= 0) {
    savedListingWalkthroughs[existingIndex] = snapshot;
  } else {
    savedListingWalkthroughs.unshift(snapshot);
  }
  localStorage.setItem("agentHub.listingWalkthroughs", JSON.stringify(savedListingWalkthroughs));
}

function renderSystemsTracker() {
  systemsTracker.innerHTML = "";
  deleteSelectedSystems.classList.toggle("is-hidden", !systemEditMode);
  toggleSystemEdit.textContent = systemEditMode ? "Done" : "Edit";
  listingWalkthrough.systems.forEach((system) => {
    const row = document.createElement("article");
    row.className = `system-row ${systemEditMode ? "editing" : ""}`;
    row.dataset.systemId = system.id;
    row.innerHTML = `
      ${systemEditMode ? `<input class="system-delete-check" type="checkbox" aria-label="Select ${system.label} for deletion" />` : ""}
      <input class="system-label" type="text" value="${system.label}" aria-label="System name" />
      <input class="system-age" type="text" value="${system.age}" placeholder="Age or seller note" aria-label="System age" />
      <input class="system-date" type="date" value="${system.updatedDate}" aria-label="Updated date" />
      <select class="system-verification" aria-label="Verification status">
        <option value="unverified"${system.verification === "unverified" ? " selected" : ""}>Unverified</option>
        <option value="seller-confirmed"${system.verification === "seller-confirmed" ? " selected" : ""}>Seller confirmed</option>
        <option value="documented"${system.verification === "documented" ? " selected" : ""}>Documented</option>
        <option value="verified"${system.verification === "verified" ? " selected" : ""}>Verified</option>
      </select>
      <input class="system-notes" type="text" value="${system.notes}" placeholder="Source or notes" aria-label="System notes" />
    `;
    systemsTracker.append(row);
  });
}

function renderVerificationChecklist() {
  const items = ListingIntelligenceCore.buildVerificationChecklist(listingWalkthrough);
  verificationChecklist.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No outstanding verification items.";
    verificationChecklist.append(empty);
    return;
  }
  items.forEach((item) => {
    const row = document.createElement("label");
    row.className = "verification-item";
    row.dataset.verificationId = item.id;
    row.innerHTML = `
      <input type="checkbox"${listingWalkthrough.completedVerifications?.[item.id] ? " checked" : ""} />
      <span>${item.label}</span>
      <small>${item.source}</small>
    `;
    verificationChecklist.append(row);
  });
}

function renderRoomCards() {
  roomCards.innerHTML = "";
  deleteSelectedRooms.classList.toggle("is-hidden", !roomEditMode);
  toggleRoomEdit.textContent = roomEditMode ? "Done" : "Edit";
  if (!listingWalkthrough.rooms.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No rooms yet. Add a room with photos to start AI-assisted feature review.";
    roomCards.append(empty);
    return;
  }

  listingWalkthrough.rooms.forEach((room) => {
    const card = document.createElement("article");
    card.className = `listing-room-card ${room.collapsed ? "collapsed" : ""} ${roomEditMode ? "editing" : ""}`;
    card.dataset.roomId = room.id;
    const photos = room.photos
      .map((photo) => {
        const suggestions = (photo.suggestions || [])
          .map((suggestion) => `
            <div class="ai-suggestion ${suggestion.status}" data-photo-id="${photo.id}" data-suggestion-id="${suggestion.id}">
              <textarea aria-label="Suggested feature">${suggestion.finalText || suggestion.text}</textarea>
              <div class="suggestion-meta">
                <span>${suggestion.category}</span>
                <span>${Math.round((suggestion.confidence || 0) * 100)}%</span>
                ${suggestion.needsVerification ? "<span>Verify</span>" : ""}
              </div>
              <div class="suggestion-actions">
                <button type="button" data-suggestion-action="approve">Approve</button>
                <button type="button" data-suggestion-action="reject">Reject</button>
                <button type="button" data-suggestion-action="pending">Reset</button>
              </div>
            </div>
          `)
          .join("");
        const state = photo.status === "analyzing" ? "<p class=\"ai-loading\">Analyzing image...</p>" : photo.error ? `<p class="listing-error">${photo.error}</p>` : "";
        return `
          <div class="room-photo-card" data-photo-id="${photo.id}">
            <img src="${photo.data}" alt="${photo.name}" />
            <div>
              <strong>${photo.name}</strong>
              ${state}
              <div class="ai-suggestion-list">${suggestions || "<p class=\"muted\">No suggestions yet.</p>"}</div>
            </div>
          </div>
        `;
      })
      .join("");
    card.innerHTML = `
      <div class="room-card-header">
        ${roomEditMode ? `<input class="room-delete-check" type="checkbox" aria-label="Select ${room.name} for deletion" />` : ""}
        <button class="room-collapse-toggle" type="button" aria-label="${room.collapsed ? "Expand" : "Minimize"} ${room.name}">${room.collapsed ? "+" : "-"}</button>
        <input class="room-title-input" type="text" value="${room.name}" aria-label="Room name" />
        <div class="room-card-actions">
          <button class="secondary-btn small analyze-room" type="button">Analyze photos</button>
        </div>
      </div>
      <div class="room-card-body">
        <input class="room-notes-input" type="text" value="${room.notes || ""}" placeholder="Room notes or seller context" aria-label="Room notes" />
        <label class="room-photo-upload">
          <span>Add room photos</span>
          <input class="room-photo-input" type="file" accept="image/*" multiple />
        </label>
        <div class="room-photo-grid">${photos || "<div class=\"empty-state\">No photos attached to this room.</div>"}</div>
      </div>
    `;
    roomCards.append(card);
  });
}

function renderListingIntelligence() {
  listingPropertyName.value = listingWalkthrough.propertyName || "";
  listingAddress.value = listingWalkthrough.address || "";
  listingOverviewNotes.value = listingWalkthrough.overviewNotes || "";
  const presentation = listingWalkthrough.presentation || {};
  listingPresentationNotes.value = presentation.notes || "";
  prospectiveListDate.value = presentation.prospectiveListDate || "";
  contractsSigned.checked = Boolean(presentation.contractsSigned);
  draftAndSendContracts.checked = Boolean(presentation.draftAndSendContracts);
  followUpPhone.checked = Boolean(presentation.followUpVia?.phone);
  followUpEmail.checked = Boolean(presentation.followUpVia?.email);
  followUpText.checked = Boolean(presentation.followUpVia?.text);
  followUpDate.value = presentation.followUpDate || "";
  renderSystemsTracker();
  renderRoomCards();
  renderVerificationChecklist();
}

function updateSystemFromRow(row) {
  const system = listingWalkthrough.systems.find((item) => item.id === row.dataset.systemId);
  if (!system) return;
  system.label = row.querySelector(".system-label").value.trim();
  system.age = row.querySelector(".system-age").value.trim();
  system.updatedDate = row.querySelector(".system-date").value;
  system.verification = row.querySelector(".system-verification").value;
  system.notes = row.querySelector(".system-notes").value.trim();
  saveListingWalkthrough();
  renderVerificationChecklist();
}

async function addRoomFromForm(event) {
  event.preventDefault();
  listingErrorState.classList.add("is-hidden");
  const files = [...roomPhotoUpload.files];
  if (!roomName.value.trim()) {
    listingErrorState.textContent = "Add a room name before saving the room.";
    listingErrorState.classList.remove("is-hidden");
    return;
  }
  const photos = await Promise.all(
    files.map(async (file) => ({
      id: createId(),
      name: file.name,
      data: await fileToDataUrl(file),
      status: "ready",
      aiOutput: null,
      suggestions: [],
    })),
  );
  listingWalkthrough.rooms.push({
    id: createId(),
    name: roomName.value.trim(),
    notes: roomNotes.value.trim(),
    photos,
  });
  roomForm.reset();
  saveListingWalkthrough();
  renderListingIntelligence();
}

async function addPhotosToRoom(roomId, files) {
  const room = listingWalkthrough.rooms.find((item) => item.id === roomId);
  if (!room || !files.length) return;
  const photos = await Promise.all(
    files.map(async (file) => ({
      id: createId(),
      name: file.name,
      data: await fileToDataUrl(file),
      status: "ready",
      aiOutput: null,
      suggestions: [],
    })),
  );
  room.photos = [...(room.photos || []), ...photos];
  room.collapsed = false;
  saveListingWalkthrough();
  renderListingIntelligence();
}

function analyzeRoomPhotos(roomId) {
  const room = listingWalkthrough.rooms.find((item) => item.id === roomId);
  if (!room || !room.photos.length) {
    listingErrorState.textContent = "Add at least one room photo before running image analysis.";
    listingErrorState.classList.remove("is-hidden");
    return;
  }
  listingErrorState.classList.add("is-hidden");
  room.photos.forEach((photo) => {
    photo.status = "analyzing";
  });
  saveListingWalkthrough();
  renderRoomCards();
  setTimeout(() => {
    room.photos.forEach((photo) => {
      const aiOutput = ListingIntelligenceCore.analyzeRoomImage({ roomName: room.name, fileName: photo.name });
      photo.aiOutput = aiOutput;
      photo.suggestions = aiOutput.suggestions;
      photo.status = "analyzed";
      photo.error = "";
    });
    saveListingWalkthrough();
    renderListingIntelligence();
  }, 700);
}

function updateSuggestion(card, action) {
  const room = listingWalkthrough.rooms.find((item) => item.id === card.closest(".listing-room-card").dataset.roomId);
  const photo = room?.photos.find((item) => item.id === card.dataset.photoId);
  const suggestion = photo?.suggestions.find((item) => item.id === card.dataset.suggestionId);
  if (!suggestion) return;
  suggestion.finalText = ListingIntelligenceCore.enforceVisualUncertainty(card.querySelector("textarea").value);
  suggestion.status = action;
  saveListingWalkthrough();
  renderListingIntelligence();
}

function generateListingCopy(format) {
  saveListingWalkthrough();
  generatedListingCopy.value = ListingIntelligenceCore.generateListingCopy(listingWalkthrough, format);
}

function getListingCsv(walkthrough) {
  const rows = [
    ["Section", "Name", "Value", "Status"],
    ["Overview", "Property", walkthrough.propertyName || "", ""],
    ["Overview", "Address", walkthrough.address || "", ""],
    ["Overview", "Notes", walkthrough.overviewNotes || "", ""],
    ["Presentation", "Notes", walkthrough.presentation?.notes || "", ""],
    ["Presentation", "Prospective list date", walkthrough.presentation?.prospectiveListDate || "", ""],
    ["Presentation", "Contracts signed", walkthrough.presentation?.contractsSigned ? "Yes" : "No", ""],
    ["Presentation", "Draft and send contracts", walkthrough.presentation?.draftAndSendContracts ? "Yes" : "No", ""],
    ["Presentation", "Follow up via", Object.entries(walkthrough.presentation?.followUpVia || {}).filter(([, enabled]) => enabled).map(([type]) => type).join(", "), ""],
    ["Presentation", "Follow-up date", walkthrough.presentation?.followUpDate || "", ""],
    ...walkthrough.systems.map((system) => ["System", system.label, `${system.age || ""} ${system.updatedDate || ""} ${system.notes || ""}`.trim(), system.verification]),
    ...ListingIntelligenceCore.getApprovedFeatures(walkthrough).map((feature) => ["Approved feature", feature.roomName, feature.text, feature.needsVerification ? "Needs verification" : "Approved"]),
  ];
  return rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
}

function getListingPrintHtml(walkthrough) {
  const checklist = ListingIntelligenceCore.buildVerificationChecklist(walkthrough).map((item) => `<li>${item.label}</li>`).join("");
  const features = ListingIntelligenceCore.getApprovedFeatures(walkthrough).map((feature) => `<li>${feature.roomName}: ${feature.text}</li>`).join("");
  return `
    <h1>${walkthrough.propertyName || "Listing Walkthrough"}</h1>
    <p>${walkthrough.address || ""}</p>
    <h2>Overview</h2>
    <p>${walkthrough.overviewNotes || ""}</p>
    <h2>Approved Features</h2>
    <ul>${features || "<li>No approved features yet.</li>"}</ul>
    <h2>Verification Checklist</h2>
    <ul>${checklist || "<li>No outstanding verification items.</li>"}</ul>
    <h2>Presentation Notes</h2>
    <p>${walkthrough.presentation?.notes || ""}</p>
    <p>Prospective list date: ${walkthrough.presentation?.prospectiveListDate || "Not set"}</p>
    <p>Follow-up date: ${walkthrough.presentation?.followUpDate || "Not set"}</p>
  `;
}

function saveListingExports(reason = "manual") {
  const csv = getListingCsv(listingWalkthrough);
  const printHtml = getListingPrintHtml(listingWalkthrough);
  const exportRecord = {
    id: createId(),
    walkthroughId: listingWalkthrough.id,
    propertyName: listingWalkthrough.propertyName || "Untitled walkthrough",
    reason,
    csv,
    pdfSourceHtml: printHtml,
    driveStatus: "Queued for Google Drive sync",
    createdAt: new Date().toISOString(),
  };
  listingDriveExports = [exportRecord, ...listingDriveExports.filter((item) => item.walkthroughId !== listingWalkthrough.id)].slice(0, 12);
  localStorage.setItem("agentHub.listingDriveExports", JSON.stringify(listingDriveExports));
  return exportRecord;
}

function renderPreviousWalkthroughs() {
  previousWalkthroughList.innerHTML = "";
  if (!savedListingWalkthroughs.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No saved walkthroughs yet.";
    previousWalkthroughList.append(empty);
    return;
  }
  savedListingWalkthroughs.forEach((walkthrough) => {
    const item = document.createElement("article");
    item.className = "previous-walkthrough-item";
    item.dataset.walkthroughId = walkthrough.id;
    item.innerHTML = `
      <div>
        <strong>${walkthrough.propertyName || "Untitled walkthrough"}</strong>
        <p>${walkthrough.address || "No address"} · Saved ${new Date(walkthrough.updatedAt).toLocaleString("en-US")}</p>
      </div>
      <button class="secondary-btn small" type="button" data-walkthrough-action="open">Open</button>
      <button class="secondary-btn small" type="button" data-walkthrough-action="delete">Delete</button>
    `;
    previousWalkthroughList.append(item);
  });
}

function loadSavedWalkthrough(walkthroughId) {
  const saved = savedListingWalkthroughs.find((item) => item.id === walkthroughId);
  if (!saved) return;
  listingWalkthrough = JSON.parse(JSON.stringify(saved));
  localStorage.setItem("agentHub.listingIntelligence", JSON.stringify(listingWalkthrough));
  generatedListingCopy.value = "";
  previousWalkthroughDialog.close();
  renderListingIntelligence();
}

function deleteSavedWalkthrough(walkthroughId) {
  savedListingWalkthroughs = savedListingWalkthroughs.filter((item) => item.id !== walkthroughId);
  localStorage.setItem("agentHub.listingWalkthroughs", JSON.stringify(savedListingWalkthroughs));
  if (listingWalkthrough.id === walkthroughId) {
    listingWalkthrough = createEmptyWalkthrough();
    localStorage.setItem("agentHub.listingIntelligence", JSON.stringify(listingWalkthrough));
    renderListingIntelligence();
  }
  renderPreviousWalkthroughs();
}

function printListingWalkthrough() {
  saveListingWalkthrough();
  const printWindow = window.open("", "_blank", "noopener,noreferrer");
  if (!printWindow) {
    window.print();
    return;
  }
  printWindow.document.write(`<html><head><title>${listingWalkthrough.propertyName || "Listing Walkthrough"}</title></head><body>${getListingPrintHtml(listingWalkthrough)}</body></html>`);
  printWindow.document.close();
  printWindow.print();
}

function saveListingWalkthroughExport() {
  saveListingWalkthrough();
  const record = saveListingExports("submit");
  listingExportStatus.textContent = `Saved ${record.propertyName}. CSV and PDF-ready print file are queued for Google Drive sync.`;
}

function addListingTask({ title, dueDate, notes, addToCalendar = false }) {
  const task = {
    id: createId(),
    title,
    dueDate: dueDate || todayIso,
    urgency: "high",
    notes,
    addToCalendar,
    category: "Listings",
    done: false,
  };
  tasks = [...tasks, task];
  syncTaskToCalendar(task);
  saveTasks();
  return task;
}

function addListingCalendarEvent({ title, date, notes }) {
  if (!date) return null;
  const event = {
    id: `listing-${createId()}`,
    title,
    date,
    time: "09:00",
    notes,
    type: "follow-up",
  };
  appointments = [...appointments, event];
  saveAppointments();
  return event;
}

function getFollowUpMethods() {
  return Object.entries(listingWalkthrough.presentation?.followUpVia || {})
    .filter(([, enabled]) => enabled)
    .map(([method]) => method);
}

function submitListingWorkflow() {
  saveListingWalkthrough();
  const record = saveListingExports("submit");
  const property = listingWalkthrough.propertyName || listingWalkthrough.address || "Listing walkthrough";
  const pdfNote = `PDF-ready print packet saved for ${property}. Use Print to PDF from the submit panel to attach the generated PDF.`;
  const emailSubject = encodeURIComponent(`${property} Listing Intelligence Walkthrough`);
  const emailBody = encodeURIComponent(`${pdfNote}\n\nAgent: ${agent?.name || ""}\nProperty: ${property}\n\nA CSV/PDF-ready export has been saved in the hub and queued for Google Drive sync.`);
  const emailUrl = `mailto:${agent?.email || ""},info@llhomesteam.com?subject=${emailSubject}&body=${emailBody}`;

  if (listingWalkthrough.presentation?.draftAndSendContracts) {
    addListingTask({
      title: `Draft and send listing contracts: ${property}`,
      dueDate: listingWalkthrough.presentation.followUpDate || todayIso,
      notes: "Created from Listing Intelligence Step 4.",
      addToCalendar: false,
    });
  }

  const followUpMethods = getFollowUpMethods();
  if (followUpMethods.length && listingWalkthrough.presentation?.followUpDate) {
    const methodText = followUpMethods.join(", ");
    addListingTask({
      title: `Listing follow-up via ${methodText}: ${property}`,
      dueDate: listingWalkthrough.presentation.followUpDate,
      notes: `Follow up via ${methodText}. Created from Listing Intelligence Step 4.`,
      addToCalendar: true,
    });
    addListingCalendarEvent({
      title: `Listing follow-up: ${property}`,
      date: listingWalkthrough.presentation.followUpDate,
      notes: `Follow up via ${methodText}.`,
    });
  }

  renderTasks();
  renderCalendar();
  listingExportStatus.textContent = `Saved ${record.propertyName}. Email draft opened, listing tasks/calendar follow-ups created when selected, and exports queued for Google Drive sync.`;
  window.location.href = emailUrl;
}

function renderTraining() {
  trainingCategoryGrid.innerHTML = "";
  trainingLessonGrid.innerHTML = "";

  trainingVault.forEach((category) => {
    const tile = document.createElement("button");
    tile.className = `training-category ${category.id === selectedTrainingCategory ? "active" : ""}`;
    tile.type = "button";
    tile.innerHTML = `
      ${category.coverImage ? `<img src="${category.coverImage}" alt="" />` : ""}
      <span>${category.title}</span>
      <small>${category.summary}</small>
    `;
    tile.addEventListener("click", () => {
      selectedTrainingCategory = category.id;
      renderTraining();
    });
    trainingCategoryGrid.append(tile);
  });

  const category = trainingVault.find((item) => item.id === selectedTrainingCategory) || trainingVault[0];
  trainingLessonsTitle.textContent = category.title;
  const visibleLessons = category.lessons
    .map((rawLesson, lessonIndex) => ({ lesson: normalizeLesson(rawLesson, selectedTrainingCategory, lessonIndex), lessonIndex }))
    .filter(({ lesson }) => canViewAudience(lesson));

  if (!visibleLessons.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No lessons are available for this account type yet.";
    trainingLessonGrid.append(empty);
    return;
  }

  visibleLessons.forEach(({ lesson, lessonIndex }) => {
    const visibleChapters = agent?.role === "admin" ? lesson.chapters : lesson.chapters.filter((chapter) => chapter.live !== false);
    const totalChapters = visibleChapters.length || 1;
    const completedChapters = visibleChapters.filter((chapter) => trainingProgress[chapter.id]).length;
    const progress = Math.round((completedChapters / totalChapters) * 100);
    const card = document.createElement("article");
    card.className = "training-lesson";
    card.innerHTML = `
      <span class="lesson-type">Lesson pack</span>
      <h3>${lesson.title}</h3>
      <p>${lesson.detail}</p>
      <div class="lesson-progress" aria-label="${progress}% complete">
        <span style="width: ${progress}%"></span>
      </div>
      <small class="lesson-file">${completedChapters} of ${totalChapters} chapters complete</small>
      <div class="chapter-list"></div>
      ${agent?.role === "admin" ? `<button class="secondary-btn edit-lesson-pack" type="button">Edit pack</button>` : ""}
    `;
    const chapterList = card.querySelector(".chapter-list");
    visibleChapters.forEach((chapter) => {
      const chapterUrl = chapter.link || chapter.fileData || "";
      const row = document.createElement("div");
      row.className = `chapter-row ${chapter.live === false ? "chapter-offline" : ""}`;
      row.innerHTML = `
        <label>
          <input type="checkbox" ${trainingProgress[chapter.id] ? "checked" : ""} />
          <span>${chapter.title}</span>
        </label>
        <small>${chapter.type}</small>
        ${chapter.live === false ? `<small class="lesson-file">Not live</small>` : ""}
        ${chapter.description ? `<p>${chapter.description}</p>` : ""}
        ${chapter.fileName ? `<small class="lesson-file">${chapter.fileName}</small>` : ""}
        ${chapterUrl ? `<a href="${chapterUrl}" target="_blank" rel="noreferrer">Open</a>` : ""}
      `;
      row.querySelector("input").addEventListener("change", (event) => {
        trainingProgress[chapter.id] = event.target.checked;
        writeStorageJson("agentHub.trainingProgress", trainingProgress);
        renderTraining();
      });
      chapterList.append(row);
    });
    card.querySelector(".edit-lesson-pack")?.addEventListener("click", () => {
      openTrainingEditor(selectedTrainingCategory, lessonIndex);
    });
    trainingLessonGrid.append(card);
  });
}

function normalizeLesson(lesson, categoryId, lessonIndex) {
  if (lesson.chapters?.length) return { ...lesson, audience: normalizeAudience(lesson.audience) };
  const chapterId = `${categoryId}-${lessonIndex}-${lesson.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return {
    ...lesson,
    audience: normalizeAudience(lesson.audience),
    chapters: [
      {
        id: chapterId,
        title: lesson.title,
        type: lesson.type || "Lesson",
        description: lesson.detail || "",
        link: lesson.link || "",
        fileName: lesson.fileName || "",
        fileData: lesson.fileData || "",
        live: true,
      },
    ],
  };
}

function saveTrainingVault() {
  writeStorageJson("agentHub.trainingVault", trainingVault);
}

function populateTrackSelect() {
  trackSelect.innerHTML = "";
  trainingVault.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.title;
    trackSelect.append(option);
  });
}

function loadTrackIntoForm(trackId) {
  const category = trainingVault.find((item) => item.id === trackId);
  editingTrackId = trackId;
  clearExistingTrackCover = false;
  trackDialogTitle.textContent = "Edit track";
  trackSelect.value = trackId;
  trackTitle.value = category?.title || "";
  trackSummary.value = category?.summary || "";
}

function setNewTrackMode() {
  editingTrackId = null;
  clearExistingTrackCover = false;
  trackDialogTitle.textContent = "Add track";
  trackForm.reset();
  trackSelect.value = "";
}

function saveTrack(track) {
  const existingIndex = trainingVault.findIndex((category) => category.id === track.id);
  if (existingIndex >= 0) {
    trainingVault[existingIndex] = {
      ...trainingVault[existingIndex],
      ...track,
    };
  } else {
    trainingVault = [...trainingVault, { ...track, lessons: [] }];
  }
  saveTrainingVault();
  selectedTrainingCategory = track.id;
  renderTraining();
}

function addTrainingLesson(lesson) {
  trainingVault = trainingVault.map((category) => {
    if (category.id !== lesson.categoryId) return category;
    return {
      ...category,
      lessons: [...category.lessons, lesson],
    };
  });
  saveTrainingVault();
  selectedTrainingCategory = lesson.categoryId;
  renderTraining();
}

function replaceTrainingLesson(categoryId, lessonIndex, lesson) {
  trainingVault = trainingVault.map((category) => {
    if (category.id !== categoryId) return category;
    const lessons = [...category.lessons];
    lessons[lessonIndex] = lesson;
    return {
      ...category,
      lessons,
    };
  });
  saveTrainingVault();
  selectedTrainingCategory = categoryId;
  renderTraining();
}

function resetTrainingUploadDialog() {
  editingTrainingPack = null;
  trainingUploadTitle.textContent = "Upload training content";
  saveTrainingUpload.textContent = "Add to vault";
  trainingUploadForm.reset();
  trainingCategory.disabled = false;
  trainingCategory.value = selectedTrainingCategory;
  writeAudienceControls(null, trainingAudienceTeam, trainingAudienceMentee);
  trainingChapterEditor.innerHTML = "";
  addChapterEditorRow();
}

function openTrainingEditor(categoryId, lessonIndex) {
  const category = trainingVault.find((item) => item.id === categoryId);
  const lesson = normalizeLesson(category.lessons[lessonIndex], categoryId, lessonIndex);

  editingTrainingPack = { categoryId, lessonIndex, originalLesson: lesson };
  trainingUploadTitle.textContent = "Edit lesson pack";
  saveTrainingUpload.textContent = "Save pack";
  trainingUploadForm.reset();
  trainingCategory.value = categoryId;
  trainingCategory.disabled = true;
  trainingTitle.value = lesson.title;
  trainingDetail.value = lesson.detail;
  writeAudienceControls(lesson.audience, trainingAudienceTeam, trainingAudienceMentee);
  trainingChapterEditor.innerHTML = "";
  lesson.chapters.forEach((chapter) => addChapterEditorRow(chapter));
  trainingUploadDialog.showModal();
}

function updateChapterUploadFields(row) {
  const type = row.querySelector(".chapter-type").value;
  const linkInput = row.querySelector(".chapter-link");
  const fileInput = row.querySelector(".chapter-file");
  const fileLabel = row.querySelector(".chapter-file-label");
  const isVideo = type === "Video";
  linkInput.placeholder = isVideo ? "https://video-link.com" : "https://document-or-resource-link.com";
  fileInput.accept = isVideo ? "video/*" : ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,image/*";
  fileLabel.textContent = isVideo ? "Video upload" : "File upload";
}

function addChapterEditorRow(chapter = {}) {
  const row = document.createElement("section");
  row.className = "chapter-editor-card";
  row.dataset.chapterId = chapter.id || createId();
  row.dataset.fileName = chapter.fileName || "";
  row.dataset.fileData = chapter.fileData || "";
  row.innerHTML = `
    <div class="chapter-editor-top">
      <strong>Chapter</strong>
      <button class="secondary-btn remove-chapter" type="button">- Delete chapter</button>
    </div>
    <label>Chapter title</label>
    <input class="chapter-title" type="text" value="${chapter.title || ""}" placeholder="Chapter title" required />
    <label>Chapter description</label>
    <textarea class="chapter-description dialog-textarea" placeholder="What this section covers">${chapter.description || ""}</textarea>
    <label>Content type</label>
    <select class="chapter-type">
      ${["Video", "Checklist", "Script pack", "Document", "Lesson"].map((type) => `<option ${type === (chapter.type || "Video") ? "selected" : ""}>${type}</option>`).join("")}
    </select>
    <label>Content link</label>
    <input class="chapter-link" type="url" value="${chapter.link || ""}" />
    <label class="chapter-file-label">File upload</label>
    <input class="chapter-file" type="file" />
    <button class="secondary-btn clear-chapter-file clear-upload" type="button">Clear upload</button>
    ${chapter.fileName ? `<small class="lesson-file">Current file: ${chapter.fileName}</small>` : ""}
    <label class="switch-row">
      <span>Make chapter live</span>
      <input class="chapter-live" type="checkbox" ${chapter.live === false ? "" : "checked"} />
    </label>
  `;
  row.querySelector(".chapter-type").addEventListener("change", () => updateChapterUploadFields(row));
  row.querySelector(".clear-chapter-file").addEventListener("click", () => {
    row.querySelector(".chapter-file").value = "";
    row.dataset.fileName = "";
    row.dataset.fileData = "";
    row.querySelector(".lesson-file")?.remove();
  });
  row.querySelector(".remove-chapter").addEventListener("click", () => {
    if (trainingChapterEditor.children.length > 1) {
      row.remove();
    }
  });
  trainingChapterEditor.append(row);
  updateChapterUploadFields(row);
}

function fileToDataUrl(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.readAsDataURL(file);
  });
}

async function collectChapterEditorRows(lessonId) {
  const rows = [...trainingChapterEditor.querySelectorAll(".chapter-editor-card")];
  return Promise.all(
    rows.map(async (row, index) => {
      const file = row.querySelector(".chapter-file").files[0];
      const fileData = file ? await fileToDataUrl(file) : row.dataset.fileData;
      return {
        id: row.dataset.chapterId || `${lessonId}-chapter-${index + 1}`,
        title: row.querySelector(".chapter-title").value.trim(),
        description: row.querySelector(".chapter-description").value.trim(),
        type: row.querySelector(".chapter-type").value,
        link: row.querySelector(".chapter-link").value.trim(),
        fileName: file?.name || row.dataset.fileName || "",
        fileData,
        live: row.querySelector(".chapter-live").checked,
      };
    }),
  );
}

async function completeLogin(email, options = {}) {
  const name = email
    .split("@")[0]
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ") || "Alex Lane";

  const normalizedEmail = email.toLowerCase();
  if (backendAvailable && !options.skipBackend) {
    try {
      const payload = await apiRequest("/api/auth/google-demo", {
        method: "POST",
        body: JSON.stringify({ email: normalizedEmail }),
      });
      hydrateBackendState(payload.state);
      setAgent(payload.user);
      showApp();
      return;
    } catch (error) {
      alert(error.message);
    }
  }
  const isAdmin = adminEmails.includes(normalizedEmail);
  const existingUser = appUsers.find((user) => user.email.toLowerCase() === normalizedEmail);
  setAgent({
    name: isAdmin ? "Reza Lashkari" : existingUser?.name || name,
    email: normalizedEmail,
    role: isAdmin ? "admin" : "agent",
    memberType: isAdmin ? "team" : normalizeMemberType(existingUser?.memberType),
  });
  showApp();
}

async function loginWithCredentials(email, password) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const normalizedPassword = String(password || "").trim();
  if (!normalizedEmail) return false;
  if (backendAvailable) {
    try {
      const payload = await apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: normalizedEmail, password: normalizedPassword }),
      });
      hydrateBackendState(payload.state);
      setAgent(payload.user);
      showApp();
      return true;
    } catch (error) {
      alert(error.message);
      return false;
    }
  }
  if (adminEmails.includes(normalizedEmail) && normalizedPassword !== "admin123") {
    alert("Admin password is admin123 in this prototype.");
    return false;
  }
  completeLogin(normalizedEmail);
  return true;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  loginWithCredentials(formData.get("email"), formData.get("password"));
});

googleLogin.addEventListener("click", () => {
  completeLogin("alex.lane@example.com");
});

dashboardModeToggle.addEventListener("change", updateDashboardMode);

document.querySelectorAll(".user-stat-card").forEach((card) => {
  card.addEventListener("click", () => {
    userOverviewFilter = card.dataset.userFilter;
    renderUserOverviewList();
  });
});

toggleUserList.addEventListener("click", () => {
  const collapsed = adminUserPanel.classList.toggle("collapsed");
  toggleUserList.textContent = collapsed ? "Expand" : "Minimize";
  toggleUserList.setAttribute("aria-expanded", String(!collapsed));
});

toggleAnnouncementManager.addEventListener("click", () => {
  const collapsed = adminAnnouncementPanel.classList.toggle("collapsed");
  toggleAnnouncementManager.textContent = collapsed ? "Expand" : "Minimize";
  toggleAnnouncementManager.setAttribute("aria-expanded", String(!collapsed));
});

openAnnouncementEditor.addEventListener("click", () => openAnnouncementDialog());

activeAnnouncementTab.addEventListener("click", () => {
  announcementAdminTab = "active";
  renderAnnouncementAdminList();
});

clearAnnouncementFile.addEventListener("click", () => {
  announcementFile.value = "";
  clearExistingAnnouncementFile = true;
});

previousAnnouncement.addEventListener("click", () => {
  const activeWidgets = getActiveWidgetAnnouncements();
  if (activeWidgets.length < 2) return;
  announcementCarouselIndex = (announcementCarouselIndex - 1 + activeWidgets.length) % activeWidgets.length;
  renderActiveAnnouncementWidget();
});

nextAnnouncement.addEventListener("click", () => {
  const activeWidgets = getActiveWidgetAnnouncements();
  if (activeWidgets.length < 2) return;
  announcementCarouselIndex = (announcementCarouselIndex + 1) % activeWidgets.length;
  renderActiveAnnouncementWidget();
});

addWin.addEventListener("click", () => openWinLossDialog("win"));
addLoss.addEventListener("click", () => openWinLossDialog("loss"));
toggleWinLossPanel.addEventListener("click", () => {
  winLossCollapsed = !winLossCollapsed;
  renderWinLossPanelState();
});
generateWinLossReport.addEventListener("click", () => {
  winLossReportForm.reset();
  winLossReportRange.value = "1w";
  customReportMonths.value = "1";
  updateWinLossReportControls();
  winLossReportDialog.showModal();
});
closeWinLossModal.addEventListener("click", () => winLossDialog.close());
cancelWinLoss.addEventListener("click", () => winLossDialog.close());
winLossForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = {
    id: createId(),
    type: winLossType.value === "loss" ? "loss" : "win",
    title: winLossTitleInput.value.trim(),
    message: winLossMessage.value.trim(),
    agentName: agent?.name || "Team",
    agentEmail: agent?.email || "",
    createdAt: new Date().toISOString(),
  };
  winLossItems = [item, ...winLossItems];
  saveWinLossItems();
  renderWinLossFeed();
  winLossDialog.close();
});
closeWinLossReportModal.addEventListener("click", () => winLossReportDialog.close());
cancelWinLossReport.addEventListener("click", () => winLossReportDialog.close());
winLossReportRange.addEventListener("change", updateWinLossReportControls);
customReportMonths.addEventListener("input", updateWinLossReportControls);
winLossReportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  downloadWinLossReportPdf();
  winLossReportDialog.close();
});

archiveAnnouncementTab.addEventListener("click", () => {
  announcementAdminTab = "archived";
  renderAnnouncementAdminList();
});

closeAnnouncementModal.addEventListener("click", () => {
  editingAnnouncementId = null;
  announcementDialog.close();
});

cancelAnnouncement.addEventListener("click", () => {
  editingAnnouncementId = null;
  announcementDialog.close();
});

closeAnnouncementPopup.addEventListener("click", () => announcementPopupDialog.close());
dismissAnnouncementPopup.addEventListener("click", () => announcementPopupDialog.close());

announcementForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = announcementFile.files[0];
  const existing = announcements.find((announcement) => announcement.id === editingAnnouncementId);
  const fileData = file ? await fileToDataUrl(file) : clearExistingAnnouncementFile ? "" : existing?.fileData || "";
  const fileName = file?.name || (clearExistingAnnouncementFile ? "" : existing?.fileName || "");
  const announcement = {
    id: editingAnnouncementId || createId(),
    title: announcementTitleInput.value.trim(),
    message: announcementMessage.value.trim(),
    placement: announcementPlacement.value,
    emailAgents: announcementEmailAgents.checked,
    runDate: announcementRunDate.value,
    link: announcementLink.value.trim(),
    fileName,
    fileData,
    status: announcementRunDate.value < todayIso ? "archived" : "active",
  };

  if (editingAnnouncementId) {
    announcements = announcements.map((candidate) => (candidate.id === editingAnnouncementId ? announcement : candidate));
  } else {
    announcements = [...announcements, announcement];
  }

  editingAnnouncementId = null;
  saveAnnouncements();
  processAnnouncementSchedule();
  renderAnnouncementAdminList();
  if (announcement.status === "active" && announcement.placement === "popup" && announcement.runDate <= todayIso) {
    showAnnouncementPopup(announcement, false);
  }
  if (announcement.emailAgents) {
    emailAnnouncementToUsers(announcement);
  }
  announcementDialog.close();
});

openInviteUser.addEventListener("click", () => {
  inviteForm.reset();
  inviteMemberType.value = "team";
  invitePassword.classList.add("is-hidden");
  invitePasswordLabel.classList.add("is-hidden");
  sendInvite.textContent = "Send invite";
  inviteDialog.showModal();
});

inviteMode.addEventListener("change", () => {
  const manual = inviteMode.value === "manual";
  invitePassword.classList.toggle("is-hidden", !manual);
  invitePasswordLabel.classList.toggle("is-hidden", !manual);
  invitePassword.required = manual;
  sendInvite.textContent = manual ? "Create user" : "Send invite";
});

closeInviteModal.addEventListener("click", () => inviteDialog.close());
cancelInvite.addEventListener("click", () => inviteDialog.close());

inviteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    id: createId(),
    name: inviteName.value.trim(),
    email: inviteEmail.value.trim(),
    lastLogin: "",
    status: inviteMode.value === "manual" ? "active" : "invited",
    password: inviteMode.value === "manual" ? invitePassword.value : "",
    authProvider: "password",
    memberType: normalizeMemberType(inviteMemberType.value),
  };
  appUsers = [...appUsers.filter((candidate) => candidate.email.toLowerCase() !== user.email.toLowerCase()), user];
  saveUsers();
  renderAdminDashboard();
  inviteDialog.close();

  if (inviteMode.value === "link") {
    const inviteLink = `${window.location.origin}${window.location.pathname}?invite=${encodeURIComponent(user.email)}`;
    window.location.href = `mailto:${encodeURIComponent(user.email)}?subject=${encodeURIComponent("You're invited to Agent Central")}&body=${encodeURIComponent(`Hi ${user.name},\n\nUse this invite link to join Agent Central:\n${inviteLink}`)}`;
  }
});

signOut.addEventListener("click", () => {
  if (backendAvailable) {
    apiRequest("/api/auth/logout", { method: "POST", body: "{}" }).catch(() => {});
  }
  removeStorageValue("agentHub.agent");
  agent = null;
  document.querySelectorAll(".admin-only").forEach((element) => element.classList.add("is-hidden"));
  showLogin();
});

open411.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("worksheet");
});

open411Tile.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("worksheet");
});

openCalendarTile.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("calendar");
});

openCalendar.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("calendar");
});

openCanva.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("canva");
});

connectCanva.addEventListener("click", connectCanvaAccount);

disconnectCanva.addEventListener("click", () => {
  canvaAccount = null;
  localStorage.removeItem("agentHub.canvaAccount");
  renderCanvaPage();
});

canvaCategorySections.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-canva-add]");
  if (addButton) {
    openCanvaTemplateDialog(addButton.dataset.canvaAdd);
    return;
  }

  const scrollButton = event.target.closest("[data-canva-scroll]");
  if (scrollButton) {
    const carousel = canvaCategorySections.querySelector(`[data-canva-carousel="${scrollButton.dataset.canvaScroll}"]`);
    carousel?.scrollBy({ left: Number(scrollButton.dataset.direction) * 320, behavior: "smooth" });
    return;
  }

  const editButton = event.target.closest("[data-canva-edit]");
  if (editButton) {
    const card = editButton.closest(".canva-template-card");
    openCanvaTemplateDialog(card.dataset.categoryId, card.dataset.templateId);
    return;
  }

  const deleteButton = event.target.closest("[data-canva-delete]");
  if (deleteButton) {
    const card = deleteButton.closest(".canva-template-card");
    const templates = teamCanvaTemplates[card.dataset.categoryId] || [];
    teamCanvaTemplates[card.dataset.categoryId] = templates.filter((template) => template.id !== card.dataset.templateId);
    saveCanvaTemplates();
    renderCanvaPage();
  }
});

closeCanvaTemplateModal.addEventListener("click", () => canvaTemplateDialog.close());
cancelCanvaTemplate.addEventListener("click", () => canvaTemplateDialog.close());
clearCanvaTemplateImage.addEventListener("click", () => {
  canvaTemplateImage.value = "";
  canvaTemplateImagePreview.innerHTML = "";
  clearCanvaTemplateImage.dataset.clearExisting = "true";
});
canvaTemplateImage.addEventListener("change", async () => {
  const file = canvaTemplateImage.files[0];
  canvaTemplateImagePreview.innerHTML = "";
  if (!file) return;
  const imageData = await fileToDataUrl(file);
  canvaTemplateImagePreview.innerHTML = `<img src="${imageData}" alt="Template preview" />`;
  clearCanvaTemplateImage.dataset.clearExisting = "false";
});
canvaTemplateForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const categoryId = canvaTemplateCategory.value;
  const editingId = canvaTemplateEditingId.value;
  const existingTemplate = editingId ? (teamCanvaTemplates[categoryId] || []).find((template) => template.id === editingId) : null;
  const file = canvaTemplateImage.files[0];
  const image = file ? await fileToDataUrl(file) : clearCanvaTemplateImage.dataset.clearExisting === "true" ? "" : existingTemplate?.image || "";
  const template = {
    id: editingId || createId(),
    title: canvaTemplateTitle.value.trim(),
    url: canvaTemplateUrl.value.trim(),
    description: canvaTemplateDescription.value.trim(),
    image,
    audience: readAudienceControls(canvaAudienceTeam, canvaAudienceMentee),
  };
  teamCanvaTemplates[categoryId] = editingId
    ? (teamCanvaTemplates[categoryId] || []).map((item) => (item.id === editingId ? template : item))
    : [...(teamCanvaTemplates[categoryId] || []), template];
  saveCanvaTemplates();
  canvaTemplateDialog.close();
  renderCanvaPage();
});

openChat.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("chat");
});

openChatTile.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("chat");
});

openDirectMail.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("direct-mail");
});

openDirectMailTile.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("direct-mail");
});

openListingIntel.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("listing-intelligence");
});

openListingIntelTile.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("listing-intelligence");
});

document.querySelectorAll("[data-chat-room]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedChatRoom = normalizeChatRoom(button.dataset.chatRoom);
    localStorage.setItem("agentHub.selectedChatRoom", selectedChatRoom);
    renderChatMessages();
  });
});

chatAttachment.addEventListener("change", renderChatAttachmentPreview);

clearChatAttachment.addEventListener("click", () => {
  chatAttachment.value = "";
  renderChatAttachmentPreview();
});

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!canAccessFeature("chat")) {
    alert("Team Chat is not enabled for your account type.");
    return;
  }
  selectedChatRoom = normalizeChatRoom(selectedChatRoom);
  const messageText = chatMessage.value.trim();
  if (!messageText && !chatAttachment.files.length) {
    alert("Add a message or attach a file before sending.");
    return;
  }
  const files = [...chatAttachment.files];
  const attachments = await Promise.all(
    files.map(async (file) => ({
      id: createId(),
      name: file.name,
      type: file.type || "application/octet-stream",
      data: await fileToDataUrl(file),
    })),
  );
  chatRoomMessages.push({
    id: createId(),
    author: agent?.name || "Agent",
    role: agent?.role || "agent",
    room: selectedChatRoom,
    message: messageText || "Shared an attachment.",
    createdAt: new Date().toISOString(),
    attachments,
  });
  saveChatMessages();
  chatMessage.value = "";
  chatAttachment.value = "";
  renderChatAttachmentPreview();
  renderChatMessages();
});

openMailerSettings.addEventListener("click", openDirectMailSettings);
generateMailerProof.addEventListener("click", handleGenerateMailerProof);
mailerOrderForm.addEventListener("submit", handleSubmitMailerOrder);
[mailerProduct, mailerQuantity].forEach((input) => {
  input.addEventListener("input", updateMailerEstimate);
});

newWalkthrough.addEventListener("click", () => {
  if (!confirm("Start a new walkthrough? This clears the current local walkthrough.")) return;
  listingWalkthrough = createEmptyWalkthrough();
  listingPropertyName.value = "";
  listingAddress.value = "";
  listingOverviewNotes.value = "";
  saveListingWalkthrough();
  generatedListingCopy.value = "";
  renderListingIntelligence();
});

[listingPropertyName, listingAddress, listingOverviewNotes, listingPresentationNotes, prospectiveListDate, contractsSigned, draftAndSendContracts].forEach((input) => {
  input.addEventListener("input", saveListingWalkthrough);
  input.addEventListener("change", saveListingWalkthrough);
});

[followUpPhone, followUpEmail, followUpText, followUpDate].forEach((input) => {
  input.addEventListener("input", saveListingWalkthrough);
  input.addEventListener("change", saveListingWalkthrough);
});

editPreviousWalkthroughs.addEventListener("click", () => {
  renderPreviousWalkthroughs();
  previousWalkthroughDialog.showModal();
});

closePreviousWalkthroughs.addEventListener("click", () => previousWalkthroughDialog.close());

previousWalkthroughList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-walkthrough-action]");
  if (!button) return;
  const walkthroughId = button.closest(".previous-walkthrough-item").dataset.walkthroughId;
  if (button.dataset.walkthroughAction === "open") loadSavedWalkthrough(walkthroughId);
  if (button.dataset.walkthroughAction === "delete") deleteSavedWalkthrough(walkthroughId);
});

addSystemItem.addEventListener("click", () => {
  listingWalkthrough.systems.push({ id: createId(), label: "Additional system", age: "", updatedDate: "", verification: "unverified", notes: "" });
  saveListingWalkthrough();
  renderListingIntelligence();
});

toggleSystemEdit.addEventListener("click", () => {
  systemEditMode = !systemEditMode;
  renderSystemsTracker();
});

deleteSelectedSystems.addEventListener("click", () => {
  const selected = [...systemsTracker.querySelectorAll(".system-delete-check:checked")].map((checkbox) => checkbox.closest(".system-row").dataset.systemId);
  listingWalkthrough.systems = listingWalkthrough.systems.filter((system) => !selected.includes(system.id));
  systemEditMode = false;
  saveListingWalkthrough();
  renderListingIntelligence();
});

systemsTracker.addEventListener("input", (event) => {
  const row = event.target.closest(".system-row");
  if (row) updateSystemFromRow(row);
});

systemsTracker.addEventListener("change", (event) => {
  const row = event.target.closest(".system-row");
  if (row) updateSystemFromRow(row);
});

systemsTracker.addEventListener("click", (event) => {
  if (event.target.matches(".system-delete-check")) return;
});

newRoom.addEventListener("click", () => {
  roomForm.classList.toggle("is-hidden");
  if (!roomForm.classList.contains("is-hidden")) roomName.focus();
});

toggleRoomEdit.addEventListener("click", () => {
  roomEditMode = !roomEditMode;
  renderRoomCards();
});

deleteSelectedRooms.addEventListener("click", () => {
  const selected = [...roomCards.querySelectorAll(".room-delete-check:checked")].map((checkbox) => checkbox.closest(".listing-room-card").dataset.roomId);
  listingWalkthrough.rooms = listingWalkthrough.rooms.filter((room) => !selected.includes(room.id));
  roomEditMode = false;
  saveListingWalkthrough();
  renderListingIntelligence();
});

roomForm.addEventListener("submit", addRoomFromForm);

roomCards.addEventListener("input", (event) => {
  const card = event.target.closest(".listing-room-card");
  if (!card) return;
  if (event.target.matches(".room-photo-input")) return;
  const room = listingWalkthrough.rooms.find((item) => item.id === card.dataset.roomId);
  if (!room) return;
  if (event.target.matches(".room-title-input")) room.name = event.target.value.trim();
  if (event.target.matches(".room-notes-input")) room.notes = event.target.value.trim();
  saveListingWalkthrough();
});

roomCards.addEventListener("change", (event) => {
  if (!event.target.matches(".room-photo-input")) return;
  addPhotosToRoom(event.target.closest(".listing-room-card").dataset.roomId, [...event.target.files]);
});

roomCards.addEventListener("click", (event) => {
  const collapseButton = event.target.closest(".room-collapse-toggle");
  if (collapseButton) {
    const room = listingWalkthrough.rooms.find((item) => item.id === collapseButton.closest(".listing-room-card").dataset.roomId);
    room.collapsed = !room.collapsed;
    saveListingWalkthrough();
    renderRoomCards();
    return;
  }
  const analyzeButton = event.target.closest(".analyze-room");
  if (analyzeButton) {
    analyzeRoomPhotos(analyzeButton.closest(".listing-room-card").dataset.roomId);
    return;
  }
  const suggestionButton = event.target.closest("[data-suggestion-action]");
  if (suggestionButton) {
    updateSuggestion(suggestionButton.closest(".ai-suggestion"), suggestionButton.dataset.suggestionAction);
  }
});

document.querySelectorAll("[data-copy-format]").forEach((button) => {
  button.addEventListener("click", () => generateListingCopy(button.dataset.copyFormat));
});

openCopyPanel.addEventListener("click", () => copyPanelDialog.showModal());
closeCopyPanel.addEventListener("click", () => copyPanelDialog.close());
openVerificationPanel.addEventListener("click", () => {
  renderVerificationChecklist();
  verificationPanelDialog.showModal();
});
closeVerificationPanel.addEventListener("click", () => verificationPanelDialog.close());
verificationChecklist.addEventListener("change", (event) => {
  const item = event.target.closest(".verification-item");
  if (!item) return;
  listingWalkthrough.completedVerifications ||= {};
  listingWalkthrough.completedVerifications[item.dataset.verificationId] = event.target.checked;
  saveListingWalkthrough();
});
submitListingWalkthrough.addEventListener("click", () => {
  saveListingWalkthrough();
  listingExportStatus.textContent = "Ready to save.";
  submitWalkthroughDialog.showModal();
});
closeSubmitWalkthrough.addEventListener("click", () => submitWalkthroughDialog.close());
printWalkthrough.addEventListener("click", printListingWalkthrough);
printPdfWalkthrough.addEventListener("click", printListingWalkthrough);
saveWalkthroughExport.addEventListener("click", submitListingWorkflow);
submitWalkthroughDialog.addEventListener("close", () => {
  listingExportStatus.textContent = "Ready to save.";
});

openTraining.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("training");
});

openTrainingTile.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("training");
});

openProfileInfo.addEventListener("click", () => openSettings("profile"));
openAccountSettings.addEventListener("click", () => openSettings("profile"));
openPasswordSettings.addEventListener("click", () => openSettings("password"));
closeSettingsModal.addEventListener("click", () => settingsDialog.close());
document.querySelectorAll(".settings-tab").forEach((button) => {
  button.addEventListener("click", () => switchSettingsTab(button.dataset.settingsTab));
});
profileName.addEventListener("input", syncProfilePreview);
profilePhoto.addEventListener("change", async () => {
  const file = profilePhoto.files[0];
  if (!file) return;
  agent.profileImage = await fileToDataUrl(file);
  syncProfilePreview();
});
clearProfilePhoto.addEventListener("click", () => {
  profilePhoto.value = "";
  agent.profileImage = "";
  syncProfilePreview();
});
profileSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setAgent({
    ...agent,
    name: profileName.value.trim(),
    email: profileEmail.value.trim().toLowerCase(),
    phone: profilePhone.value.trim(),
    title: profileTitle.value.trim(),
  });
  alert("Profile updated.");
});
appearanceSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  appTheme = {
    palette: themePalette.value,
    mode: themeMode.value,
    colors: {
      accent: themeAccentColor.value,
      gold: themeGoldColor.value,
      panel: themePanelColor.value,
    },
  };
  saveTheme();
  alert("Appearance updated.");
});
themePalette.addEventListener("change", () => {
  appTheme = { ...appTheme, palette: themePalette.value, colors: {} };
  applyTheme();
});
themeMode.addEventListener("change", () => {
  appTheme = { ...appTheme, mode: themeMode.value };
  applyTheme();
});
[themeAccentColor, themeGoldColor, themePanelColor].forEach((input) => {
  input.addEventListener("input", () => {
    appTheme = {
      ...appTheme,
      colors: {
        ...(appTheme.colors || {}),
        accent: themeAccentColor.value,
        gold: themeGoldColor.value,
        panel: themePanelColor.value,
      },
    };
    applyTheme();
  });
});
pushNotifications?.addEventListener("change", updateNotificationLabels);
emailNotifications?.addEventListener("change", updateNotificationLabels);
notificationSettingsForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  setAgent({
    ...agent,
    notifications: {
      push: pushNotifications.checked,
      email: emailNotifications.checked,
    },
  });
  if (backendAvailable) {
    apiRequest("/api/me", {
      method: "PATCH",
      body: JSON.stringify(agent),
    }).catch(() => {});
  }
  updateNotificationLabels();
  alert("Notification settings updated.");
});
accessMemberType?.addEventListener("change", renderAccessFeatureList);
accessSettingsForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (agent?.role !== "admin") return;
  const type = normalizeMemberType(accessMemberType.value);
  const nextPermissions = {};
  accessFeatureList.querySelectorAll("[data-access-feature]").forEach((checkbox) => {
    nextPermissions[checkbox.dataset.accessFeature] = checkbox.checked;
  });
  accessSettings = {
    ...accessSettings,
    [type]: {
      ...getAccessForType(type),
      ...nextPermissions,
    },
  };
  saveAccessSettings();
  renderAccessFeatureList();
  updateMemberAccessUi();
  alert(`${memberTypeLabel(type)} access updated.`);
});
passwordSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (newPassword.value && newPassword.value !== confirmPassword.value) {
    alert("New password and confirmation do not match.");
    return;
  }
  setAgent({
    ...agent,
    email: loginEmail.value.trim().toLowerCase(),
    password: newPassword.value || agent?.password || "",
  });
  alert("Login email/password updated in this prototype.");
});

openTrackEditor.addEventListener("click", () => {
  populateTrackSelect();
  loadTrackIntoForm(selectedTrainingCategory);
  trackDialog.showModal();
});

trackSelect.addEventListener("change", () => {
  if (trackSelect.value) {
    loadTrackIntoForm(trackSelect.value);
  }
});

newTrackMode.addEventListener("click", setNewTrackMode);
clearTrackCover.addEventListener("click", () => {
  trackCover.value = "";
  clearExistingTrackCover = true;
});
closeTrackModal.addEventListener("click", () => trackDialog.close());
cancelTrack.addEventListener("click", () => trackDialog.close());

trackForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const existingTrack = trainingVault.find((category) => category.id === editingTrackId);
  const trackId = editingTrackId || trackTitle.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-") || createId();
  const file = trackCover.files[0];
  const coverImage = file ? await fileToDataUrl(file) : clearExistingTrackCover ? "" : existingTrack?.coverImage || "";
  saveTrack({
    id: trackId,
    title: trackTitle.value.trim(),
    summary: trackSummary.value.trim(),
    coverImage,
  });
  trackDialog.close();
});

openTrainingUpload.addEventListener("click", () => {
  resetTrainingUploadDialog();
  trainingUploadDialog.showModal();
});

addTrainingChapter.addEventListener("click", () => addChapterEditorRow());

closeTrainingUpload.addEventListener("click", () => {
  editingTrainingPack = null;
  trainingCategory.disabled = false;
  trainingUploadDialog.close();
});
cancelTrainingUpload.addEventListener("click", () => {
  editingTrainingPack = null;
  trainingCategory.disabled = false;
  trainingUploadDialog.close();
});

trainingUploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const lessonId = editingTrainingPack?.originalLesson.id || createId();
  const chapters = await collectChapterEditorRows(lessonId);
  const lesson = {
    id: lessonId,
    categoryId: editingTrainingPack?.categoryId || trainingCategory.value,
    title: trainingTitle.value.trim(),
    detail: trainingDetail.value.trim(),
    audience: readAudienceControls(trainingAudienceTeam, trainingAudienceMentee),
    chapters,
  };

  if (editingTrainingPack) {
    replaceTrainingLesson(editingTrainingPack.categoryId, editingTrainingPack.lessonIndex, lesson);
    editingTrainingPack = null;
    trainingCategory.disabled = false;
  } else {
    addTrainingLesson(lesson);
  }
  trainingUploadDialog.close();
});

openTasksTile.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("tasks");
});

openDashboard.addEventListener("click", (event) => {
  event.preventDefault();
  showPage("dashboard");
});

print411.addEventListener("click", () => {
  saveWorksheet();
  window.print();
});

submit411.addEventListener("click", () => {
  saveWorksheet();
  const subject = `${agent?.name || "Agent"} 411`;
  const recipient = "Reza@LLHomes Team";
  const mailto = `mailto:${recipient.replaceAll(" ", "%20")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(worksheetSummary())}`;
  window.location.href = mailto;
});

accountButton.addEventListener("click", () => {
  const isOpen = accountMenu.classList.toggle("open");
  accountButton.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".account-wrap")) {
    accountMenu.classList.remove("open");
    accountButton.setAttribute("aria-expanded", "false");
  }
});

menuToggle.addEventListener("click", () => {
  const expanded = sidebar.classList.toggle("expanded");
  menuToggle.setAttribute("aria-expanded", String(expanded));
});

sidebar.addEventListener("mouseenter", () => {
  menuToggle.setAttribute("aria-expanded", "true");
});

sidebar.addEventListener("mouseleave", () => {
  if (!sidebar.classList.contains("expanded")) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("expanded");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".provider-btn").forEach((button) => {
  button.addEventListener("click", () => {
    calendarProvider = button.dataset.provider;
    localStorage.setItem("agentHub.calendarProvider", calendarProvider);
    renderCalendarConnection();
  });
});

newAppointment.addEventListener("click", () => {
  appointmentForm.reset();
  appointmentDate.value = todayIso;
  appointmentTime.value = "09:00";
  appointmentDialog.showModal();
});

closeAppointmentModal.addEventListener("click", () => appointmentDialog.close());
cancelAppointment.addEventListener("click", () => appointmentDialog.close());

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  appointments = [
    ...appointments,
    {
      id: createId(),
      title: appointmentTitle.value.trim(),
      date: appointmentDate.value,
      time: appointmentTime.value,
      notes: appointmentNotes.value.trim(),
      type: "appointment",
    },
  ];
  saveAppointments();
  renderCalendar();
  appointmentDialog.close();
});

quickAddTask.addEventListener("click", () => openTaskDialog());
newTask.addEventListener("click", () => openTaskDialog());
closeTaskModal.addEventListener("click", () => {
  editingTaskId = null;
  taskDialog.close();
});
cancelTask.addEventListener("click", () => {
  editingTaskId = null;
  taskDialog.close();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task =
    tasks.find((candidate) => candidate.id === editingTaskId) ||
    {
      id: createId(),
      done: false,
    };

  task.title = taskTitle.value.trim();
  task.dueDate = taskDueDate.value;
  task.urgency = taskUrgency.value;
  task.notes = taskNotes.value.trim();
  task.addToCalendar = taskAddToCalendar.checked;

  if (!editingTaskId) {
    tasks = [...tasks, task];
  }

  syncTaskToCalendar(task);
  saveTasks();
  renderTasks();
  renderCalendar();
  editingTaskId = null;
  taskDialog.close();
});

openAdminTileModal.addEventListener("click", () => {
  adminTileForm.reset();
  adminTileType.value = "411";
  updateAdminTileForm();
  adminTileDialog.showModal();
});

closeAdminTileModal.addEventListener("click", () => adminTileDialog.close());
cancelAdminTile.addEventListener("click", () => adminTileDialog.close());
adminTileType.addEventListener("change", updateAdminTileForm);
adminTileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (adminTileType.value !== "custom") {
    restoreStandardTeamTile(adminTileType.value);
    applyDashboardTileSettings();
    adminTileDialog.close();
    return;
  }

  const tile = {
    id: `custom-${createId()}`,
    name: adminTileTitle.value.trim(),
    subtitle: adminTileSubtitle.value.trim(),
    link: adminTileUrl.value.trim(),
    image: adminTileImage.value.trim() || "assets/custom.svg",
  };
  customTeamTiles = [...customTeamTiles, tile];
  saveCustomTeamTiles();
  applyDashboardTileSettings();
  teamTileGrid.append(teamTileGrid.querySelector(`[data-dashboard-tile="${tile.id}"]`));
  saveDashboardTileOrder();
  adminTileDialog.close();
});

openTileModal.addEventListener("click", () => {
  tileForm.reset();
  tileDialog.showModal();
});

closeTileModal.addEventListener("click", () => tileDialog.close());
cancelTile.addEventListener("click", () => tileDialog.close());

curatedTile.addEventListener("change", () => {
  const selected = curatedApps[curatedTile.value];
  if (!selected) {
    tileName.value = "";
    tileLink.value = "";
    tileImage.value = "";
    tileName.disabled = false;
    tileLink.disabled = false;
    tileImage.disabled = false;
    return;
  }

  tileName.value = selected.name;
  tileLink.value = selected.link;
  tileImage.value = selected.image;
});

tileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = curatedApps[curatedTile.value];

  personalTiles = [
    ...personalTiles,
    {
      id: createId(),
      name: tileName.value.trim(),
      link: tileLink.value.trim(),
      image: selected?.image || tileImage.value.trim() || "assets/custom.svg",
    },
  ];

  saveTiles();
  renderTiles();
  tileDialog.close();
});

document.querySelectorAll("[data-save]").forEach((field) => {
  const eventName = field.isContentEditable ? "input" : "change";
  field.addEventListener(eventName, saveWorksheet);
});

document.querySelectorAll(".weekly-bullets").forEach((editor) => {
  editor.addEventListener("focus", () => {
    if (!editor.textContent.trim()) {
      editor.textContent = "• ";
    }
  });
  editor.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.execCommand("insertText", false, "\n• ");
    }
  });
  editor.addEventListener("blur", () => {
    normalizeWeeklyEditor(editor);
    saveWorksheet();
  });
});

setupWorksheetOptions();
clearOldPresetGoalValues();
restoreWorksheet();
setupDashboardTileEditing();
applyTheme();

function handleLoginQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  const password = params.get("password");

  if (!email) return false;

  const emailField = loginForm.querySelector('[name="email"]');
  const passwordField = loginForm.querySelector('[name="password"]');

  if (emailField) emailField.value = email;
  if (passwordField && password) passwordField.value = password;

  if (!password) return false;

  return loginWithCredentials(email, password);
}

if (!handleLoginQueryParams() && agent) {
  showApp();
}
