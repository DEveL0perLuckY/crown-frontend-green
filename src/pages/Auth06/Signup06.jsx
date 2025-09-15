import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import countryList from "react-select-country-list";
import { CgSpinner } from "react-icons/cg";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Globe,
  Lock,
  Shield,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react";
import { baseURL } from "../../constants/baseURL";
import authService from "../../services/authService";
import { Select } from "../../components";

function Signup06() {
  const [searchParams, setSearchParams] = useSearchParams({
    sponsorId: "",
    position: "left",
  });
  const paramSponsorId = searchParams.get("sponsorId");
  const paramPosition = searchParams.get("position");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    hasSponsor: false,
    position: "left",
    sponsorId: "CROWN-",
    sponsorName: "",
    firstName: "",
    lastName: "",
    country: null,
    phoneNumber: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phoneNumber: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    acceptTerms: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    country: false,
    phoneNumber: false,
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
    acceptTerms: false,
  });

  const [loadingStates, setLoadingStates] = useState({
    isSignUpLoading: false,
  });

  const navigate = useNavigate();
  const options = useMemo(() => countryList().getData(), []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateInput(name, formData[name]);
  };

  const validateInput = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
        error = value.trim() === "" ? "First name is required" : "";
        break;
      case "lastName":
        error = value.trim() === "" ? "Last name is required" : "";
        break;
      case "country":
        error = value ? "" : "Please select a country";
        break;
      case "phoneNumber":
        error = value.trim() === "" ? "Phone number is required" : "";
        break;
      case "email":
        error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "confirmEmail":
        error = value === formData.email ? "" : "Emails do not match";
        break;
      case "password":
        error =
          value.length >= 8 ? "" : "Password must be at least 8 characters";
        break;
      case "confirmPassword":
        error = value === formData.password ? "" : "Passwords do not match";
        break;
      case "acceptTerms":
        error = value ? "" : "You must accept the terms and conditions";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateInput(name, value);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    validateInput(name, checked);
  };

  const handleRadioChange = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const changeLoadingStates = (name, value) => {
    setLoadingStates((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (formData.sponsorId.length === 12) {
      fetchSponsorName(formData.sponsorId);
    }
  }, [formData.sponsorId]);

  useEffect(() => {
    if (paramSponsorId) {
      setFormData((prev) => ({
        ...prev,
        sponsorId: paramSponsorId,
        hasSponsor: true,
      }));
    }

    if (paramPosition) {
      setFormData((prev) => ({
        ...prev,
        position: paramPosition,
      }));
    }
  }, [paramPosition, paramSponsorId]);

  const fetchSponsorName = async (id) => {
    try {
      const { data } = await axios.get(baseURL + "/users/name/" + id);
      if (data?.success) {
        setFormData((prev) => ({ ...prev, sponsorName: data?.data?.name }));
      }
    } catch (error) {
      setFormData((prev) => ({ ...prev, sponsorName: "CROWN" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    Object.keys(formData).forEach((key) => {
      if (
        key !== "sponsorId" &&
        key !== "sponsorName" &&
        key !== "hasSponsor"
      ) {
        validateInput(key, formData[key]);
        setTouched((prev) => ({ ...prev, [key]: true }));
      }
    });

    // Check if there are any errors
    if (Object.values(errors).some((error) => error !== "")) {
      toast.error("Please fix all errors before submitting");
      return;
    }

    try {
      changeLoadingStates("isSignUpLoading", true);
      const response = await authService.signUpUser({
        ...formData,
        referrer_id:
          formData.sponsorId && formData.hasSponsor
            ? `${formData.sponsorId}`
            : "CROWN-100012",
        phone: formData.phoneNumber,
        username: `${formData.firstName} ${formData.lastName}`,
        country: formData?.country?.label,
        state: state,
        city: city,
      });

      if (response?.data?.success) {
        toast.success(
          "Welcome to Crown Bankers! Check your email for credentials."
        );
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Error while registering. Please try again."
      );
    } finally {
      changeLoadingStates("isSignUpLoading", false);
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Contact Details", icon: Mail },
    { number: 3, title: "Security", icon: Shield },
  ];

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          !errors.firstName &&
          !errors.lastName
        );
      case 2:
        return (
          formData.email &&
          formData.phoneNumber &&
          formData.country &&
          !errors.email &&
          !errors.phoneNumber &&
          !errors.country &&
          formData.confirmEmail &&
          !errors.confirmEmail
        );
      case 3:
        return (
          formData.password &&
          formData.confirmPassword &&
          formData.acceptTerms &&
          !errors.password &&
          !errors.confirmPassword &&
          !errors.acceptTerms
        );
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (isStepValid(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="flex-1 flex flex-col px-8 sm:px-12 lg:px-16 xl:px-24 py-8">
          {/* Logo */}
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <img
                className="h-14 w-auto"
                src="/assets/logo1.png"
                alt="Crown Bankers"
              />
            </Link>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-md">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                      currentStep >= step.number
                        ? "bg-green-500 border-green-500 text-white"
                        : "border-gray-600 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">
                        {step.number}
                      </span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-2 transition-all ${
                        currentStep > step.number
                          ? "bg-green-500"
                          : "bg-gray-600"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 max-w-md">
              {steps.map((step) => (
                <span
                  key={step.number}
                  className={`text-xs ${
                    currentStep >= step.number
                      ? "text-green-400"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="flex-1 flex flex-col justify-center max-w-md w-full">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Create your account
              </h1>
              <p className="text-gray-400">
                Join Crown Bankers and start your financial journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  {/* Sponsor Section */}
                  <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-300">
                        Do you have a sponsor?
                      </label>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasSponsor"
                            checked={formData.hasSponsor}
                            onChange={handleRadioChange}
                            className="w-4 h-4 text-green-500 focus:ring-green-500"
                          />
                          <span className="ml-2 text-sm text-gray-300">
                            Yes
                          </span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasSponsor"
                            checked={!formData.hasSponsor}
                            onChange={handleRadioChange}
                            className="w-4 h-4 text-green-500 focus:ring-green-500"
                          />
                          <span className="ml-2 text-sm text-gray-300">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.hasSponsor && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">
                              Sponsor ID
                            </label>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                name="sponsorId"
                                type="text"
                                className="w-full pl-10 pr-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-sm"
                                placeholder="CROWN-XXXXXX"
                                value={formData.sponsorId}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">
                              Sponsor Name
                            </label>
                            <input
                              type="text"
                              readOnly
                              className="w-full px-3 py-2 bg-gray-700/30 border border-gray-600 rounded-lg text-gray-400 text-sm"
                              value={formData.sponsorName}
                              placeholder="Auto-filled"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-gray-400">
                            Position
                          </label>
                          <div className="flex items-center space-x-4">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="position"
                                value="left"
                                checked={paramPosition === "left"}
                                onChange={() =>
                                  setSearchParams({
                                    sponsorId: paramSponsorId || "",
                                    position: "left",
                                  })
                                }
                                className="w-4 h-4 text-green-500 focus:ring-green-500"
                              />
                              <span className="ml-2 text-sm text-gray-300">
                                Left
                              </span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="position"
                                value="right"
                                checked={paramPosition === "right"}
                                onChange={() =>
                                  setSearchParams({
                                    sponsorId: paramSponsorId || "",
                                    position: "right",
                                  })
                                }
                                className="w-4 h-4 text-green-500 focus:ring-green-500"
                              />
                              <span className="ml-2 text-sm text-gray-300">
                                Right
                              </span>
                            </label>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          name="firstName"
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                            errors.firstName && touched.firstName
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-700 focus:border-green-500"
                          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                          placeholder="Shiv"
                          value={formData.firstName}
                          onChange={handleChange}
                          onBlur={() => handleBlur("firstName")}
                        />
                      </div>
                      {touched.firstName && errors.firstName && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          name="lastName"
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                            errors.lastName && touched.lastName
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-700 focus:border-green-500"
                          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                          placeholder="Baghel"
                          value={formData.lastName}
                          onChange={handleChange}
                          onBlur={() => handleBlur("lastName")}
                        />
                      </div>
                      {touched.lastName && errors.lastName && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          name="phoneNumber"
                          type="tel"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                            errors.phoneNumber && touched.phoneNumber
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-700 focus:border-green-500"
                          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                          placeholder="+1234567890"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          onBlur={() => handleBlur("phoneNumber")}
                        />
                      </div>
                      {touched.phoneNumber && errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
                        <Select
                          options={options}
                          value={formData.country}
                          onChange={(value) => {
                            setFormData((prev) => ({
                              ...prev,
                              country: value,
                            }));
                            if (touched.country) {
                              validateInput("country", value);
                            }
                          }}
                          onBlur={() => handleBlur("country")}
                          placeHolder="Select Country"
                          customStyles={{
                            control: (provided) => ({
                              ...provided,
                              backgroundColor: "rgba(31, 41, 55, 0.5)",
                              border:
                                errors.country && touched.country
                                  ? "1px solid #ef4444"
                                  : "1px solid #374151",
                              borderRadius: "0.5rem",
                              padding: "0.25rem 0.25rem 0.25rem 2.5rem",
                              color: "white",
                              minHeight: "48px",
                              "&:hover": {
                                borderColor: "#10b981",
                              },
                            }),
                            input: (provided) => ({
                              ...provided,
                              color: "#f9fafb",
                            }),
                            singleValue: (provided) => ({
                              ...provided,
                              color: "#f9fafb",
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              backgroundColor: state.isSelected
                                ? "#10b981"
                                : "#1f2937",
                              color: "#f9fafb",
                              "&:hover": {
                                backgroundColor: "#374151",
                              },
                            }),
                            menu: (provided) => ({
                              ...provided,
                              backgroundColor: "#1f2937",
                              border: "1px solid #374151",
                            }),
                          }}
                        />
                      </div>
                      {touched.country && errors.country && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.country}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* State and City for Nigeria */}
                  {formData.country?.value === "NG" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                          placeholder="Lagos"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                          placeholder="Ikeja"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        name="email"
                        type="email"
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                          errors.email && touched.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-700 focus:border-green-500"
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                        placeholder="your@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        name="confirmEmail"
                        type="email"
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                          errors.confirmEmail && touched.confirmEmail
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-700 focus:border-green-500"
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                        placeholder="your@example.com"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        onBlur={() => handleBlur("confirmEmail")}
                      />
                    </div>
                    {touched.confirmEmail && errors.confirmEmail && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.confirmEmail}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Security */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border ${
                          errors.password && touched.password
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-700 focus:border-green-500"
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={() => handleBlur("password")}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {touched.password && errors.password && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border ${
                          errors.confirmPassword && touched.confirmPassword
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-700 focus:border-green-500"
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all`}
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={() => handleBlur("confirmPassword")}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {touched.confirmPassword && errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleCheckboxChange}
                        onBlur={() => handleBlur("acceptTerms")}
                        className="w-4 h-4 mt-0.5 rounded border-gray-600 bg-gray-800 text-green-500 focus:ring-green-500 focus:ring-offset-0"
                      />
                      <span className="ml-3 text-sm text-gray-300">
                        I agree to the{" "}
                        <Link
                          to="/TermsandCondition?tab=terms"
                          className="text-green-400 hover:text-green-300 underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/TermsandCondition?tab=privacy"
                          className="text-green-400 hover:text-green-300 underline"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {touched.acceptTerms && errors.acceptTerms && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.acceptTerms}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-3 px-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-200"
                  >
                    Previous
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                      isStepValid(currentStep)
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] shadow-lg"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Next
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid(3) || loadingStates.isSignUpLoading}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                      !isStepValid(3) || loadingStates.isSignUpLoading
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] shadow-lg"
                    }`}
                  >
                    {loadingStates.isSignUpLoading ? (
                      <>
                        <CgSpinner className="animate-spin mr-2" size={20} />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <CheckCircle className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Sign In Link */}
              <p className="text-center text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Graphics */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <img
            src="https://res.cloudinary.com/dcqnkr06e/image/upload/v1747167193/sbg_mb8isz.jpg"
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
                Join Crown Bankers Today
              </h2>
              <p className="text-lg text-white/80">
                Experience secure banking with advanced features and 24/7
                support. Your financial future starts here.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Instant Account Setup</h3>
                    <p className="text-sm text-white/70">
                      Get started in minutes
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Bank-Grade Security</h3>
                    <p className="text-sm text-white/70">
                      Your data is always protected
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Global Access</h3>
                    <p className="text-sm text-white/70">
                      Bank from anywhere in the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup06;
