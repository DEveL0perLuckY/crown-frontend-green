import React, { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Financial Planning",
    description:
      "Offering tailored financial advice for clients, covering retirement planning.",
    image: "https://html.rometheme.net/planvest/image/img3.png",
  },
  {
    title: "Portfolio Management",
    description:
      "Helps individuals and institutions manage their investment portfolios",
    image: "https://html.rometheme.net/planvest/image/img4.png",
  },
  {
    title: "Wealth Management",
    description:
      "Managing all aspects of a client's wealth, including investments, taxes, etc",
    image: "https://html.rometheme.net/planvest/image/img34.png",
  },
  {
    title: "Real Estate Investment",
    description:
      "Providing opportunities and advice for investing in real estate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxALIabi_i280sRkqsqwCsi4qeX1nAB-kvw&s",
  },
];

export default function Section3() {
  const swiperRef = useRef(null);

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
    hidden: { opacity: 0, y: -30 },
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
    <motion.div
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 items-end mb-12"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-3 mb-3"
            variants={titleVariants}
          >
            <div
              className="inline-block px-4 py-2 rounded-full w-fit"
              style={{ background: "var(--grey-accent)" }}
            >
              <h6 className="planvest-h6 m-0" style={{ color: "var(--green)" }}>
                Our Services
              </h6>
            </div>
            <h3 className="planvest-h3" style={{ color: "var(--black)" }}>
              Unlock financial freedom with smart choices
            </h3>
          </motion.div>

          <motion.div
            className="mb-3 flex justify-end"
            variants={titleVariants}
          >
            <Link
              to="/service"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: "var(--gradient-left)" }}
            >
              <span>All Services</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative pt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="service-swiper !pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="service-slide">
                {({ isActive }) => (
                  <motion.div
                    className={`h-full p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                      isActive ? "text-white transform scale-105" : "text-black"
                    }`}
                    style={{
                      background: isActive
                        ? "var(--gradient-bottom)"
                        : "var(--grey-accent)",
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    <h5 className="planvest-h5 mb-4">{service.title}</h5>
                    <p
                      className={`mb-6 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="relative h-48">
                      <motion.img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />

                      <motion.div
                        className="absolute bottom-0 right-0"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div
                          className="w-12 h-12 rounded-tl-2xl flex items-center justify-center"
                          style={{
                            background: isActive
                              ? "var(--green-dark)"
                              : "white",
                            borderColor: isActive
                              ? "var(--green-dark)"
                              : "var(--grey-accent)",
                          }}
                        >
                          <a
                            href="#"
                            className="flex items-center justify-center"
                          >
                            <ArrowUpRight
                              className="w-6 h-6"
                              style={{
                                color: isActive
                                  ? "var(--green-neon)"
                                  : "var(--green)",
                              }}
                            />
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="service-prev absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
            style={{
              background: "white",
              color: "var(--green)",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="service-next absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
            style={{
              background: "white",
              color: "var(--green)",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Custom styled pagination and slides */}
          <style>{`
            .service-swiper {
              overflow: visible !important;
            }

            .service-swiper .service-slide {
              width: 380px;
              height: 450px;
            }
            
            .service-swiper .swiper-wrapper {
              align-items: center;
            }
            
            .service-swiper .swiper-pagination {
              position: relative !important;
              margin-top: 2rem;
            }
            
            .service-swiper .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: var(--grey-accent);
              opacity: 1;
              transition: all 0.3s ease;
            }
            
            .service-swiper .swiper-pagination-bullet-active {
              width: 24px;
              height: 8px;
              border-radius: 4px;
              background: var(--green);
            }
            
            .service-prev:hover,
            .service-next:hover {
              background: var(--green) !important;
              color: white !important;
            }

            @media (max-width: 768px) {
              .service-prev,
              .service-next {
                display: none;
              }
              
              .service-swiper .service-slide {
                width: 320px;
              }
            }
          `}</style>
        </motion.div>

        {/* Additional info text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            Swipe or use arrow keys to explore our services
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// import React, { useState, useEffect, useRef } from "react";
// import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   EffectCoverflow,
//   Navigation,
//   Pagination,
//   Keyboard,
//   Mousewheel,
//   Autoplay,
//   EffectFade,
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const services = [
//   {
//     id: 1,
//     title: "Financial Planning",
//     description: "Offering tailored financial advice for clients, covering retirement planning.",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
//     color: "#10b981",
//   },
//   {
//     id: 2,
//     title: "Portfolio Management",
//     description: "Helps individuals and institutions manage their investment portfolios",
//     image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
//     color: "#3b82f6",
//   },
//   {
//     id: 3,
//     title: "Wealth Management",
//     description: "Managing all aspects of a client's wealth, including investments, taxes, etc",
//     image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
//     color: "#8b5cf6",
//   },
//   {
//     id: 4,
//     title: "Real Estate Investment",
//     description: "Providing opportunities and advice for investing in real estate",
//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
//     color: "#f59e0b",
//   },
// ];

// export default function Section3() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [viewMode, setViewMode] = useState("3d"); // '3d', 'slider', or 'auto'
//   const [isPaused, setIsPaused] = useState(false);
//   const swiperRef = useRef(null);
//   const autoScrollRef = useRef(null);

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (viewMode === "auto" && !isPaused) {
//       autoScrollRef.current = setInterval(() => {
//         setActiveSlide((prev) => (prev + 1) % services.length);
//       }, 3000);
//     }
//     return () => {
//       if (autoScrollRef.current) {
//         clearInterval(autoScrollRef.current);
//       }
//     };
//   }, [viewMode, isPaused]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   // Render card content (reusable for all modes)
//   const renderCard = (service, index, isActive) => (
//     <motion.div
//       className={`h-full p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
//         isActive ? "text-white" : "text-black"
//       }`}
//       style={{
//         background: isActive
//           ? `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
//           : "#f3f4f6",
//         boxShadow: isActive
//           ? "0 20px 40px rgba(0,0,0,0.2)"
//           : "0 4px 6px rgba(0,0,0,0.1)",
//       }}
//       whileHover={{ y: -10, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300 }}
//     >
//       <motion.h5
//         className="text-2xl font-bold mb-4"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.1 }}
//       >
//         {service.title}
//       </motion.h5>
//       <motion.p
//         className={`mb-6 ${isActive ? "text-white/90" : "text-gray-600"}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         {service.description}
//       </motion.p>

//       <div className="relative h-48 overflow-hidden rounded-lg">
//         <motion.img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-full object-cover"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         />

//         <motion.div
//           className="absolute bottom-0 right-0"
//           whileHover={{ scale: 1.2, rotate: 90 }}
//           whileTap={{ scale: 0.9 }}
//           transition={{ type: "spring", stiffness: 400 }}
//         >
//           <div
//             className="w-12 h-12 rounded-tl-2xl flex items-center justify-center"
//             style={{
//               background: isActive ? "rgba(255,255,255,0.2)" : "white",
//             }}
//           >
//             <ArrowUpRight
//               className="w-6 h-6"
//               style={{
//                 color: isActive ? "white" : service.color,
//               }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );

//   // Render 3D Coverflow view
//   const render3DView = () => (
//     <Swiper
//       ref={swiperRef}
//       effect={"coverflow"}
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={"auto"}
//       loop={true}
//       spaceBetween={30}
//       coverflowEffect={{
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       }}
//       navigation={{
//         prevEl: ".swiper-button-prev-custom",
//         nextEl: ".swiper-button-next-custom",
//       }}
//       keyboard={{ enabled: true }}
//       mousewheel={{ thresholdDelta: 70 }}
//       pagination={{
//         clickable: true,
//         dynamicBullets: true,
//       }}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//       }}
//       onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//       modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
//       className="!pb-16"
//     >
//       {services.map((service, index) => (
//         <SwiperSlide key={service.id} className="!w-[320px] !h-[450px]">
//           {renderCard(service, index, index === activeSlide)}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );

//   // Render regular slider view
//   const renderSliderView = () => (
//     <Swiper
//       ref={swiperRef}
//       spaceBetween={30}
//       slidesPerView={1}
//       loop={true}
//       navigation={{
//         prevEl: ".swiper-button-prev-custom",
//         nextEl: ".swiper-button-next-custom",
//       }}
//       pagination={{
//         clickable: true,
//         type: "progressbar",
//       }}
//       autoplay={{
//         delay: 4000,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//       }}
//       breakpoints={{
//         640: { slidesPerView: 1 },
//         768: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//       }}
//       onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//       modules={[Navigation, Pagination, Autoplay]}
//       className="!pb-16"
//     >
//       {services.map((service, index) => (
//         <SwiperSlide key={service.id} className="!h-[450px]">
//           {renderCard(service, index, index === activeSlide)}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );

//   // Render auto-scroll view
//   const renderAutoScrollView = () => (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className="overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeSlide}
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="max-w-2xl mx-auto h-[450px]"
//           >
//             {renderCard(services[activeSlide], activeSlide, true)}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Manual navigation for auto-scroll */}
//       <div className="flex justify-center items-center gap-4 mt-8">
//         <button
//           onClick={() => setActiveSlide((prev) => (prev - 1 + services.length) % services.length)}
//           className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         <div className="flex gap-2">
//           {services.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === activeSlide
//                   ? "w-8 bg-gray-800"
//                   : "w-2 bg-gray-300 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>

//         <button
//           onClick={() => setActiveSlide((prev) => (prev + 1) % services.length)}
//           className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Pause indicator */}
//       {isPaused && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
//         >
//           Paused
//         </motion.div>
//       )}
//     </div>
//   );

//   return (
//     <motion.div
//       className="py-20 bg-gray-50"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto px-5">
//         {/* Header Section */}
//         <motion.div
//           className="grid grid-cols-1 xl:grid-cols-2 items-end mb-12"
//           variants={containerVariants}
//         >
//           <motion.div
//             className="flex flex-col gap-3 mb-3"
//             variants={titleVariants}
//           >
//             <div className="inline-block px-4 py-2 rounded-full w-fit bg-gray-200">
//               <h6 className="text-sm font-semibold text-green-600 m-0">
//                 Our Services
//               </h6>
//             </div>
//             <h3 className="text-4xl font-bold text-gray-900">
//               Unlock financial freedom with smart choices
//             </h3>
//           </motion.div>

//           <motion.div
//             className="mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4"
//             variants={titleVariants}
//           >
//             {/* View mode selector */}
//             <div className="flex gap-2 bg-gray-200 p-1 rounded-lg">
//               <button
//                 onClick={() => setViewMode("3d")}
//                 className={`px-4 py-2 rounded-md font-medium transition-all ${
//                   viewMode === "3d"
//                     ? "bg-white text-gray-900 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 3D View
//               </button>
//               <button
//                 onClick={() => setViewMode("slider")}
//                 className={`px-4 py-2 rounded-md font-medium transition-all ${
//                   viewMode === "slider"
//                     ? "bg-white text-gray-900 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Slider
//               </button>
//               <button
//                 onClick={() => setViewMode("auto")}
//                 className={`px-4 py-2 rounded-md font-medium transition-all ${
//                   viewMode === "auto"
//                     ? "bg-white text-gray-900 shadow-sm"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Auto
//               </button>
//             </div>

//             <motion.a
//               href="#"
//               className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-white transition-all hover:scale-105 bg-gradient-to-r from-green-600 to-emerald-600"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>All Services</span>
//               <ArrowUpRight className="w-5 h-5" />
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Content Section */}
//         <motion.div
//           className="relative pt-5"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           {viewMode === "3d" && render3DView()}
//           {viewMode === "slider" && renderSliderView()}
//                   {viewMode === "auto" && renderAutoScrollView()}

//           {/* Custom Navigation Buttons (for swiper modes) */}
//           {(viewMode === "3d" || viewMode === "slider") && (
//             <>
//               <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
//                 <ChevronLeft className="w-6 h-6 text-gray-700" />
//               </button>
//               <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
//                 <ChevronRight className="w-6 h-6 text-gray-700" />
//               </button>
//             </>
//           )}
//         </motion.div>

//         {/* Additional info text */}
//         <motion.div
//           className="text-center mt-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//         >
//           <p className="text-gray-500 text-sm">
//             {viewMode === "3d" && "Swipe or use arrow keys to explore our services in 3D"}
//             {viewMode === "slider" && "Navigate through our services using arrows or swipe"}
//             {viewMode === "auto" && "Services auto-scroll every 3 seconds • Hover to pause"}
//           </p>
//         </motion.div>
//       </div>

//       {/* Custom styles */}
//       <style jsx global>{`
//         /* 3D View Pagination */
//         .swiper-pagination {
//           position: relative !important;
//           margin-top: 2rem;
//         }

//         .swiper-pagination-bullet {
//           width: 12px;
//           height: 12px;
//           background: #e5e7eb;
//           opacity: 1;
//           transition: all 0.3s ease;
//         }

//         .swiper-pagination-bullet-active {
//           width: 32px;
//           border-radius: 6px;
//           background: #10b981;
//         }

//         /* Progress bar for slider view */
//         .swiper-pagination-progressbar {
//           position: relative !important;
//           height: 4px;
//           background: #e5e7eb;
//           margin-top: 2rem;
//         }

//         .swiper-pagination-progressbar-fill {
//           background: #10b981 !important;
//         }

//         /* 3D shadows */
//         .swiper-slide-shadow-left,
//         .swiper-slide-shadow-right {
//           background-image: linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0));
//         }

//         /* Disable default navigation buttons */
//         .swiper-button-next,
//         .swiper-button-prev {
//           display: none;
//         }

//         /* Animation for auto-scroll mode */
//         @keyframes slideProgress {
//           from {
//             transform: scaleX(0);
//           }
//           to {
//             transform: scaleX(1);
//           }
//         }

//         .progress-bar {
//           animation: slideProgress 3s linear;
//           transform-origin: left;
//         }
//       `}</style>
//     </motion.div>
//   );
// }
