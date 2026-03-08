"use client";
import {
  FileText,
  Shield,
  AlertCircle,
  DollarSign,
  Award,
  Scale,
  DoorClosed,
} from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-[#ecfdf5] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A3019] mb-4">
              Terms & Conditions
            </h1>
            <p className="text-[#4B5563] text-lg">
              Please read these terms and conditions carefully before using our
              platform
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <section className="mb-12 bg-white rounded-2xl">
            <div className="flex items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  1. Introduction
                </h2>
              </div>
            </div>
            <div className=" text-gray-700 ">
              <p>
                Welcome to Handera. These terms and conditions outline the rules
                and regulations for the use of our platform. By accessing or
                using our services, you accept these terms and conditions in
                full. If you disagree with these terms and conditions or any
                part of these terms and conditions, you must not use our
                platform.
              </p>
              <p>
                We reserve the right to update or modify these terms and
                conditions at any time without prior notice. Your continued use
                of the platform following any such modifications constitutes
                your acceptance of such changes. We recommend that you review
                these terms and conditions periodically for any updates or
                changes.
              </p>
            </div>
          </section>

          {/* Section 2: Eligibility & Account Responsibility */}
          <section className="mb-12 bg-white ">
            <div className="flex items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  2. Eligibility & Account Responsibility
                </h2>
              </div>
            </div>
            <div className=" text-gray-700 ">
              <p className="font-semibold text-gray-900">
                To use our platform, you must meet the following eligibility
                criteria and agree to maintain the security of your account:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    You must be at least 18 years of age or have
                    parental/guardian consent
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Provide accurate, current, and complete information during
                    registration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Maintain and update your account information as necessary
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>Keep your password secure and confidential</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Accept all responsibility for any activities that occur
                    under your account
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Notify us immediately of any unauthorized use of your
                    account
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Platform Rules */}
          <section className="mb-12 bg-white ">
            <div className="flex items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  3. Platform Rules
                </h2>
              </div>
            </div>
            <div className=" text-gray-700 ">
              <p className="font-semibold text-gray-900">
                You agree to use our platform in accordance with all applicable
                laws and regulations and to not engage in any of the following
                prohibited activities:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className=" mr-3 mt-1">•</span>
                  <span>
                    Use the platform for any illegal or unauthorized purpose
                  </span>
                </li>
                <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                  <span>
                    Post or transmit any content that infringes on intellectual
                    property rights
                  </span>
                </li>
                <li className="flex items-start">
                                      <span className=" mr-3 mt-1">•</span>

                  <span>
                    Harass, abuse, or harm other users of the platform
                  </span>
                </li>
                <li className="flex items-start">
                                      <span className=" mr-3 mt-1">•</span>

                  <span>
                    Attempt to gain unauthorized access to any part of the
                    platform
                  </span>
                </li>
                <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                  <span>
                    Use any automated means to access or collect data from the
                    platform
                  </span>
                </li>
                <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                  <span>Post false, misleading, or fraudulent content</span>
                </li>
                <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                  <span>
                    Interfere with or disrupt the platform or servers connected
                    to the platform
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Job Posting & Acceptance Rules */}
          <section className="mb-12 bg-white 0">
            <div className="flex items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  4. Job Posting & Acceptance Rules
                </h2>
              </div>
            </div>
            <div className=" text-gray-700 ">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">For Customers:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                    <span>
                      Provide accurate and detailed job descriptions,
                      requirements, payment terms, and dates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                    <span>
                      Ensure all information provided is truthful and not
                      misleading
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                    <span>
                      Respond promptly to worker inquiries and applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                    <span>
                      Honor all agreements made with workers through the
                      platform
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className=" mr-3 mt-1">•</span>
                    <span>Make timely payments for completed work</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">For Workers:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Only apply for jobs you are qualified to complete
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Provide accurate information about your skills and
                      experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Honor commitments once you accept a job</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Complete work to the best of your ability and on time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>
                      Communicate professionally with customers at all times
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Payments & Platform Fees */}
          <section className="mb-12 bg-white ">
            <div className="flex items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  5. Payments & Platform Fees
                </h2>
              </div>
            </div>
            <div className=" text-gray-700 mt-2 ">
              <p>
                All payments made through the platform are subject to our
                payment processing fees. Payment terms and fee structures will
                be clearly communicated before any transaction is completed.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-5 rounded">
                <h3 className="font-bold text-gray-900 mb-3">Platform Fee:</h3>
                <p className="mb-3">
                  We charge a service fee for the use of our platform's
                  features. This fee covers costs associated with maintaining
                  and improving the platform, customer support, and secure
                  payment processing.
                </p>
                <p className="text-sm text-gray-600">
                  Fee percentages and structures are subject to change with
                  advance notice to users.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-3">
                  Payment Process:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">→</span>
                    <span>
                      Customers fund jobs upfront through our secure escrow
                      system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">→</span>
                    <span>
                      Funds are held securely until work is completed and
                      verified
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">→</span>
                    <span>
                      Workers receive payment after job completion and customer
                      approval
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">→</span>
                    <span>
                      Disputes must be reported within 48 hours of job
                      completion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">→</span>
                    <span>
                      All transactions are processed through authorized payment
                      gateways
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">→</span>
                    <span>
                      Refund policies vary based on the stage of job completion
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Job Completion & Disputes */}
          <section className="mb-12 bg-white ">
            <div className="flex items-start mb-6">

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  6. Job Completion & Disputes
                </h2>
              </div>
            </div>
            <div className=" text-gray-700 ">
              <p className="font-semibold text-gray-900">
                When disputes arise between customers and workers, our platform
                provides a structured resolution process to ensure fair outcomes
                for both parties:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Jobs are considered complete once the customer approves the
                    work or the dispute resolution period has passed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Either party may initiate a dispute within 48 hours of job
                    completion
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Disputes must include detailed evidence and documentation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Our support team will review all evidence and make a fair
                    decision
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Platform decisions on disputes are final and binding
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Repeated disputes or violations may result in account
                    suspension
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Users agree to cooperate fully during the dispute resolution
                    process
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>
                    Resolution timeframes vary based on complexity but typically
                    conclude within 5-7 business days
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default page;
