import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="gray" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E')] opacity-50" /> */}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Badge */}
          {/* <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-8"
            variants={contentVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">
              Investment Excellence
            </span>
          </motion.div> */}

          {/* Main Title */}
          <motion.h1
            className="mt-20 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={titleVariants}
          >
            Ride the Wave to{" "}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Financial Freedom
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-3 bg-green-200 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </span>
            <br />
            with Crown Bankers
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            variants={contentVariants}
          >
            At Crown Bankers, we're dedicated to helping you capitalize on the
            most exciting investment opportunities in today's market. Our
            platform simplifies investing in high-growth sectors, ensuring your
            portfolio benefits from cutting-edge advancements. Explore the
            sectors we focus on.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={contentVariants}
          >
            <motion.a
              className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg flex items-center gap-2 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#service_section2"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <Link to="/pdf-downloads">
              <motion.button
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              { value: "15+", label: "Years of Excellence", icon: TrendingUp },
              { value: "50K+", label: "Happy Investors", icon: Sparkles },
              { value: "$2B+", label: "Assets Managed", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={contentVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3"
                  animate={floatingAnimation}
                >
                  <stat.icon className="w-6 h-6 text-green-600" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20"
        animate={floatingAnimation}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg opacity-20 blur-xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl" />
      </motion.div>
    </section>
  );
};

export default ServiceHero;
