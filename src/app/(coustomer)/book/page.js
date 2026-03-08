"use client";

import { useState } from "react";
import { Check, Shield, MapPin, DollarSign, Upload, X } from "lucide-react";
import Link from "next/link";

export default function BookYardWorkForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    stateCountry: "",
    urgency: "flexible",
    preferredDate: "",
    preferredTime: "anytime",
    serviceType: "plumbing",
    jobSize: "",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [errors, setErrors] = useState({});

  const serviceTypes = [
    { value: "plumbing", label: "Plumbing", basePrice: 45 },
    { value: "electrical", label: "Electrical", basePrice: 60 },
    { value: "hvac", label: "HVAC", basePrice: 75 },
    { value: "carpentry", label: "Carpentry", basePrice: 50 },
    { value: "landscaping", label: "Landscaping", basePrice: 40 },
    { value: "painting", label: "Painting", basePrice: 55 },
  ];

  const jobSizes = [
    { value: "small", label: "Small", multiplier: 1 },
    { value: "medium", label: "Medium", multiplier: 1.5 },
    { value: "large", label: "Large", multiplier: 2.5 },
    { value: "extra-large", label: "Extra Large", multiplier: 4 },
  ];

  const calculateEstimate = () => {
    const service = serviceTypes.find((s) => s.value === formData.serviceType);
    const size = jobSizes.find((s) => s.value === formData.jobSize);

    if (!service) return 45;
    if (!size) return service.basePrice;

    return Math.round(service.basePrice * size.multiplier);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhoto = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          url: reader.result,
          file,
        };
        setUploadedPhotos((prev) => [...prev, newPhoto]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (id) => {
    setUploadedPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.stateCountry.trim())
      newErrors.stateCountry = "State/Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     console.log("Form submitted:", formData);
  //     console.log("Uploaded photos:", uploadedPhotos);
  //     alert(
  //       `Job request submitted successfully!\nEstimated Cost: $${calculateEstimate()}\nService: ${formData.serviceType}\nUrgency: ${formData.urgency}`,
  //     );
  //   } else {
  //     alert("Please fill in all required fields");
  //   }
  // };

  const estimatedTotal = calculateEstimate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Book Yard Work
          </h1>
          <p className="text-gray-600 mb-4">
            Tell us what you need — we'll handle the rest.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>You start the conversion</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fast local workers</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div>
              {/* Contact Details */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Job Location */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Job Location
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.streetAddress
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.streetAddress && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.streetAddress}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                          errors.city ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                          errors.zipCode ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Description *
                    </label>
                    <textarea
                      type="text"
                      name="stateCountry"
                      placeholder="Describe what needs to be done, yard size, specific"
                      value={formData.stateCountry}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                        errors.stateCountry
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.stateCountry && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.stateCountry}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Timing & Urgency */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Timing & Urgency
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="today"
                          checked={formData.urgency === "today"}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">Today</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="within24"
                          checked={formData.urgency === "within24"}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">
                          Within 24 hours
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value="flexible"
                          checked={formData.urgency === "flexible"}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">Flexible</span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      >
                        <option value="anytime">Any time</option>
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">
                          Afternoon (12pm - 5pm)
                        </option>
                        <option value="evening">Evening (5pm - 8pm)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload Photos */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Upload Photos (Optional)
                </h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-600">
                      Drag and drop photos here, or click to select
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Photos can support upload clarity
                    </p>
                  </label>
                </div>

                {uploadedPhotos.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {uploadedPhotos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <img
                          src={photo.url}
                          alt={photo.name}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removePhoto(photo.id)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <p className="text-xs text-gray-600 mt-1 truncate">
                          {photo.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Price Estimate Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Price Estimate
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Type:</span>
                  <span className="font-medium capitalize">
                    {formData.serviceType}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Job Size:</span>
                  <span className="font-medium capitalize">
                    {formData.jobSize
                      ? formData.jobSize.replace("-", " ")
                      : "Not selected"}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Estimated Total:</span>
                    <span className="text-3xl font-bold text-gray-900">
                      ${estimatedTotal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_375_460)">
                      <path
                        d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM8.4375 13.125H9.375V10.625H8.4375C7.91797 10.625 7.5 10.207 7.5 9.6875C7.5 9.16797 7.91797 8.75 8.4375 8.75H10.3125C10.832 8.75 11.25 9.16797 11.25 9.6875V13.125H11.5625C12.082 13.125 12.5 13.543 12.5 14.0625C12.5 14.582 12.082 15 11.5625 15H8.4375C7.91797 15 7.5 14.582 7.5 14.0625C7.5 13.543 7.91797 13.125 8.4375 13.125ZM10 5C10.3315 5 10.6495 5.1317 10.8839 5.36612C11.1183 5.60054 11.25 5.91848 11.25 6.25C11.25 6.58152 11.1183 6.89946 10.8839 7.13388C10.6495 7.3683 10.3315 7.5 10 7.5C9.66848 7.5 9.35054 7.3683 9.11612 7.13388C8.8817 6.89946 8.75 6.58152 8.75 6.25C8.75 5.91848 8.8817 5.60054 9.11612 5.36612C9.35054 5.1317 9.66848 5 10 5Z"
                        fill="#0A3019"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_375_460">
                        <path d="M0 0H20V20H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="text-gray-600">
                    Final Price will be confirmed by the professional based on
                    the actual work required
                  </p>
                </div>
                <div className="flex  items-start gap-2 text-sm">
                  <div className="bg-green-600 w-5 h-5 flex items-center justify-center rounded-full">
                    <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  </div>
                  <p className="text-green-600">Licensed professionals</p>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="bg-green-600 w-5 h-5 flex items-center justify-center rounded-full">
                    <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  </div>

                  <p className="text-green-600">Satisfaction guarantee</p>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="bg-green-600 w-5 h-5 flex items-center justify-center rounded-full">
                    <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  </div>
                  <p className="text-green-600">Same-day service available</p>
                </div>
              </div>
              <Link href="/book/success">
                <button
                  // onClick={handleSubmit}
                  className="w-full bg-[#0a3019] text-white py-3 px-4 rounded-md font-medium hover:bg-[#0b4221] transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-send-icon lucide-send"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                  Submit Job Request
                </button>
              </Link>

              <p className="text-xs text-gray-500 text-center mt-3">
                We'll review your request and forward it to a professional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*================================ Footer ================================ */}
      <div className=" mt-20 border-t pt-5 pb-10 md:pt-14   md:pb-32 border-[#E5E7EB]">
        <div className="grid max-w-7xl mx-auto md:grid-cols-3  gap-2 mt-12 text-center   ">
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0625 0C14.3321 0 14.6016 0.0585938 14.8477 0.169922L25.8809 4.85156C27.1699 5.39648 28.1309 6.66797 28.125 8.20312C28.0957 14.0156 25.7051 24.6504 15.6094 29.4844C14.6309 29.9531 13.4942 29.9531 12.5157 29.4844C2.41995 24.6504 0.0293235 14.0156 2.66513e-05 8.20312C-0.00583272 6.66797 0.955105 5.39648 2.24417 4.85156L13.2832 0.169922C13.5235 0.0585938 13.793 0 14.0625 0ZM14.0625 3.91406V26.0625C22.1485 22.1484 24.3223 13.4824 24.375 8.28516L14.0625 3.91406Z"
                    fill="#0A3019"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Fully Insured</h3>
            <p className="text-sm text-gray-600">
              Your property coverage is always protected
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="23"
                  height="30"
                  viewBox="0 0 23 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_39_4121)">
                    <path
                      d="M12.6387 29.25C15.6445 25.4883 22.5 16.3711 22.5 11.25C22.5 5.03906 17.4609 0 11.25 0C5.03906 0 0 5.03906 0 11.25C0 16.3711 6.85547 25.4883 9.86133 29.25C10.582 30.1465 11.918 30.1465 12.6387 29.25ZM11.25 7.5C12.2446 7.5 13.1984 7.89509 13.9017 8.59835C14.6049 9.30161 15 10.2554 15 11.25C15 12.2446 14.6049 13.1984 13.9017 13.9017C13.1984 14.6049 12.2446 15 11.25 15C10.2554 15 9.30161 14.6049 8.59835 13.9017C7.89509 13.1984 7.5 12.2446 7.5 11.25C7.5 10.2554 7.89509 9.30161 8.59835 8.59835C9.30161 7.89509 10.2554 7.5 11.25 7.5Z"
                      fill="#0A3019"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_4121">
                      <path d="M0 0H22.5V30H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Local Workers</h3>
            <p className="text-sm text-gray-600">
              Trusted professionals in your area
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="17"
                  height="30"
                  viewBox="0 0 17 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.52914 0C9.56625 0 10.4041 0.837891 10.4041 1.875V3.9668C10.4979 3.97852 10.5858 3.99023 10.6795 4.00781C10.703 4.01367 10.7205 4.01367 10.744 4.01953L13.5565 4.53516C14.576 4.72266 15.2498 5.70117 15.0623 6.71484C14.8748 7.72852 13.8963 8.4082 12.8827 8.2207L10.0995 7.71094C8.26547 7.44141 6.64828 7.62305 5.51156 8.07422C4.37484 8.52539 3.91781 9.14648 3.81234 9.7207C3.69515 10.3477 3.78304 10.6992 3.88265 10.916C3.98812 11.1445 4.20492 11.4023 4.63265 11.6895C5.58773 12.3164 7.05258 12.7266 8.95101 13.2305L9.12093 13.2773C10.7967 13.7227 12.8475 14.2617 14.3709 15.2578C15.203 15.8027 15.9881 16.541 16.4744 17.5723C16.9725 18.6211 17.078 19.793 16.8494 21.041C16.4452 23.2676 14.91 24.7559 13.0057 25.5352C12.203 25.8633 11.3299 26.0742 10.4041 26.1797V28.125C10.4041 29.1621 9.56625 30 8.52914 30C7.49203 30 6.65414 29.1621 6.65414 28.125V26.0801C6.6307 26.0742 6.6014 26.0742 6.57797 26.0684H6.56625C5.13656 25.8457 2.78695 25.2305 1.20492 24.5273C0.261559 24.1055 -0.166175 22.998 0.2557 22.0547C0.677575 21.1113 1.785 20.6836 2.72836 21.1055C3.95297 21.6504 5.96859 22.1895 7.13461 22.3711C9.00375 22.6465 10.5448 22.4883 11.5877 22.0605C12.578 21.6562 13.0291 21.0703 13.158 20.3672C13.2694 19.7461 13.1815 19.3887 13.0819 19.1719C12.9705 18.9375 12.7537 18.6797 12.3202 18.3926C11.3592 17.7656 9.88851 17.3555 7.98422 16.8516L7.82015 16.8105C6.15023 16.3652 4.09945 15.8203 2.57601 14.8242C1.74398 14.2793 0.964684 13.5352 0.478356 12.5039C-0.0138313 11.4551 -0.113441 10.2832 0.120934 9.03516C0.542809 6.79688 2.21859 5.34375 4.12289 4.58789C4.90218 4.27734 5.75765 4.06641 6.65414 3.94336V1.875C6.65414 0.837891 7.49203 0 8.52914 0Z"
                    fill="#0A3019"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">No Hidden Fees</h3>
            <p className="text-sm text-gray-600">
              What you see is what you pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
