export const analyzeEmail = (text) => {
  let score = 0;
  const reasons = [];
  const lower = text.toLowerCase();

  const phishingPhrases = [
    "verify your account",
    "urgent action required",
    "reset your password",
    "your account is suspended",
    "click the link below",
    "confirm your identity",
    "payment failed",
    "unusual login attempt",
    "claim your reward",
    "you have won",
  ];

  phishingPhrases.forEach((p) => {
    if (lower.includes(p)) {
      score += 20;
      reasons.push(`Phishing phrase detected: "${p}"`);
    }
  });

  const urgencyWords = ["urgent", "immediately", "asap", "act now", "limited time"];
  if (urgencyWords.some((w) => lower.includes(w))) {
    score += 15;
    reasons.push("Urgency pressure detected.");
  }

  const threatWords = ["suspended", "blocked", "terminated", "closed", "restricted"];
  if (threatWords.some((w) => lower.includes(w))) {
    score += 15;
    reasons.push("Threat-style warning detected.");
  }

  // detect links
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  const links = lower.match(linkRegex) || [];
  if (links.length > 0) {
    score += 20;
    reasons.push("Email contains link(s), possible phishing redirect.");
  }

  const confidence = Math.min(100, score);

  let risk = "Safe ✅";
  if (confidence >= 70) risk = "Dangerous 🚨";
  else if (confidence >= 40) risk = "Suspicious ⚠️";

  return {
    type: "Email",
    risk,
    confidence,
    reasons: reasons.length ? reasons : ["No major phishing patterns found."],
  };
};
