"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ServicePricing from "@/app/component/ServicePricing";
import Banner from "@/app/component/Banner";

const page = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const pricingPlans = [
    {
      name: "Pay Per Task",
      price: "$45",
      period: "per task",
      popular: false,
      features: [
        "Pay per completed task",
        "No subscription",
        "Instant booking",
        "Background-checked workers",
        "Money-back guarantee",
      ],
    },
    {
      name: "Monthly Plan",
      price: "$150",
      period: "per month",
      popular: true,
      features: [
        "Up to 4 tasks per month",
        "Priority scheduling",
        "Dedicated workers",
        "Save 15% vs per task",
        "24/7 customer support",
      ],
    },
    {
      name: "Annual Plan",
      price: "$65",
      period: "per month",
      popular: false,
      features: [
        "48 tasks per year",
        "Best value - save 30%",
        "Priority scheduling",
        "Dedicated workers",
        "Premium support",
      ],
    },
  ];

  const faqs = [
    {
      question: "Is there a minimum charge per project?",
      answer:
        "Yes, there is a minimum charge of $45 per project to ensure quality service and fair compensation for our workers.",
    },
    {
      question: "What will I actually be billed for payment?",
      answer:
        "You'll be billed for the service plan you choose plus any additional services requested. All prices are transparent and shown before you confirm.",
    },
    {
      question: "What if I'm not satisfied with my work?",
      answer:
        "After the job is completed, the worker must submit a photo of the finished work for review. If the work does not meet our quality standards, payment will not be released and another qualified worker will be assigned to complete the job.",
    },
    {
      question: "Do I have to pay separately from a subscription?",
      answer:
        "No, if you're on a monthly or annual plan, your tasks are included. You only pay separately if you exceed your plan's task limit.",
    },
    {
      question: "How can I communicate with the project?",
      answer:
        "You can communicate directly with your assigned worker through our app, via phone, or through our customer support team.",
    },
    {
      question: "Do workers bring their own tools and supplies?",
      answer:
        "Yes, all workers come equipped with professional-grade tools and supplies needed for the job. Any special materials will be discussed beforehand.",
    },
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Pricing Plans Section */}
      <div>
        <div
          className=" mx-auto px-4 py-16 text-center"
          style={{
            background: "linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 70.71%)",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple & Transparent Pricing
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Pay only for what you need, with no hidden fees.
          </p>

        </div>

        {/*===================================================== Pricing Cards =====================================================*/}
        <ServicePricing />

        {/*================================ FAQ Section ================================*/}
        <div className="max-w-4xl py-20 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 ">
            Pricing Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Find answers to common questions about our pricing.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* ================================Banner================================ */}
        <Banner/>
      </div>
    </div>
  );
};
export default page;
