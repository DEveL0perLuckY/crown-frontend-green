import { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero06() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const slides = [
    {
      id: 1,
      tagline: "Building the Future of Global Solar Energy – Launching in 2026",
      title: "We Invest In The Future Of Planet!",
      description:
        "We are laying the foundation to supply world-class solar components globally by 2026. Our mission is to accelerate access to sustainable energy everywhere.",
      image: "/home.mp4", // Cloud video from public folder
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 z-0"
          >
            <video
              src={slide.image}
              autoPlay={true}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="auto"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="space-y-2">
          <motion.div 
            className="w-4 h-4 bg-pink-400 rounded-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="w-4 h-4 bg-pink-400 rounded-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-4 h-4 bg-pink-400 rounded-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <motion.div 
            className="w-4 h-4 bg-yellow-400 rounded-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </div>
      </motion.div>

      <div className="relative z-20 max-w-7xl mt-8 lg:mt-0 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={fadeInLeft}
            >
              We
              <br />
              Invest In
              <br />
              The Future
              <br />
              Of Planet!
            </motion.h1>
          </motion.div>

          {/* Right Content Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  We are laying the foundation to supply world-class solar
                  components globally by 2026. Our mission is to accelerate
                  access to sustainable energy everywhere.
                </motion.p>

                <motion.div 
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                >
                  <Link to={"/contact"}>
                  <motion.button 
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 group transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  </Link>

                  <div className="flex -space-x-2">
                    {[
                      "https://html.rometheme.net/planvest/image/img29.png",
                      "https://html.rometheme.net/planvest/image/img30.png",
                      "https://html.rometheme.net/planvest/image/img31.png"
                    ].map((src, index) => (
                      <motion.img
                        key={index}
                        src={src}
                        alt="Team member"
                        className="w-10 h-10 rounded-full border-2 border-white"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-2"
                  variants={fadeInUp}
                >
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(1.5k+ Reviews)</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full"
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full"
          animate={{ 
            y: [-10, 10, -10]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}