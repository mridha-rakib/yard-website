"use client";
import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Clock,
  CreditCard,
  ChevronRight,
  WalletMinimal,
  Check,
} from "lucide-react";
import Link from "next/link";
import { FaClock, FaWallet } from "react-icons/fa";

const page = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const earningsData = [
    {
      id: 1,
      service: "Lawn Mowing",
      date: "Jan 15, 2025",
      jobPayment: "$100.00",
      fee: "$12.00",
      status: "Paid",
      color: "emerald",
    },
    {
      id: 2,
      service: "Snow Removal",
      date: "Jan 12, 2025",
      jobPayment: "$80.00",
      fee: "$10.00",
      status: "Paid",
      color: "blue",
    },
    {
      id: 3,
      service: "Gutter Shampooing",
      date: "Jan 10, 2025",
      jobPayment: "$150.00",
      fee: "$18.00",
      status: "Pending",
      color: "amber",
    },
    {
      id: 4,
      service: "Hedge Trimming",
      date: "Jan 8, 2025",
      jobPayment: "$95.00",
      fee: "$11.40",
      status: "Paid",
      color: "purple",
    },
    {
      id: 5,
      service: "Yard Cleanup",
      date: "Jan 5, 2025",
      jobPayment: "$120.00",
      fee: "$14.40",
      status: "Pending",
      color: "rose",
    },
  ];

  const getStatusColor = (status) => {
    return status === "Paid"
      ? "text-emerald-600 bg-emerald-50"
      : "text-amber-600 bg-amber-50";
  };

  const getServiceIcon = (color) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-600",
      blue: "bg-blue-100 text-blue-600",
      amber: "bg-amber-100 text-amber-600",
      purple: "bg-purple-100 text-purple-600",
      rose: "bg-rose-100 text-rose-600",
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">
            Earnings & Payments
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track your earnings and view past jobs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  lg:p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Balance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-[#e7ebe8] rounded-xl flex items-center justify-center">
                <FaWallet className="w-4 h-4 text-[#0A3019]" />
              </div>
              <span className="text-sm text-gray-600">Total Balance</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">$1,847</p>
            <p className="text-xs text-gray-500 mt-1">Available to withdraw</p>
          </div>

          {/* Pending Balance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#dcfce7] rounded-xl flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">Pending Balance</span>
            </div>
            <p className="text-3xl font-bold text-emerald-600">$352</p>
            <p className="text-xs text-gray-500 mt-1">Being processed</p>
          </div>

          {/* This Month */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#fef3c7] rounded-md flex items-center justify-center">
                <FaClock className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-sm text-gray-600">This Month</span>
            </div>
            <p className="text-3xl font-bold text-amber-600">$176</p>
            <p className="text-xs text-gray-500 mt-1">Earned this month</p>
          </div>
        </div>

        {/* Fee Breakdown Card */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #0A3019 0%, rgba(10, 48, 25, 0.9) 70.71%)",
          }}
          className=" rounded-xl shadow-lg p-6 text-white"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                You keep 88% of every job
              </h3>
              <p className="text-emerald-100 text-sm">
                We charge a low 12% platform fee to keep our service running
              </p>
            </div>
            <div className="text-right w-36 md:w-48 h-24 md:h-48 bg-[#335340] flex flex-col rounded-full border-2 border-[#5a7465] justify-center items-center">
              <p className=" text-sm md:text-5xl font-bold">88%</p>
              <p className="text-emerald-200 text-sm mt-1">Your earnings</p>
            </div>
          </div>

          <div className="bg-[#335340] w-full md:w-1/2 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-emerald-100">Sample Breakdown:</span>
            </div>
            <div className="flex justify-between">
              <span>Job Payment</span>
              <span className="font-semibold">$100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee (12%)</span>
              <span className="font-semibold">-$12.00</span>
            </div>
            <div className="border-t border-emerald-700 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold">You Receive</span>
                <span className="font-bold text-lg text-emerald-300">
                  $88.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Payment Methods
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Payments are fast, safe and available. Choose your preferred method
            in your profile settings.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Cash App */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-emerald-600">$</span>
              </div>
              <p className="font-medium text-gray-900 text-sm">Cash App</p>
              <p className="text-xs text-gray-500">Instant transfer</p>
            </div>

            {/* Venmo */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-blue-600">V</span>
              </div>
              <p className="font-medium text-gray-900 text-sm">Venmo</p>
              <p className="text-xs text-gray-500">Instant transfer</p>
            </div>

            {/* Zelle */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-500 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-purple-600">Z</span>
              </div>
              <p className="font-medium text-gray-900 text-sm">Zelle</p>
              <p className="text-xs text-gray-500">Bank transfer</p>
            </div>

            {/* PayPal */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-indigo-600">P</span>
              </div>
              <p className="font-medium text-gray-900 text-sm">PayPal</p>
              <p className="text-xs text-gray-500">Secure payment</p>
            </div>
          </div>
        </div>

        {/* Earnings History */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Earnings History
            </h3>
            <p className="text-sm text-gray-500">
              View your completed jobs and payment status
            </p>
          </div>

          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="col-span-3">Job Type</div>
            <div className="col-span-2">Date Completed</div>
            <div className="col-span-2">Job Payment</div>
            <div className="col-span-2">Your Earnings</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {earningsData.map((item) => (
              <div
                key={item.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                {/* Mobile Layout */}
                <div className="md:hidden space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${getServiceIcon(item.color)} rounded-lg flex items-center justify-center`}
                      >
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.service}
                        </p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Payment:</span>
                    <span className="font-semibold text-gray-900">
                      {item.jobPayment}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Your earnings:</span>
                    <span className="font-semibold text-gray-900">
                      {item.fee}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-3 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${getServiceIcon(item.color)} rounded-lg flex items-center justify-center shrink-0`}
                    >
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-900">
                      {item.service}
                    </span>
                  </div>
                  <div className="col-span-2 text-gray-600 text-sm">
                    {item.date}
                  </div>
                  <div className="col-span-2 font-medium text-gray-900">
                    {item.jobPayment}
                  </div>
                  <div className="col-span-2 font-medium text-gray-900">
                    {item.fee}
                  </div>
                  <div className="col-span-2">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <Link
                      href={"/payment/payment-details"}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
