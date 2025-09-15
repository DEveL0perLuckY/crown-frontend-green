// // // import React, { useEffect, useRef, useState } from 'react';
// // import { Play, TrendingUp, Target, Users, ArrowUpRight, DollarSign } from "lucide-react";
// // import { useEffect, useRef, useState } from "react";

// // const AboutSection = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   const features = [
// //     {
// //       icon: TrendingUp,
// //       title: "Smart Investment",
// //       description:
// //         "Advanced algorithms and market analysis to maximize your investment potential with minimal risk.",
// //       delay: 0,
// //     },
// //     {
// //       icon: Shield,
// //       title: "Secure Platform",
// //       description:
// //         "Bank-level security with 256-bit encryption to protect your investments and personal data.",
// //       delay: 200,
// //     },
// //     {
// //       icon: Users,
// //       title: "Expert Support",
// //       description:
// //         "24/7 dedicated support from certified financial advisors to guide your investment journey.",
// //       delay: 400,
// //     },
// //     {
// //       icon: Award,
// //       title: "Proven Results",
// //       description:
// //         "Over 10 years of experience with consistent returns and thousands of satisfied investors.",
// //       delay: 600,
// //     },
// //   ];

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
// //     >
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           {/* Left Side */}
// //           <div className="space-y-8">
// //             <div
// //               className={`transform transition-all duration-1000 ${
// //                 isVisible
// //                   ? "translate-x-0 opacity-100"
// //                   : "-translate-x-10 opacity-0"
// //               }`}
// //             >
// //               <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
// //                 About Planvest
// //               </div>
// //               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
// //                 Building Your
// //                 <span className="text-green-600"> Financial Future</span>
// //                 <br />
// //                 With Confidence
// //               </h2>
// //             </div>

// //             <div
// //               className={`transform transition-all duration-1000 delay-300 ${
// //                 isVisible
// //                   ? "translate-x-0 opacity-100"
// //                   : "-translate-x-10 opacity-0"
// //               }`}
// //             >
// //               <p className="text-lg text-gray-600 leading-relaxed">
// //                 At Planvest, we believe everyone deserves access to smart
// //                 investment opportunities. Our platform combines cutting-edge
// //                 technology with expert financial guidance to help you achieve
// //                 your financial goals.
// //               </p>
// //             </div>

// //             <div
// //               className={`transform transition-all duration-1000 delay-500 ${
// //                 isVisible
// //                   ? "translate-x-0 opacity-100"
// //                   : "-translate-x-10 opacity-0"
// //               }`}
// //             >
// //               <div className="flex flex-col sm:flex-row gap-4">
// //                 <button>
// //                   <span>Get Started</span>
// //                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
// //                 </button>
// //                 <button>Learn More</button>
// //               </div>
// //             </div>

// //             <div
// //               className={`transform transition-all duration-1000 delay-700 ${
// //                 isVisible
// //                   ? "translate-x-0 opacity-100"
// //                   : "-translate-x-10 opacity-0"
// //               }`}
// //             >
// //               <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
// //                 <div className="text-center">
// //                   <div className="text-3xl font-bold text-green-600">10+</div>
// //                   <div className="text-sm text-gray-600">Years Experience</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="text-3xl font-bold text-green-600">50K+</div>
// //                   <div className="text-sm text-gray-600">Happy Clients</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="text-3xl font-bold text-green-600">$2B+</div>
// //                   <div className="text-sm text-gray-600">Assets Managed</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side - Features */}
// //           <div className="space-y-6">
// //             {features.map((feature, index) => {
// //               const Icon = feature.icon;
// //               return (
// //                 <div
// //                   key={index}
// //                   className={`transform transition-all duration-1000 ${
// //                     isVisible
// //                       ? "translate-x-0 opacity-100"
// //                       : "translate-x-10 opacity-0"
// //                   }`}
// //                   style={{ transitionDelay: `${feature.delay}ms` }}
// //                 >
// //                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
// //                     <div className="flex items-start space-x-4">
// //                       <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
// //                         <Icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
// //                           {feature.title}
// //                         </h3>
// //                         <p className="text-gray-600 leading-relaxed">
// //                           {feature.description}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Floating Animations */}
// //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //         <div
// //           className={`absolute top-1/4 left-1/4 w-20 h-20 bg-green-200/30 rounded-full transition-all duration-[3000ms] ${
// //             isVisible ? "animate-pulse" : ""
// //           }`}
// //         ></div>
// //         <div
// //           className={`absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-200/30 rounded-full transition-all duration-[4000ms] ${
// //             isVisible ? "animate-bounce" : ""
// //           }`}
// //         ></div>
// //         <div
// //           className={`absolute top-1/2 right-1/6 w-12 h-12 bg-yellow-200/30 rounded-full transition-all duration-[2500ms] ${
// //             isVisible ? "animate-ping" : ""
// //           }`}
// //         ></div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutSection;

// import {
//   Play,
//   TrendingUp,
//   Target,
//   Users,
//   ArrowUpRight,
//   DollarSign,
// } from "lucide-react";

// import { motion, useAnimation, useInView } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// const Section2 = () => {
//   const [showVideoModal, setShowVideoModal] = useState(false);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.1 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const openModal = () => setShowVideoModal(true);
//   const closeModal = () => setShowVideoModal(false);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const iconVariants = {
//     rest: { scale: 1, rotate: 0 },
//     hover: {
//       scale: 1.1,
//       rotate: 5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//   };

//   const floatingVariants = {
//     floating: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const features = [
//     {
//       icon: Users,
//       title: "Expert Guidance",
//       description:
//         "Our team is composed of experienced financial advisors, analysts, and market experts dedicated to helping you succeed.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Personalized Plans",
//       description:
//         "We create customized strategies that reflect your financial goals and risk appetite.",
//     },
//     {
//       icon: Target,
//       title: "Comprehensive Solutions",
//       description:
//         "Comprehensive wealth management, we offer a wide range of services designed to meet your financial needs.",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-gray-50 py-20 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             ref={ref}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
//             initial="hidden"
//             animate={controls}
//             variants={containerVariants}
//           >
//             {/* Left Column - Image */}
//             <motion.div className="relative" variants={imageVariants}>
//               {/* Main Image Container */}
//               <div className="relative">
//                 <motion.div
//                   className="w-full h-96 lg:h-[500px] bg-gray-400 rounded-3xl flex items-center justify-center text-white text-4xl font-light relative overflow-hidden"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500"></div>
//                   <span className="relative z-10">600 x 600</span>

//                   {/* Floating Play Button */}
//                   <motion.div
//                     className="absolute top-8 right-8"
//                     variants={floatingVariants}
//                     animate="floating"
//                   >
//                     <motion.button
//                       onClick={openModal}
//                       className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group"
//                       whileHover={{
//                         scale: 1.1,
//                         boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 17,
//                       }}
//                     >
//                       <div className="w-12 h-12 bg-gradient-to-br from-green-primary to-green-dark rounded-full flex items-center justify-center">
//                         <motion.div
//                           animate={{ rotate: [0, 360] }}
//                           transition={{
//                             duration: 8,
//                             repeat: Infinity,
//                             ease: "linear",
//                           }}
//                         >
//                           <Play
//                             className="w-6 h-6 text-white ml-1"
//                             fill="white"
//                           />
//                         </motion.div>
//                       </div>
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>

//                 {/* ROI Badge */}
//                 <motion.div
//                   className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
//                   initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//                   animate={{
//                     opacity: isInView ? 1 : 0,
//                     scale: isInView ? 1 : 0.8,
//                     rotate: isInView ? 0 : -10,
//                   }}
//                   transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
//                 >
//                   <div className="flex items-center gap-4">
//                     <motion.div
//                       className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                         rotate: [0, 5, -5, 0],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         repeatDelay: 3,
//                       }}
//                     >
//                       <DollarSign className="w-8 h-8 text-green-primary" />
//                     </motion.div>
//                     <div>
//                       <motion.div
//                         className="text-3xl font-bold text-green-primary"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.8 }}
//                       >
//                         15%
//                       </motion.div>
//                       <div className="text-gray-600 font-medium">
//                         Annual ROI
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Right Column - Content */}
//             <motion.div className="space-y-8" variants={itemVariants}>
//               {/* Badge */}
//               <motion.div
//                 className="inline-block"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <span className="px-4 py-2 bg-green-50 text-green-primary rounded-full text-sm font-semibold border border-green-200">
//                   About Company
//                 </span>
//               </motion.div>

//               {/* Heading */}
//               <motion.h2
//                 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
//                 variants={itemVariants}
//               >
//                 Pioneering Strategies for Your Financial Success
//               </motion.h2>

//               {/* Description */}
//               <motion.p
//                 className="text-lg text-gray-600 leading-relaxed"
//                 variants={itemVariants}
//               >
//                 Founded by a team of seasoned financial experts, we specialize
//                 in delivering personalized investment strategies that cater to
//                 your unique goals.
//               </motion.p>

//               {/* Features */}
//               <motion.div className="space-y-6" variants={containerVariants}>
//                 {features.map((feature, index) => {
//                   const IconComponent = feature.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       className="flex items-start gap-4 group"
//                       variants={itemVariants}
//                       whileHover="hover"
//                       initial="rest"
//                     >
//                       <motion.div
//                         className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-primary transition-colors duration-300"
//                         variants={iconVariants}
//                       >
//                         <IconComponent className="w-7 h-7 text-green-primary group-hover:text-white transition-colors duration-300" />
//                       </motion.div>
//                       <div className="space-y-2">
//                         <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-primary transition-colors duration-300">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>

//               {/* CTA Button */}
//               <motion.div variants={itemVariants}>
//                 <motion.button
//                   className="inline-flex items-center gap-3 bg-green-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
//                     backgroundColor: "#16a34a",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <span>Learn More</span>
//                   <motion.div
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </motion.div>
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {showVideoModal && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
//           onClick={closeModal}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="relative w-full max-w-6xl bg-gray-900 rounded-2xl overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             <motion.button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
//               whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </motion.button>

//             <iframe
//               className="w-full h-64 md:h-96 lg:h-[500px]"
//               src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"
//               title="Company Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default Section2;

import { Play, TrendingUp, Target, PiggyBank } from "lucide-react";
import { motion } from "framer-motion";

export default function Section2() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div
      className="py-20"
      style={{
        backgroundImage:
          "url(/placeholder.svg?height=800&width=1920&query=subtle financial background pattern)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* LEFT SIDE IMAGE */}
          <motion.div 
            className="relative h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.img
              src="https://html.rometheme.net/planvest/image/img2.png"
              alt="About Us"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
              style={{ aspectRatio: "1/1" }}
            />

            {/* ---- BOTTOM LEFT ROI BLOCK WITH CURVE ---- */}
            <motion.div 
              className="absolute bottom-0 left-0"
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* curve background */}
              <div className="w-auto h-32 bg-white rounded-tr-[30px] flex items-end justify-start ">
                <div className="flex items-center gap-3 p-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <TrendingUp
                      className="w-10 h-10"
                      style={{ color: "var(--green-neon)" }}
                    />
                  </motion.div>
                  <div className="flex flex-col">
                    <motion.h1 
                      className="planvest-h1 text-green-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      15%
                    </motion.h1>
                    <h5 className="planvest-h5 text-green-800">Annual ROI</h5>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---- TOP RIGHT PLAY BUTTON WITH CURVE ---- */}
            <motion.div 
              className="absolute top-0 right-0"
              initial={{ opacity: 0, x: 50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* curve background */}
              <div className="w-24 h-24 bg-white rounded-bl-[30px] flex items-start justify-end ">
                <motion.button
                  className="w-16 h-16 rounded-full flex items-center justify-center m-2"
                  style={{
                    background: "var(--gradient-left)",
                    border: "3px solid white",
                  }}
                  animate={pulseAnimation}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open("https://youtu.be/EWeTt4RbTVU")}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div 
            className="flex flex-col gap-6 text-center xl:text-left pl-0 xl:pl-8 h-full justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full"
              style={{ background: "var(--grey-accent)" }}
              variants={fadeInUp}
            >
              <h6
                className="planvest-h6 m-0"
                style={{ color: "var(--green)" }}
              >
                About Company
              </h6>
            </motion.div>

            <motion.h3 
              className="planvest-h3" 
              style={{ color: "var(--black)" }}
              variants={fadeInUp}
            >
              Pioneering Strategies for Your Financial Success
            </motion.h3>

            <motion.p 
              className="planvest-p"
              variants={fadeInUp}
            >
              Founded by a team of seasoned financial experts, we specialize in
              delivering personalized investment strategies that cater to your
              unique goals.
            </motion.p>

            <motion.div 
              className="flex flex-col gap-6"
              variants={staggerContainer}
            >
              {/* ICON + TEXT BLOCKS */}
              <motion.div 
                className="flex flex-col xl:flex-row items-center xl:items-start gap-4"
                variants={fadeInRight}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-left)" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <PiggyBank className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex flex-col items-center xl:items-start gap-2">
                  <h5
                    className="planvest-h5 m-0"
                    style={{ color: "var(--green)" }}
                  >
                    Expert Guidance
                  </h5>
                  <p className="planvest-p m-0">
                    Our team is composed of experienced financial advisors,
                    analysts, and market experts dedicated to helping you
                    succeed.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col xl:flex-row items-center xl:items-start gap-4"
                variants={fadeInRight}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-left)" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex flex-col items-center xl:items-start gap-2">
                  <h5
                    className="planvest-h5 m-0"
                    style={{ color: "var(--green)" }}
                  >
                    Personalized Plans
                  </h5>
                  <p className="planvest-p m-0">
                    We create customized strategies that reflect your financial
                    goals and risk appetite.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col xl:flex-row items-center xl:items-start gap-4"
                variants={fadeInRight}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--gradient-left)" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex flex-col items-center xl:items-start gap-2">
                  <h5
                    className="planvest-h5 m-0"
                    style={{ color: "var(--green)" }}
                  >
                    Comprehensive Solutions
                  </h5>
                  <p className="planvest-p m-0">
                    Comprehensive wealth management, we offer a wide range of
                    services designed to meet your financial needs.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* END RIGHT CONTENT */}
        </div>
      </div>
    </div>
  );
}
