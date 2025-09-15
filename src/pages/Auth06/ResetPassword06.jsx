import React, { useState, useMemo } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import authService from "../../services/authService";
import { CgSpinner } from "react-icons/cg";
import { Eye, EyeOff, Lock, User, Shield, ArrowRight, Mail, CheckCircle } from "lucide-react";

const ResetPassword06 = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    userId: "CROWN-",
    isOTPSent: false,
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userId: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    userId: false,
    otp: false,
    password: false,
    confirmPassword: false,
  });

  const [loadingStates, setLoadingStates] = useState({
    isOTPSentLoading: false,
    isForgotLoading: false,
  });

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "userId":
        error = value.trim() === "CROWN-" ? "Valid User ID required" : "";
        break;
      case "otp":
        error = value ? "" : "OTP is required";
        break;
      case "password":
        error = value.length < 8 ? "Minimum 8 characters required" : "";
        break;
      case "confirmPassword":
        error = value !== formData.password ? "Passwords must match" : "";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) validateInput(name, value);
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateInput(name, formData[name]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all relevant fields
    Object.keys(formData).forEach((key) => {
      if (!formData.isOTPSent && key !== "userId") return;
      validateInput(key, formData[key]);
      setTouched((prev) => ({ ...prev, [key]: true }));
    });

    try {
      if (!formData.isOTPSent) {
        setLoadingStates((prev) => ({ ...prev, isOTPSentLoading: true }));
        const res = await authService.sendForgotPasswordOTP({
          userId: formData.userId,
        });
        
        if (res.status === 200) {
          toast.success("OTP sent successfully! Check your email");
          setFormData((prev) => ({ ...prev, isOTPSent: true }));
        }
      } else {
        setLoadingStates((prev) => ({ ...prev, isForgotLoading: true }));
        const res = await authService.resetForgotPassword({
          userId: formData.userId,
          password: formData.password,
          otp: formData.otp,
        });
        
        if (res.status === 200) {
          toast.success("Password reset successful!");
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingStates((prev) => ({
        ...prev,
        isOTPSentLoading: false,
        isForgotLoading: false,
      }));
    }
  };

  const isButtonDisabled = useMemo(() => {
    return Object.values(errors).some(error => error !== "") ||
      Object.values(formData).some(value => value === "") ||
      loadingStates.isOTPSentLoading || loadingStates.isForgotLoading;
  }, [errors, formData, loadingStates]);

  if (user) return <Navigate to="/dashboard" />;

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
                Reset Password
              </h1>
              <p className="text-gray-400">
                {formData.isOTPSent 
                  ? "Verify your OTP and set new password"
                  : "Enter your User ID to receive reset instructions"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User ID Input */}
              {!formData.isOTPSent && (
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
                      placeholder="Enter your User ID"
                      value={formData.userId}
                      onChange={handleChange}
                      onBlur={() => handleBlur("userId")}
                    />
                  </div>
                  {errors.userId && touched.userId && (
                    <p className="mt-2 text-sm text-red-400">{errors.userId}</p>
                  )}
                </div>
              )}

              {/* OTP Input */}
              {formData.isOTPSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    One-Time Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
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

              {/* Password Inputs */}
              {formData.isOTPSent && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      New Password
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
                        placeholder="Enter new password"
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
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CheckCircle className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border ${
                          errors.confirmPassword && touched.confirmPassword
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-700 focus:border-green-500"
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                        placeholder="Confirm new password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={() => handleBlur("confirmPassword")}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                  isButtonDisabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] shadow-lg"
                }`}
              >
                {loadingStates.isOTPSentLoading || loadingStates.isForgotLoading ? (
                  <>
                    <CgSpinner className="animate-spin mr-2" size={20} />
                    {formData.isOTPSent ? "Resetting..." : "Sending OTP..."}
                  </>
                ) : (
                  <>
                    {formData.isOTPSent ? "Reset Password" : "Send OTP"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {/* Back to Login */}
              <p className="text-center text-gray-400">
                Remembered your password?{" "}
                <Link
                  to="/login"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  Sign in
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

      {/* Right Side - Image */}
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
                Secure Password Reset
              </h2>
              <p className="text-lg text-white/80">
                Your security is our priority. Use our secure password reset process
                to protect your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword06;