"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, FileText, LoaderCircle, Shield } from "lucide-react";
import { contentApi } from "@/lib/api/content-api";
import { getApiErrorMessage } from "@/lib/api/http";
import {
  LEGAL_DOCUMENTS,
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

const mapAvailableDocuments = (documents = []) =>
  documents
    .map((document) => {
      const definition = getLegalDocumentDefinition(document?.id);

      if (!definition) {
        return null;
      }

      return {
        ...definition,
        title: document?.name || definition.title,
      };
    })
    .filter(Boolean);

export default function LegalDocumentPage({ documentId }) {
  const definition = useMemo(
    () => getLegalDocumentDefinition(documentId),
    [documentId]
  );
  const [document, setDocument] = useState(null);
  const [availableDocuments, setAvailableDocuments] = useState(LEGAL_DOCUMENTS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadDocument = async () => {
      setIsLoading(true);
      setError("");

      try {
        const [currentDocument, legalDocuments] = await Promise.all([
          contentApi.getLegalDocument(documentId),
          contentApi.getLegalDocuments(),
        ]);

        if (ignore) {
          return;
        }

        setDocument(currentDocument);

        const nextAvailableDocuments = mapAvailableDocuments(legalDocuments);
        if (nextAvailableDocuments.length) {
          setAvailableDocuments(nextAvailableDocuments);
        }
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

  const title = document?.name || definition?.title || "Legal Document";
  const summary =
    definition?.summary || "Information about how Yard Heroes handles legal and compliance topics.";
  const lastUpdated = formatDocumentDate(document?.updatedAt);
  const hasContent = hasMeaningfulLegalDocumentContent(document?.body);

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#f7faf7_0%,#f2f8f4_52%,#edf5f0_100%)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(250,253,250,0.98)_100%)] p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-8">
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-[linear-gradient(180deg,#113521_0%,#0b2819_100%)] p-7 text-white">
                <div className="inline-flex bg-white/10 p-3">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7ecd8]">
                  Legal & Compliance
                </p>
                <h1 className="mt-4 text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.04em]">
                  {title}
                </h1>
                <p className="mt-5 text-[15px] leading-8 text-[#d9e9dc]">{summary}</p>
                <div className="mt-7 bg-white/[0.06] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d8c0]">
                    Last updated
                  </p>
                  <p className="mt-2 text-[1.05rem] font-medium text-white">{lastUpdated}</p>
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,#fbfdfb_0%,#f6faf7_100%)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5a6a60]">
                  Available documents
                </p>
                <div className="mt-4 space-y-3">
                  {availableDocuments.map((item) => {
                    const isActive = item.id === documentId;

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`flex items-start justify-between gap-3 px-4 py-4 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-white text-[#0f3a23]"
                            : "bg-white/88 text-[#334155] hover:bg-[#f7fbf8]"
                        }`}
                      >
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="mt-1 text-xs leading-5 text-inherit/75">
                            {item.summary}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfb_100%)] p-6 md:p-8 lg:p-10">
              {isLoading ? (
                <div className="flex min-h-[360px] items-center justify-center text-sm text-[#53655a]">
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Loading legal document...
                </div>
              ) : error ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center bg-[#fcfefd] px-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center bg-[#eef7f0] text-[#0A3019]">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-[#10231a]">{title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#53655a]">{error}</p>
                </div>
              ) : hasContent ? (
                <div>
                  <div className="mb-8 flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#607065]">
                        Published document
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#11261b]">
                        {title}
                      </h2>
                    </div>

                    <div className="bg-[#f7fbf8] px-4 py-2 text-sm text-[#4f6255]">
                      Updated {lastUpdated}
                    </div>
                  </div>

                  <article
                    className="legal-document-content"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeLegalDocumentHtml(document?.body),
                    }}
                  />
                </div>
              ) : (
                <div className="flex min-h-[360px] flex-col items-center justify-center bg-[#fcfefd] px-6 text-center">
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
        </div>
      </div>
    </section>
  );
}
