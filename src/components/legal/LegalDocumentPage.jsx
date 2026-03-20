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

const formatDocumentDate = (value) => {
  if (!value) {
    return "Not published yet";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

const getDisplayTitle = (documentId, documentName, fallbackTitle) => {
  const normalizedName = String(documentName || "").trim();

  if (documentId === "terms-of-service" && /terms of service/i.test(normalizedName)) {
    return "Terms & Conditions";
  }

  return normalizedName || fallbackTitle || "Legal Document";
};

export default function LegalDocumentPage({ documentId }) {
  const definition = useMemo(
    () => getLegalDocumentDefinition(documentId),
    [documentId]
  );
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadDocument = async () => {
      setIsLoading(true);
      setError("");

      try {
        const currentDocument = await contentApi.getLegalDocument(documentId);

        if (ignore) {
          return;
        }

        setDocument(currentDocument);
      } catch (apiError) {
        if (ignore) {
          return;
        }

        setDocument(null);
        setError(
          apiError?.response?.status === 404
            ? "This legal document is currently unavailable."
            : getApiErrorMessage(apiError)
        );
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
  }, [documentId]);

  const title = getDisplayTitle(documentId, document?.name, definition?.title);
  const summary =
    definition?.summary || "Information about how Yard Heroes handles legal and compliance topics.";
  const layout = definition?.layout || "document";
  const isPrivacyLayout = layout === "privacy";
  const lastUpdated = formatDocumentDate(document?.updatedAt);
  const hasContent = hasMeaningfulLegalDocumentContent(document?.body);

  return (
    <section
      data-legal-document-id={documentId}
      data-legal-layout={layout}
      className={`legal-document-page min-h-screen px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${
        isPrivacyLayout
          ? "bg-[linear-gradient(180deg,#f6fbf7_0%,#edf7f0_38%,#f8fbf9_100%)]"
          : "bg-[linear-gradient(180deg,#f6fbf7_0%,#eef6f0_45%,#e8f1ea_100%)]"
      }`}
    >
      <div className={`mx-auto ${isPrivacyLayout ? "max-w-5xl" : "max-w-4xl"}`}>
        <header
          className={
            isPrivacyLayout
              ? "rounded-[2rem] bg-[linear-gradient(180deg,#eefcf2_0%,#e7f7ec_100%)] px-6 py-12 text-center sm:px-10"
              : "text-center"
          }
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#2f6b50]">
            Yard Heroes Legal
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#11261b] sm:text-[2.6rem]">
            {title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#5a6c61] sm:text-base">
            {summary}
          </p>
          {!isLoading && !error && hasContent ? (
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-[#708177]">
              Last Updated {lastUpdated}
            </p>
          ) : null}
        </header>

        <div
          className={`mt-10 ${
            isPrivacyLayout
              ? "bg-transparent px-0 py-0"
              : "bg-white px-6 py-8 sm:px-10 sm:py-10 lg:px-12"
          }`}
        >
          {isLoading ? (
            <div className="flex min-h-[320px] items-center justify-center text-sm text-[#53655a]">
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              Loading legal document...
            </div>
          ) : error ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center bg-[#eef7f0] text-[#0A3019]">
                <FileText className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-[#10231a]">{title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#53655a]">{error}</p>
            </div>
          ) : hasContent ? (
            <article
              className="legal-document-content"
              data-document-id={documentId}
              dangerouslySetInnerHTML={{
                __html: sanitizeLegalDocumentHtml(document?.body),
              }}
            />
          ) : (
            <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center bg-[#eef7f0] text-[#0A3019]">
                <FileText className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-[#10231a]">{title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#53655a]">
                This document exists, but no content has been published from the admin dashboard yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
