export const LEGAL_DOCUMENTS = [
  {
    id: "terms-of-service",
    href: "/terms-conditions",
    title: "Terms of Service",
    summary: "The rules, responsibilities, and service expectations for using Yard Heroes.",
  },
  {
    id: "privacy-policy",
    href: "/privacy-policy",
    title: "Privacy Policy",
    summary: "How personal information is collected, used, stored, and protected.",
  },
  {
    id: "cookie-policy",
    href: "/cookie-policy",
    title: "Cookie Policy",
    summary: "How cookies and related technologies are used across the platform.",
  },
  {
    id: "gdpr-compliance",
    href: "/gdpr-compliance",
    title: "GDPR Compliance",
    summary: "Information about user rights, data handling, and compliance commitments.",
  },
];

export const getLegalDocumentDefinition = (documentId = "") =>
  LEGAL_DOCUMENTS.find((document) => document.id === String(documentId || "").trim()) || null;

export const sanitizeLegalDocumentHtml = (value = "") =>
  String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[\s\S]*?<\/object>/gi, "")
    .replace(/<embed[\s\S]*?<\/embed>/gi, "")
    .replace(
      /\sstyle=(["'])(.*?)\1/gi,
      (_, quote, styleValue = "") => {
        const cleanedStyle = String(styleValue)
          .replace(/(^|;)\s*(max-width|min-width|width)\s*:[^;]+;?/gi, "$1")
          .replace(/;;+/g, ";")
          .replace(/^;|;$/g, "")
          .trim();

        return cleanedStyle ? ` style=${quote}${cleanedStyle}${quote}` : "";
      }
    )
    .replace(/\son\w+=(["']).*?\1/gi, "")
    .replace(/\son\w+=([^\s>]+)/gi, "")
    .replace(/javascript:/gi, "");

export const hasMeaningfulLegalDocumentContent = (value = "") =>
  String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim().length > 0;
