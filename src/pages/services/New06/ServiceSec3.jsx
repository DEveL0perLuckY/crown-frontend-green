import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Car, 
  Gauge, 
  Globe2, 
  TrendingUp,
  Cpu,
  Network,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const ServiceSec3 = () => {
  const [activeTab, setActiveTab] = useState('adoption');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const stats = [
    { value: "$1.8T", label: "Market Size by 2030", icon: TrendingUp },
    { value: "35%", label: "Annual Growth Rate", icon: Gauge },
    { value: "50M+", label: "EVs by 2030", icon: Car },
    { value: "80%", label: "Emission Reduction", icon: Globe2 }
  ];

  const features = {
    adoption: {
      title: "Rapid Adoption",
      description: "The global EV market is expected to hit $1.8 trillion by 2030.",
      icon: TrendingUp,
      details: [
        "Exponential growth in consumer adoption",
        "Government incentives driving purchases",
        "Declining battery costs making EVs affordable",
        "Major automakers shifting to all-electric lineups"
      ]
    },
    future: {
      title: "Clean Future",
      description: "EVs are leading the shift towards sustainable transportation.",
      icon: Globe2,
      details: [
        "Zero direct emissions reducing carbon footprint",
        "Integration with renewable energy sources",
        "Improved air quality in urban areas",
        "Supporting global climate goals"
      ]
    }
  };

  const investments = [
    {
      category: "Comprehensive Investments",
      description: "From Tesla and General Motors to innovative battery tech companies.",
      icon: Battery,
      companies: ["Tesla", "GM", "Rivian", "BYD"],
      highlights: [
        "Leading EV manufacturers",
        "Battery technology innovators",
        "Autonomous driving pioneers",
        "Energy storage solutions"
      ]
    },
    {
      category: "Infrastructure Focus",
      description: "Investing in charging solutions and ecosystem providers.",
      icon: Network,
      companies: ["ChargePoint", "EVgo", "Blink", "Electrify America"],
      highlights: [
        "Charging network operators",
        "Smart grid technology",
        "Payment solutions",
        "Maintenance services"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Electric Vehicles</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Charge Up Your Portfolio:{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              The Electrifying EV Revolution
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-cyan-100 rounded-2xl mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-green-600" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Electric Vehicles Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Electric Vehicles?
          </h3>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              {Object.keys(features).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-white text-green-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {features[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {/* <features[activeTab].icon className="w-12 h-12 text-white" /> */}
                </motion.div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {features[activeTab].title}
                  </h4>
                  <p className="text-lg text-gray-600 mb-6">
                    {features[activeTab].description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features[activeTab].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Approach Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Approach
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {investments.map((investment, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-green-100 to-cyan-100 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <investment.icon className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {investment.category}
                      </h4>
                      <p className="text-gray-600">
                        {investment.description}
                      </p>
                    </div>
                  </div>

                  {/* Companies */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-500 mb-3">Key Investments:</p>
                    <div className="flex flex-wrap gap-2">
                      {investment.companies.map((company, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                        >
                          {company}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {investment.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + idx * 0.1 }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="mt-6 inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Explore Opportunities
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
                        <Zap className="w-5 h-5" />
            Accelerate Your EV Investments
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Floating Car Animation */}
        <motion.div
          className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10"
          style={{ y: parallaxY }}
        >
          <motion.div
            animate={{
              x: [0, 20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Car className="w-96 h-96 text-green-600" />
          </motion.div>
        </motion.div>

        {/* Battery Charge Animation */}
        <motion.div
          className="absolute left-10 bottom-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Battery className="w-24 h-24 text-green-500" />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-gray-100 rounded-full p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">EV Market Growth Progress</span>
              <span className="text-sm font-bold text-green-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "75%" } : {}}
                transition={{ duration: 2, ease: "easeOut", delay: 1.8 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>2020: $250B</span>
              <span>2025: $800B</span>
              <span>2030: $1.8T</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceSec3;


// import React, { useEffect, useRef } from 'react';
// import { motion, useInView, useScroll, useTransform } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Zap, Battery, Car, TrendingUp, Gauge, Plug, ArrowRight, CircuitBoard } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// export default function ServiceSec3() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   useEffect(() => {
//     if (!isInView) return;

//     const ctx = gsap.context(() => {
//       // Animate stats counter
//       gsap.to(".stat-number", {
//         innerHTML: (i, el) => el.getAttribute('data-value'),
//         duration: 2,
//         snap: { innerHTML: 1 },
//         scrollTrigger: {
//           trigger: ".stats-container",
//           start: "top 80%",
//         }
//       });

//       // Animate feature cards
//       gsap.fromTo(".feature-card",
//         {
//           y: 60,
//           opacity: 0,
//           rotateY: -30
//         },
//         {
//           y: 0,
//           opacity: 1,
//           rotateY: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ".features-grid",
//             start: "top 80%",
//           }
//         }
//       );

//       // Electric animation for lines
//       gsap.to(".electric-line", {
//         strokeDashoffset: 0,
//         duration: 2,
//         stagger: 0.3,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: ".electric-svg",
//           start: "top 80%",
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [isInView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1
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

//   const features = [
//     {
//       icon: TrendingUp,
//       title: "Rapid Adoption",
//       description: "The global EV market is expected to hit $1.8 trillion by 2030.",
//       stat: "1.8",
//       unit: "Trillion",
//       color: "from-green-500 to-cyan-400"
//     },
//     {
//       icon: Battery,
//       title: "Clean Future",
//       description: "EVs are leading the shift towards sustainable transportation.",
//       stat: "75",
//       unit: "% Less CO2",
//       color: "from-green-500 to-emerald-400"
//     }
//   ];

//   const approaches = [
//     {
//       icon: Car,
//       title: "Comprehensive Investments",
//       description: "From Tesla and General Motors to innovative battery tech companies.",
//       image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop"
//     },
//     {
//       icon: Plug,
//       title: "Infrastructure Focus",
//       description: "Investing in charging solutions and ecosystem providers.",
//       image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=600&h=400&fit=crop"
//     }
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         {/* Electric Grid Pattern */}
//         <svg className="electric-svg absolute inset-0 w-full h-full opacity-10">
//           <defs>
//             <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//               <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
          
//           {/* Animated Electric Lines */}
//           <path
//             d="M 0 200 Q 400 150 800 200 T 1600 200"
//             fill="none"
//             stroke="url(#electric-gradient)"
//             strokeWidth="2"
//             className="electric-line"
//             strokeDasharray="1000"
//             strokeDashoffset="1000"
//           />
//           <defs>
//             <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#3b82f6" />
//               <stop offset="50%" stopColor="#06b6d4" />
//               <stop offset="100%" stopColor="#10b981" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Floating Particles */}
//         <motion.div
//           className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
//           animate={{
//             y: [-20, 20, -20],
//             x: [0, 30, 0],
//             opacity: [0.3, 1, 0.3]
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-40 right-20 w-6 h-6 bg-green-400 rounded-full blur-sm"
//           animate={{
//             y: [20, -20, 20],
//             x: [0, -30, 0],
//             opacity: [0.3, 1, 0.3]
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-5 relative z-10">
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-16"
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur border border-cyan-500/30 mb-6"
//             variants={itemVariants}
//           >
//             <Zap className="w-5 h-5 text-cyan-400" />
//             <span className="text-cyan-300 font-semibold">Electric Vehicles</span>
//           </motion.div>

//           <motion.h2 
//             className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight"
//             variants={itemVariants}
//           >
//             Charge Up Your Portfolio: The{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400">
//               Electrifying EV Revolution
//             </span>
//           </motion.h2>

//           <motion.p 
//             className="text-xl text-gray-300 max-w-3xl mx-auto"
//             variants={itemVariants}
//           >
//             Join the future of transportation with strategic investments in the rapidly growing electric vehicle market.
//           </motion.p>
//         </motion.div>

//         {/* Why Electric Vehicles Section */}
//         <motion.div
//           className="mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3 className="text-3xl font-bold text-white text-center mb-12">
//             Why Electric Vehicles?
//           </h3>

//           <div className="stats-container features-grid grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="feature-card group"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className={`relative bg-gradient-to-br ${feature.color} p-[1px] rounded-2xl`}>
//                   <div className="bg-slate-900 rounded-2xl p-8 h-full">
//                     {/* Icon */}
//                     <motion.div
//                       className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-6"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <feature.icon className="w-8 h-8 text-white" />
//                     </motion.div>

//                     {/* Content */}
//                     <h4 className="text-2xl font-bold text-white mb-3">{feature.title}</h4>
//                     <p className="text-gray-400 mb-6">{feature.description}</p>

//                     {/* Animated Stat */}
//                     <div className="flex items-baseline gap-2">
//                       <span 
//                         className="stat-number text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400"
//                         data-value={feature.stat}
//                       >
//                         0
//                       </span>
//                       <span className="text-xl text-gray-400">{feature.unit}</span>
//                     </div>

//                     {/* Electric Effect on Hover */}
//                     <motion.div
//                       className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       style={{
//                         background: `radial-gradient(circle at 50% 50%, ${feature.color.split(' ')[1]}20, transparent 70%)`
//                       }}
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Our Approach Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3 className="text-3xl font-bold text-white text-center mb-12">
//             Our Approach
//           </h3>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {approaches.map((approach, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative"
//                 initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="relative h-[400px] rounded-2xl overflow-hidden">
//                   {/* Background Image */}
//                   <img
//                     src={approach.image}
//                     alt={approach.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />

//                   {/* Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <motion.div
//                       className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <approach.icon className="w-7 h-7 text-white" />
//                     </motion.div>

//                     <h4 className="text-2xl font-bold text-white mb-3">{approach.title}</h4>
//                     <p className="text-gray-300 mb-4">{approach.description}</p>

//                     <motion.button
//                       className="flex items-center gap-2 text-cyan-400 font-semibold group/btn"
//                       whileHover={{ x: 5 }}
//                     >
//                       Learn More
//                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                     </motion.button>
//                   </div>

//                   {/* Hover Effect */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="mt-20 relative"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="relative bg-gradient-to-r from-green-600 via-cyan-500 to-green-500 p-[1px] rounded-3xl">
//             <div className="bg-slate-900 rounded-3xl p-12 text-center">
//               <Gauge className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Ready to Accelerate Your Investment?
//               </h3>
//               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Don't miss out on the electric vehicle revolution. Start investing in the future of transportation today.
//               </p>
//               <motion.button
//                 className="bg-gradient-to-r from-green-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Start Investing in EVs
//               </motion.button>
//             </div>
//                   </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }