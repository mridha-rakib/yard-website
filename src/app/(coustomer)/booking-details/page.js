'use client';
import React, { useState } from 'react';
import { ArrowLeft, Phone, Star, MapPin, AlertCircle, CheckCircle, Clock, Circle, Edit, X, RotateCcw, MessageSquare, Upload, Save, ChevronDown, Check } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default function BookingDetails() {
  const [booking, setBooking] = useState({
    id: 'BOOK123456789',
    status: 'In Progress',
    jobTitle: 'Lawn Mowing & Trimming',
    bookingDate: 'March 15, 2024',
    budget: '$150 - $200',
    priority: 'High Priority',
    scheduledTime: '10:00 AM - 2:00 PM',
    location: {
      address: '1234 Maple Street',
      city: 'Springfield, IL 62701',
      details: 'Residential area with front and backyard'
    },
    description: 'I need my front and backyard mowed and trimmed. The grass is quite overgrown and needs edging around the walkways and flower beds. Please also trim the bushes near the front entrance.',
    photos: [
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400',
      'https://images.unsplash.com/photo-1592662954383-d9b191a8604c?w=400',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400'
    ],
    worker: {
      name: 'John Thompson',
      rating: 4.9,
      reviews: 143,
      bio: 'Professional lawn care specialist with 8 years of experience. Specializes in residential yard maintenance.',
      avatar: null
    },
    payment: {
      status: 'Pending',
      amount: 175.00,
      method: '**** 4532'
    },
    timeline: [
      { status: 'Job Submitted', date: 'March 14, 2024 at 2:30 PM', completed: true },
      { status: 'Worker Matched', date: 'March 14, 2024 at 9:15 AM', completed: true },
      { status: 'In Progress', date: 'Started March 15, 2024 at 10:00 AM', completed: true },
      { status: 'Completed', date: 'Pending', completed: false },
      { status: 'Payment Processed', date: 'Pending', completed: false }
    ]
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [message, setMessage] = useState('');
  const [cancelReason, setCancelReason] = useState('');

  const handleEditBooking = () => {
    setEditForm({
      jobTitle: booking.jobTitle,
      bookingDate: booking.bookingDate,
      scheduledTime: booking.scheduledTime,
      budget: booking.budget,
      priority: booking.priority,
      description: booking.description
    });
    setIsEditModalOpen(true);
  };

  const saveEdit = () => {
    setBooking({ ...booking, ...editForm });
    setIsEditModalOpen(false);
  };

  const handleCancelBooking = () => {
    if (cancelReason.trim()) {
      setBooking({ ...booking, status: 'Cancelled' });
      setIsCancelModalOpen(false);
      setCancelReason('');
    }
  };

  const handleContactWorker = () => {
    setIsContactModalOpen(true);
  };

  const sendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${booking.worker.name}: ${message}`);
      setMessage('');
      setIsContactModalOpen(false);
    }
  };

  const updateTimeline = (index) => {
    const newTimeline = [...booking.timeline];
    newTimeline[index].completed = !newTimeline[index].completed;
    if (newTimeline[index].completed) {
      newTimeline[index].date = new Date().toLocaleString();
    } else {
      newTimeline[index].date = 'Pending';
    }
    setBooking({ ...booking, timeline: newTimeline });
  };

  const handleRebook = () => {
    alert('Rebooking service - redirecting to booking page...');
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => URL.createObjectURL(file));
    setBooking({ ...booking, photos: [...booking.photos, ...newPhotos] });
  };

  const removePhoto = (index) => {
    const newPhotos = booking.photos.filter((_, i) => i !== index);
    setBooking({ ...booking, photos: newPhotos });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Booking Details</h1>
              <p className="text-sm text-gray-500">{booking.id}</p>
            </div>
          </div>
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
            booking.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
            booking.status === 'Completed' ? 'bg-green-100 text-green-700' :
            booking.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {booking.status}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Summary */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Job Summary</h2>
                <button 
                  onClick={handleEditBooking}
                  className="text-green-800 hover:text-green-900 text-sm font-medium flex items-center gap-1"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Job Type</span>
                  <span className="text-sm font-medium text-gray-900">{booking.jobTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Booking Date</span>
                  <span className="text-sm font-medium text-gray-900">{booking.bookingDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Budget</span>
                  <span className="text-sm font-medium text-gray-900">{booking.budget}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Priority</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    booking.priority === 'High Priority' ? 'bg-red-100 text-red-700' :
                    booking.priority === 'Medium Priority' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {booking.priority}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Scheduled Time</span>
                  <span className="text-sm font-medium text-gray-900">{booking.scheduledTime}</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Location</h2>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900">{booking.location.address}</p>
                <p className="text-sm text-gray-600">{booking.location.city}</p>
                <p className="text-xs text-gray-500 mt-1">{booking.location.details}</p>
              </div>
              <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{booking.description}</p>
              
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-900">Uploaded Photos</h3>
                <label className="cursor-pointer text-green-800 hover:text-green-900 text-sm font-medium flex items-center gap-1">
                  <Upload className="w-4 h-4" />
                  Add Photos
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {booking.photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={photo}
                      alt={`Job photo ${index + 1}`}
                      className="w-full h-28 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/*=============================== Job Status Timeline=============================== */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Status</h2>
              <div className="space-y-4">
                {booking.timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <button
                      onClick={() => updateTimeline(index)}
                      className={`mt-0.5 hover:scale-110 transition-transform ${item.completed ? 'text-white bg-[#0A3019] rounded-full' : 'text-gray-300'}`}
                    >
                      {item.completed ? (
                        <Check className="w-4 h-4 " />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${item.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                        {item.status}
                      </p>
                      <p className={`text-xs ${item.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================Right Column - Worker & Payment ==================================================*/}
          <div className="space-y-6">
            {/* Assigned Worker */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Assigned Worker</h2>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-semibold text-gray-600">JT</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{booking.worker.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{booking.worker.rating}</span>
                    <span className="text-sm text-gray-500">({booking.worker.reviews})</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{booking.worker.bio}</p>
              <button 
                onClick={handleContactWorker}
                className="w-full bg-green-900 text-white py-3 rounded-lg font-medium hover:bg-green-950 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact Worker
              </button>
            </div>

            {/*==================================== Payment ====================================*/}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    booking.payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {booking.payment.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Amount</span>
                  <span className="text-sm font-semibold text-gray-900">${booking.payment.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Method</span>
                  <span className="text-sm font-medium text-gray-900">{booking.payment.method}</span>
                </div>
              </div>
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="w-full text-green-800 py-2 text-sm font-medium hover:text-green-900 transition-colors"
              >
                View Payment Details
              </button>
            </div>

            {/*================================= Actions================================= */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-3">
              <button 
                onClick={handleEditBooking}
                className="w-full bg-[#202326] text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit Booking
              </button>
              <button 
                onClick={() => setIsCancelModalOpen(true)}
                className="w-full text-red-600 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel Booking
              </button>
              <button 
                onClick={handleRebook}
                className="w-full text-[#374151] py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Rebook Service
              </button>
              <button className="w-full text-[#374151] py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================Edit Booking Modal======================================== */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Booking">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              value={editForm.jobTitle || ''}
              onChange={(e) => setEditForm({ ...editForm, jobTitle: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Booking Date</label>
            <input
              type="text"
              value={editForm.bookingDate || ''}
              onChange={(e) => setEditForm({ ...editForm, bookingDate: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Time</label>
            <input
              type="text"
              value={editForm.scheduledTime || ''}
              onChange={(e) => setEditForm({ ...editForm, scheduledTime: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              value={editForm.priority || ''}
              onChange={(e) => setEditForm({ ...editForm, priority: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="High Priority">High Priority</option>
              <option value="Medium Priority">Medium Priority</option>
              <option value="Low Priority">Low Priority</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={editForm.description || ''}
              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={saveEdit}
            className="w-full bg-green-900 text-white py-3 rounded-lg font-medium hover:bg-green-950 transition-colors flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </Modal>

      {/*============================= Cancel Booking Modal =============================*/}
      <Modal isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)} title="Cancel Booking">
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Are you sure you want to cancel this booking? Please provide a reason:</p>
          <textarea
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            placeholder="Reason for cancellation..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <div className="flex gap-3">
            <button
              onClick={() => setIsCancelModalOpen(false)}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Keep Booking
            </button>
            <button
              onClick={handleCancelBooking}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Cancel Booking
            </button>
          </div>
        </div>
      </Modal>

      {/*================================ Contact Worker Modal================================ */}
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Contact Worker">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600">JT</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{booking.worker.name}</h3>
              <p className="text-sm text-gray-500">Professional Lawn Care Specialist</p>
            </div>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={sendMessage}
            className="w-full bg-green-900 text-white py-3 rounded-lg font-medium hover:bg-green-950 transition-colors"
          >
            Send Message
          </button>
        </div>
      </Modal>

      {/*================================== Payment Details Modal================================== */}
      <Modal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} title="Payment Details">
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Service Fee</span>
              <span className="text-sm font-medium text-gray-900">${booking.payment.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Service Charge</span>
              <span className="text-sm font-medium text-gray-900">$5.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-sm text-gray-900">Total</span>
              <span className="text-sm text-gray-900">${(booking.payment.amount + 5).toFixed(2)}</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Payment Method</p>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-7 bg-linear-to-r from-blue-600 to-blue-400 rounded"></div>
              <span className="text-sm font-medium text-gray-900">{booking.payment.method}</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Status</p>
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              booking.payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {booking.payment.status}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}