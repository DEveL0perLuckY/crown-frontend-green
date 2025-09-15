import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sun, TrendingUp, Cpu, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSec2() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Animate service cards
      gsap.fromTo(
        ".service-card",
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          },
        }
      );

      // Animate images
      gsap.fromTo(
        ".service-image",
        {
          clipPath: "inset(100% 0 0 0)",
          scale: 1.2,
        },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  const services = [
    {
      icon: TrendingUp,
      title: "High Growth Potential",
      description:
        "The global solar energy market is projected to reach $1.3 trillion by 2027, driven by growing environmental concerns and the affordability of solar installations.",
      image:
        "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
      stats: "$1.3T",
      statsLabel: "Market Size by 2027",
    },
    {
      icon: Sun,
      title: "Sustainable Future",
      description:
        "Solar energy is a clean, renewable resource with immense potential to power homes, businesses, and communities, contributing to a more sustainable future for generations.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      stats: "100%",
      statsLabel: "Clean Energy",
    },
    {
      icon: Cpu,
      title: "Technological Advancements",
      description:
        "We invest in companies at the forefront of solar technology, including high-efficiency solar panels and innovative solutions for installation, operation, and maintenance.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
      stats: "45%",
      statsLabel: "Efficiency Increase",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Crown Bankers' dedicated professionals meticulously research and diversify portfolios in promising solar companies, ensuring informed and profitable investments.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      stats: "500+",
      statsLabel: "Expert Advisors",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      id="service_section2"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-green-100 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-green-200 opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-100 mb-6"
            variants={itemVariants}
          >
            <Sun className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold">
              Solar Investment Services
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight"
            variants={itemVariants}
          >
            Why Invest in the Best with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Crown Bankers
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Unlock the potential of solar energy investments with our
            comprehensive expertise and proven track record in sustainable
            finance.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Stats Overlay */}
                  <motion.div
                    className="absolute bottom-4 left-4 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-white">
                      <div className="text-3xl font-bold">{service.stats}</div>
                      <div className="text-sm opacity-90">
                        {service.statsLabel}
                      </div>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center z-20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-6 h-6 text-green-600" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <motion.button
                    className="flex items-center gap-2 text-green-600 font-semibold group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Solar Investment Journey?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of investors who are building wealth while
                contributing to a sustainable future.
              </p>
              <motion.button
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




// import React, { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
// import { 
//   TrendingUp, 
//   Leaf, 
//   Cpu, 
//   Users, 
//   ArrowRight,
//   DollarSign,
//   Globe,
//   Zap,
//   Shield
// } from 'lucide-react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-cards';

// const ServiceSec2 = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   const features = [
//     {
//       id: 1,
//       icon: TrendingUp,
//       title: "High Growth Potential",
//       description: "The global solar energy market is projected to reach $1.3 trillion by 2027, driven by growing environmental concerns and the affordability of solar installations.",
//       stats: "$1.3T",
//       statsLabel: "Market Size by 2027",
//       color: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-50",
//       iconColor: "text-green-600"
//     },
//     {
//       id: 2,
//       icon: Leaf,
//       title: "Sustainable Future",
//       description: "Solar energy is a clean, renewable resource with immense potential to power homes, businesses, and communities, contributing to a more sustainable future for generations.",
//       stats: "100%",
//       statsLabel: "Clean Energy",
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-blue-50",
//       iconColor: "text-blue-600"
//     },
//     {
//       id: 3,
//       icon: Cpu,
//       title: "Technological Advancements",
//       description: "We invest in companies at the forefront of solar technology, including high-efficiency solar panels and innovative solutions for installation, operation, and maintenance.",
//       stats: "45%",
//       statsLabel: "Efficiency Gains",
//       color: "from-purple-500 to-pink-500",
//       bgColor: "bg-purple-50",
//       iconColor: "text-purple-600"
//     },
//     {
//       id: 4,
//       icon: Users,
//       title: "Expert Guidance",
//       description: "Crown Bankers' dedicated professionals meticulously research and diversify portfolios in promising solar companies, ensuring informed and profitable investments without needing to be a solar expert.",
//       stats: "24/7",
//       statsLabel: "Expert Support",
//       color: "from-orange-500 to-red-500",
//       bgColor: "bg-orange-50",
//       iconColor: "text-orange-600"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6"
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//           >
//             <Zap className="w-4 h-4 text-green-600" />
//             <span className="text-sm font-semibold text-green-700">Investment Excellence</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//             variants={itemVariants}
//           >
//             Why Invest in the Best with{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
//               Crown Bankers
//             </span>
//           </motion.h2>

//           <motion.p
//             className="max-w-3xl mx-auto text-lg text-gray-600"
//             variants={itemVariants}
//           >
//             Discover the advantages of partnering with us for your solar energy investments
//           </motion.p>
//         </motion.div>

//         {/* Desktop Grid View */}
//         <motion.div
//           className="hidden lg:grid grid-cols-2 gap-8 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               variants={cardVariants}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="group relative"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
//               <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
//                 {/* Icon and Stats */}
//                 <div className="flex items-start justify-between mb-6">
//                   <motion.div
//                     className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center`}
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
//                   </motion.div>
                  
//                   <div className="text-right">
//                     <motion.div
//                       className="text-3xl font-bold text-gray-900"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
//                     >
//                       {feature.stats}
//                     </motion.div>
//                     <div className="text-sm text-gray-500">{feature.statsLabel}</div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   {feature.description}
//                 </p>

//                 {/* Action */}
//                 <motion.button
//                   className={`inline-flex items-center gap-2 text-sm font-semibold ${feature.iconColor} group-hover:gap-3 transition-all`}
//                   whileHover={{ x: 5 }}
//                 >
//                   Learn More
//                   <ArrowRight className="w-4 h-4" />
//                 </motion.button>

//                 {/* Decorative Elements */}
//                 <motion.div
//                   className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 blur-2xl"
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0.2, 0.3, 0.2]
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Mobile Swiper View */}
//         <div className="lg:hidden">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay, EffectCards]}
//             spaceBetween={20}
//             slidesPerView={1}
//             effect="cards"
//             grabCursor={true}
//             navigation={{
//               prevEl: '.swiper-button-prev-custom',
//               nextEl: '.swiper-button-next-custom',
//             }}
//             pagination={{ 
//               clickable: true,
//               dynamicBullets: true
//             }}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true
//             }}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             className="!pb-12"
//           >
//             {features.map((feature) => (
//               <SwiperSlide key={feature.id}>
//                 <motion.div
//                   className="bg-white rounded-2xl p-6 shadow-xl mx-4"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {/* Mobile Card Content */}
//                   <div className="flex items-start justify-between mb-4">
//                     <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
//                       <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-gray-900">{feature.stats}</div>
//                       <div className="text-xs text-gray-500">{feature.statsLabel}</div>
//                     </div>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>

//                   <button className={`inline-flex items-center gap-2 text-sm font-semibold ${feature.iconColor}`}>
//                     Learn More
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button className="swiper-button-prev-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
//               <ArrowRight className="w-5 h-5 text-gray-700 rotate-180" />
//             </button>
//             <button className="swiper-button-next-custom w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
//               <ArrowRight className="w-5 h-5 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.6 }}
//         >
//           <motion.button
//             className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Shield className="w-5 h-5" />
//             Start Your Investment Journey
//             <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </motion.div>

//         {/* Background Decorations */}
//         <motion.div
//           className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-10"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-10"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <style jsx global>{`
//         .swiper-pagination-bullet {
//           background: #e5e7eb;
//           opacity: 1;
//         }
        
//         .swiper-pagination-bullet-active {
//           background: #10b981;
//           width: 24px;
//           border-radius: 4px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServiceSec2;