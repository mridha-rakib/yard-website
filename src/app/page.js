import Link from "next/link";
import React from "react";
import {
  FaCalendarCheck,
  FaDollarSign,
  FaCheck,
  FaClock,
  FaStar,
} from "react-icons/fa";
import { RiPoliceBadgeFill } from "react-icons/ri";

import { MdLocalPolice } from "react-icons/md";
import Banner from "./component/Banner";
import { Leaf, Scissors, Sparkles, Trees } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* --- Hero Section --- */}
      <section className="bg-emerald-50/50 px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-emerald-950 pr-6">
              Fast, Reliable Yard Work — When You Need It
            </h1>
            <p className="text-emerald-700 text-lg mb-8 pr-10 max-w-md">
              Get trusted local workers for mowing, raking, trimming & more.
              Professional service at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/book">
                <button className="bg-[#0A3019] text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors">
                  <FaCalendarCheck color="#fff" />
                  Book Yard Work
                </button>
              </Link>
              <Link href="/worker-home">
                <button className="bg-white border border-emerald-900 text-emerald-900 px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors">
                  {/* <UserPlus size={18} /> */}
                  Become a Worker
                </button>
              </Link>
            </div>
            <div></div>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-emerald-800">
              <div className="flex items-center gap-2">
                <span className="bg-[#22C55E] text-emerald-800 p-1 rounded-full">
                  <FaCheck color="#fff" />
                </span>
                Same Day Service
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#22C55E] text-emerald-800 p-1 rounded-full">
                  <MdLocalPolice color="#fff" />
                </span>
                Verified Workers
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <span className="bg-[#22C55E] text-emerald-800 p-1 rounded-full">
                  <FaStar color="#fff" />
                </span>
                5-Star Rated
              </div>
            </div>
          </div>

          <div className="relative h-100 md:h-125 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./heroimg.png"
              alt="Professional lawn mowing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------- Why Choose Us Section ---------------------------- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-950">
            Why Choose Our Yard Work Service?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto ">
            Simple, reliable, and professional yard care that fits your schedule
            and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FaClock className="text-white" size={20} />}
              title="Same Day Service"
              description="Book today, get service today. Perfect for urgent yard work needs."
            />
            <FeatureCard
              icon={<RiPoliceBadgeFill className="text-white" size={20} />}
              title="Trusted Workers"
              description="Background-checked, insured professionals you can trust in your yard."
            />
            <FeatureCard
              icon={<FaDollarSign className="text-white" size={20} />}
              title="Fair Pricing"
              description="Transparent, upfront pricing with no hidden fees or surprises."
            />
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="py-20 px-6 bg-emerald-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-950">
            Our Yard Work Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional yard care services to keep your property looking its
            best.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Scissors className="text-[#22C55E]" size={20} />}
              title="Lawn Mowing"
              description="Professional grass cutting and edging."
            />
            <ServiceCard
                icon={<Leaf className="text-[#22C55E]" size={20} />}
              title="Leaf Raking"
              description="Seasonal cleanup and debris removal."
            />
            <ServiceCard
                icon={<Trees className="text-[#22C55E]" size={20} />}
              title="Bush Trimming"
              description="Hedge and shrub maintenance."
            />
            <ServiceCard
                icon={<Sparkles className="text-[#22C55E]" size={20} />}
              title="Yard Cleanup"
              description="General tidying and maintenance."
            />
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <Banner/>
    </div>
  );
};

export default page;

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-emerald-50/50 p-10 rounded-xl flex flex-col items-center border border-emerald-100/50">
    <div className="bg-emerald-900 p-4 rounded-full mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-emerald-950">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl animate-slide-up  border border-gray-100 shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
    <div className="bg-emerald-900 p-3 rounded-md mb-4">{icon}</div>
    <h3 className="font-bold text-emerald-950 mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);


