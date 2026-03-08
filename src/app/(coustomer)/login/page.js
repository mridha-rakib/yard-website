"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      alert("Login successful!");
      console.log("Login data:", formData);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Green Section */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-green-800 p-12 flex-col justify-center items-center text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(155.62deg, #0A3019 -47.66%, #065F46 84.01%)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-md text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img
              src="/LoginLogo.png"
              alt="Yard Heroes Logo"
              className="w-full"
            />
          </div>

          {/* Welcome Text */}
          <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
          <p className="text-green-100 text-lg leading-relaxed">
            Sign in to access your secure account and continue your journey with
            us.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="bg-green-700 rounded-2xl p-3 mr-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Yard Heroes</h1>
          </div>

          {/* Login Card */}
          <div>
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Log In</h2>
              <p className="text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={`w-full pl-10 pr-12 py-3 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => alert("Navigate to Forgot Password")}
                  className="text-sm text-green-700 font-semibold hover:text-green-800 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full bg-[#0A3019] text-white py-4 rounded-lg font-bold text-lg hover:from-green-800 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 flex items-center justify-center"
              >
                <FiLogOut className="w-5 h-5 mr-2" />
                <span>Log In</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-green-700 font-bold hover:text-green-800 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>

            {/* Security Notice */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-green-700 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-green-800 font-semibold mb-1">
                    Your security is our priority
                  </p>
                  <p className="text-green-700">
                    All information is encrypted and securely transmitted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
