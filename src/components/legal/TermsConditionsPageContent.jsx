"use client";

import { useEffect, useMemo, useState } from "react";
import { FileText, LoaderCircle } from "lucide-react";
import { contentApi } from "@/lib/api/content-api";
import { getApiErrorMessage } from "@/lib/api/http";
import {
  getLegalDocumentDefinition,
  hasMeaningfulLegalDocumentContent,
  sanitizeLegalDocumentHtml,
} from "@/lib/legal-documents";

const TERMS_DEFAULT = {
  heroDescription: "Please read these Terms carefully before using our platform.",
  fallbackDate: "January 8, 2025",
  sections: {
    introduction: {
      title: "1. Introduction",
      paragraphs: [
        "Welcome to YardWork. These Terms & Conditions govern your use of our platform, which connects customers seeking yard work services with qualified workers. By accessing or using our platform, you agree to be bound by these terms.",
        "Our platform serves as a marketplace to facilitate connections between customers and workers. We are not an employer, and we do not directly provide yard work services.",
      ],
    },
    eligibility: {
      title: "2. Eligibility & Account Responsibility",
      intro:
        "To use YardWork, you must be at least 18 years old and capable of forming a legally binding contract. By creating an account, you agree to:",
      items: [
        "Provide accurate, current, and complete information during registration",
        "Maintain and promptly update your account information",
        "Keep your login credentials secure and confidential",
        "Accept responsibility for all activities that occur under your account",
        "Notify us immediately of any unauthorized access or security breach",
      ],
    },
    platformRole: {
      title: "3. Platform Role",
      intro:
        "YardWork operates as a connection service only. We provide the technology platform that enables customers and workers to find and communicate with each other.",
      emphasis: "Important clarifications:",
      items: [
        "We do not employ workers or control how they perform services",
        "We do not guarantee the quality, safety, or legality of services provided",
        "Workers are independent contractors, not employees of YardWork",
        "All agreements for services are directly between customers and workers",
        "We facilitate payment processing but are not party to the service contract",
      ],
    },
    jobRules: {
      title: "4. Job Posting & Acceptance Rules",
      customerTitle: "For Customers:",
      customerItems: [
        "Provide accurate and complete job descriptions, including location, scope of work, and timeline",
        "Set fair and reasonable compensation for the work requested",
        "Respond promptly to worker inquiries and applications",
        "Do not post jobs that violate local laws or regulations",
        "Cancel jobs with adequate notice if plans change",
      ],
      workerTitle: "For Workers:",
      workerItems: [
        "Only accept jobs you are qualified and equipped to complete",
        "Communicate clearly about your availability and capabilities",
        "Honor commitments once you accept a job",
        "Arrive on time and complete work as described",
        "Notify customers immediately if you cannot fulfill a commitment",
      ],
    },
    payments: {
      title: "5. Payments & Platform Fees",
      intro:
        "YardWork facilitates secure payment processing between customers and workers. Here's how it works:",
      feeTitle: "Platform Fee: 12%",
      feeDescription:
        "We charge a 12% service fee on all completed transactions. This fee covers payment processing, platform maintenance, customer support, and dispute resolution services.",
      processTitle: "Payment Process:",
      items: [
        "Customers pay through the platform when posting or accepting a quote",
        "Funds are held securely until job completion is confirmed",
        "Workers receive payment after the customer confirms satisfactory completion",
        "The 12% platform fee is automatically deducted from the total payment",
        "Workers receive 88% of the agreed job price",
        "Refunds are processed according to our dispute resolution policy",
      ],
    },
    disputes: {
      title: "6. Job Completion & Disputes",
      intro:
        "We encourage direct communication between customers and workers to resolve any issues. However, if disputes arise:",
      items: [
        "Customers must confirm job completion within 48 hours or provide specific reasons for dissatisfaction",
        "Workers should document completed work with photos when possible",
        "Either party can open a dispute through the platform within 7 days of job completion",
        "Our support team will review evidence from both parties",
        "We reserve the right to make final decisions on payment release in disputes",
        "Repeated disputes may result in account review or suspension",
      ],
    },
  },
};

const normalizeText = (value = "") =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim();

const getDirectChildren = (node, tagName = "") =>
  Array.from(node?.children || []).filter((child) =>
    tagName ? child.tagName.toLowerCase() === tagName.toLowerCase() : true
  );

const getFirstDirectChild = (node, tagName = "") => getDirectChildren(node, tagName)[0] || null;

const getElementText = (node) => normalizeText(node?.textContent || "");

const getListItems = (listNode) =>
  getDirectChildren(listNode, "li")
    .map((item) => getElementText(item))
    .filter(Boolean);

const getSectionByTitle = (sections, title, fallbackIndex) =>
  sections.find(
    (section) =>
      getElementText(getFirstDirectChild(section, "h2")).toLowerCase() === title.toLowerCase()
  ) || sections[fallbackIndex] || null;

const formatLastUpdatedLabel = (value) => {
  if (!value) {
    return `Last updated: ${TERMS_DEFAULT.fallbackDate}`;
  }

  return `Last updated: ${new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value))}`;
};

const buildTermsContent = (body = "", updatedAt = null) => {
  const sanitizedBody = sanitizeLegalDocumentHtml(body);
  const fallback = TERMS_DEFAULT;

  if (!sanitizedBody || typeof DOMParser === "undefined") {
    return {
      ...fallback,
      lastUpdatedLabel: formatLastUpdatedLabel(updatedAt),
    };
  }

  const parsedDocument = new DOMParser().parseFromString(sanitizedBody, "text/html");
  const sections = getDirectChildren(parsedDocument.body, "section");

  if (!sections.length) {
    return {
      ...fallback,
      lastUpdatedLabel: formatLastUpdatedLabel(updatedAt),
    };
  }

  const introductionSection = getSectionByTitle(sections, "1. Introduction", 0);
  const eligibilitySection = getSectionByTitle(sections, "2. Eligibility & Account Responsibility", 1);
  const platformRoleSection = getSectionByTitle(sections, "3. Platform Role", 2);
  const jobRulesSection = getSectionByTitle(sections, "4. Job Posting & Acceptance Rules", 3);
  const paymentsSection = getSectionByTitle(sections, "5. Payments & Platform Fees", 4);
  const disputesSection = getSectionByTitle(sections, "6. Job Completion & Disputes", 5);

  const introParagraphs = getDirectChildren(introductionSection, "p");
  const jobRulesHeadings = getDirectChildren(jobRulesSection, "h3");
  const jobRulesLists = getDirectChildren(jobRulesSection, "ul");
  const paymentsParagraphs = getDirectChildren(paymentsSection, "p");
  const paymentsBlockquote = getFirstDirectChild(paymentsSection, "blockquote");
  const paymentsBlockquoteParagraphs = getDirectChildren(paymentsBlockquote, "p");
  const paymentsStrong = paymentsBlockquote?.querySelector("strong");

  return {
    heroDescription:
      getElementText(getFirstDirectChild(parsedDocument.body, "p")) || fallback.heroDescription,
    lastUpdatedLabel: formatLastUpdatedLabel(updatedAt),
    sections: {
      introduction: {
        title:
          getElementText(getFirstDirectChild(introductionSection, "h2")) ||
          fallback.sections.introduction.title,
        paragraphs:
          introParagraphs.length > 0
            ? introParagraphs.map((paragraph) => getElementText(paragraph)).filter(Boolean)
            : fallback.sections.introduction.paragraphs,
      },
      eligibility: {
        title:
          getElementText(getFirstDirectChild(eligibilitySection, "h2")) ||
          fallback.sections.eligibility.title,
        intro:
          getElementText(getFirstDirectChild(eligibilitySection, "p")) ||
          fallback.sections.eligibility.intro,
        items:
          getListItems(getFirstDirectChild(eligibilitySection, "ul")).length > 0
            ? getListItems(getFirstDirectChild(eligibilitySection, "ul"))
            : fallback.sections.eligibility.items,
      },
      platformRole: {
        title:
          getElementText(getFirstDirectChild(platformRoleSection, "h2")) ||
          fallback.sections.platformRole.title,
        intro:
          getElementText(getDirectChildren(platformRoleSection, "p")[0]) ||
          fallback.sections.platformRole.intro,
        emphasis:
          getElementText(getDirectChildren(platformRoleSection, "p")[1]) ||
          fallback.sections.platformRole.emphasis,
        items:
          getListItems(getFirstDirectChild(platformRoleSection, "ul")).length > 0
            ? getListItems(getFirstDirectChild(platformRoleSection, "ul"))
            : fallback.sections.platformRole.items,
      },
      jobRules: {
        title:
          getElementText(getFirstDirectChild(jobRulesSection, "h2")) ||
          fallback.sections.jobRules.title,
        customerTitle:
          getElementText(jobRulesHeadings[0]) || fallback.sections.jobRules.customerTitle,
        customerItems:
          getListItems(jobRulesLists[0]).length > 0
            ? getListItems(jobRulesLists[0])
            : fallback.sections.jobRules.customerItems,
        workerTitle:
          getElementText(jobRulesHeadings[1]) || fallback.sections.jobRules.workerTitle,
        workerItems:
          getListItems(jobRulesLists[1]).length > 0
            ? getListItems(jobRulesLists[1])
            : fallback.sections.jobRules.workerItems,
      },
      payments: {
        title:
          getElementText(getFirstDirectChild(paymentsSection, "h2")) ||
          fallback.sections.payments.title,
        intro:
          getElementText(paymentsParagraphs[0]) || fallback.sections.payments.intro,
        feeTitle: getElementText(paymentsStrong) || fallback.sections.payments.feeTitle,
        feeDescription:
          paymentsBlockquoteParagraphs.map((paragraph) => getElementText(paragraph)).join(" ") ||
          fallback.sections.payments.feeDescription,
        processTitle:
          getElementText(getFirstDirectChild(paymentsSection, "h3")) ||
          fallback.sections.payments.processTitle,
        items:
          getListItems(getDirectChildren(paymentsSection, "ul")[0]).length > 0
            ? getListItems(getDirectChildren(paymentsSection, "ul")[0])
            : fallback.sections.payments.items,
      },
      disputes: {
        title:
          getElementText(getFirstDirectChild(disputesSection, "h2")) ||
          fallback.sections.disputes.title,
        intro:
          getElementText(getFirstDirectChild(disputesSection, "p")) ||
          fallback.sections.disputes.intro,
        items:
          getListItems(getFirstDirectChild(disputesSection, "ul")).length > 0
            ? getListItems(getFirstDirectChild(disputesSection, "ul"))
            : fallback.sections.disputes.items,
      },
    },
  };
};

const SectionList = ({ items = [] }) => (
  <ul className="space-y-[19px]">
    {items.map((item, index) => (
      <li
        key={`${item}-${index}`}
        className="flex items-start gap-3 text-[18px] leading-[30px] tracking-[-0.5px] text-[#374151]"
      >
        <span className="mt-[12px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#374151]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const EmptyState = ({ title, description }) => (
  <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-[#E5E7EB] bg-white px-6 text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef7f0] text-[#0A3019]">
      <FileText className="h-8 w-8" />
    </div>
    <h2 className="mt-6 text-2xl font-bold text-[#10231a]">{title}</h2>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#53655a]">{description}</p>
  </div>
);

export default function TermsConditionsPageContent() {
  const definition = useMemo(() => getLegalDocumentDefinition("terms-of-service"), []);
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadDocument = async () => {
      setIsLoading(true);
      setError("");

      try {
        const currentDocument = await contentApi.getLegalDocument("terms-of-service");

        if (!ignore) {
          setDocument(currentDocument);
        }
      } catch (apiError) {
        if (!ignore) {
          setDocument(null);
          setError(
            apiError?.response?.status === 404
              ? "This legal document is currently unavailable."
              : getApiErrorMessage(apiError)
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadDocument();

    return () => {
      ignore = true;
    };
  }, []);

  const rawTitle = document?.name || definition?.title || "Terms & Conditions";
  const title = /^terms of service$/i.test(rawTitle) ? "Terms & Conditions" : rawTitle;
  const hasContent = hasMeaningfulLegalDocumentContent(document?.body);
  const termsContent = useMemo(
    () => buildTermsContent(document?.body, document?.updatedAt),
    [document?.body, document?.updatedAt]
  );

  return (
    <section className="min-h-screen bg-white">
      <div className="w-full bg-[linear-gradient(135deg,#F0FDF4_0%,#ECFDF5_70.71%)]">
        <div className="mx-auto flex min-h-[265px] max-w-[1440px] items-center justify-center px-6 py-[80px]">
          <div className="w-full max-w-[896px] text-center">
            <h1 className="text-[40px] font-bold leading-[48px] tracking-[-0.5px] text-[#0A3019] sm:text-[48px]">
              {title}
            </h1>
            <p className="mx-auto mt-[24px] max-w-[603px] text-[18px] leading-7 tracking-[-0.005em] text-[#4B5563] sm:text-[20px]">
              {termsContent.heroDescription}
            </p>
            <p className="mt-[41px] text-[14px] leading-5 tracking-[-0.5px] text-[#6B7280]">
              {termsContent.lastUpdatedLabel}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] justify-center px-6 py-[64px] lg:px-[272px]">
        <div className="w-full max-w-[896px]">
          {isLoading ? (
            <div className="flex min-h-[520px] items-center justify-center text-sm text-[#53655a]">
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              Loading legal document...
            </div>
          ) : error ? (
            <EmptyState title={title} description={error} />
          ) : !hasContent ? (
            <EmptyState
              title={title}
              description="This document exists, but no content has been published from the admin dashboard yet."
            />
          ) : (
            <div className="space-y-16">
              <section className="space-y-[19px]">
                <h2 className="text-[30px] font-bold leading-9 tracking-[-0.005em] text-[#202326]">
                  {termsContent.sections.introduction.title}
                </h2>
                {termsContent.sections.introduction.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-[835px] text-[18px] leading-[30px] tracking-[-0.5px] text-[#374151]"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>

              <div className="space-y-16">
                <section className="space-y-[19px]">
                  <h2 className="text-[30px] font-bold leading-9 tracking-[-0.005em] text-[#202326]">
                    {termsContent.sections.eligibility.title}
                  </h2>
                  <p className="max-w-[839px] text-[18px] leading-[30px] tracking-[-0.5px] text-[#374151]">
                    {termsContent.sections.eligibility.intro}
                  </p>
                  <SectionList items={termsContent.sections.eligibility.items} />
                </section>

                <section className="space-y-[18px]">
                  <h2 className="text-[30px] font-bold leading-9 tracking-[-0.005em] text-[#202326]">
                    {termsContent.sections.platformRole.title}
                  </h2>
                  <p className="max-w-[791px] text-[18px] leading-[30px] tracking-[-0.5px] text-[#374151]">
                    {termsContent.sections.platformRole.intro}
                  </p>
                  <p className="text-[18px] font-bold leading-[30px] tracking-[-0.5px] text-[#374151]">
                    {termsContent.sections.platformRole.emphasis}
                  </p>
                  <SectionList items={termsContent.sections.platformRole.items} />
                </section>
              </div>

              <section className="space-y-6">
                <h2 className="text-[30px] font-bold leading-9 tracking-[-0.005em] text-[#202326]">
                  {termsContent.sections.jobRules.title}
                </h2>

                <div className="space-y-6">
                  <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.5px] text-[#202326]">
                    {termsContent.sections.jobRules.customerTitle}
                  </h3>
                  <SectionList items={termsContent.sections.jobRules.customerItems} />
                </div>

                <div className="space-y-6">
                  <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.5px] text-[#202326]">
                    {termsContent.sections.jobRules.workerTitle}
                  </h3>
                  <SectionList items={termsContent.sections.jobRules.workerItems} />
                </div>
              </section>

              <section className="space-y-[22px]">
                <h2 className="text-[30px] font-bold leading-9 tracking-[-0.005em] text-[#202326]">
                  {termsContent.sections.payments.title}
                </h2>
                <p className="max-w-[825px] text-[18px] leading-[30px] tracking-[-0.5px] text-[#374151]">
                  {termsContent.sections.payments.intro}
                </p>

                <div className="bg-[#F0FDF4] px-7 py-6">
                  <p className="text-[18px] font-semibold leading-[22px] tracking-[-0.5px] text-[#202326]">
                    {termsContent.sections.payments.feeTitle}
                  </p>
                  <p className="mt-4 max-w-[844px] text-[18px] leading-[30px] tracking-[-0.5px] text-[#374151]">
                    {termsContent.sections.payments.feeDescription}
                  </p>
                </div>

                <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.005em] text-[#202326]">
                  {termsContent.sections.payments.processTitle}
                </h3>
                <SectionList items={termsContent.sections.payments.items} />
              </section>

              <section className="space-y-[19px]">
                <h2 className="text-[30px] font-bold leading-9 tracking-[-0.005em] text-[#202326]">
                  {termsContent.sections.disputes.title}
                </h2>
                <p className="max-w-[838px] text-[18px] leading-[30px] tracking-[-0.5px] text-[#374151]">
                  {termsContent.sections.disputes.intro}
                </p>
                <SectionList items={termsContent.sections.disputes.items} />
              </section>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
