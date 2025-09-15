import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  ArrowUpRight,
  Shield,
  Award,
  Clock,
  Globe,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer_06 = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <div className="mb-6">
              <h2 className=" relative text-2xl right-6 flex  items-center font-bold text-white mb-2">
                <motion.img
                src="/logo2.png"
                alt="logo1"
                width={100}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
                Crown Bankers
              </h2>
              <p className="text-sm text-gray-400">
                AI-Powered Financial Excellence
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-[#5DB150]">
              Quick Contact
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your Gateway to Prosperity. Experience strategic investing,
              innovative solutions, and financial excellence with us.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:crownbankers.com@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#5DB150] group-hover:scale-110 transition-transform" />
                <span className="text-sm">crownbankers.com@gmail.com</span>
              </a>

              <a
                href="tel:+447452176974"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#5DB150] group-hover:scale-110 transition-transform" />
                <span className="text-sm">+44 7452 176974</span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#5DB150] flex-shrink-0 mt-0.5" />
                <span className="text-sm">London, United Kingdom</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Award className="w-4 h-4" />
                <span>Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", to: "/" },
                { name: "About Us", to: "/business-plan" },
                { name: "Services", to: "/service" },
                { name: "FAQs", to: "/contact" },
                { name: "Contact", to: "/contact" },
                { name: "Careers", to: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "AI Banking Solutions",
                "Investment Analytics",
                "Wealth Management",
                "Corporate Banking",
                "Digital Payments",
                "Financial Advisory",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{service}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Legal */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3 mb-8">
              {[
                { name: "Help Center", to: "/contact" },
                { name: "Terms & Conditions", to: "/legal" },
                { name: "Privacy Policy", to: "/legal" },
                { name: "Security", to: "/legal" },
                { name: "Accessibility", to: "/pdf-downloads" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Operating Hours */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#5DB150]" />
                <span className="text-sm font-semibold">Support Hours</span>
              </div>
              <p className="text-xs text-gray-400">
                Mon-Fri: 9:00 AM - 6:00 PM GMT
              </p>
              <p className="text-xs text-gray-400">
                24/7 AI Assistant Available
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media & Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400 mb-2">
                © Copyright {currentYear}, Crown Bankers. All Rights Reserved by{" "}
                <span className="text-white font-semibold">
                  CROWNQUEST ASSET MANAGEMENT LIMITED
                </span>
                .
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500">
                <Globe className="w-3 h-3" />
                <a
                  href="https://crownbankers.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  crownbankers.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 mr-2">Follow Us:</span>
              {[
                {
                  icon: Facebook,
                  href: "https://facebook.com/crownbankers",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: FaXTwitter,
                  href: "https://twitter.com/crownbankers",
                  color: "hover:bg-gray-800",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/crownbankers",
                  color: "hover:bg-blue-700",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/crownbankers",
                  color: "hover:bg-pink-600",
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com/crownbankers",
                  color: "hover:bg-red-600",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-full hover:text-white transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUpRight className="w-5 h-5 text-white rotate-[-45deg]" />
      </motion.button>
    </footer>
  );
};

export default Footer_06;
