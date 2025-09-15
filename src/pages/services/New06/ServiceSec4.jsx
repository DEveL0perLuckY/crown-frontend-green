import React from "react";
import { Mail, Phone, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceSec4 = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-t from-green-600 to-emerald-500 bg-clip-text text-transparent mb-4">
            Modern Office Space
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We always want to connect our clients
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Service Description */}
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Professional Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              variants={fadeInLeft}
            >
              <img
                src="https://i.pinimg.com/736x/1d/d4/6b/1dd46bd74455060421afa16922e1e7a9.jpg"
                alt="Modern AI Office Space"
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <p className="text-sm font-semibold text-gray-900">
                  AI Innovation Hub
                </p>
                <p className="text-xs text-gray-600">
                  Transforming businesses daily
                </p>
              </motion.div>
            </motion.div>

            {/* Service Description */}
            <motion.div
              className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-lg"
              variants={fadeInLeft}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                AI Solutions for Your Business
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Making AI accessible and beneficial for organizations, and we
                look forward to partnering with businesses to achieve their AI
                goals.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div className="space-y-4" variants={staggerContainer}>
              {[
                {
                  title: "Strategic AI Implementation",
                  desc: "Tailored solutions for your specific business needs",
                },
                {
                  title: "Expert Consultation",
                  desc: "Guidance from experienced AI professionals",
                },
                {
                  title: "Continuous Support",
                  desc: "Ongoing partnership for sustainable growth",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={fadeInUp}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Card */}
          <motion.div
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            {/* Decorative background element */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>

              <motion.div className="space-y-6" variants={staggerContainer}>
                {/* Website */}
                <motion.a
                  href="https://crownbankers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all hover:shadow-md group"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      crownbankers.com
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:crownbankers.com@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all hover:shadow-md group"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      crownbankers.com@gmail.com
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+447452176974"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all hover:shadow-md group"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      +44 7452 176974
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </motion.a>
              </motion.div>

              {/* CTA Button */}
              <Link to="/login">
                <motion.button
                  className="w-full mt-8 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Your AI Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSec4;
