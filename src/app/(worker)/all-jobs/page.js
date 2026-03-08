'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Leaf, Wrench, Plus } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const [activeTab, setActiveTab] = useState('new');
  
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Lawn Mowing',
      location: 'Springfield, 62704',
      date: 'Today, 2:00 PM',
      price: 45,
      status: 'new',
      icon: '🌿',
      badge: 'New'
    },
    {
      id: 2,
      title: 'Yard Cleanup',
      location: 'Riverside, 62521',
      date: 'Tomorrow, 10:00 AM',
      price: 65,
      status: 'new',
      icon: '🧹',
      badge: 'New'
    },
    {
      id: 3,
      title: 'Leaf Removal',
      location: 'Lincoln, 62656',
      date: 'Tomorrow, 3:00 PM',
      price: 55,
      status: 'new',
      icon: '🍂',
      badge: 'New'
    },
    {
      id: 4,
      title: 'Lawn Mowing & Edging',
      location: 'Chatham, 62629',
      date: 'May 15, 9:00 AM',
      price: 50,
      status: 'accepted',
      icon: '🌿',
      badge: 'Accepted'
    },
    {
      id: 5,
      title: 'Garden Weeding',
      location: 'Auburn, 62615',
      date: 'Mar 16, 1:00 PM',
      price: 40,
      status: 'accepted',
      icon: '🌱',
      badge: 'Accepted'
    },
    {
      id: 6,
      title: 'Lawn Mowing',
      location: 'Sherman, 62684',
      date: 'Today, 11:30 AM',
      price: 48,
      status: 'in-progress',
      icon: '🌿',
      badge: 'In Progress'
    },
    {
      id: 7,
      title: 'Tree Trimming',
      location: 'Springfield, 62702',
      date: 'Completed',
      price: 120,
      status: 'completed',
      icon: '🌳',
      badge: 'Completed'
    }
  ]);

  const getJobsByStatus = (status) => {
    return jobs.filter(job => job.status === status);
  };

  const getStatusCount = (status) => {
    return getJobsByStatus(status).length;
  };

  const handleAcceptJob = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status: 'accepted', badge: 'Accepted' } : job
    ));
  };

  const handleDeclineJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  const handleStartJob = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status: 'in-progress', badge: 'In Progress' } : job
    ));
  };

  const handleCompleteJob = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status: 'completed', badge: 'Completed' } : job
    ));
  };

  const displayedJobs = getJobsByStatus(activeTab);

  const getStatusColor = (status) => {
    switch(status) {
      case 'new': return 'text-blue-700 bg-blue-50';
      case 'accepted': return 'text-yellow-700 bg-yellow-50';
      case 'in-progress': return 'text-[#0a3019] bg-green-50';
      case 'completed': return '[#4B5563] bg-gray-50';
      default: return '[#4B5563] bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Jobs</h1>
          <p className="text-gray-600">View and manage your current and past jobs.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-2 border-[#e5e7eb] py-2.5 px-3 rounded-md gap-3 mb-8">
          <button
            onClick={() => setActiveTab('new')}
            className={`px-20 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'new'
                ? 'bg-[#0a3019] text-white shadow-lg scale-105'
                : 'bg-white text-[#4B5563] hover:bg-gray-50'
            }`}
          >
            New Jobs
            <span className="ml-2 px-2 py-1 bg-white text-[#0A3019] bg-opacity-20 rounded-full text-xs">
              {getStatusCount('new')}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('accepted')}
            className={`px-20 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'accepted'
                ? 'bg-[#0a3019] text-white shadow-lg scale-105'
                : 'bg-white text-[#4B5563] hover:bg-gray-50'
            }`}
          >
            Accepted
            <span className="ml-2 px-2 py-1 bg-white text-[#0A3019] bg-opacity-20 rounded-full text-xs">
              {getStatusCount('accepted')}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('in-progress')}
            className={`px-20 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'in-progress'
                ? 'bg-[#0a3019] text-white shadow-lg scale-105'
                : 'bg-white text-[#4B5563] hover:bg-gray-50'
            }`}
          >
            In Progress
            <span className="ml-2 px-2 py-1 bg-white text-[#0A3019] bg-opacity-20 rounded-full text-xs">
              {getStatusCount('in-progress')}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('completed')}
            className={`px-20 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'completed'
                ? 'bg-[#0a3019] text-white shadow-lg scale-105'
                : 'bg-white text-[#4B5563] hover:bg-gray-50'
            }`}
          >
            Completed
            <span className="ml-2 px-2 py-1 bg-white text-[#0A3019] bg-opacity-20 rounded-full text-xs">
              {getStatusCount('completed')}
            </span>
          </button>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {displayedJobs.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">There are no {activeTab.replace('-', ' ')} jobs at the moment.</p>
            </div>
          ) : (
            displayedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Section - Job Info */}
                  <div className="flex items-start space-x-4 flex-1">
                    <div className=" rounded-mdp-3 text-2xl">
                      {job.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(job.status)}`}>
                          {job.badge}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1.5 text-gray-400" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
                          <span>{job.date}</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="text-3xl font-bold text-gray-900">${job.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Actions */}
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    {job.status === 'new' && (
                      <>
                        <button
                          onClick={() => handleDeclineJob(job.id)}
                          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold [#4B5563] hover:bg-gray-50 transition-all"
                        >
                          Decline
                        </button>
                        <Link 
                         href={'/all-jobs/job-details'}
                          // onClick={() => alert(`Viewing details for ${job.title}`)}
                          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold [#4B5563] hover:bg-gray-50 transition-all"
                        >
                          Job Details
                        </Link>
                        <button
                          onClick={() => handleAcceptJob(job.id)}
                          className="px-6 py-3 bg-[#0a3019] text-white rounded-lg font-semibold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl"
                        >
                          Accept Job
                        </button>
                      </>
                    )}

                    {job.status === 'accepted' && (
                      <>
                        <Link 
                        href={'/all-jobs/job-details'}
                          // onClick={() => alert(`Viewing details for ${job.title}`)}
                          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold [#4B5563] hover:bg-gray-50 transition-all"
                        >
                          Job Details
                        </Link>
                        <button
                          onClick={() => handleStartJob(job.id)}
                          className="px-6 py-3 bg-[#0a3019] text-white rounded-lg font-semibold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl"
                        >
                          Start Job
                        </button>
                      </>
                    )}

                    {job.status === 'in-progress' && (
                      <>
                        <Link 
                        href={'/all-jobs/job-details'}
                          // onClick={() => alert(`Viewing details for ${job.title}`)}
                          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold [#4B5563] hover:bg-gray-50 transition-all"
                        >
                          Job Details
                        </Link>
                        <Link
                         href={'/all-jobs/job-details'}
                          // onClick={() => handleCompleteJob(job.id)}
                          className="px-6 py-3 bg-[#0a3019] text-white rounded-lg font-semibold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl"
                        >
                          Mark as Completed
                        </Link>
                      </>
                    )}

                    {job.status === 'completed' && (
                      <Link
                        href={'/all-jobs/job-details'}
                        // onClick={() => alert(`Viewing details for ${job.title}`)}
                        className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold [#4B5563] hover:bg-gray-50 transition-all"
                      >
                        View Details
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add New Job Button */}
        <button className="fixed bottom-8 right-8 bg-[#0a3019] text-white p-4 rounded-full shadow-2xl hover:bg-green-800 transition-all hover:scale-110">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
export default page;