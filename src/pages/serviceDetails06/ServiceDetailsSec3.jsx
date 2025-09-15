import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Star,
  Quote,
  Award,
  Users,
  Globe,
  Briefcase,
  ArrowRight,
  Play,
  CheckCircle2,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceDetailsSec3 = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Sign Up & Verify",
      description:
        "Quick and secure account creation with AI-powered identity verification",
      icon: Users,
      color: "blue",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our AI analyzes your financial profile to provide personalized recommendations",
      icon: Globe,
      color: "purple",
    },
    {
      number: "03",
      title: "Customize Services",
      description:
        "Choose from our range of AI-enhanced banking and investment solutions",
      icon: Briefcase,
      color: "green",
    },
    {
      number: "04",
      title: "Start Banking",
      description:
        "Enjoy seamless, intelligent banking with 24/7 AI support and insights",
      icon: Award,
      color: "orange",
    },
  ];

  // Updated Testimonials data with provided content
  const testimonials = [
    {
      name: "Alex Ross",
      flag: "https://imgs.search.brave.com/xusJ7dKYIutUylPh-31Vy1GQ0pP_372wH3tgDFOLpeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzMvNDgzMy0w/NTAtRjZFNDE1RkUv/RmxhZy1Vbml0ZWQt/U3RhdGVzLW9mLUFt/ZXJpY2EuanBn",
      image:
        "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747136215/320270131_521914926547311_1490109788246131069_160_d2uokq.jpg",
      content:
        "Crown Bankers has redefined how I approach energy-backed assets. The platform is reliable, transparent, and future-focused.",
      rating: 5,
      social: {
        facebook: "https://www.facebook.com/AlexRoss.M",
        whatsapp: "https://wa.me/17869363977",
      },
    },
    {
      name: "Chaoxiang Bingwen",
      flag: "https://imgs.search.brave.com/IEC7al-JS3ZoBnoniH8mnnhBFjPSn2LRGKW5HkjUWVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d29ybGRhdGxhcy5j/b20vci93MTIwMC9p/bWcvZmxhZy9ubC1m/bGFnLmpwZw",
      image:
        "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747136214/2_uqpl6e.png",
      content:
        "Outstanding service and expert financial guidance. Crown Bankers is a trusted partner for all our investment needs!",
      rating: 5,
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100095266980352",
        whatsapp: "+8612345678901",
      },
    },
    {
      name: "Jett Kenney",
      flag: "https://imgs.search.brave.com/IZeHBd_tzVK_ezF45fq8TNi3qb0Mcz2yzh4W8k8ol2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMDcvODAwNy0w/NTAtRDQxNzA4NDMv/RmxhZy1EZW5tYXJr/LmpwZw",
      image:
        "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747136215/3_req3tk.png",
      content:
        "Crown Bankers delivers exceptional financial services with professionalism and reliability. Highly recommended for anyone seeking trustworthy banking solutions!",
      rating: 5,
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100086681566730",
        whatsapp: "https://wa.me/31637180219",
      },
    },
  ];

  // Stats data
  const stats = [
    { value: "$2.5B+", label: "Assets Managed", icon: Briefcase },
    { value: "150K+", label: "Active Users", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Globe },
    { value: "4.9/5", label: "User Rating", icon: Star },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Crown Bankers Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with intelligent banking in just four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div key={index} className="relative" variants={fadeInUp}>
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -z-10">
                    <ChevronRight className="absolute -right-3 -top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                )}

                <motion.div
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:bg-white border border-transparent hover:border-gray-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-5xl font-bold text-${step.color}-500 opacity-20`}
                    >
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-lg bg-${step.color}-100`}>
                      <step.icon className={`w-6 h-6 text-${step.color}-600`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video CTA Section */}
<section className="relative py-20 mb-16 bg-gradient-to-br from-green-700 via-green-800 to-green-900 overflow-hidden">
          {/* Background Glow Effects */}
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Left: Video Thumbnail / Preview */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                variants={fadeInUp}
              >
                <img
                  src="https://img.youtube.com/vi/EWeTt4RbTVU/maxresdefault.jpg"
                  alt="Our Goal Is To Change The Modern World"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <motion.a
                    href="https://youtu.be/EWeTt4RbTVU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 bg-white/90 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-green-600" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Right: CTA Text */}
              <motion.div
                className="text-white text-center lg:text-left space-y-6"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-extrabold leading-tight">
                  Our Goal Is To Change The Modern World Become Nature Friendly
                </h2>
                <p className="text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
                  Our goal is to reshape the modern world by embracing nature-friendly practices. We're committed to driving change with sustainable solutions, fostering a greener future, and making eco-conscious choices that benefit both people and the planet. Join us in this vital journey.
                </p>

                {/* CTA Button */}
                <motion.button
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:from-green-600 hover:to-emerald-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://youtu.be/EWeTt4RbTVU', '_blank')}
                >
                  <Play className="w-6 h-6 text-white" />
                  <span className="text-white">Watch Demo Video</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Updated Testimonials Section */}
        <motion.div
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 relative border border-gray-100 hover:shadow-xl transition-all"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-w-16 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <img
                          src={testimonial.flag}
                          className="absolute w-6 h-6 rounded-full -top-1 -right-1 text-lg"
                        >
                          {/* {testimonial.flag} */}
                        </img>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">Verified Client</p>
                      </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-2">
                      <motion.a
                        href={testimonial.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                      </motion.a>
                      <motion.a
                        href={`https://wa.me/${testimonial.social.whatsapp.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaWhatsapp className="w-5 h-5 text-green-600" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={fadeInUp}>
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Features */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Crown Bankers?
              </h3>
              <div className="space-y-4">
                {[
                  "AI-driven personalized financial insights",
                  "Bank-grade security with advanced encryption",
                  "24/7 intelligent customer support",
                  "Seamless integration with existing systems",
                  "Competitive rates and transparent pricing",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-lg text-gray-600 mb-6">
                Ready to experience the future of banking?
              </p>
              <Link to="/login">
              <motion.button
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailsSec3;
