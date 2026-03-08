"use client";
import React, { useState } from "react";
import { MapPin, Calendar, User, Clock, Plus } from "lucide-react";
import Link from "next/link";

const JobCard = ({ job }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      "In Progress": { bg: "bg-blue-100", text: "text-blue-700", icon: "▶" },
      Completed: { bg: "bg-green-100", text: "text-green-700", icon: "✓" },
      Assigned: { bg: "bg-purple-100", text: "text-purple-700", icon: "👤" },
      Paid: { bg: "bg-gray-100", text: "text-gray-700", icon: "💳" },
      Pending: { bg: "bg-yellow-100", text: "text-yellow-700", icon: "⏳" },
    };

    const config = statusConfig[status] || statusConfig["Pending"];
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
      >
        <span>{config.icon}</span>
        {status}
      </span>
    );
  };

  const getPriceDisplay = (price) => {
    if (typeof price === "string") return price;
    return `$${price}`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
        {getStatusBadge(job.status)}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{job.address}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Submitted on {job.date}</span>
        </div>
      </div>

      {job.worker && (
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <span className="text-sm text-gray-700">{job.worker}</span>
        </div>
      )}

      {job.note && (
        <div className="flex items-start gap-2 mb-4 pb-4 border-b border-gray-100">
          <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
          <span className="text-sm text-gray-600">{job.note}</span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {job.priceLabel || "Total"}:{" "}
          <span className="font-semibold text-gray-900">
            {getPriceDisplay(job.price)}
          </span>
        </span>
        {job.action && (
       <Link href="booking-details" >
       
            <button
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              job.action.variant === "primary"
                ? "bg-green-800 text-white hover:bg-green-900"
                : job.action.variant === "secondary"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "text-green-800 hover:text-green-900"
            }`}
          >
            {job.action.text}
          </button>
       </Link>
        )}
      </div>
    </div>
  );
};

export default function MyJobsPage() {
  const [jobs] = useState([
    {
      id: 1,
      title: "Lawn Mowing & Edging",
      address: "123 Oak Street, Springfield",
      date: "March 20, 2025",
      status: "In Progress",
      worker: "Mike Johnson - Professional Landscaper",
      price: 45.0,
      action: { text: "View Job Details", variant: "primary" },
    },
    {
      id: 2,
      title: "Yard Cleanup & Leaf Removal",
      address: "456 Maple Avenue, Springfield",
      date: "March 15, 2025",
      status: "Completed",
      price: 75.0,
      priceLabel: "Total",
      action: { text: "Review", variant: "secondary" },
    },
    {
      id: 3,
      title: "Garden Bed Weeding",
      address: "789 Elm Road, Springfield",
      date: "March 18, 2025",
      status: "Assigned",
      worker: "Sarah Williams - Garden Specialist",
      price: 55.0,
      action: { text: "View Job Details", variant: "primary" },
    },
    {
      id: 4,
      title: "Hedge Trimming",
      address: "321 Pine Lane, Springfield",
      date: "March 1, 2025",
      status: "Paid",
      price: "Paid $65 on March 5, 2025",
      priceLabel: "Work Received",
      action: { text: "Rate Work", variant: "primary" },
    },
    {
      id: 5,
      title: "Spring Garden Setup",
      address: "555 Birch Street, Springfield",
      date: "February 28, 2025",
      status: "Pending",
      note: "Finding a worker for you...",
      price: "Finding Worker",
      priceLabel: "",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl flex items-center justify-center  mx-auto px-6 py-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">My Jobs</h1>
            <p className="text-sm text-gray-600 mt-1">
              Track and manage your jobs and requests
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Job Cards */}
        <div className="mb-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Book New Work Button */}
        <div className="flex justify-center">
          <Link href={"/booking-details"}>
            <button className="flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-950 transition-colors">
              <Plus className="w-5 h-5" />
              Book New Yard Work
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
