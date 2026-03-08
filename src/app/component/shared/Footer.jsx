import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
           <img src="/footerlogo.png" alt="Footer Logo" />
            <p className="text-slate-400 mt-5 leading-relaxed">
              Professional yard care services when you need them most.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Lawn Mowing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Leaf Raking
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Bush Trimming
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Yard Cleanup
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link  href="about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="how-it-works" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="pricing" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:5551234567" 
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {/* <Phone className="w-4 h-4" /> */}
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@yardheroes.com" 
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {/* <Mail className="w-4 h-4" /> */}
                  hello@yardheroes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 YardHeroes. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-conditions" 
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;