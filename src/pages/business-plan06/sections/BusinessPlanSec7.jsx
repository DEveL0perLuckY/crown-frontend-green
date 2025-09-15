import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TrendingUp,
  Users,
  GitBranch,
  Crown,
  ArrowRight,
  Coins,
  Sparkles,
  Target,
  BarChart,
  CircleDollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessPlanSec7 = () => {
  const [activeStream, setActiveStream] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const incomeStreams = [
    {
      id: 0,
      title: "Returns on Investment",
      shortTitle: "ROI",
      icon: <TrendingUp className="w-6 h-6" />,
      bigIcon: <TrendingUp className="w-10 h-10" />,
      description:
        "Choose from Solar Starter, Power Growth, Special packages with returns of 1.5% to 2.4% over 130 to 150 days, ensuring steady wealth growth.",
      color: "from-emerald-500 to-emerald-600",
      lightColor: "from-emerald-50 to-emerald-100",
      accentColor: "#10B981",
      metrics: [
        { label: "Daily Returns", value: "1.5% - 2.4%" },
        { label: "Investment Period", value: "130-150 days" },
        { label: "Total Returns", value: "Up to 360%" },
      ],
    },
    {
      id: 1,
      title: "Referral Bonus",
      shortTitle: "Referral",
      icon: <Users className="w-6 h-6" />,
      bigIcon: <Users className="w-10 h-10" />,
      description:
        "Join our community-driven success at Crown Bankers! Refer new investors, earn a 7% to 9% Referral Bonus, and grow together.",
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-50 to-blue-100",
      accentColor: "#3B82F6",
      metrics: [
        { label: "Bonus Rate", value: "7% - 9%" },
        { label: "Payment", value: "Instant" },
        { label: "Referral Limit", value: "Unlimited" },
      ],
    },
    {
      id: 2,
      title: "Binary Bonus",
      shortTitle: "Binary",
      icon: <GitBranch className="w-6 h-6" />,
      bigIcon: <GitBranch className="w-10 h-10" />,
      description:
        "Enhance rewards through referrals with our Binary Bonus, calculated on balanced growth strategy, ensuring fair and streamlined distribution.",
      color: "from-purple-500 to-purple-600",
      lightColor: "from-purple-50 to-purple-100",
      accentColor: "#8B5CF6",
      metrics: [
        { label: "Match Bonus", value: "10%" },
        { label: "Payout", value: "Weekly" },
        { label: "Structure", value: "2x2 Binary" },
      ],
    },
    {
      id: 3,
      title: "Crown Rewards",
      shortTitle: "Career",
      icon: <Crown className="w-6 h-6" />,
      bigIcon: <Crown className="w-10 h-10" />,
      description:
        "In My Crown Career, earn rewards based on investments made by those you bring into the network. Grow together with us!",
      color: "from-amber-500 to-amber-600",
      lightColor: "from-amber-50 to-amber-100",
      accentColor: "#F59E0B",
      metrics: [
        { label: "Career Levels", value: "5 Tiers" },
        { label: "Max Bonus", value: "Up to 15%" },
        { label: "Benefits", value: "Leadership Perks" },
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <CircleDollarSign className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm bg-green-50 px-4 py-2 rounded-full">
              Multiple Income Streams
            </span>
            <CircleDollarSign className="w-6 h-6 text-green-600" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ways of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 ml-3">
              Earning
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Crown Bankers, we provide four dynamic income streams to maximize
            your financial growth. With these diverse income opportunities, we
            ensure that your investments are not only profitable but also
            rewarding in multiple ways.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {incomeStreams.map((stream, index) => (
              <motion.button
                key={stream.id}
                onClick={() => setActiveStream(index)}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeStream === index
                    ? "text-white shadow-lg scale-105"
                    : "text-gray-600 bg-white shadow-md hover:shadow-lg"
                }`}
                style={{
                  backgroundColor:
                    activeStream === index ? stream.accentColor : undefined,
                }}
                whileHover={{ scale: activeStream === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  {stream.icon}
                  {stream.shortTitle}
                </span>
                {activeStream === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(45deg, ${stream.accentColor}20, transparent)`,
                      zIndex: -1,
                    }}
                    layoutId="activeTab"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Content Display */}
          <motion.div
            key={activeStream}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side - Info Card */}
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`relative bg-gradient-to-br ${incomeStreams[activeStream].lightColor} rounded-3xl p-8 md:p-12 shadow-xl`}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
                  style={{
                    backgroundColor: incomeStreams[activeStream].accentColor,
                  }}
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10"
                  style={{
                    backgroundColor: incomeStreams[activeStream].accentColor,
                  }}
                  animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${incomeStreams[activeStream].color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                  >
                    {incomeStreams[activeStream].bigIcon}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {incomeStreams[activeStream].title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {incomeStreams[activeStream].description}
                  </p>
                  
                  <Link to="/pdf-downloads">
                  <motion.button
                    className={`px-8 py-4 bg-gradient-to-r ${incomeStreams[activeStream].color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                    </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Metrics */}
            <motion.div
              className="grid gap-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {incomeStreams[activeStream].metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm mb-1">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {metric.value}
                      </p>
                    </div>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${incomeStreams[activeStream].lightColor} rounded-xl flex items-center justify-center`}
                    >
                      <BarChart
                        className="w-6 h-6"
                        style={{
                          color: incomeStreams[activeStream].accentColor,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* All Streams Overview */}
          <motion.div
            className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {incomeStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5 }}
                onClick={() => setActiveStream(index)}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stream.lightColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <div style={{ color: stream.accentColor }}>{stream.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {stream.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {stream.description}
                </p>
                <div
                  className="mt-4 flex items-center gap-2 text-sm font-semibold"
                  style={{ color: stream.accentColor }}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        {/* <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)`,
                backgroundSize: "200% 200%",
              }}
            />

            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Start Your Earning Journey Today
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of investors already benefiting from our multiple
                income streams
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BusinessPlanSec7;

// import React, { useState, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import {
//   TrendingUp,
//   Users,
//   GitBranch,
//   Crown,
//   ArrowUpRight,
//   Coins,
//   Zap,
//   Target,
//   Gem,
//   CircleDollarSign
// } from 'lucide-react';

// const BusinessPlanSec7 = () => {
//   const [activeStream, setActiveStream] = useState(0);
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

//   const incomeStreams = [
//     {
//       id: 0,
//       title: "Returns on Investment",
//       shortTitle: "ROI",
//       icon: <TrendingUp className="w-6 h-6" />,
//       bigIcon: <TrendingUp className="w-12 h-12" />,
//       description: "Choose from Solar Starter, Power Growth, Special packages with returns of 1.5% to 2.4% over 130 to 150 days, ensuring steady wealth growth.",
//       color: "#3B82F6",
//       bgGradient: "from-blue-500/20 via-blue-600/10 to-indigo-500/20",
//       metrics: [
//         { label: "Daily Returns", value: "1.5% - 2.4%" },
//         { label: "Investment Period", value: "130-150 days" },
//         { label: "Total Returns", value: "Up to 360%" }
//       ]
//     },
//     {
//       id: 1,
//       title: "Referral Bonus",
//       shortTitle: "Referral",
//       icon: <Users className="w-6 h-6" />,
//       bigIcon: <Users className="w-12 h-12" />,
//       description: "Join our community-driven success at Crown Bankers! Refer new investors, earn a 7% to 9% Referral Bonus, and grow together.",
//       color: "#10B981",
//       bgGradient: "from-emerald-500/20 via-green-600/10 to-teal-500/20",
//       metrics: [
//         { label: "Bonus Rate", value: "7% - 9%" },
//         { label: "Payment", value: "Instant" },
//         { label: "Referral Limit", value: "Unlimited" }
//       ]
//     },
//     {
//       id: 2,
//       title: "Binary Bonus",
//       shortTitle: "Binary",
//       icon: <GitBranch className="w-6 h-6" />,
//       bigIcon: <GitBranch className="w-12 h-12" />,
//       description: "Enhance rewards through referrals with our Binary Bonus, calculated on balanced growth strategy, ensuring fair and streamlined distribution.",
//       color: "#8B5CF6",
//       bgGradient: "from-purple-500/20 via-violet-600/10 to-pink-500/20",
//       metrics: [
//         { label: "Match Bonus", value: "10%" },
//         { label: "Payout", value: "Weekly" },
//         { label: "Structure", value: "2x2 Binary" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Crown Rewards",
//       shortTitle: "Career",
//       icon: <Crown className="w-6 h-6" />,
//       bigIcon: <Crown className="w-12 h-12" />,
//       description: "In My Crown Career, earn rewards based on investments made by those you bring into the network. Grow together with us!",
//       color: "#F59E0B",
//       bgGradient: "from-amber-500/20 via-orange-600/10 to-yellow-500/20",
//       metrics: [
//         { label: "Career Levels", value: "5 Tiers" },
//         { label: "Max Bonus", value: "Up to 15%" },
//         { label: "Benefits", value: "Leadership Perks" }
//       ]
//     }
//   ];

//   return (
//     <section ref={containerRef} className="py-24 bg-black text-white relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
//         <motion.div
//           className="absolute inset-0"
//           style={{
//             background: `radial-gradient(circle at 20% 50%, ${incomeStreams[activeStream].color}20 0%, transparent 50%),
//                        radial-gradient(circle at 80% 50%, ${incomeStreams[activeStream].color}10 0%, transparent 50%)`,
//           }}
//           animate={{
//             opacity: [0.5, 1, 0.5],
//           }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="inline-flex items-center gap-3 mb-6"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", duration: 0.8 }}
//           >
//             <Coins className="w-8 h-8 text-yellow-500" />
//             <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm">
//               Income Streams
//             </span>
//             <Coins className="w-8 h-8 text-yellow-500" />
//           </motion.div>

//           <h2 className="text-6xl md:text-7xl font-black mb-6">
//             <span className="block">Ways of</span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
//               Earning
//             </span>
//           </h2>

//           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             At Crown Bankers, we provide four dynamic income streams to maximize your financial growth
//           </p>
//         </motion.div>

//         {/* Main Content - Split Layout */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//           {/* Left Side - Interactive Menu */}
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             {incomeStreams.map((stream, index) => (
//               <motion.div
//                 key={stream.id}
//                 onClick={() => setActiveStream(index)}
//                 className={`relative cursor-pointer group ${
//                   activeStream === index ? 'scale-105' : 'hover:scale-102'
//                 }`}
//                 whileHover={{ x: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className={`
//                   relative p-6 rounded-2xl border transition-all duration-500
//                   ${activeStream === index
//                     ? 'border-white/30 bg-white/10 backdrop-blur-xl'
//                     : 'border-white/10 bg-white/5 hover:bg-white/10'
//                   }
//                 `}>
//                   {/* Active Indicator */}
//                   {activeStream === index && (
//                     <motion.div
//                       className="absolute inset-0 rounded-2xl"
//                       style={{
//                         background: `linear-gradient(90deg, ${stream.color}20 0%, transparent 100%)`,
//                       }}
//                       layoutId="activeIndicator"
//                       transition={{ type: "spring", duration: 0.6 }}
//                     />
//                   )}

//                   <div className="relative z-10 flex items-center gap-4">
//                     <div
//                       className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
//                         activeStream === index ? 'scale-110' : ''
//                       }`}
//                       style={{
//                         backgroundColor: activeStream === index ? stream.color : 'rgba(255,255,255,0.1)'
//                       }}
//                     >
//                       <div className={activeStream === index ? 'text-white' : 'text-gray-400'}>
//                         {stream.icon}
//                       </div>
//                     </div>

//                     <div className="flex-1">
//                       <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
//                         activeStream === index ? 'text-white' : 'text-gray-400'
//                       }`}>
//                         {stream.title}
//                       </h3>
//                       <p className="text-sm text-gray-500 line-clamp-1">
//                         {stream.description}
//                       </p>
//                     </div>

//                     <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
//                       activeStream === index ? 'text-white rotate-45' : 'text-gray-600'
//                     }`} />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Side - Dynamic Content Display */}
//           <motion.div
//             key={activeStream}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="relative"
//           >
//             <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${incomeStreams[activeStream].bgGradient} p-1`}>
//               <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
//                 {/* Icon and Title */}
//                 <motion.div
//                   className="mb-8"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <div
//                     className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
//                     style={{ backgroundColor: incomeStreams[activeStream].color }}
//                   >
//                     {incomeStreams[activeStream].bigIcon}
//                   </div>
//                   <h3 className="text-3xl font-bold mb-4">{incomeStreams[activeStream].title}</h3>
//                   <p className="text-gray-400 text-lg leading-relaxed">
//                     {incomeStreams[activeStream].description}
//                   </p>
//                 </motion.div>

//                 {/* Metrics Grid */}
//                 <motion.div
//                   className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   {incomeStreams[activeStream].metrics.map((metric, idx) => (
//                     <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//                       <p className="text-gray-500 text-sm mb-1">{metric.label}</p>
//                       <p className="text-xl font-bold" style={{ color: incomeStreams[activeStream].color }}>
//                         {metric.value}
//                       </p>
//                     </div>
//                   ))}
//                 </motion.div>

//                 {/* CTA Button */}
//                 <motion.button
//                   className="w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300"
//                   style={{
//                     backgroundColor: incomeStreams[activeStream].color,
//                     boxShadow: `0 20px 40px ${incomeStreams[activeStream].color}40`
//                   }}
//                   whileHover={{ scale: 1.02, boxShadow: `0 25px 50px ${incomeStreams[activeStream].color}50` }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   Learn More
//                   <ArrowUpRight className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </div>

//             {/* Floating Elements */}
//             <motion.div
//               className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
//               style={{ backgroundColor: `${incomeStreams[activeStream].color}20` }}
//               animate={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{ duration: 10, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full"
//               style={{ backgroundColor: `${incomeStreams[activeStream].color}15` }}
//               animate={{
//                 scale: [1.2, 1, 1.2],
//                 rotate: [360, 180, 0],
//               }}
//               transition={{ duration: 8, repeat: Infinity }}
//             />
//           </motion.div>
//         </div>

//         {/* Bottom Summary */}
//         <motion.div
//           className="mt-20 text-center"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
//             With these diverse income opportunities, we ensure that your investments are not only profitable but also rewarding in multiple ways.
//           </p>
//           <motion.button
//             className="px-12 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-bold text-xl text-black shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Start Earning Today
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BusinessPlanSec7;
