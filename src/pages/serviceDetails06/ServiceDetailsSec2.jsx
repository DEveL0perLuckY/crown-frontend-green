import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  LineChart,
  Shield,
  Smartphone,
  CreditCard,
  Building,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Lock,
} from "lucide-react";

const ServiceDetailsSec2 = () => {
  const [activeService, setActiveService] = useState(0);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Banking",
      shortDesc: "Intelligent financial solutions powered by advanced AI",
      description:
        "Experience the future of banking with our AI-driven platform that learns from your financial behavior to provide personalized recommendations and automated financial management.",
      features: [
        "Smart spending analysis",
        "Automated savings optimization",
        "Predictive financial planning",
        "Real-time fraud detection",
      ],
      stats: { value: "98%", label: "Accuracy Rate" },
      color: "blue",
    },
    {
      icon: LineChart,
      title: "Investment Analytics",
      shortDesc: "Data-driven investment strategies for optimal returns",
      description:
        "Leverage our sophisticated AI algorithms to analyze market trends, assess risks, and identify profitable investment opportunities tailored to your financial goals.",
      features: [
        "Portfolio optimization",
        "Risk assessment tools",
        "Market trend analysis",
        "Automated rebalancing",
      ],
      stats: { value: "35%", label: "Avg. ROI Increase" },
      color: "green",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      shortDesc: "Bank-grade security with AI-enhanced protection",
      description:
        "Your financial security is our priority. Our multi-layered security system uses AI to detect and prevent fraudulent activities before they happen.",
      features: [
        "Biometric authentication",
        "End-to-end encryption",
        "AI fraud prevention",
        "Secure cloud infrastructure",
      ],
      stats: { value: "0.001%", label: "Fraud Rate" },
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Digital Banking",
      shortDesc: "Complete banking services at your fingertips",
      description:
        "Access all your banking needs through our intuitive mobile and web platforms, designed for seamless user experience and maximum convenience.",
      features: [
        "24/7 account access",
        "Instant transfers",
        "Mobile check deposits",
        "Virtual card management",
      ],
      stats: { value: "2M+", label: "Active Users" },
      color: "indigo",
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    indigo: "from-indigo-500 to-indigo-600",
  };

  return (
    <section id="service_details_explore" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Crown Bankers combines traditional banking excellence
            with cutting-edge AI technology to deliver unparalleled financial
            services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-1">
          {/* Service Tabs */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  activeService === index
                    ? "bg-white shadow-lg border-l-4 border-blue-500"
                    : "bg-gray-50 hover:bg-white hover:shadow-md"
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${
                      colorClasses[service.color]
                    } bg-opacity-10`}
                  >
                    <service.icon
                      className={`w-6 h-6 text-white`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">{service.shortDesc}</p>
                  </div>
                  {activeService === index && (
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1" />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            className="lg:col-span-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${
                      colorClasses[services[activeService].color]
                    }`}
                  >
                    {React.createElement(services[activeService].icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {services[activeService].title}
                    </h3>
                    <p className="text-gray-600">
                      {services[activeService].shortDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    {services[activeService].stats.value}
                  </p>
                  <p className="text-gray-600">
                    {services[activeService].stats.label}
                  </p>
                </div>
                <TrendingUp className="w-12 h-12 text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Banking Experience?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already made the
            switch to intelligent banking with Crown Bankers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Open Account</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lock className="w-5 h-5" />
              <span>Schedule Demo</span>
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServiceDetailsSec2;





// import React, { useState } from "react";
// import {
//   Brain,
//   LineChart,
//   Shield,
//   Smartphone,
//   CreditCard,
//   Building,
//   CheckCircle,
//   ArrowRight,
//   TrendingUp,
//   Lock,
//   Star,
//   Sparkles,
//   Users,
//   Award,
//   Globe,
//   Zap,
// } from "lucide-react";

// const ServiceDetailsSec2 = () => {
//   const [activeService, setActiveService] = useState(0);

//   const services = [
//     {
//       icon: Brain,
//       title: "AI-Powered Intelligence",
//       shortDesc: "Cognitive banking that thinks ahead",
//       description:
//         "Revolutionary neural networks analyze your financial DNA to predict needs before you know them. Our AI doesn't just process transactions—it orchestrates your entire financial ecosystem.",
//       features: [
//         "Quantum-speed predictive analysis",
//         "Emotional spending pattern recognition",
//         "Autonomous wealth optimization",
//         "Proactive financial health alerts",
//       ],
//       stats: { value: "99.7%", label: "Prediction Accuracy" },
//       color: "from-cyan-500 via-blue-600 to-purple-600",
//       bgPattern: "radial-gradient(circle at 20% 80%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)",
//     },
//     {
//       icon: LineChart,
//       title: "Quantum Analytics",
//       shortDesc: "Multi-dimensional investment intelligence",
//       description:
//         "Harness the power of quantum computing simulation for investment strategies that operate across multiple market dimensions simultaneously, identifying opportunities invisible to traditional analysis.",
//       features: [
//         "Multi-verse portfolio modeling",
//         "Chaos theory risk assessment",
//         "Sentiment-driven market prediction",
//         "Real-time volatility surfing",
//       ],
//       stats: { value: "347%", label: "Performance Amplification" },
//       color: "from-emerald-500 via-green-600 to-teal-600",
//       bgPattern: "radial-gradient(circle at 40% 20%, #10b981 0%, transparent 50%), radial-gradient(circle at 60% 80%, #059669 0%, transparent 50%)",
//     },
//     {
//       icon: Shield,
//       title: "Fortress Protocol",
//       shortDesc: "Impenetrable quantum-encrypted security",
//       description:
//         "Military-grade quantum encryption combined with biometric DNA authentication creates an unbreachable fortress around your financial assets. Our security evolves faster than threats.",
//       features: [
//         "Quantum entanglement encryption",
//         "DNA-based biometric locks",
//         "Predictive threat neutralization",
//         "Self-healing security infrastructure",
//       ],
//       stats: { value: "0%", label: "Security Breaches Ever" },
//       color: "from-purple-500 via-violet-600 to-indigo-600",
//       bgPattern: "radial-gradient(circle at 30% 70%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 70% 30%, #7c3aed 0%, transparent 50%)",
//     },
//     {
//       icon: Smartphone,
//       title: "Holographic Banking",
//       shortDesc: "Next-gen spatial financial interfaces",
//       description:
//         "Experience banking in three dimensions with our AR/VR platform that transforms financial data into interactive holographic environments you can walk through and manipulate.",
//       features: [
//         "3D financial data visualization",
//         "Gesture-controlled transactions",
//         "Immersive market environments",
//         "Spatial collaboration tools",
//       ],
//       stats: { value: "10M+", label: "Holographic Sessions" },
//       color: "from-orange-500 via-red-500 to-pink-600",
//       bgPattern: "radial-gradient(circle at 60% 40%, #f97316 0%, transparent 50%), radial-gradient(circle at 40% 60%, #ef4444 0%, transparent 50%)",
//     },
//   ];

//   const orbitalItems = [
//     { icon: Users, text: "2M+ Users", color: "from-blue-500 to-cyan-500" },
//     { icon: Award, text: "50+ Awards", color: "from-emerald-500 to-green-500" },
//     { icon: Globe, text: "150+ Countries", color: "from-purple-500 to-violet-500" },
//     { icon: Zap, text: "99.9% Uptime", color: "from-orange-500 to-red-500" },
//     { icon: Star, text: "4.9★ Rating", color: "from-yellow-500 to-amber-500" },
//   ];

//   return (
//     <section className="relative py-32 overflow-hidden bg-white">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
//         <div 
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
//         {/* Revolutionary Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
//             <Sparkles className="w-5 h-5 text-blue-600" />
//             <span className="text-blue-700 font-medium tracking-wide">
//               Revolutionary Banking Services
//             </span>
//           </div>
          
//           <h2 className="text-6xl lg:text-8xl font-bold mb-6 leading-[0.9]">
//             <span className="text-slate-900 block">Beyond</span>
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
//               Traditional
//             </span>
//           </h2>
//           <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
//             Step into the future of finance where AI meets innovation, creating experiences 
//             that transcend the boundaries of conventional banking.
//           </p>
//         </div>

//         {/* Innovative Hexagonal Service Layout */}
//         <div className="grid lg:grid-cols-5 gap-8 mb-32">
//           {/* Hexagonal Service Selector */}
//           <div className="lg:col-span-2 relative">
//             <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
//               {services.map((service, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveService(index)}
//                   className={`group relative aspect-square rounded-3xl transition-all duration-700 transform-gpu hover:scale-105 ${
//                     activeService === index
//                       ? "scale-110 z-10"
//                       : "scale-100"
//                   }`}
//                   style={{
//                     background: activeService === index 
//                       ? `linear-gradient(135deg, ${service.color.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').join(', ')})`
//                       : 'rgba(59, 130, 246, 0.05)',
//                     backdropFilter: 'blur(20px)',
//                     border: activeService === index 
//                       ? '2px solid rgba(59, 130, 246, 0.3)'
//                       : '1px solid rgba(59, 130, 246, 0.1)'
//                   }}
//                 >
//                   <div className="absolute inset-0 rounded-3xl overflow-hidden">
//                     <div 
//                       className="absolute inset-0 opacity-30 transition-opacity duration-500"
//                       style={{ background: service.bgPattern }}
//                     />
//                   </div>
                  
//                   <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
//                     <service.icon className={`w-12 h-12 mb-4 transition-all duration-300 ${
//                       activeService === index ? 'text-white scale-110' : 'text-slate-600 group-hover:text-slate-800 group-hover:scale-105'
//                     }`} />
//                     <h3 className={`font-bold text-sm transition-colors duration-300 ${
//                       activeService === index ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'
//                     }`}>
//                       {service.title}
//                     </h3>
//                   </div>
                  
//                   {activeService === index && (
//                     <div
//                       className="absolute inset-0 rounded-3xl animate-pulse"
//                       style={{
//                         background: `linear-gradient(135deg, ${service.color.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').join(', ')})`,
//                         opacity: 0.2,
//                       }}
//                     />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Service Details */}
//           <div className="lg:col-span-3">
//             <div
//               key={activeService}
//               className="relative bg-gradient-to-br from-slate-50 to-white backdrop-blur-2xl rounded-3xl p-8 border border-slate-200 transform transition-all duration-700 hover:scale-[1.02] shadow-xl"
//             >
//               {/* Floating Elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

//               {/* Service Header */}
//               <div className="relative mb-8">
//                 <div className="flex items-center space-x-6 mb-4">
//                   <div 
//                     className="p-4 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-110"
//                     style={{ 
//                       background: `linear-gradient(135deg, ${services[activeService].color.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').join(', ')})`,
//                     }}
//                   >
//                     {/* <services[activeService].icon className="w-10 h-10 text-white" /> */}
//                   </div>
//                   <div>
//                     <h3 className="text-3xl font-bold text-slate-900 mb-2">
//                       {services[activeService].title}
//                     </h3>
//                     <p className="text-slate-600 text-lg">
//                       {services[activeService].shortDesc}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-slate-700 mb-8 text-lg leading-relaxed">
//                 {services[activeService].description}
//               </p>

//               {/* Enhanced Features */}
//               <div className="grid md:grid-cols-2 gap-4 mb-8">
//                 {services[activeService].features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 backdrop-blur-sm border border-slate-200 hover:bg-slate-100 transition-all duration-300"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
//                     <span className="text-slate-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Enhanced Stats */}
//               <div 
//                 className="relative p-6 rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors duration-300"
//                 style={{
//                   background: `linear-gradient(135deg, ${services[activeService].color.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').join(', ')})`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
//                 <div className="relative flex items-center justify-between">
//                   <div>
//                     <p className="text-4xl font-bold text-white mb-1">
//                       {services[activeService].stats.value}
//                     </p>
//                     <p className="text-white/90 font-medium">
//                       {services[activeService].stats.label}
//                     </p>
//                   </div>
//                   <TrendingUp className="w-16 h-16 text-white/30" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Revolutionary CTA Section - Completely Unique Orbital Design */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* Central Hub */}
//           <div className="relative z-20 flex items-center justify-center">
//             <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 p-1 animate-spin-slow">
//               <div className="w-full h-full rounded-full bg-white flex items-center justify-center backdrop-blur-xl shadow-2xl">
//                 <div className="text-center p-8 animate-reverse-spin">
//                   <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4 animate-pulse" />
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                     Join the Revolution
//                   </h3>
//                   <p className="text-sm text-slate-600 mb-6">
//                     10M+ users can't be wrong
//                   </p>
//                   <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform">
//                     Start Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//                    {/* Orbiting Elements */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {orbitalItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`absolute animate-orbit-${index + 1}`}
//                 style={{
//                   transform: `rotate(${index * 72}deg) translateY(-${200 + index * 10}px) rotate(-${index * 72}deg)`,
//                 }}
//               >
//                 <div className={`relative bg-gradient-to-r ${item.color} p-4 rounded-2xl shadow-2xl backdrop-blur-sm hover:scale-125 transition-transform duration-300 cursor-pointer`}>
//                   <div className="text-center">
//                     <item.icon className="w-6 h-6 text-white mx-auto mb-2" />
//                     <p className="text-xs font-bold text-white whitespace-nowrap">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Action Satellites */}
//           <div className="absolute bottom-0 left-0 z-10">
//             <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-2xl shadow-2xl overflow-hidden hover:scale-105 hover:translate-x-2 transition-all duration-300 transform">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className="relative flex items-center space-x-3">
//                 <CreditCard className="w-6 h-6" />
//                 <span>Open Account</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//               </div>
//             </button>
//           </div>

//           <div className="absolute bottom-0 right-0 z-10">
//             <button className="group relative px-8 py-4 bg-white backdrop-blur-sm text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-2xl hover:scale-105 hover:-translate-x-2 transform duration-300">
//               <div className="flex items-center space-x-3">
//                 <Lock className="w-6 h-6" />
//                 <span>Book Demo</span>
//               </div>
//             </button>
//           </div>

//           {/* Background Glow Effect */}
//           <div className="absolute inset-0 -z-10">
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for Animations */}
//       <style jsx>{`
//         .animate-spin-slow {
//           animation: spin 20s linear infinite;
//         }
        
//         .animate-reverse-spin {
//           animation: spin 20s linear infinite reverse;
//         }
        
//         .animate-orbit-1 {
//           animation: orbit 25s linear infinite;
//         }
        
//         .animate-orbit-2 {
//           animation: orbit 27s linear infinite;
//         }
        
//         .animate-orbit-3 {
//           animation: orbit 29s linear infinite;
//         }
        
//         .animate-orbit-4 {
//           animation: orbit 31s linear infinite;
//         }
        
//         .animate-orbit-5 {
//           animation: orbit 33s linear infinite;
//         }
        
//         @keyframes orbit {
//           from {
//             transform: rotate(0deg) translateY(-200px) rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg) translateY(-200px) rotate(-360deg);
//           }
//         }
        
//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServiceDetailsSec2;