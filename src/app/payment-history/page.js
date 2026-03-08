'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, DollarSign, Clock, Calendar, CreditCard, Eye } from 'lucide-react';

const page =() => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('All Dates');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [methodFilter, setMethodFilter] = useState('Payment Method');

  const payments = [
    {
      id: 1,
      jobTitle: 'Lawn Mowing & Edging',
      jobId: '#JOB001',
      worker: 'Mike Johnson',
      workerAvatar: 'MJ',
      date: 'Dec 6, 2024',
      method: 'Credit Card',
      amount: '$125.00',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      jobTitle: 'Garden Cleanup',
      jobId: '#JOB002',
      worker: 'David Lee',
      workerAvatar: 'DL',
      date: 'Dec 5, 2024',
      method: 'PayPal',
      amount: '$185.00',
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 3,
      jobTitle: 'Tree Trimming',
      jobId: '#JOB003',
      worker: 'Carlos Rodriguez',
      workerAvatar: 'CR',
      date: 'Nov 28, 2024',
      method: 'Credit Card',
      amount: '$280.00',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment History</h1>
          <p className="text-gray-600">Track all your yard work service payments and transaction details</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Total Paid</p>
                <p className="text-3xl font-bold text-gray-900">$2,450</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <DollarSign className="w-6 h-6 text-green-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Pending Payments</p>
                <p className="text-3xl font-bold text-gray-900">$185</p>
              </div>
              <div className="bg-yellow-100 rounded-full p-3">
                <Clock className="w-6 h-6 text-yellow-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Last Payment</p>
                <p className="text-3xl font-bold text-gray-900">$125</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <CreditCard className="w-6 h-6 text-blue-700" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Last Payment Date</p>
                <p className="text-3xl font-bold text-gray-900">Dec 8</p>
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <Calendar className="w-6 h-6 text-purple-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by job ID or worker name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Date Filter */}
            <div className="relative">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer"
              >
                <option>All Dates</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last Year</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer"
              >
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
                <option>Refunded</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Payment Method Filter */}
            <div className="relative">
              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer"
              >
                <option>Payment Method</option>
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
                <option>Cash</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Payment History Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Payment History</h2>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Job Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Worker
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Payment Method
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{payment.jobTitle}</div>
                        <div className="text-sm text-gray-500">{payment.jobId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                          {payment.workerAvatar}
                        </div>
                        <span className="font-medium text-gray-900">{payment.worker}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{payment.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <CreditCard className="w-4 h-4" />
                        <span>{payment.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{payment.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${payment.statusColor}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-600 hover:text-green-700 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-gray-200">
            {payments.map((payment) => (
              <div key={payment.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{payment.jobTitle}</h3>
                    <p className="text-sm text-gray-500">{payment.jobId}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${payment.statusColor}`}>
                    {payment.status}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                    {payment.workerAvatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{payment.worker}</p>
                    <p className="text-sm text-gray-500">{payment.date}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CreditCard className="w-4 h-4" />
                    <span>{payment.method}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-gray-900">{payment.amount}</span>
                    <button className="text-gray-600 hover:text-green-700 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;