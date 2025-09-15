"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import banner1 from "/src/assets/Home_06_Imgs/banner_1.png";
import banner2 from "/src/assets/Home_06_Imgs/banner_2.png";
import banner3 from "/src/assets/Home_06_Imgs/banner_3.png";
import banner4 from "/src/assets/Home_06_Imgs/banner_4.png";
import banner5 from "/src/assets/Home_06_Imgs/banner_5.png";

// Stats data updated for financial services
const stats = [
  {
    value: 15,
    label: "Years of Financial Excellence",
    suffix: "+",
    decimals: 0,
  },
  { value: 97.8, label: "Client Satisfaction Rate", suffix: "%", decimals: 1 },
  { value: 200, label: "Financial Experts", suffix: "+", decimals: 0 },
  { value: 18.5, label: "Average Portfolio Growth", suffix: "%", decimals: 1 },
];

// Partner logos data - you can update these with actual financial institution logos
const partnerLogos = [
  { src: banner1, alt: "Financial Partner 1" },
  { src: banner2, alt: "Financial Partner 2" },
  { src: banner5, alt: "Financial Partner 5" },
  { src: banner3, alt: "Financial Partner 3" },
  { src: banner4, alt: "Financial Partner 4" },
];

// Custom hook for animated counting
function useCountAnimation(
  end,
  duration = 2000,
  decimals = 0,
  startAnimation = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;

      setCount(Number(currentCount.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, decimals, startAnimation]);

  return count;
}

// Stat card component
function StatCard({ stat, index, isInView }) {
  const count = useCountAnimation(stat.value, 2500, stat.decimals, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-2"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        <span className="tabular-nums">{count}</span>
        <span className="text-3xl md:text-4xl ml-1">{stat.suffix}</span>
      </motion.h2>
      <motion.p
        className="text-sm md:text-base opacity-90 font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.9 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}

export default function Section5() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false, // Set to true if you want animation to run only once
    margin: "-100px", // Trigger when section is 100px inside viewport
  });

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative bg-gradient-to-r from-green-900 via-green-700 to-lime-400 text-white overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }
          }
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{
            borderRadius: "40px",
          }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-32 h-32 bg-lime-400/20 rounded-full blur-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.7 }}
          />

          {/* Main content */}
          <div className="px-8 md:px-16 py-12 md:py-20 relative z-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  stat={stat}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Collaboration text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-start ml-0 lg:ml-14"
            >
              <h3 className="text-xl md:text-2xl font-sans">
                Fostering The Growth Of{" "}
                <motion.span
                  className="text-lime-300 font-sans inline-block"
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  Financial Innovation
                </motion.span>{" "}
                Worldwide
              </h3>
            </motion.div>
          </div>

          {/* Partner logos section - curved cut */}
          <motion.div
            className="absolute bottom-0 right-0 bg-white"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            style={{
              width: "min(600px, 100%)",
              height: "140px",
              borderTopLeftRadius: "40px",
            }}
          >
            <div className="h-full flex items-center justify-center px-8">
              {isInView && (
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={40}
                  slidesPerView="auto"
                  loop={true}
                  speed={3000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="partner-swiper"
                >
                  {partnerLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                      <motion.img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-20 md:h-28 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
