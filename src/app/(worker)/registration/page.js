'use client';
import React, { useState } from 'react';

const page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    cityZipCode: '',
    phoneNumber: '',
    emailAddress: '',
    skills: [],
    availability: '',
    photoId: null
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const skillsOptions = [
    { id: 'lawnMowing', label: 'Lawn Mowing', icon: '🌱' },
    { id: 'raking', label: 'Raking', icon: '🍂' },
    { id: 'trimming', label: 'Trimming', icon: '✂️' },
    { id: 'yardCleanup', label: 'Yard Cleanup', icon: '🧹' },
    { id: 'carCleaning', label: 'Car Cleaning', icon: '🚗' }
  ];

  const availabilityOptions = [
    'Weekdays (Monday-Friday)',
    'Weekends (Saturday-Sunday)',
    'Mornings (6AM-12PM)',
    'Afternoons (12PM-6PM)',
    'Evenings (6PM-10PM)',
    'Flexible / Any time'
  ];

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name can only contain letters';
        return '';

      case 'age':
        if (!value) return 'Age is required';
        const age = parseInt(value);
        if (isNaN(age)) return 'Age must be a number';
        if (age < 13) return 'Must be 13 or older to apply';
        if (age > 100) return 'Please enter a valid age';
        return '';

      case 'cityZipCode':
        if (!value.trim()) return 'City/Zip code is required';
        if (value.trim().length < 3) return 'Please enter a valid city or zip code';
        return '';

      case 'phoneNumber':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        const digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length < 10) return 'Phone number must be at least 10 digits';
        return '';

      case 'emailAddress':
        if (!value.trim()) return 'Email address is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';

      case 'skills':
        if (!value || value.length === 0) return 'Please select at least one skill';
        return '';

      case 'availability':
        if (!value) return 'Please select your availability';
        return '';

      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field was touched
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSkillToggle = (skillId) => {
    setFormData(prev => {
      const newSkills = prev.skills.includes(skillId)
        ? prev.skills.filter(id => id !== skillId)
        : [...prev.skills, skillId];
      
      // Validate skills
      if (touched.skills) {
        setErrors(prevErrors => ({ 
          ...prevErrors, 
          skills: validateField('skills', newSkills) 
        }));
      }
      
      return { ...prev, skills: newSkills };
    });
    setTouched(prev => ({ ...prev, skills: true }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, photoId: 'Please upload an image or PDF file' }));
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, photoId: 'File size must be less than 5MB' }));
        return;
      }
      
      setFormData(prev => ({ ...prev, photoId: file }));
      setFileName(file.name);
      setErrors(prev => ({ ...prev, photoId: '' }));
      
      // Create image preview for image files
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(''); // Clear preview for PDFs
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(key => {
      if (key !== 'photoId') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      age: true,
      cityZipCode: true,
      phoneNumber: true,
      emailAddress: true,
      skills: true,
      availability: true
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          age: '',
          cityZipCode: '',
          phoneNumber: '',
          emailAddress: '',
          skills: [],
          availability: '',
          photoId: null
        });
        setFileName('');
        setImagePreview('');
        setErrors({});
        setTouched({});
        setSubmitSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply as a Worker</h1>
          <p className="text-gray-600">Fill out the form below to start earning with local yard jobs.</p>
        </div>

        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.fullName && touched.fullName
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
              } focus:ring-2 focus:outline-none transition-colors`}
            />
            {errors.fullName && touched.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Enter your age"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.age && touched.age
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
              } focus:ring-2 focus:outline-none transition-colors`}
            />
            <p className="mt-1 text-xs text-gray-500">Must be 13 or older to apply</p>
            {errors.age && touched.age && (
              <p className="mt-1 text-sm text-red-500">{errors.age}</p>
            )}
          </div>

          {/* City / Zip Code */}
          <div>
            <label htmlFor="cityZipCode" className="block text-sm font-medium text-gray-700 mb-2">
              City / Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cityZipCode"
              name="cityZipCode"
              value={formData.cityZipCode}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="City, State or Zip Code"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.cityZipCode && touched.cityZipCode
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
              } focus:ring-2 focus:outline-none transition-colors`}
            />
            <p className="mt-1 text-xs text-gray-500">We'll match you with jobs in your area</p>
            {errors.cityZipCode && touched.cityZipCode && (
              <p className="mt-1 text-sm text-red-500">{errors.cityZipCode}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="(555) 123-4567"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phoneNumber && touched.phoneNumber
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
              } focus:ring-2 focus:outline-none transition-colors`}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="your-email@example.com"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.emailAddress && touched.emailAddress
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
              } focus:ring-2 focus:outline-none transition-colors`}
            />
            {errors.emailAddress && touched.emailAddress && (
              <p className="mt-1 text-sm text-red-500">{errors.emailAddress}</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Skills <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-3">Select all that apply (choose at least one)</p>
            <div className="grid grid-cols-2 gap-3">
              {skillsOptions.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => handleSkillToggle(skill.id)}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.skills.includes(skill.id)
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill.id)}
                    onChange={() => {}}
                    className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 pointer-events-none"
                  />
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                </div>
              ))}
            </div>
            {errors.skills && touched.skills && (
              <p className="mt-2 text-sm text-red-500">{errors.skills}</p>
            )}
          </div>

          {/* Availability */}
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.availability && touched.availability
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
              } focus:ring-2 focus:outline-none transition-colors bg-white`}
            >
              <option value="">Select your availability</option>
              {availabilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.availability && touched.availability && (
              <p className="mt-1 text-sm text-red-500">{errors.availability}</p>
            )}
          </div>

          {/* Upload Photo / ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Photo / ID
            </label>
            
            {imagePreview ? (
              <div className="relative border-2 border-teal-500 rounded-lg p-4 bg-teal-50">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-64 object-contain rounded-lg mb-3"
                />
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-teal-700 truncate flex-1">{fileName}</p>
                  <button
                    onClick={() => {
                      setImagePreview('');
                      setFileName('');
                      setFormData(prev => ({ ...prev, photoId: null }));
                    }}
                    className="ml-3 px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-500 transition-colors">
                <input
                  type="file"
                  id="photoId"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="photoId" className="cursor-pointer">
                  <div className="text-gray-400 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                  {fileName && !imagePreview ? (
                    <p className="text-sm font-medium text-teal-600">{fileName} (PDF)</p>
                  ) : (
                    <span className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                      Choose File
                    </span>
                  )}
                </label>
              </div>
            )}
            
            <p className="mt-2 text-xs text-gray-500">Upload a photo of yourself or a valid ID for verification</p>
            {errors.photoId && (
              <p className="mt-1 text-sm text-red-500">{errors.photoId}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : submitSuccess
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-teal-800 hover:bg-teal-900'
            } focus:outline-none focus:ring-4 focus:ring-teal-300`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : submitSuccess ? (
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Application Submitted!
              </span>
            ) : (
              'Submit Application'
            )}
          </button>

          {/* Info Text */}
          <div className="flex items-start space-x-2 text-xs text-gray-500 pt-2">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p>Your information is safe and only used for job matching.</p>
          </div>

          {/* Support Link */}
          <div className="text-center pt-2">
            <button 
              onClick={() => alert('Contact support at support@example.com')}
              className="text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              Need help? Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;