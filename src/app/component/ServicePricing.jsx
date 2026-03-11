"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Car,
  Droplets,
  Home,
  Leaf,
  Lightbulb,
  Scissors,
  Sparkles,
  Wind,
  Wrench,
} from "lucide-react";
import { contentApi } from "@/lib/api/content-api";
import { buildLoginPath } from "@/lib/auth/auth-redirect";
import { buildBookServicePath } from "@/lib/booking-service";
import { clonePricingCategories, formatPrice, normalizePricingCategories, PRICING_CONTENT_KEY } from "@/lib/pricing-content";
import { useAuthStore } from "@/stores/use-auth-store";

const ICON_COMPONENTS = {
  car: Car,
  droplets: Droplets,
  home: Home,
  leaf: Leaf,
  lightbulb: Lightbulb,
  scissors: Scissors,
  sparkles: Sparkles,
  wind: Wind,
  wrench: Wrench,
};

const ServiceCard = ({
  id,
  category,
  icon,
  title,
  price,
  duration,
  description,
  buttonText,
  buttonVariant = "primary",
  bookHref,
}) => {
  const IconComponent = ICON_COMPONENTS[icon] || Sparkles;

  return (
    <div className="flex flex-col p-6 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-lg">
        <IconComponent className="w-6 h-6 text-gray-700" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-3xl font-bold text-gray-900">${formatPrice(price)}</span>
        <span className="text-sm text-gray-500">starting</span>
      </div>
      <p className="mb-4 text-sm text-gray-500">{duration}</p>
      <p className="grow text-sm text-gray-600">{description}</p>

      <Link
        href={bookHref}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 font-medium transition-colors ${
          buttonVariant === "secondary"
            ? "border-2 border-green-800 bg-white text-green-800 hover:bg-green-50"
            : "bg-green-800 text-white hover:bg-green-900"
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

const ServicePricing = () => {
  const [categories, setCategories] = useState(() => clonePricingCategories());
  const [activeTab, setActiveTab] = useState("yard");
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    let ignore = false;

    const loadPricingContent = async () => {
      setIsLoading(true);
      setLoadError("");

      try {
        const content = await contentApi.getContentByKey(PRICING_CONTENT_KEY);

        if (ignore) {
          return;
        }

        const nextCategories = normalizePricingCategories(content?.value?.categories);
        setCategories(nextCategories);
        setActiveTab((currentTab) =>
          nextCategories.some((category) => category.id === currentTab)
            ? currentTab
            : nextCategories[0]?.id || "yard"
        );
      } catch (apiError) {
        if (ignore) {
          return;
        }

        if (apiError?.response?.status !== 404) {
          setLoadError("Showing default pricing because live pricing could not be loaded.");
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadPricingContent();

    return () => {
      ignore = true;
    };
  }, []);

  const currentCategory =
    categories.find((category) => category.id === activeTab) || categories[0];

  if (!currentCategory) {
    return null;
  }

  return (
    <div className="bg-white">
      <main className="px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="mb-6 text-sm text-center text-gray-500">
              Loading latest pricing...
            </div>
          ) : null}

          {loadError ? (
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
              {loadError}
            </div>
          ) : null}

          <div className="flex flex-wrap justify-between gap-2 mb-8">
            {categories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-12 py-3 font-medium transition-all ${
                  activeTab === tab.id
                    ? "rounded-md border-2 border-green-800 bg-[#0A3019] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="animate-fadeIn">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">
                {currentCategory.title}
              </h2>
              <p className="text-gray-600">{currentCategory.subtitle}</p>
            </div>

            {currentCategory.services.length === 0 ? (
              <div className="rounded-lg border border-dashed border-gray-300 px-6 py-12 text-center text-sm text-gray-500">
                No pricing entries are available in this category yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentCategory.services.map((service) => {
                  const bookingPath = buildBookServicePath(service, currentCategory);
                  const bookHref = isAuthenticated
                    ? bookingPath
                    : buildLoginPath(bookingPath);

                  return (
                    <ServiceCard
                      key={service.id}
                      category={currentCategory}
                      bookHref={bookHref}
                      {...service}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ServicePricing;
