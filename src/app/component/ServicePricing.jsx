import React, { useState } from "react";
import {
  Leaf,
  Wind,
  Scissors,
  Droplets,
  Wrench,
  Car,
  Key,
  Smartphone,
  Sparkles,
  Home,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const ServiceCard = ({
  icon: Icon,
  title,
  price,
  duration,
  description,
  buttonText,
  buttonVariant = "primary",
}) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <div className="flex items-baseline gap-2 mb-1">
      <span className="text-3xl font-bold text-gray-900">${price}</span>
      <span className="text-sm text-gray-500">starting</span>
    </div>
    <p className="text-sm text-gray-500 mb-4">{duration}</p>
    <p className="text-sm text-gray-600 mb-6 grow">{description}</p>

    <Link href="/book">
      <button
      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
        buttonVariant === "primary"
          ? "bg-green-800 text-white hover:bg-green-900"
          : "bg-white text-green-800 border-2 border-green-800 hover:bg-green-50"
      }`}
    >
      {buttonText}
    </button>
    </Link>

  </div>
);

const ServicePricing = () => {
  const [activeTab, setActiveTab] = useState("yard");

 const serviceCategories = {
  yard: {
    title: "Yard & Outdoor Jobs",
    subtitle: "Professional outdoor maintenance & cleanup services",
    services: [
      {
        icon: Leaf,
        title: "Lawn Mowing",
        price: 40,
        duration: "30–60 min",
        description:
          "Lawn mowing with edging and light cleanup to keep your yard neat and healthy.",
        buttonText: "Book Service",
      },
      {
        icon: Wind,
        title: "Weed Removal",
        price: 35,
        duration: "45–90 min",
        description:
          "Manual weed removal from lawns, garden beds, and walkways.",
        buttonText: "Book Service",
      },
      {
        icon: Wind,
        title: "Leaf Blowing & Cleanup",
        price: 45,
        duration: "1–2 hours",
        description:
          "Leaf blowing and full cleanup from lawns, patios, and driveways.",
        buttonText: "Book Service",
      },
      {
        icon: Sparkles,
        title: "Yard Cleanup (General)",
        price: 75,
        duration: "2–3 hours",
        description:
          "Complete yard cleanup including debris removal and surface clearing.",
        buttonText: "Book Service",
      },
      {
        icon: Scissors,
        title: "Hedge Trimming",
        price: 50,
        duration: "1–2 hours",
        description:
          "Professional hedge trimming with shaping and debris removal.",
        buttonText: "Get Started",
        buttonVariant: "secondary",
      },
      {
        icon: Scissors,
        title: "Bush & Shrub Trimming",
        price: 45,
        duration: "1–2 hours",
        description:
          "Trimming bushes and shrubs to enhance yard appearance.",
        buttonText: "Get Started",
        buttonVariant: "secondary",
      },
      {
        icon: Leaf,
        title: "Garden Bed Cleanup",
        price: 60,
        duration: "1–2 hours",
        description:
          "Cleaning garden beds, removing weeds, leaves, and debris.",
        buttonText: "Book Service",
      },
      {
        icon: Droplets,
        title: "Mulching",
        price: 80,
        duration: "2–3 hours",
        description:
          "Mulch installation to protect soil and improve landscape look.",
        buttonText: "Book Service",
      },
      {
        icon: Wind,
        title: "Snow Shoveling (Seasonal)",
        price: 35,
        duration: "30–90 min",
        description:
          "Snow removal from driveways and walkways during winter.",
        buttonText: "Book Service",
      },
      {
        icon: Sparkles,
        title: "Storm Debris Cleanup",
        price: 90,
        duration: "2–4 hours",
        description:
          "Post-storm debris and fallen branch cleanup.",
        buttonText: "Book Service",
      },
    ],
  },

  pet: {
    title: "Pet & Property Cleanup",
    subtitle: "Clean, safe & hygienic outdoor environments",
    services: [
      {
        icon: Home,
        title: "Dog Poop / Pet Waste Removal",
        price: 25,
        duration: "20–45 min",
        description:
          "Removal of pet waste from yards to maintain hygiene.",
        buttonText: "Book Now",
      },
      {
        icon: Droplets,
        title: "Yard Sanitizing (Pet Areas)",
        price: 40,
        duration: "45–60 min",
        description:
          "Sanitizing pet areas to eliminate odor and bacteria.",
        buttonText: "Book Now",
      },
      {
        icon: Sparkles,
        title: "Litter Cleanup (Outdoor)",
        price: 30,
        duration: "30–60 min",
        description:
          "Removal of trash and litter from outdoor areas.",
        buttonText: "Book Now",
      },
    ],
  },

  vehicle: {
    title: "Vehicle Convenience Services",
    subtitle: "On-demand vehicle care at your location",
    services: [
      {
        icon: Car,
        title: "Gas Filling (On-Site)",
        price: 15,
        duration: "15–20 min",
        description:
          "Fuel delivery service (fuel cost not included).",
        buttonText: "Request Service",
      },
      {
        icon: Droplets,
        title: "Windshield Washer Fluid Refill",
        price: 15,
        duration: "10–15 min",
        description:
          "Refill of windshield washer fluid for better visibility.",
        buttonText: "Book Now",
      },
      {
        icon: Wrench,
        title: "Tire Air Fill",
        price: 15,
        duration: "10–20 min",
        description:
          "Proper tire pressure check and air fill.",
        buttonText: "Book Now",
      },
      {
        icon: Car,
        title: "Car Exterior Wash",
        price: 30,
        duration: "30–45 min",
        description:
          "Exterior driveway car wash service.",
        buttonText: "Book Now",
      },
      {
        icon: Sparkles,
        title: "Interior Vacuuming",
        price: 25,
        duration: "20–40 min",
        description:
          "Interior vacuuming of seats, floors, and mats.",
        buttonText: "Book Now",
      },
    ],
  },

  home: {
    title: "Home Exterior Tasks",
    subtitle: "Maintain and refresh your home exterior",
    services: [
      {
        icon: Sparkles,
        title: "Trash Bin Cleaning & Disinfecting",
        price: 25,
        duration: "20–30 min",
        description:
          "Deep cleaning and disinfecting of trash bins.",
        buttonText: "Book Service",
      },
      {
        icon: Droplets,
        title: "Pressure Washing",
        price: 80,
        duration: "1–2 hours",
        description:
          "Pressure washing for driveways, sidewalks, and patios.",
        buttonText: "Book Service",
      },
      {
        icon: Wind,
        title: "Gutter Debris Removal",
        price: 60,
        duration: "1–2 hours",
        description:
          "Ground-level gutter debris removal for smooth drainage.",
        buttonText: "Book Service",
      },
      {
        icon: Sparkles,
        title: "Window Washing (Ground-Level)",
        price: 40,
        duration: "1–2 hours",
        description:
          "Exterior window washing for ground-level windows.",
        buttonText: "Book Service",
      },
      {
        icon: Home,
        title: "Patio & Deck Sweeping",
        price: 35,
        duration: "30–60 min",
        description:
          "Sweeping patios and decks for a clean outdoor space.",
        buttonText: "Book Service",
      },
    ],
  },
};


  const tabs = [
    { id: "yard", label: "Yard & Outdoor" },
    { id: "pet", label: "Pet & Property" },
    { id: "vehicle", label: "Vehicle Services" },
    { id: "home", label: "Home Exterior" },
  ];

  const currentCategory = serviceCategories[activeTab];

  return (
    <div className=" bg-white">
      {/* Main Content */}
      <main className=" px-6  ">
        {/* Tabs */}
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-wrap gap-2 justify-between mb-8 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-12 py-3 font-medium transition-all relative ${
                  activeTab === tab.id
                    ? "text-white border-2 rounded-md bg-[#0A3019]  border-green-800"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Category Content */}
          <div className="animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {currentCategory.title}
              </h2>
              <p className="text-gray-600">{currentCategory.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
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
