 'use client';
import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, CreditCard, Lock, LogOut, HelpCircle, FileText, Shield, ChevronRight } from 'lucide-react';

const page = () => {
  const [formData, setFormData] = useState({
    firstName: 'Michael',
    lastName: 'Johnson',
    phone: '(555) 123-4567',
    email: 'michael.johnson@email.com',
    address: '123 Oak Street, Springfield, IL 62701'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = () => {
    alert('Changes saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-lg">Back</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle fill='%234f46e5' cx='50' cy='50' r='50'/%3E%3Ctext x='50%25' y='50%25' font-size='36' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EMJ%3C/text%3E%3C/svg%3E"
                      alt="Profile"
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Michael Johnson</h2>
                    <p className="text-gray-500 text-sm mb-3">Customer since March 2023</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>michael.johnson@email.com</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>123 Oak Street, Springfield, IL 62701</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                  Edit Profile
                </button>
              </div>

              {/* Personal Information Form */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                    <button 
                      onClick={handleSaveChanges}
                      className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* My Jobs Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">My Jobs</h3>
                <button className="text-green-700 font-semibold hover:text-green-800 transition-colors">
                  View My Jobs
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="text-3xl font-bold text-gray-900 mb-2">24</div>
                  <div className="text-sm text-gray-600">Total Jobs</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="text-3xl font-bold text-blue-700 mb-2">3</div>
                  <div className="text-sm text-blue-700">Active</div>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="text-3xl font-bold text-green-700 mb-2">20</div>
                  <div className="text-sm text-green-700">Completed</div>
                </div>
                <div className="bg-red-50 rounded-xl p-6 text-center hover:bg-red-100 transition-colors">
                  <div className="text-3xl font-bold text-red-700 mb-2">1</div>
                  <div className="text-sm text-red-700">Canceled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment & Settings */}
          <div className="space-y-6">
            {/* Payment Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Information</h3>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 mb-4 text-white">
                <div className="flex items-center justify-between mb-8">
                  <CreditCard className="w-8 h-8" />
                  <span className="text-sm font-semibold">Primary</span>
                </div>
                <div className="mb-4">
                  <div className="text-xl tracking-wider mb-1">•••• 4242</div>
                  <div className="text-xs opacity-90">Expires 10/26</div>
                </div>
              </div>
              <button className="w-full text-green-700 font-semibold py-2 hover:text-green-800 transition-colors text-sm">
                View Payment History
              </button>
            </div>

            {/* Security */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Security</h3>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700 font-medium">Change Password</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
              </button>
              <button className="w-full flex items-center p-3 hover:bg-red-50 rounded-lg transition-colors text-red-600 font-medium mt-2">
                <LogOut className="w-5 h-5 mr-3" />
                <span>Logout</span>
              </button>
            </div>

            {/* Support & Legal */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Support & Legal</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">Help Center</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">Terms of Service</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">Privacy Policy</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;