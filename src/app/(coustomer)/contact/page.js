'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Banner from '@/app/component/Banner';

const page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    };
    
    let isValid = true;
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
      isValid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowNotification(true);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-2xl mx-auto mb-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600">Need help or have a question? We're here for you.</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Send Us a Message</h2>
          <p className="text-gray-600 text-sm mb-6">Fill out the form below and we'll get back to you soon</p>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition bg-white ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us how we can help you..."
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-green-800 hover:bg-green-900 text-white font-medium px-8 py-3 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>

          {/* Notification */}
          {showNotification && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4 flex items-center justify-center">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-800 font-medium">We usually respond within 24 hours.</p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Us */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-green-700 font-medium mb-1">support@vardcare.com</p>
            <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-green-700 font-medium mb-1">(555) 123-4567</p>
            <p className="text-gray-500 text-sm">Mon-Fri, 8AM - 6PM</p>
          </div>
        </div>
      </div>
      <Banner/>
    </div>
  );
}

export default page;