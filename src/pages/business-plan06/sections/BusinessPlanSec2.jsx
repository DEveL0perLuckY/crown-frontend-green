import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ArrowRight, TrendingUp, Battery, Bitcoin, Building2 } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ProfessionalInvestmentSlider = () => {
  const swiperRef = useRef(null);

  const investments = [
    {
      id: 1,
      title: "Solar Energy",
      subtitle: "Renewable Power",
      description: "Invest in our expanding solar infrastructure with returns powered by sustainable energy production.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      icon: <Battery className="w-6 h-6 text-amber-600" />,
      stats: {
        roi: "15.8%",
        term: "5 Years",
        min: "$10K"
      },
      gradient: "from-amber-500 to-orange-600",
      shadowColor: "shadow-amber-500/20"
    },
    {
      id: 2,
      title: "Electric Vehicles",
      subtitle: "Future Mobility",
      description: "Drive your portfolio forward with investments in EV manufacturers and infrastructure.",
      image: "https://res.cloudinary.com/dygdftjr8/image/upload/v1742970494/car_fwgels.png",
      icon: <TrendingUp className="w-6 h-6 text-sky-600" />,
      stats: {
        roi: "22.4%",
        term: "3 Years",
        min: "$15K"
      },
      gradient: "from-blue-500 to-cyan-600",
      shadowColor: "shadow-blue-500/20"
    },
    {
      id: 3,
      title: "Cryptocurrency",
      subtitle: "Digital Assets",
      description: "Diversify with curated crypto investments, managed by our expert financial advisors.",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069",
      icon: <Bitcoin className="w-6 h-6 text-pink-600" />,
      stats: {
        roi: "35.2%",
        term: "2 Years",
        min: "$5K"
      },
      gradient: "from-purple-500 to-pink-600",
      shadowColor: "shadow-purple-500/20"
    },
    {
      id: 4,
      title: "Forbes 500",
      subtitle: "Blue Chip Stocks",
      description: "Balance your green investments with stable returns from leading Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      stats: {
        roi: "12.6%",
        term: "10 Years",
        min: "$25K"
      },
      gradient: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full">
              INVESTMENT OPPORTUNITIES
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Strategic Investment
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diversify your portfolio with our carefully curated investment options designed for sustainable growth
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              prevEl: '.pro-prev',
              nextEl: '.pro-next',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            className="professional-swiper pb-16"
          >
            {investments.map((investment, index) => (
              <SwiperSlide key={investment.id} className="swiper-slide-pro">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl ${investment.shadowColor} hover:shadow-2xl transition-all duration-500 h-[520px]`}>
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={investment.image} 
                        alt={investment.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${investment.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                      
                      {/* Floating Stats Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="text-5xl font-bold mb-2">{investment.stats.roi}</div>
                          <div className="text-sm uppercase tracking-wider">Annual Return</div>
                        </div>
                      </div>

                      {/* Icon Badge */}
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                        <div className={`text-transparent bg-clip-text bg-gradient-to-br ${investment.gradient}`}>
                          {investment.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="mb-4">
                        <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${investment.gradient} uppercase tracking-wider mb-2`}>
                          {investment.subtitle}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {investment.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {investment.description}
                        </p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <p className="text-xs text-gray-500 uppercase">Returns</p>
                          <p className="text-lg font-bold text-gray-900">{investment.stats.roi}</p>
                        </div>
                        <div className="text-center border-x border-gray-100">
                          <p className="text-xs text-gray-500 uppercase">Term</p>
                          <p className="text-lg font-bold text-gray-900">{investment.stats.term}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-500 uppercase">Min. Invest</p>
                          <p className="text-lg font-bold text-gray-900">{investment.stats.min}</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${investment.gradient} text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="pro-prev absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="pro-next absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Explore All Investment Options
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .professional-swiper .swiper-slide-pro {
          width: 380px;
          height: auto;
        }

        .professional-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          opacity: 1;
        }

        .professional-swiper .swiper-pagination-bullet-active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: #111827;
        }

        @media (max-width: 768px) {
          .pro-prev,
          .pro-next {
            display: none;
          }
          
          .professional-swiper .swiper-slide-pro {
            width: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProfessionalInvestmentSlider;

// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// import { ArrowRight, Sparkles, Zap, Car, Bitcoin, Building } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// const CartoonInvestmentOpportunities = () => {
//   const swiperRef = useRef(null);

//   const investments = [
//     {
//       id: 1,
//       title: "Solar Energy",
//       subtitle: "Solar panels",
//       description: "Invest in our expanding solar infrastructure with returns powered by sustainable energy production.",
//       icon: <Zap className="w-12 h-12" />,
//       primaryColor: "#FFD93D",
//       secondaryColor: "#FF6B6B",
//       accentColor: "#4ECDC4",
//       illustration: "solar"
//     },
//     {
//       id: 2,
//       title: "Electric Vehicles",
//       subtitle: "Electric Vehicle",
//       description: "Drive your portfolio forward with investments in EV manufacturers and infrastructure.",
//       icon: <Car className="w-12 h-12" />,
//       primaryColor: "#6BCF7F",
//       secondaryColor: "#4ECDC4",
//       accentColor: "#FFD93D",
//       illustration: "ev"
//     },
//     {
//       id: 3,
//       title: "Cryptocurrency",
//       subtitle: "Cryptocurrency",
//       description: "Diversify with curated crypto investments, managed by our expert financial advisors.",
//       icon: <Bitcoin className="w-12 h-12" />,
//       primaryColor: "#A78BFA",
//       secondaryColor: "#F472B6",
//       accentColor: "#60A5FA",
//       illustration: "crypto"
//     },
//     {
//       id: 4,
//       title: "Forbes 500",
//       subtitle: "Corporate buildings",
//       description: "Balance your green investments with stable returns from leading Fortune 500 companies.",
//       icon: <Building className="w-12 h-12" />,
//       primaryColor: "#60A5FA",
//       secondaryColor: "#34D399",
//       accentColor: "#A78BFA",
//       illustration: "corporate"
//     }
//   ];

//   const getIllustration = (type) => {
//     switch(type) {
//       case 'solar':
//         return (
//           <svg viewBox="0 0 200 200" className="w-full h-full">
//             {/* Sun */}
//             <circle cx="100" cy="50" r="30" fill="#FFD93D" className="animate-pulse" />
//             <g className="animate-spin-slow origin-center">
//               {[...Array(8)].map((_, i) => (
//                 <rect
//                   key={i}
//                   x="95"
//                   y="10"
//                   width="10"
//                   height="20"
//                   fill="#FFA502"
//                   transform={`rotate(${i * 45} 100 50)`}
//                 />
//               ))}
//             </g>
//             {/* Solar Panel */}
//             <rect x="40" y="100" width="120" height="80" rx="10" fill="#1E40AF" />
//             <g>
//               {[...Array(3)].map((_, i) => (
//                 <rect key={i} x="50" y={110 + i * 25} width="100" height="20" rx="5" fill="#60A5FA" stroke="#fff" strokeWidth="2" />
//               ))}
//             </g>
//             {/* Energy waves */}
//             <path d="M100 80 Q90 90 100 100 T100 120" stroke="#FFD93D" strokeWidth="3" fill="none" className="animate-pulse" />
//           </svg>
//         );
//       case 'ev':
//         return (
//           <svg viewBox="0 0 200 200" className="w-full h-full">
//             {/* Car body */}
//             <rect x="30" y="80" width="140" height="60" rx="30" fill="#6BCF7F" />
//             <rect x="50" y="60" width="100" height="40" rx="20" fill="#4ECDC4" />
//             {/* Windows */}
//             <rect x="60" y="70" width="35" height="25" rx="10" fill="#E0F2FE" />
//             <rect x="105" y="70" width="35" height="25" rx="10" fill="#E0F2FE" />
//             {/* Wheels */}
//             <circle cx="60" cy="140" r="20" fill="#374151" className="animate-spin-slow" />
//             <circle cx="140" cy="140" r="20" fill="#374151" className="animate-spin-slow" />
//             <circle cx="60" cy="140" r="10" fill="#6B7280" />
//             <circle cx="140" cy="140" r="10" fill="#6B7280" />
//             {/* Lightning bolt */}
//             <path d="M90 100 L100 85 L95 95 L105 80 L95 100 L100 90 Z" fill="#FFD93D" className="animate-pulse" />
//           </svg>
//         );
//       case 'crypto':
//         return (
//           <svg viewBox="0 0 200 200" className="w-full h-full">
//             {/* Bitcoin coin */}
//             <g className="animate-bounce-slow">
//               <circle cx="100" cy="100" r="60" fill="#F7931A" />
//               <circle cx="100" cy="100" r="50" fill="#FFD93D" />
//               <text x="100" y="115" fontSize="40" fontWeight="bold" fill="#F7931A" textAnchor="middle">₿</text>
//             </g>
//             {/* Floating coins */}
//             <g className="animate-float">
//               <circle cx="50" cy="50" r="20" fill="#A78BFA" opacity="0.8" />
//               <circle cx="150" cy="40" r="15" fill="#F472B6" opacity="0.8" />
//               <circle cx="160" cy="150" r="18" fill="#60A5FA" opacity="0.8" />
//               <circle cx="40" cy="140" r="12" fill="#34D399" opacity="0.8" />
//             </g>
//           </svg>
//         );
//       case 'corporate':
//         return (
//           <svg viewBox="0 0 200 200" className="w-full h-full">
//             {/* Building */}
//             <rect x="60" y="50" width="80" height="130" rx="10" fill="#60A5FA" />
//             {/* Windows */}
//             {[...Array(4)].map((_, floor) => (
//               <g key={floor}>
//                 {[...Array(3)].map((_, window) => (
//                   <rect
//                     key={window}
//                     x={75 + window * 20}
//                     y={65 + floor * 30}
//                     width="15"
//                     height="20"
//                     rx="3"
//                     fill="#FFD93D"
//                     className="animate-pulse"
//                     style={{ animationDelay: `${(floor * 3 + window) * 0.1}s` }}
//                   />
//                 ))}
//               </g>
//             ))}
//             {/* Side buildings */}
//             <rect x="20" y="80" width="35" height="100" rx="8" fill="#34D399" />
//             <rect x="145" y="70" width="35" height="110" rx="8" fill="#A78BFA" />
//             {/* Ground */}
//             <rect x="0" y="180" width="200" height="20" fill="#6B7280" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float" />
//           <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-float-delayed" />
//           <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float" />
//         </div>

//         {/* Header */}
//         <motion.div 
//           className="text-center mb-16 relative z-10"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2 mb-4"
//             animate={{ rotate: [0, 5, -5, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <Sparkles className="w-8 h-8 text-yellow-500" />
//             <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//               Investment Adventures
//             </h2>
//             <Sparkles className="w-8 h-8 text-yellow-500" />
//           </motion.div>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
//             Join the fun and grow your wealth with our exciting investment opportunities!
//           </p>
//         </motion.div>

//         {/* Swiper Slider */}
//         <div className="relative">
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView="auto"
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             navigation={{
//               prevEl: '.cartoon-prev',
//               nextEl: '.cartoon-next',
//             }}
//             pagination={{ 
//               clickable: true,
//               dynamicBullets: true
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true
//             }}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//                 spaceBetween: 20
//               },
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 30
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 40
//               }
//             }}
//             className="cartoon-swiper pb-20"
//           >
//             {investments.map((investment, index) => (
//               <SwiperSlide key={investment.id} className="swiper-slide-cartoon">
//                 <motion.div
//                   className="relative"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
//                 >
//                   <div 
//                     className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-gray-900 relative overflow-hidden h-[500px]"
//                     style={{
//                       background: `linear-gradient(135deg, ${investment.primaryColor}20 0%, ${investment.secondaryColor}20 100%)`
//                     }}
//                   >
//                     {/* Decorative shapes */}
//                     <div 
//                       className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30"
//                       style={{ backgroundColor: investment.primaryColor }}
//                     />
//                     <div 
//                       className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-30"
//                       style={{ backgroundColor: investment.secondaryColor }}
//                     />

//                     {/* Icon badge */}
//                     <div 
//                       className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg border-3 border-gray-900"
//                       style={{ backgroundColor: investment.primaryColor }}
//                     >
//                       <div className="text-white">{investment.icon}</div>
//                     </div>

//                     {/* Illustration */}
//                     <div className="h-40 mb-6 relative z-10">
//                       {getIllustration(investment.illustration)}
//                     </div>

//                     {/* Content */}
//                     <div className="relative z-10">
//                       <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: investment.primaryColor }}>
//                         {investment.subtitle}
//                       </p>
//                       <h3 className="text-3xl font-black text-gray-900 mb-3">
//                         {investment.title}
//                       </h3>
//                       <p className="text-gray-700 mb-6 font-medium">
//                         {investment.description}
//                       </p>

//                       {/* CTA Button */}
//                       <motion.button
//                         className="w-full py-4 px-6 rounded-2xl font-black text-white text-lg shadow-lg border-3 border-gray-900 flex items-center justify-center gap-3"
//                         style={{ backgroundColor: investment.primaryColor }}
//                         whileHover={{ scale: 1.05, rotate: -2 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <span>Let's Go!</span>
//                         <ArrowRight className="w-6 h-6" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation */}
//           <button className="cartoon-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-2xl border-3 border-gray-900 hover:scale-110 transition-transform">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button className="cartoon-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-2xl border-3 border-gray-900 hover:scale-110 transition-transform">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//             <style jsx>{`
//         .cartoon-swiper .swiper-slide-cartoon {
//           width: 320px;
//           height: 520px;
//         }

//         .cartoon-swiper .swiper-pagination-bullet {
//           width: 12px;
//           height: 12px;
//           background: #E5E7EB;
//           opacity: 1;
//           transition: all 0.3s ease;
//         }

//         .cartoon-swiper .swiper-pagination-bullet-active {
//           width: 40px;
//           height: 12px;
//           border-radius: 6px;
//           background: linear-gradient(90deg, #A78BFA 0%, #F472B6 100%);
//         }

//         .border-3 {
//           border-width: 3px;
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes float-delayed {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-30px);
//           }
//         }

//         @keyframes bounce-slow {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 4s ease-in-out infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }

//         @media (max-width: 640px) {
//           .cartoon-prev,
//           .cartoon-next {
//             display: none;
//           }
          
//           .cartoon-swiper .swiper-slide-cartoon {
//             width: 280px;
//             height: 480px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default CartoonInvestmentOpportunities;