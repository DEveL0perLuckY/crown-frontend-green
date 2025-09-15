import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  {
    bg: "bg-[url('https://html.rometheme.net/planvest/image/img3.png')]",
    label: "Portfolio Management",
    labelColor: "bg-gray-700",
    title: "",
    location: "Helps individuals and institutions manage their investment portfolios",
  },
  {
    bg: "bg-[url('https://html.rometheme.net/planvest/image/img4.png')]",
    label: "Wealth Management",
    labelColor: "bg-blue-600",
    title: "",
    location: "Managing all aspects of a client's wealth, including investments, taxes, etc",
  },
  {
    bg: "bg-[url('https://html.rometheme.net/planvest/image/img3.png')]",
    label: "Real Estate Investment",
    labelColor: "bg-orange-700",
    title: "",
    location: "Providing opportunities and advice for investing in real estate",
  },
  {
    bg: "bg-[url('https://html.rometheme.net/planvest/image/img34.png')]",
    label: "Financial Planning",
    labelColor: "bg-blue-600",
    title: "",
    location: "Comprehensive financial planning services for individuals and businesses",
  },
];

const Slider = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const labelVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="w-full min-h-screen flex items-center justify-center bg-white px-4 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={60}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
        className="w-full max-w-7xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-72 h-[400px] rounded-lg overflow-hidden shadow-2xl"
          >
            <motion.div
              className={`w-full h-full flex flex-col justify-end ${slide.bg} bg-cover bg-center relative`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Overlay with animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              
              {/* Label with slide-in animation */}
              <motion.span
                className={`z-20 relative text-white ${slide.labelColor} px-4 py-1 text-xs uppercase font-semibold rounded-r-full ml-0 mt-4`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={labelVariants}
                whileHover={{ scale: 1.1, x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {slide.label}
              </motion.span>

              {/* Text content with fade-up animation */}
              <motion.div 
                className="z-20 relative text-white p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contentVariants}
              >
                {slide.title && (
                  <motion.h2 
                    className="text-lg font-semibold mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {slide.title}
                  </motion.h2>
                )}
                <motion.p 
                  className="flex items-center text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </motion.svg>
                  {slide.location}
                </motion.p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
        <motion.div 
          className="swiper-pagination !bottom-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </Swiper>
    </motion.section>
  );
};

export default Slider;