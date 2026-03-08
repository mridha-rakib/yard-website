"use client";

import React from 'react';
import { Shield } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    rating: 5,
    text: "Found an excellent plumber within hours. The booking process was straightforward and the quality of work exceeded my expectations.",
    location: "Seattle"
  },
  {
    name: "Mike R.",    
    role: "Renter",
    rating: 5,
    text: "Great platform for connecting with customers. Fair pricing system and prompt payments have grown my business significantly since joining.",
    location: "Portland"
  },
  {
    name: "Jennifer K.",
    role: "Homeowner",
    rating: 5,
    text: "Easy to use interface and reliable service providers. Had my kitchen renovation completed on time and within budget.",
    location: "Denver"
  },
  {
    name: "David L.",
    role: "Contractor",
    rating: 5,
    text: "Love the ongoing flexibility and customer communication tools. Makes managing my electrical business much more efficient.",
    location: "Austin"
  },
  {
    name: "Lisa H.",
    role: "Homeowner",
    rating: 4,
    text: "Quick response times and professional service. The rating system helps me choose the right contractor for each project.",
    location: "Phoenix"
  },
  {
    name: "Robert T.",
    role: "Contractor",
    rating: 5,
    text: "Clean platform with no hidden fees. Customer reviews are genuine and help build trust with new clients.",
    location: "Miami"
  },
  {
    name: "Amanda C.",
    role: "Homeowner",
    rating: 5,
    text: "Transparent pricing and reliable contractors. Used the service multiple times for different home repairs with consistent results.",
    location: "Chicago"
  },
  {
    name: "Tom B.",
    role: "Renter",
    rating: 4,
    text: "Good steady work flow and fair commission structure. The app makes it easy to manage appointments and communicate with clients.",
    location: "Boston"
  },
  {
    name: "Karen W.",
    role: "Homeowner",
    rating: 5,
    text: "Impressed with the quality control and follow-up service. Every contractor I've hired has been professional and skilled.",
    location: "Atlanta"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, delay }) => {
  return (
    <div 
      className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-serif text-lg flex-shrink-0 ring-2 ring-offset-2 ring-gray-100 group-hover:ring-gray-200 transition-all duration-500">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm tracking-tight">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">{testimonial.role}</p>
        </div>
      </div>
      
      <StarRating rating={testimonial.rating} />
      
      <p className="text-gray-700 text-[15px] leading-relaxed mb-3 font-light">
        "{testimonial.text}"
      </p>
      
      <p className="text-xs text-gray-400 font-medium tracking-wide">
        {testimonial.location}
      </p>
    </div>
  );
};

const page =()=>{
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
            What Our Community Says
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Real feedback from homeowners and service professionals who use our platform every day. 
            No filters, no highlights—just honest experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Verified Reviews Badge */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                Verified Reviews
              </h3>
              <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed font-light">
                All testimonials are from verified users who have completed transactions on our platform. 
                We moderate reviews to ensure authenticity while maintaining the genuine voice of our community members.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 w-full">
              <p className="text-xs text-gray-500 italic">
                HomeConnect does not guarantee specific outcomes or service quality. Reviews reflect individual experiences 
                and should not be considered alongside other factors when making decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        h2, h3 {
          font-family: 'Playfair Display', Georgia, serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
export default page;