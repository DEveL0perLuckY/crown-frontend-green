// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Shield, TrendingUp, Users, Zap } from "lucide-react";

// const ServiceDetailsHero = () => {
//   // Animation variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: "easeOut" },
//   };

//   const fadeIn = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     transition: { duration: 1, ease: "easeOut" },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Fixed Background Image */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
//       </div>

//       {/* Content */}
//       <div className="mt-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={staggerContainer}
//           className="text-center"
//         >
//           {/* Main Heading */}
//           <motion.h1
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
//             variants={fadeInUp}
//           >
//             Empowering Your Financial Future
//             <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mt-2">with AI Innovation</span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
//             variants={fadeInUp}
//           >
//             Crown Bankers: Where Traditional Banking Meets Cutting-Edge AI
//             Technology
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
//             variants={fadeInUp}
//           >
//             We specialize in transforming financial services through intelligent
//             automation, predictive analytics, and personalized banking solutions
//             that put you in control.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
//             variants={fadeInUp}
//           >
//             <motion.button
//               className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Get Started</span>
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>

//             <motion.button
//               className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Learn More
//             </motion.button>
//           </motion.div>

//           {/* Feature Cards */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerContainer}
//           >
//             {[
//               {
//                 icon: Shield,
//                 title: "Secure Banking",
//                 description:
//                   "Advanced encryption and AI-powered fraud detection",
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Smart Investments",
//                 description: "AI-driven portfolio optimization and insights",
//               },
//               {
//                 icon: Users,
//                 title: "Personal Advisory",
//                 description: "24/7 AI financial advisor at your service",
//               },
//               {
//                 icon: Zap,
//                 title: "Instant Processing",
//                 description: "Lightning-fast transactions and approvals",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
//                 variants={fadeInUp}
//                 whileHover={{ y: -5 }}
//               >
//                 <feature.icon className="w-12 h-12 text-green-400 mb-4 mx-auto" />
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm text-gray-300">{feature.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 1.5,
//             duration: 0.8,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         >
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <motion.div
//           className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full opacity-10 blur-3xl"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"
//           animate={{
//             x: [0, -50, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default ServiceDetailsHero;

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Star,
  Award,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServiceDetailsHero = () => {
  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sophisticated Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        {/* Sophisticated Gradient Overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-emerald-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> */}

        {/* Subtle Pattern Overlay */}
        {/* <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        /> */}
      </div>

      {/* Main Content Container */}
      <div className="mt-20 relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge/Label */}
            {/* <motion.div
              variants={slideInLeft}
              className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium tracking-wide">
                Award-Winning Financial Technology
              </span>
            </motion.div> */}

            {/* Main Headline */}
            <motion.h1
              className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight"
              variants={slideInLeft}
            >
              <span className="text-white block">The Future of</span>
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent block">
                Smart Banking
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-xl"
              variants={slideInLeft}
            >
              Revolutionizing financial services through AI-powered solutions,
              delivering personalized experiences that adapt to your unique
              needs.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              className="flex flex-wrap gap-6 text-slate-400"
              variants={slideInLeft}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm font-medium">
                  99.9% Uptime Guarantee
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm font-medium">Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm font-medium">24/7 AI Support</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={slideInLeft}
            >
              <Link to="/login">
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
              </Link>

              <motion.a
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#service_details_explore"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Explore Solutions</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-6 pt-8 border-t border-white/10"
              variants={slideInLeft}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2M+</div>
                <div className="text-sm text-slate-400">Active Users</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$50B+</div>
                <div className="text-sm text-slate-400">Assets Managed</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <div className="text-sm text-slate-400">User Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                icon: Shield,
                title: "Advanced Security",
                description:
                  "Military-grade encryption with biometric authentication and real-time fraud monitoring",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0.1,
              },
              {
                icon: TrendingUp,
                title: "AI Investment Strategies",
                description:
                  "Proprietary algorithms analyze market trends to optimize your portfolio performance",
                gradient: "from-emerald-500 to-green-500",
                delay: 0.2,
              },
              {
                icon: Users,
                title: "Personal Financial Advisor",
                description:
                  "24/7 AI-powered financial guidance tailored to your goals and risk tolerance",
                gradient: "from-purple-500 to-indigo-500",
                delay: 0.3,
              },
              {
                icon: Zap,
                title: "Instant Global Transfers",
                description:
                  "Lightning-fast international transactions with competitive exchange rates",
                gradient: "from-orange-500 to-red-500",
                delay: 0.4,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                variants={slideInRight}
                whileHover={{ y: -4, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: feature.delay,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Animated Background Elements */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full opacity-5 blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/50 rounded-full opacity-3 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div> */}
    </section>
  );
};

export default ServiceDetailsHero;
