'use client';

import React, { useState } from 'react';

const profile = () => {
  const [formData, setFormData] = useState({
    fullName: 'Alex Johnson',
    phoneNumber: '(555) 123-4567',
    emailAddress: 'alex.johnson@email.com',
    location: 'Portland, OR 97201',
    skills: ['Lawn mowing', 'Raking', 'Yard cleanup'],
    availableDays: ['M', 'W', 'F'],
    startTime: '09:00',
    endTime: '17:00',
    idDocument: null,
    profileImage: null
  });

  const [editMode, setEditMode] = useState({
    personal: false,
    skills: false,
    availability: false
  });

  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [profileImagePreview, setProfileImagePreview] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Alex');
  const [isSaving, setIsSaving] = useState(false);

  const [allSkills, setAllSkills] = useState([
    { id: 'lawnMowing', label: 'Lawn mowing', icon: '🌱' },
    { id: 'raking', label: 'Raking', icon: '🍂' },
    { id: 'trimming', label: 'Trimming', icon: '✂️' },
    { id: 'yardCleanup', label: 'Yard cleanup', icon: '🧹' },
    { id: 'snowRemoval', label: 'Snow removal', icon: '❄️' },
    { id: 'gardening', label: 'Gardening', icon: '🌻' }
  ]);

  const [days, setDays] = useState(['M', 'T', 'W', 'T', 'F', 'S', 'S']);
  const [daysFull] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  
  const [newSkill, setNewSkill] = useState({ label: '', icon: '' });
  const [showAddSkill, setShowAddSkill] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const toggleDay = (day) => {
    setFormData(prev => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter(d => d !== day)
        : [...prev.availableDays, day]
    }));
  };

  const addNewSkill = () => {
    if (newSkill.label.trim() && newSkill.icon.trim()) {
      const skillId = newSkill.label.toLowerCase().replace(/\s+/g, '');
      setAllSkills(prev => [...prev, { id: skillId, label: newSkill.label, icon: newSkill.icon }]);
      setNewSkill({ label: '', icon: '' });
      setShowAddSkill(false);
    } else {
      alert('Please enter both skill name and emoji icon');
    }
  };

  const removeSkill = (skillId) => {
    if (window.confirm('Are you sure you want to remove this skill?')) {
      setAllSkills(prev => prev.filter(s => s.id !== skillId));
      setFormData(prev => ({
        ...prev,
        skills: prev.skills.filter(s => {
          const skill = allSkills.find(sk => sk.label === s);
          return skill && skill.id !== skillId;
        })
      }));
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      setFormData(prev => ({ ...prev, profileImage: file }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload an image or PDF file');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      setFormData(prev => ({ ...prev, idDocument: file }));
      setFileName(file.name);
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview('');
      }
    }
  };

  const toggleEditMode = (section) => {
    setEditMode(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSaveChanges = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setEditMode({ personal: false, skills: false, availability: false });
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
      successMsg.textContent = '✓ Profile updated successfully!';
      document.body.appendChild(successMsg);
      
      setTimeout(() => {
        successMsg.remove();
      }, 3000);
    }, 1000);
  };

  const isAnyEditMode = editMode.personal || editMode.skills || editMode.availability;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">My Profile</h1>
          <p className="text-sm text-gray-600">Manage your information and availability.</p>
        </div>

        {/* Profile Card */}
        <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-xl">
          <div className="relative">
            <img
              src={profileImagePreview}
              alt={formData.fullName}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            
            {/* Change profile photo button */}
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="hidden"
            />
            <label
              htmlFor="profileImage"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-40 rounded-full cursor-pointer transition-all group"
            >
              <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </label>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">{formData.fullName}</h2>
            <p className="text-sm text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Active
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personal Information
            </h3>
            <button
              onClick={() => toggleEditMode('personal')}
              className="text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              {editMode.personal ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Full name</label>
                {editMode.personal ? (
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                ) : (
                  <p className="text-sm font-medium text-gray-900 px-3 py-2 bg-gray-50 rounded-lg">{formData.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone number</label>
                {editMode.personal ? (
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                ) : (
                  <p className="text-sm font-medium text-gray-900 px-3 py-2 bg-gray-50 rounded-lg">{formData.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Email Address</label>
                {editMode.personal ? (
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                ) : (
                  <p className="text-sm font-medium text-gray-900 px-3 py-2 bg-gray-50 rounded-lg break-all">{formData.emailAddress}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Location</label>
                {editMode.personal ? (
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                ) : (
                  <p className="text-sm font-medium text-gray-900 px-3 py-2 bg-gray-50 rounded-lg">{formData.location}</p>
                )}
              </div>
            </div>
          </div>
        </div>

                  {/* Skills */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Skills ({allSkills.length})
            </h3>
            <button
              onClick={() => toggleEditMode('skills')}
              className="text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              {editMode.skills ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <p className="text-xs text-gray-500 mb-3">Select the yard work services you can provide:</p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            {allSkills.map((skill) => {
              const isSelected = formData.skills.includes(skill.label);
              return (
                <div
                  key={skill.id}
                  className={`relative flex items-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                    editMode.skills ? 'cursor-pointer hover:shadow-md' : 'cursor-default'
                  } ${
                    isSelected
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-2 flex-1" onClick={() => editMode.skills && toggleSkill(skill.label)}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      disabled={!editMode.skills}
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 pointer-events-none"
                    />
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                  </div>
                  {editMode.skills && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSkill(skill.id);
                      }}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add New Skill */}
          {editMode.skills && (
            <div className="mt-3">
              {!showAddSkill ? (
                <button
                  onClick={() => setShowAddSkill(true)}
                  className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Skill
                </button>
              ) : (
                <div className="border-2 border-teal-500 rounded-lg p-3 bg-teal-50">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Skill name"
                      value={newSkill.label}
                      onChange={(e) => setNewSkill(prev => ({ ...prev, label: e.target.value }))}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Emoji (🌱)"
                      value={newSkill.icon}
                      onChange={(e) => setNewSkill(prev => ({ ...prev, icon: e.target.value }))}
                      maxLength={2}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-center text-lg"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={addNewSkill}
                      className="flex-1 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Add Skill
                    </button>
                    <button
                      onClick={() => {
                        setShowAddSkill(false);
                        setNewSkill({ label: '', icon: '' });
                      }}
                      className="flex-1 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

                  {/* Availability */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Availability
            </h3>
            <button
              onClick={() => toggleEditMode('availability')}
              className="text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              {editMode.availability ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <p className="text-xs text-gray-500 mb-3">Let customers know when you're available for work:</p>

          {/* Available Days */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-medium text-gray-700">Available days</label>
              {editMode.availability && (
                <div className="flex gap-1">
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, availableDays: days }))}
                    className="text-xs text-teal-600 hover:text-teal-700 font-medium"
                  >
                    All
                  </button>
                  <span className="text-gray-400">|</span>
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, availableDays: [] }))}
                    className="text-xs text-red-600 hover:text-red-700 font-medium"
                  >
                    None
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {days.map((day, index) => {
                const isSelected = formData.availableDays.includes(day);
                return (
                  <div key={index} className="flex-1">
                    <button
                      onClick={() => editMode.availability && toggleDay(day)}
                      disabled={!editMode.availability}
                      className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-teal-700 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600'
                      } ${editMode.availability ? 'cursor-pointer hover:scale-105' : 'cursor-default'}`}
                    >
                      {day}
                    </button>
                    {editMode.availability && (
                      <p className="text-xs text-center text-gray-500 mt-1">{daysFull[index].slice(0, 3)}</p>
                    )}
                  </div>
                );
              })}
            </div>
            {editMode.availability && (
              <div className="mt-2 text-xs text-gray-500">
                {formData.availableDays.length === 0 
                  ? 'No days selected'
                  : `Selected: ${formData.availableDays.map((d, i) => daysFull[days.indexOf(d)]).join(', ')}`
                }
              </div>
            )}
          </div>

          {/* Time Range */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">Start time</label>
              {editMode.availability ? (
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                />
              ) : (
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">{formData.startTime}</span>
                </div>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">End time</label>
              {editMode.availability ? (
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                />
              ) : (
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">{formData.endTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ID/Document */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              ID / Document
            </h3>
          </div>

          <p className="text-xs text-gray-500 mb-3">Upload a scan of ID to enhance your profile:</p>

          {imagePreview ? (
            <div className="border-2 border-teal-500 rounded-lg p-4 bg-teal-50">
              <img 
                src={imagePreview} 
                alt="ID Preview" 
                className="w-full h-48 object-contain rounded-lg mb-3 bg-white"
              />
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-teal-700 truncate flex-1">{fileName}</p>
                <button
                  onClick={() => {
                    setImagePreview('');
                    setFileName('');
                    setFormData(prev => ({ ...prev, idDocument: null }));
                  }}
                  className="ml-3 px-3 py-1 text-xs bg-white border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Replace
                </button>
              </div>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
              <input
                type="file"
                id="idDocument"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="idDocument" className="cursor-pointer">
                <div className="text-gray-400 mb-2">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600 mb-1">ID document.png</p>
                <p className="text-xs text-gray-500 mb-2">Maximum allowed size: 5MB</p>
                <span className="inline-flex items-center px-4 py-2 text-xs font-medium text-teal-600 bg-white border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Replace Document
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Save Button */}
        {isAnyEditMode && (
          <button
            onClick={handleSaveChanges}
            disabled={isSaving}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center mb-4 ${
              isSaving ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-800 hover:bg-teal-900 hover:shadow-lg'
            }`}
          >
            {isSaving ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </>
            )}
          </button>
        )}

        {/* Help Link */}
        <div className="text-center pt-2">
          <button 
            onClick={() => alert('Contact support at support@example.com')}
            className="text-sm text-gray-600 hover:text-gray-800 font-medium flex items-center justify-center mx-auto transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Need help? Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
export default profile;