import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, XCircle, Info, Calendar } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  // Refs for animation
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set up animations
    const ctx = gsap.context(() => {
      // Hero heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          }
        }
      );

      // Contact cards staggered animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
          }
        }
      );

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // Map/Image animation
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success toast with icon
      toast.success(
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>Message sent successfully!</span>
        </div>, 
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: false
        }
      );

      // Additional success notification
      toast.info(
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-yellow-500" />
          <span>Thank you {formData.name}! We'll get back to you within 24 hours.</span>
        </div>,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          delay: 1000,
          icon: false
        }
      );
      
      console.log("Form submitted:", formData);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      // Show error toast with icon
      toast.error(
        <div className="flex items-center gap-2">
          <XCircle className="w-5 h-5 text-red-500" />
          <span>Something went wrong. Please try again.</span>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: false
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestQuote = () => {
    toast.info(
      <div className="flex items-center gap-2">
        <Info className="w-5 h-5" />
        <span>Redirecting to quote request form...</span>
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: false
      }
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "crownbankers.com@gmail.com",
      description: "We'll respond within 24 hours",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 7452 176974",
      description: "Mon-Fri from 9am to 6pm",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "London, United Kingdom",
      description: "Schedule an appointment",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "9:00 AM - 6:00 PM",
      description: "Monday through Friday",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] opacity-50"></div>
        
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          {/* Section Header */}
          <div ref={headingRef} className="text-center my-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you! Tell us how we can assist and we'll respond within 24 hours.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer"
                onClick={() => {
                  if (info.title === "Email Us") {
                    window.location.href = `mailto:${info.content}`;
                  } else if (info.title === "Call Us") {
                    window.location.href = `tel:${info.content}`;
                  }
                }}
              >
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(info.color)} flex items-center justify-center mb-4`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-800 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Shiv Baghel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="your@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="+44 1234 567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      flex-1 px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2
                      ${isSubmitting 
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleRequestQuote}
                    className="px-6 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                  >
                                        <ArrowRight className="w-5 h-5" />
                    Request Quote
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Map/Image */}
            <div ref={mapRef} className="relative h-full min-h-[500px] lg:min-h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                  alt="Office"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">Visit Our Office</h4>
                  <p className="mb-4">Schedule an appointment to meet our team in person</p>
                  <button 
                    onClick={() => {
                      toast.info(
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>Opening appointment scheduler...</span>
                        </div>,
                        {
                          position: "top-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          icon: false
                        }
                      );
                    }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .bg-grid-gray-100 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(229 231 235)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          }
          
          /* Custom toast styles */
          :global(.Toastify__toast) {
            font-family: inherit;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          
          :global(.Toastify__toast--success) {
            background: linear-gradient(to right, #10b981, #059669);
          }
          
          :global(.Toastify__toast--error) {
            background: linear-gradient(to right, #ef4444, #dc2626);
          }
          
          :global(.Toastify__toast--info) {
            background: linear-gradient(to right, #3b82f6, #2563eb);
          }
          
          :global(.Toastify__progress-bar) {
            background: rgba(255, 255, 255, 0.7);
          }
          
          :global(.Toastify__toast-body) {
            padding: 0;
          }
          
          :global(.Toastify__close-button) {
            opacity: 0.7;
          }
          
          :global(.Toastify__close-button:hover) {
            opacity: 1;
          }
        `}</style>
      </section>
    </>
  );
}