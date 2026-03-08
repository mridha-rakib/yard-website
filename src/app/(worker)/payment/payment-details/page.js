'use client';
import React, { useState } from 'react';
import { DollarSign, TrendingUp, Clock, CreditCard, ChevronRight, ArrowLeft, Download, CheckCircle, MapPin, User, Calendar, Info } from 'lucide-react';

const page = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const earningsData = [
    { 
      id: 1, 
      service: 'Lawn Mowing', 
      date: 'Jan 15, 2025', 
      completedDate: 'November 15, 2024',
      jobPayment: '$100.00', 
      platformFee: '$12.00',
      earnings: '$88.00',
      status: 'Paid', 
      color: 'emerald',
      customer: 'Sarah M.',
      location: 'Austin, TX',
      paymentDate: 'November 16, 2024',
      paymentMethod: 'Cash App',
      processedHours: '24 hours'
    },
    { 
      id: 2, 
      service: 'Snow Removal', 
      date: 'Jan 12, 2025', 
      completedDate: 'November 12, 2024',
      jobPayment: '$80.00', 
      platformFee: '$9.60',
      earnings: '$70.40',
      status: 'Paid', 
      color: 'blue',
      customer: 'John D.',
      location: 'Boston, MA',
      paymentDate: 'November 13, 2024',
      paymentMethod: 'Venmo',
      processedHours: '24 hours'
    },
    { 
      id: 3, 
      service: 'Gutter Shampooing', 
      date: 'Jan 10, 2025', 
      completedDate: 'November 10, 2024',
      jobPayment: '$150.00', 
      platformFee: '$18.00',
      earnings: '$132.00',
      status: 'Pending', 
      color: 'amber',
      customer: 'Mike R.',
      location: 'Seattle, WA',
      paymentDate: 'Processing',
      paymentMethod: 'PayPal',
      processedHours: 'within 24 hours'
    },
    { 
      id: 4, 
      service: 'Hedge Trimming', 
      date: 'Jan 8, 2025', 
      completedDate: 'November 8, 2024',
      jobPayment: '$95.00', 
      platformFee: '$11.40',
      earnings: '$83.60',
      status: 'Paid', 
      color: 'purple',
      customer: 'Lisa K.',
      location: 'Denver, CO',
      paymentDate: 'November 9, 2024',
      paymentMethod: 'Zelle',
      processedHours: '24 hours'
    },
    { 
      id: 5, 
      service: 'Yard Cleanup', 
      date: 'Jan 5, 2025', 
      completedDate: 'November 5, 2024',
      jobPayment: '$120.00', 
      platformFee: '$14.40',
      earnings: '$105.60',
      status: 'Pending', 
      color: 'rose',
      customer: 'Tom B.',
      location: 'Portland, OR',
      paymentDate: 'Processing',
      paymentMethod: 'Cash App',
      processedHours: 'within 24 hours'
    },
  ];

  const getStatusColor = (status) => {
    return status === 'Paid' ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50';
  };

  const getServiceIcon = (color) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      blue: 'bg-blue-100 text-blue-600',
      amber: 'bg-amber-100 text-amber-600',
      purple: 'bg-purple-100 text-purple-600',
      rose: 'bg-rose-100 text-rose-600',
    };
    return colors[color] || colors.emerald;
  };

  if (selectedJob) {
    const job = earningsData.find(j => j.id === selectedJob);
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <button 
              onClick={() => setSelectedJob(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Earnings</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Payment Details</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
          {/* Job Header */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{job.service}</h2>
                <p className="text-sm text-gray-500 mt-1">Completed on {job.completedDate}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{job.earnings}</p>
                <p className="text-sm text-gray-500">Your earnings</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">{job.status}</span>
            </div>
          </div>

          {/* Earnings Breakdown */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Breakdown</h3>
            
            <div className="space-y-4">
              {/* Job Total Amount */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Job Total Amount</p>
                    </div>
                    <p className="font-semibold text-gray-900">{job.jobPayment}</p>
                  </div>
                </div>
              </div>

              {/* Platform Fee */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">%</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Platform Fee</p>
                      <p className="text-xs text-gray-500">12% service fee</p>
                    </div>
                    <p className="font-semibold text-red-600">-{job.platformFee}</p>
                  </div>
                </div>
              </div>

              {/* Your Earnings */}
              <div className="flex items-start gap-3 bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Your Earnings</p>
                      <p className="text-xs text-emerald-700">88% of job total</p>
                    </div>
                    <p className="text-2xl font-bold text-emerald-600">{job.earnings}</p>
                  </div>
                </div>
              </div>

              {/* Simple Breakdown Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-2">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  <span className="font-medium">Simple breakdown:</span> Job pays {job.jobPayment} → You received {job.earnings}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Payment Date */}
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Payment Date</span>
                </div>
                <p className="text-base font-semibold text-gray-900">{job.paymentDate}</p>
                <p className="text-xs text-gray-500 mt-1">Processed within {job.processedHours}</p>
              </div>

              {/* Payment Method */}
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">Payment Method</span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold text-gray-900">{job.paymentMethod}</p>
                  {job.status === 'Paid' && (
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      Confirmed
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">Sent to {job.paymentMethod}</p>
              </div>
            </div>

            {/* Success Message */}
            {job.status === 'Paid' && (
              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-emerald-900">Payment Successfully Processed</p>
                  <p className="text-sm text-emerald-700 mt-0.5">Your earnings have been transferred to your account</p>
                </div>
              </div>
            )}
          </div>

          {/* Additional Job Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Job Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer */}
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="font-medium text-gray-900">{job.customer}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{job.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setSelectedJob(null)}
              className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Earnings History
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Earnings & Payments</h1>
          <p className="text-sm text-gray-500 mt-1">Track your earnings and view past jobs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Balance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Total Balance</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">$1,847</p>
            <p className="text-xs text-gray-500 mt-1">Available to withdraw</p>
          </div>

          {/* Pending Balance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">Pending Balance</span>
            </div>
            <p className="text-3xl font-bold text-emerald-600">$352</p>
            <p className="text-xs text-gray-500 mt-1">Being processed</p>
          </div>

          {/* This Month */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-sm text-gray-600">This Month</span>
            </div>
            <p className="text-3xl font-bold text-amber-600">$176</p>
            <p className="text-xs text-gray-500 mt-1">Earned this month</p>
          </div>
        </div>

        {/* Fee Breakdown Card */}
        <div className="bg-linear-to-br from-emerald-800 to-emerald-900 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">You keep 88% of every job</h3>
              <p className="text-emerald-100 text-sm">We charge a low 12% platform fee to keep our service running</p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold">88%</p>
              <p className="text-emerald-200 text-sm mt-1">Your earnings</p>
            </div>
          </div>

          <div className="bg-emerald-950/30 rounded-lg p-4 space-y-2">
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
                <span className="font-bold text-lg text-emerald-300">$88.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Methods</h3>
          <p className="text-sm text-gray-500 mb-4">Payments are fast, safe and available. Choose your preferred method in your profile settings.</p>

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
            <h3 className="text-lg font-semibold text-gray-900">Earnings History</h3>
            <p className="text-sm text-gray-500">View your completed jobs and payment status</p>
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
                onClick={() => setSelectedJob(item.id)}
                className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {/* Mobile Layout */}
                <div className="md:hidden space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${getServiceIcon(item.color)} rounded-lg flex items-center justify-center`}>
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.service}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Payment:</span>
                    <span className="font-semibold text-gray-900">{item.jobPayment}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Your earnings:</span>
                    <span className="font-semibold text-gray-900">{item.earnings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-3 flex items-center gap-3">
                    <div className={`w-10 h-10 ${getServiceIcon(item.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-900">{item.service}</span>
                  </div>
                  <div className="col-span-2 text-gray-600 text-sm">{item.date}</div>
                  <div className="col-span-2 font-medium text-gray-900">{item.jobPayment}</div>
                  <div className="col-span-2 font-medium text-gray-900">{item.earnings}</div>
                  <div className="col-span-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
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