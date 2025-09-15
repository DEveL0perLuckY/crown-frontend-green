import React, { useState, useMemo } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import authService from "../../services/authService";
import { CgSpinner } from "react-icons/cg";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Login06 = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    userId: "CROWN-",
    password: "",
    otp: "",
  });

  const [errors, setErrors] = useState({
    userId: "",
    password: "",
    otp: "",
  });

  const [touched, setTouched] = useState({
    userId: false,
    password: false,
    otp: false,
  });

  const [loadingStates, setLoadingStates] = useState({
    isSignInLoading: false,
  });

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateInput(name, formData[name]);
  };

  const validateInput = (name, value) => {
    let error = "";

    switch (name) {
      case "userId":
        error =
          value.trim() === "" || value.trim() === "CROWN-"
            ? "User ID is required"
            : "";
        break;
      case "password":
        error = value ? "" : "Password is required";
        break;
      case "otp":
        error = value ? "" : "OTP is required";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (touched[name]) {
      validateInput(name, value);
    }
  };

  const changeLoadingStates = (name, value) => {
    setLoadingStates((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    Object.keys(formData).forEach((key) => {
      if (!showOTPInput && key === "otp") return;
      validateInput(key, formData[key]);
      setTouched((prev) => ({ ...prev, [key]: true }));
    });

    try {
      changeLoadingStates("isSignInLoading", true);
      const response = await authService.loginUser({
        userId: formData.userId,
        password: formData.password,
      });

      if (response?.data?.success) {
        toast.success("Login successful! Redirecting...");
        updateUser({
          user: response?.data?.data,
          token: response?.data?.token,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Invalid credentials. Please try again."
      );
    } finally {
      changeLoadingStates("isSignInLoading", false);
    }
  };

  const validationFilteredStates = showOTPInput
    ? Object.keys(formData)
    : ["userId", "password"];

  const isButtonDisabled = useMemo(
    () =>
      validationFilteredStates.some(
        (key) =>
          errors[key] !== "" ||
          (key === "userId"
            ? formData[key] === "CROWN-" || formData[key] === ""
            : formData[key] === "")
      ),
    [errors, formData, validationFilteredStates]
  );

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const features = [
    { icon: Shield, text: "Bank-grade security" },
    { icon: Lock, text: "256-bit encryption" },
    { icon: CheckCircle, text: "24/7 account monitoring" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24">
          {/* Logo */}
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <img
                className="h-16 w-auto"
                src="/assets/logo1.png"
                alt="Crown Bankers"
              />
            </Link>
          </div>

          {/* Form Container */}
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Welcome back
              </h1>
              <p className="text-gray-400">
                Sign in to access your Crown Bankers account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User ID Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  User ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    name="userId"
                    type="text"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                      errors.userId && touched.userId
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-green-500"
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                    placeholder="Enter your user ID"
                    value={formData.userId}
                    onChange={handleChange}
                    onBlur={() => handleBlur("userId")}
                  />
                </div>
                {errors.userId && touched.userId && (
                  <p className="mt-2 text-sm text-red-400">{errors.userId}</p>
                )}
              </div>

              {/* Password Input */}
              {!showOTPInput && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border ${
                        errors.password && touched.password
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-700 focus:border-green-500"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      onBlur={() => handleBlur("password")}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.password && touched.password && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.password}
                    </p>
                  )}
                </div>
              )}

              {/* OTP Input */}
              {showOTPInput && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    One-Time Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Shield className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      name="otp"
                      type="text"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                        errors.otp && touched.otp
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-700 focus:border-green-500"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      onBlur={() => handleBlur("otp")}
                    />
                  </div>
                  {errors.otp && touched.otp && (
                    <p className="mt-2 text-sm text-red-400">{errors.otp}</p>
                  )}
                </div>
              )}

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-green-500 focus:ring-green-500 focus:ring-offset-0"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/reset-password"
                  className="text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isButtonDisabled || loadingStates.isSignInLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                  isButtonDisabled || loadingStates.isSignInLoading
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] shadow-lg"
                }`}
              >
                {loadingStates.isSignInLoading ? (
                  <>
                    <CgSpinner className="animate-spin mr-2" size={20} />
                    {showOTPInput ? "Verifying..." : "Signing in..."}
                  </>
                ) : (
                  <>
                    {showOTPInput ? "Verify OTP" : "Sign in"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  Create account
                </Link>
              </p>
            </form>

            {/* Security Features */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-wrap gap-4 justify-center">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-400 text-sm"
                  >
                    <feature.icon className="h-4 w-4 mr-2 text-green-500" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Graphics */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <img
            src="/assets/img/solar.jpg"
            alt="Secure Banking"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white max-w-lg">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Secure Banking at Your Fingertips
              </h2>
              <p className="text-lg text-white/80">
                Experience the future of banking with Crown Bankers. Your
                financial security is our top priority.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-1">$2.5M+</h3>
                <p className="text-sm text-white/70">Transactions Secured</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-1">50K+</h3>
                <p className="text-sm text-white/70">Happy Customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-1">99.9%</h3>
                <p className="text-sm text-white/70">Uptime Guarantee</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-1">24/7</h3>
                <p className="text-sm text-white/70">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login06;
