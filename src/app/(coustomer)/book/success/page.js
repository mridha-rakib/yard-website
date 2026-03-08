"use client";
import React from "react";
import {
  CheckCircle,
  Clock,
  User,
  ClipboardCheck,
  CreditCard,
  DollarSign,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  const jobDetails = {
    jobType: "Lawn Mowing & Trimming",
    address: "123 Oak Street, Springfield",
    scheduledDate: "Saturday, Jan 18 at 10:00 AM",
    estimatedTime: "1-2 hours",
    budget: "$75 - $100",
  };

  const processSteps = [
    {
      step: 1,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_4520)">
            <path
              d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5ZM6.5 11C7.09095 11 7.67611 10.8836 8.22208 10.6575C8.76804 10.4313 9.26412 10.0998 9.68198 9.68198C10.0998 9.26412 10.4313 8.76804 10.6575 8.22208C10.8836 7.67611 11 7.09095 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11Z"
              fill="#2563EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_4520">
              <path d="M0 0H16V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "We Review",
      description:
        "We review your request and match you with qualified workers.",
      status: "pending",
      bgColor: "#dbeafe",
    },
    {
      step: 2,
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_4531)">
            <path
              d="M3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4C11 5.06087 10.5786 6.07828 9.82843 6.82843C9.07828 7.57857 8.06087 8 7 8C5.93913 8 4.92172 7.57857 4.17157 6.82843C3.42143 6.07828 3 5.06087 3 4ZM0 15.0719C0 11.9937 2.49375 9.5 5.57188 9.5H8.42813C11.5063 9.5 14 11.9937 14 15.0719C14 15.5844 13.5844 16 13.0719 16H0.928125C0.415625 16 0 15.5844 0 15.0719ZM19.5312 5.53125L15.5312 9.53125C15.2375 9.825 14.7625 9.825 14.4719 9.53125L12.4719 7.53125C12.1781 7.2375 12.1781 6.7625 12.4719 6.47188C12.7656 6.18125 13.2406 6.17813 13.5312 6.47188L15 7.94063L18.4688 4.46875C18.7625 4.175 19.2375 4.175 19.5281 4.46875C19.8188 4.7625 19.8219 5.2375 19.5281 5.52812L19.5312 5.53125Z"
              fill="#16A34A"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_4531">
              <path d="M0 0H20V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Worker Matched",
      description: "A worker will be assigned and will contact you shortly.",
      status: "pending",
      bgColor: "#dcfce7",
    },
    {
      step: 3,
      icon: (
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_4543)">
            <path
              d="M12.9219 7.42188C12.0406 7.57188 11.1031 7.30938 10.4219 6.62813L9.23125 5.4375C8.7625 4.96875 8.5 4.3375 8.5 3.675V3.29688L6.00938 1.9375C5.84375 1.84687 5.74062 1.66875 5.75 1.47812C5.75938 1.2875 5.87187 1.11875 6.04688 1.04062L7.52187 0.384375C8.09688 0.13125 8.71875 0 9.35 0H9.91562C11.0625 0 12.1656 0.4375 13 1.22187L14.3938 2.53437C15.15 3.24687 15.4313 4.275 15.225 5.22188L15.7188 5.71875L15.9688 5.46875C16.2625 5.175 16.7375 5.175 17.0281 5.46875L17.7781 6.21875C18.0719 6.5125 18.0719 6.9875 17.7781 7.27812L15.0281 10.0281C14.7344 10.3219 14.2594 10.3219 13.9688 10.0281L13.2188 9.27812C12.925 8.98438 12.925 8.50937 13.2188 8.21875L13.4688 7.96875L12.9219 7.42188ZM0.85625 11.7844L8.15312 5.70625C8.2625 5.85938 8.3875 6.00625 8.52188 6.14375L9.7125 7.33437C9.9 7.52187 10.1 7.68437 10.3125 7.825L4.21562 15.1438C3.7625 15.6875 3.09063 16 2.38438 16C1.06563 16 0 14.9313 0 13.6156C0 12.9094 0.315625 12.2375 0.85625 11.7844Z"
              fill="#9333EA"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_4543">
              <path d="M0 0H18V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Work Completed",
      description: "Worker arrives and completes the job to your satisfaction.",
      status: "pending",
      bgColor: "#f3e8ff",
    },
    {
      step: 4,
      icon: (
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_4553)">
            <path
              d="M2 1C0.896875 1 0 1.89688 0 3V4H18V3C18 1.89688 17.1031 1 16 1H2ZM18 7H0V13C0 14.1031 0.896875 15 2 15H16C17.1031 15 18 14.1031 18 13V7ZM3.5 11H5.5C5.775 11 6 11.225 6 11.5C6 11.775 5.775 12 5.5 12H3.5C3.225 12 3 11.775 3 11.5C3 11.225 3.225 11 3.5 11ZM7 11.5C7 11.225 7.225 11 7.5 11H11.5C11.775 11 12 11.225 12 11.5C12 11.775 11.775 12 11.5 12H7.5C7.225 12 7 11.775 7 11.5Z"
              fill="#CA8A04"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_4553">
              <path d="M0 0H18V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Payment",
      description: "Pay only after the job is completed successfully.",
      status: "pending",
      bgColor: "#fef9c3",
    },
  ];

  const peaceOfMind = [
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_4565)">
            <path
              d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0ZM8.00001 2.0875V13.9C12.3125 11.8125 13.4719 7.19062 13.5 4.41875L8.00001 2.0875Z"
              fill="#16A34A"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_4565">
              <path d="M0 0H16V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "No Payment Required",
      description:
        "You only pay after the job is successfully completed to your satisfaction.",
      bgColor: "#dcfce7",
    },
    {
      icon: (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_4574)">
            <path
              d="M7.00001 0C6.44689 0 6.00001 0.446875 6.00001 1V1.6C3.71876 2.0625 2.00001 4.08125 2.00001 6.5V7.0875C2.00001 8.55625 1.45939 9.975 0.484387 11.075L0.253137 11.3344C-0.00936282 11.6281 -0.0718628 12.05 0.0875122 12.4094C0.246887 12.7688 0.606262 13 1.00001 13H13C13.3938 13 13.75 12.7688 13.9125 12.4094C14.075 12.05 14.0094 11.6281 13.7469 11.3344L13.5156 11.075C12.5406 9.975 12 8.55937 12 7.0875V6.5C12 4.08125 10.2813 2.0625 8.00001 1.6V1C8.00001 0.446875 7.55314 0 7.00001 0ZM8.41564 15.4156C8.79064 15.0406 9.00001 14.5312 9.00001 14H7.00001H5.00001C5.00001 14.5312 5.20939 15.0406 5.58439 15.4156C5.95939 15.7906 6.46876 16 7.00001 16C7.53126 16 8.04064 15.7906 8.41564 15.4156Z"
              fill="#2563EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_4574">
              <path d="M0 0H14V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Stay Informed",
      description:
        "Track the worker's progress in real-time & communicate directly.",
      bgColor: "#dbeafe",
    },
    {
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 16H0V0H20V16Z" stroke="#E5E7EB" />
          <path
            d="M10.1062 2.6625L7.08125 5.1125C6.57812 5.51875 6.48125 6.25 6.8625 6.77187C7.26562 7.32812 8.05 7.4375 8.59062 7.01562L11.6938 4.60313C11.9125 4.43438 12.225 4.47188 12.3969 4.69063C12.5688 4.90938 12.5281 5.22188 12.3094 5.39375L11.6562 5.9L16 9.9V4H15.9781L15.8562 3.92188L13.5875 2.46875C13.1094 2.1625 12.55 2 11.9812 2C11.3 2 10.6375 2.23437 10.1062 2.6625ZM10.8188 6.55L9.20312 7.80625C8.21875 8.575 6.79063 8.375 6.05312 7.3625C5.35938 6.40938 5.53437 5.07812 6.45 4.3375L9.05 2.23438C8.6875 2.08125 8.29688 2.00312 7.9 2.00312C7.3125 2 6.74062 2.175 6.25 2.5L4 4V11H4.88125L7.7375 13.6062C8.35 14.1656 9.29688 14.1219 9.85625 13.5094C10.0281 13.3187 10.1438 13.0969 10.2031 12.8656L10.7344 13.3531C11.3438 13.9125 12.2937 13.8719 12.8531 13.2625C12.9937 13.1094 13.0969 12.9312 13.1625 12.7469C13.7688 13.1531 14.5938 13.0687 15.1031 12.5125C15.6625 11.9031 15.6219 10.9531 15.0125 10.3938L10.8188 6.55ZM0.5 4C0.225 4 0 4.225 0 4.5V11C0 11.5531 0.446875 12 1 12H2C2.55312 12 3 11.5531 3 11V4H0.5ZM1.5 10C1.63261 10 1.75979 10.0527 1.85355 10.1464C1.94732 10.2402 2 10.3674 2 10.5C2 10.6326 1.94732 10.7598 1.85355 10.8536C1.75979 10.9473 1.63261 11 1.5 11C1.36739 11 1.24021 10.9473 1.14645 10.8536C1.05268 10.7598 1 10.6326 1 10.5C1 10.3674 1.05268 10.2402 1.14645 10.1464C1.24021 10.0527 1.36739 10 1.5 10ZM17 4V11C17 11.5531 17.4469 12 18 12H19C19.5531 12 20 11.5531 20 11V4.5C20 4.225 19.775 4 19.5 4H17ZM18 10.5C18 10.3674 18.0527 10.2402 18.1464 10.1464C18.2402 10.0527 18.3674 10 18.5 10C18.6326 10 18.7598 10.0527 18.8536 10.1464C18.9473 10.2402 19 10.3674 19 10.5C19 10.6326 18.9473 10.7598 18.8536 10.8536C18.7598 10.9473 18.6326 11 18.5 11C18.3674 11 18.2402 10.9473 18.1464 10.8536C18.0527 10.7598 18 10.6326 18 10.5Z"
            fill="#9333EA"
          />
        </svg>
      ),
      title: "Safe & Trustworthy",
      description: "All workers are background-checked and fully insured.",
      bgColor: "#f3e8ff",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <svg
              width="32"
              height="36"
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_39_4481)">
                <path
                  d="M30.8391 7.41094C31.718 8.28984 31.718 9.71719 30.8391 10.5961L12.8391 28.5961C11.9602 29.475 10.5328 29.475 9.65393 28.5961L0.653931 19.5961C-0.224976 18.7172 -0.224976 17.2898 0.653931 16.4109C1.53284 15.532 2.96018 15.532 3.83909 16.4109L11.25 23.8148L27.661 7.41094C28.5399 6.53203 29.9672 6.53203 30.8461 7.41094H30.8391Z"
                  fill="#16A34A"
                />
              </g>
              <defs>
                <clipPath id="clip0_39_4481">
                  <path d="M0 0H31.5V36H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-[#202326] mb-3">
            Job Request Submitted Successfully!
          </h1>
          <p className="text-[#4B5563] text-lg">
            We've received your request and are matching you with a local
            worker.
          </p>
        </div>

        {/* ================================================Job Summary Card================================================ */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Summary</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Job Type</p>
              <p className="font-semibold text-gray-900">
                {jobDetails.jobType}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Estimated Time</p>
              <p className="font-semibold text-gray-900">
                {jobDetails.estimatedTime}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Address</p>
              <p className="font-semibold text-gray-900">
                {jobDetails.address}
              </p>
            </div>
            <div>
              =================================
              <p className="text-sm text-gray-600 mb-1">Budget</p>
              <p className="font-semibold text-gray-900">{jobDetails.budget}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
              <Clock className="w-5 h-5 shrink-0" />
              <span className="font-medium text-sm">
                Pending — Pending to worker
              </span>
            </div>
          </div>
        </div>

        {/*========================================= What Happens Next========================================= */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold  text-[#202326] mb-36 text-center">
            What Happens Next
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div
                    style={{ backgroundColor: step.bgColor }}
                    className={`w-14 h-14  rounded-full flex items-center justify-center mx-auto ${
                      step.step === 1 ? " text-white" : " text-gray-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div
                    className={`absolute -top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${
                      step.step === 1
                        ? "bg-[#0A3019] text-white"
                        : "bg-[#E5E7EB] text-white"
                    }`}
                  >
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =================================Peace of Mind =================================*/}
        <div className="bg-[#f0fdf4] rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Peace of Mind
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {peaceOfMind.map((item, index) => (
              <div
                key={index}
                className={`${item.color}  rounded-xl p-6 text-center`}
              >
                <div
                   style={{ backgroundColor: item.bgColor }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#202326] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*================================= Action Buttons================================= */}
        <div className="flex flex-col justify-center items-center sm:flex-row gap-4 my-8">
          <Link href={"/myjobs"}>
            <button className="flex-1 bg-[#0A3019] text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              View My Jobs
            </button>
          </Link>
          <button className=" bg-white text-gray-900 py-4 px-6 rounded-lg font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-colors">
            Book Another Job
          </button>
        </div>

        {/* Need Help Section */}
        <div className="border-gray-200 border-2 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Contact our support team for any questions or if you need
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:support@yardcare.com"
              className="flex items-center gap-2 text-gray-900 hover:text-green-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">support@yardcare.com</span>
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-gray-900 hover:text-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
