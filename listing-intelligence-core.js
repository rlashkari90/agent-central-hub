(function attachListingIntelligenceCore(root) {
  const restrictedClaimPatterns = [
    /\b\d+\s*(year|years|yr|yrs)\s*old\b/gi,
    /\bnewly remodeled\b/gi,
    /\bpermitted\b/gi,
    /\bbrand new\b/gi,
    /\bgranite\b/gi,
    /\bquartz\b/gi,
    /\bmarble\b/gi,
    /\bhardwood\b/gi,
    /\bexcellent condition\b/gi,
    /\bperfect condition\b/gi,
    /\b\d{3,5}\s*(sq ft|square feet|sf)\b/gi,
  ];

  const fairHousingPatterns = [
    /\bfamily-friendly\b/gi,
    /\bperfect for families\b/gi,
    /\bideal for young professionals\b/gi,
    /\bwalk to church\b/gi,
    /\bexclusive neighborhood\b/gi,
    /\bsafe neighborhood\b/gi,
  ];

  const roomSuggestionBank = {
    kitchen: [
      ["Cabinetry appears to offer substantial storage.", "Storage", false],
      ["Counter surfaces appear clean and ready for everyday prep.", "Surfaces", true],
      ["Kitchen layout appears to support multiple work zones.", "Layout", false],
    ],
    bedroom: [
      ["Natural light appears to reach the sleeping area.", "Light", false],
      ["Room appears flexible for bedroom, office, or guest use.", "Flexibility", false],
      ["Closet area appears to support everyday storage.", "Storage", true],
    ],
    bathroom: [
      ["Bathroom appears to have updated-looking fixtures.", "Fixtures", true],
      ["Vanity area appears to include useful counter space.", "Storage", false],
      ["Tile or wall finishes appear neutral from the photo.", "Finishes", true],
    ],
    living: [
      ["Living area appears open for seating and gathering.", "Layout", false],
      ["Windows appear to add natural light to the room.", "Light", false],
      ["Flooring appears visually consistent across the space.", "Finishes", true],
    ],
    exterior: [
      ["Exterior appears to offer curb appeal from the uploaded angle.", "Curb appeal", false],
      ["Entry approach appears clearly defined.", "Entry", false],
      ["Landscaping appears established from the photo.", "Landscaping", true],
    ],
    default: [
      ["The room appears bright and usable from the uploaded photo.", "General", false],
      ["Visible finishes appear neutral and marketable.", "Finishes", true],
      ["The layout appears functional based on the photo angle.", "Layout", false],
    ],
  };

  function normalizeRoomKey(roomName) {
    const value = (roomName || "").toLowerCase();
    if (value.includes("kitchen")) return "kitchen";
    if (value.includes("bed")) return "bedroom";
    if (value.includes("bath")) return "bathroom";
    if (value.includes("living") || value.includes("family")) return "living";
    if (value.includes("exterior") || value.includes("front") || value.includes("yard")) return "exterior";
    return "default";
  }

  function analyzeRoomImage(input) {
    const roomName = input?.roomName || "Room";
    const fileName = input?.fileName || "photo";
    const bank = roomSuggestionBank[normalizeRoomKey(roomName)];
    return {
      sourceFileName: fileName,
      modelMode: "visual-assist-demo",
      guardrails: [
        "No exact ages, brands, materials, permits, square footage, remodel status, or condition claims without confirmation.",
        "Use uncertain visual language for photo-only observations.",
      ],
      suggestions: bank.map(([text, category, needsVerification], index) => ({
        id: `${Date.now()}-${index}`,
        category,
        text: enforceVisualUncertainty(text),
        confidence: Number((0.74 + index * 0.05).toFixed(2)),
        needsVerification,
        status: "pending",
        finalText: enforceVisualUncertainty(text),
      })),
    };
  }

  function enforceVisualUncertainty(text) {
    const value = String(text || "").trim();
    if (!value) return "";
    const lower = value.toLowerCase();
    if (lower.includes("appears") || lower.includes("may") || lower.includes("visible")) return scrubRestrictedClaims(value);
    return scrubRestrictedClaims(`Appears to ${value.charAt(0).toLowerCase()}${value.slice(1)}`);
  }

  function scrubRestrictedClaims(text) {
    let clean = String(text || "");
    restrictedClaimPatterns.forEach((pattern) => {
      clean = clean.replace(pattern, "agent-confirmed detail");
    });
    return clean;
  }

  function guardCopy(text) {
    let clean = scrubRestrictedClaims(text);
    fairHousingPatterns.forEach((pattern) => {
      clean = clean.replace(pattern, "welcoming");
    });
    return clean.replace(/\s+/g, " ").trim();
  }

  function getApprovedFeatures(walkthrough) {
    return (walkthrough?.rooms || []).flatMap((room) =>
      (room.photos || []).flatMap((photo) =>
        (photo.suggestions || [])
          .filter((suggestion) => suggestion.status === "approved")
          .map((suggestion) => ({
            roomName: room.name,
            text: guardCopy(suggestion.finalText || suggestion.text),
            needsVerification: Boolean(suggestion.needsVerification),
          })),
      ),
    );
  }

  function buildVerificationChecklist(walkthrough) {
    const systemItems = (walkthrough?.systems || [])
      .filter((system) => system.verification !== "verified")
      .map((system) => ({
        id: `system-${system.id}`,
        label: `${system.label}: confirm age/update date/status`,
        source: "Major systems",
      }));
    const featureItems = getApprovedFeatures(walkthrough)
      .filter((feature) => feature.needsVerification)
      .map((feature, index) => ({
        id: `feature-${index}`,
        label: `${feature.roomName}: verify "${feature.text}"`,
        source: "Approved feature",
      }));
    return [...systemItems, ...featureItems];
  }

  function generateListingCopy(walkthrough, format) {
    const approved = getApprovedFeatures(walkthrough);
    if (!approved.length) {
      return "Approve at least one feature before generating listing copy.";
    }
    const featureText = approved.map((feature) => feature.text);
    const propertyName = walkthrough?.propertyName || "This property";
    const overview = walkthrough?.overviewNotes ? guardCopy(walkthrough.overviewNotes) : "";
    const lead = overview ? `${propertyName}: ${overview}` : `${propertyName} offers a clear set of agent-approved highlights.`;
    const joined = featureText.join("; ");
    const outputs = {
      mls: `${lead} Highlights include: ${joined}. Buyer and buyer agent to verify details important to them.`,
      marketing: `${lead} Standout details include ${joined}. Schedule a showing to experience the home in person.`,
      social: `New listing spotlight: ${featureText.slice(0, 3).join(" | ")}. Message for details or a private tour.`,
      flyer: featureText.map((feature) => `- ${feature}`).join("\n"),
    };
    return guardCopy(outputs[format] || outputs.mls);
  }

  root.ListingIntelligenceCore = {
    analyzeRoomImage,
    buildVerificationChecklist,
    enforceVisualUncertainty,
    generateListingCopy,
    getApprovedFeatures,
    guardCopy,
  };

  if (typeof module !== "undefined") {
    module.exports = root.ListingIntelligenceCore;
  }
})(typeof window !== "undefined" ? window : globalThis);
