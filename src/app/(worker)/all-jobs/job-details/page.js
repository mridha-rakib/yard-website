"use client";
import React, { useState } from "react";
import {
  Check,
  MapPin,
  Calendar,
  Clock,
  User,

  AlertCircle,
} from "lucide-react";
import { FaCaretRight } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";


const page = () => {
  const [jobStatus, setJobStatus] = useState("submitted");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Job Details</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8  rounded-full flex items-center justify-center">
            <img
              src="/user.png"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-700">Jake M.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Lawn Mowing & Trimming
              </h2>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex bg-[#dcfce7] px-4 py-1 rounded-full items-center gap-2 text-[#0A3019]">
                  <div className="w-3 h-3 rounded-full bg-[#0A3019]"></div>
                  <span className="font-medium">Accepted</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Saturday, Jan 11, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>10:00 AM - 12:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-5 h-5 mt-0.5 " />
                <span>Springfield, IL 62701</span>
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Customer Information
              </h3>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-sm">
                  1234 Maple Street, Springfield, IL 62701
                </span>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Job Description
              </h3>

              <div className="space-y-3">
                <p className="font-medium text-gray-900 mb-2">
                  Tasks Required:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="bg-[#0A3019] flex items-center justify-center w-4 h-4 rounded-full">
                      <Check className="w-3 h-3 text-white  " />
                    </div>
                    <span className="text-gray-700">
                      Mow front and back yard
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-[#0A3019] flex items-center justify-center w-4 h-4 rounded-full">
                      <Check className="w-3 h-3 text-white  " />
                    </div>
                    <span className="text-gray-700">
                      Edge around walkways and flower beds
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-[#0A3019] flex items-center justify-center w-4 h-4 rounded-full">
                      <Check className="w-3 h-3 text-white  " />
                    </div>
                    <span className="text-gray-700">
                      Trim bushes near front entrance
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-[#0A3019] flex items-center justify-center w-4 h-4 rounded-full">
                      <Check className="w-3 h-3 text-white  " />
                    </div>
                    <span className="text-gray-700">
                      Clean up grass clippings
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">
                  Yard Details:
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_89_3371)">
                        <path
                          d="M0.00546875 12.8215C0.0738281 13.4832 0.631641 14 1.3125 14H3.9375H12.6875C13.4121 14 14 13.4121 14 12.6875V10.0625C14 9.33789 13.4121 8.75 12.6875 8.75H11.375V10.9375C11.375 11.1781 11.1781 11.375 10.9375 11.375C10.6969 11.375 10.5 11.1781 10.5 10.9375V8.75H8.75V10.9375C8.75 11.1781 8.55313 11.375 8.3125 11.375C8.07187 11.375 7.875 11.1781 7.875 10.9375V8.75H6.125V10.9375C6.125 11.1781 5.92812 11.375 5.6875 11.375C5.44688 11.375 5.25 11.1781 5.25 10.9375V8.75H3.0625C2.82188 8.75 2.625 8.55313 2.625 8.3125C2.625 8.07187 2.82188 7.875 3.0625 7.875H5.25V6.125H3.0625C2.82188 6.125 2.625 5.92812 2.625 5.6875C2.625 5.44688 2.82188 5.25 3.0625 5.25H5.25V3.5H3.0625C2.82188 3.5 2.625 3.30312 2.625 3.0625C2.625 2.82188 2.82188 2.625 3.0625 2.625H5.25V1.3125C5.25 0.587891 4.66211 0 3.9375 0H1.3125C0.587891 0 0 0.587891 0 1.3125V10.0625V12.6875C0 12.734 0.00273437 12.7777 0.00546875 12.8215Z"
                          fill="#9CA3AF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_89_3371">
                          <path d="M0 0H14V14H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="text-gray-500">
                      Medium yard (0.25 acres)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_89_3377)">
                        <path
                          d="M5.75859 0.161328L1.69531 4.63203C1.58867 4.74687 1.53125 4.9 1.53125 5.05586C1.53125 5.40586 1.81289 5.6875 2.16289 5.6875H2.84375L0.836719 7.69453C0.721875 7.80937 0.65625 7.96797 0.65625 8.13203C0.65625 8.47383 0.932422 8.75 1.27422 8.75H2.1875L0.147656 11.1973C0.0519531 11.3121 0 11.457 0 11.6074C0 11.9629 0.287109 12.25 0.642578 12.25H5.25V13.125C5.25 13.609 5.64102 14 6.125 14C6.60898 14 7 13.609 7 13.125V12.25H11.6074C11.9629 12.25 12.25 11.9629 12.25 11.6074C12.25 11.457 12.198 11.3121 12.1023 11.1973L10.0625 8.75H10.9758C11.3176 8.75 11.5938 8.47383 11.5938 8.13203C11.5938 7.96797 11.5281 7.80937 11.4133 7.69453L9.40625 5.6875H10.0871C10.4344 5.6875 10.7188 5.40586 10.7188 5.05586C10.7188 4.9 10.6613 4.74687 10.5547 4.63203L6.49141 0.161328C6.39844 0.0574219 6.26445 0 6.125 0C5.98555 0 5.85156 0.0574219 5.75859 0.161328Z"
                          fill="#9CA3AF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_89_3377">
                          <path d="M0 0H12.25V14H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="text-gray-500">
                      Some trees and obstacles
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-1">Special Notes:</p>
                <p className="text-sm text-gray-700">
                  Please be careful around the new flower bed on the left side
                  of the house. The gate to the backyard is unlocked. Tools are
                  available in the garage if needed.
                </p>
              </div>
            </div>

            {/* Yard Photos */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Yard Photos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="aspect-video  rounded-lg overflow-hidden">
                  <img
                    src="/div.png"
                    alt="Front yard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video  rounded-lg overflow-hidden">
                  <img
                    src="/yardimg.png"
                    alt="House view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video  rounded-lg overflow-hidden relative">
                  <img
                    src="/yard2.png"
                    alt="Lawn area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Breakdown */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Job Payment</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Platform Fee (12%)</span>
                  <span className="font-medium text-[#DC2626]">-$12.00</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">
                      Your Earnings
                    </span>
                    <span className="text-2xl font-bold text-[#0A3019]">
                      $88.00
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 text-sm text-gray-600 bg-[#f0fdf4] p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <p>
                  Payment will be processed within 24 hours after completion
                </p>
              </div>

              {/* <button className="w-full mt-4 bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-800 transition-colors">
                Call
              </button> */}
            </div>

            {/* Job Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Job Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#0A3019] flex items-center justify-center">
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Submitted</p>
                    <p className="text-xs text-gray-500">
                      Jan 8, 2025 at 2:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#0A3019] flex items-center justify-center">
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Accepted</p>
                    <p className="text-xs text-gray-500">
                      Jan 8, 2025 at 6:15 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white"></div>
                  <div>
                    <p className="font-medium text-gray-400">In Progress</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white"></div>
                  <div>
                    <p className="font-medium text-gray-400">Completed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white"></div>
                  <div>
                    <p className="font-medium text-gray-400">Paid</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#0A3019] mb-4">
                Actions
              </h3>
              <button className="w-full bg-[#0A3019] text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                <FaCaretRight size={20} />
                Start Job
              </button>
            </div>

            {/* Help */}
            <div className="bg-[#fef2f2] rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                If you have any issues or safety concerns, don't hesitate to
                contact our support team.
              </p>
              <button className="w-full border border-gray-300 text-[#B91C1C] py-2 px-4 rounded-lg font-medium  flex items-center justify-center gap-2">
                <BiSupport className="w-5 h-5" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
