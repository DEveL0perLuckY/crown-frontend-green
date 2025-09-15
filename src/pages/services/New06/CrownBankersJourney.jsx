import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lightbulb,
  Globe,
  Building,
  Zap,
  Car,
  Brain,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Sun,
  Battery,
  DollarSign,
  Target,
  Award,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CrownBankersJourney = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const milestones = [
    {
      year: "2022",
      title: "A Dream Takes Shape",
      description:
        "Conceptualized Crown Bankers as a bridge between renewable energy and financial solutions. Built the foundation for a global platform focused on sustainable finance.",
      icon: Lightbulb,
      stats: "Vision Born",
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2023",
      title: "Laying the Foundation",
      description:
        "Registered our website and secured the Crown Bankers domain. Broke ground on our first solar plant, marking our entry into the renewable energy sector.",
      icon: Building,
      stats: "First Solar Plant",
      color: "from-green-500 to-green-600",
    },
    {
      year: "2024",
      title: "A Year of Transformation",
      description:
        "Completed our first solar plant, officially contributing to clean energy production. Registered Crown Bankers in New Zealand and the UK, expanding our global presence.",
      icon: Globe,
      stats: "Global Expansion",
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2025",
      title: "Global Expansion & Second Solar Plant",
      description:
        "Opened our second solar plant in Groningen, Netherlands. Expand registrations to additional countries and host global events across multiple countries.",
      icon: Sun,
      stats: "Netherlands Plant",
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "2026",
      title: "Pioneering the Future",
      description:
        "Begin manufacturing EV and solar components, reducing reliance on external suppliers. Expand Crown Bankers' presence to over 30 countries worldwide.",
      icon: Car,
      stats: "30+ Countries",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      year: "2027",
      title: "Smart Technology & Clean Mobility",
      description:
        "Deploy AI-powered energy tracking, enhancing solar grid efficiency. Launch Crown Bankers EV Charging Stations in key global locations.",
      icon: Brain,
      stats: "AI Integration",
      color: "from-pink-500 to-pink-600",
    },
    {
      year: "2028",
      title: "Global Leader in Sustainable Finance",
      description:
        "Operate 100+ solar plants worldwide, making Crown Bankers a dominant player in clean energy. Establish fully integrated AI-powered smart grids.",
      icon: Award,
      stats: "100+ Solar Plants",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const revenueStats = [
    {
      icon: Sun,
      title: "Solar Energy",
      amount: "$9M+",
      period: "Annual Revenue",
      profit: "$1.8M–$3.6M",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "EV & Forbes Investments",
      amount: "15%–35%",
      period: "Profit Margins",
      profit: "High-yield returns",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: DollarSign,
      title: "Crypto & DeFi",
      amount: "50%–500%",
      period: "Yearly Returns",
      profit: "Strategic growth",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Total Revenue",
      amount: "$290M+",
      period: "Yearly",
      profit: "$24M+ monthly",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Fixed timeline line drawing animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          {
            scaleY: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 0.5, // Reduced scrub value for faster response
            },
          }
        );
      }

      // Animate milestone cards - fade in once
      gsap.fromTo(
        ".milestone-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            once: true, // Animation happens only once
          },
        }
      );

      // Animate center dots
      gsap.fromTo(
        ".timeline-dot",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Animate revenue cards - fade in once
      gsap.fromTo(
        ".revenue-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".revenue-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate stats numbers
      const statNumbers = gsap.utils.toArray(".stat-number");
      statNumbers.forEach((el) => {
        const value = el.getAttribute("data-value");
        const isPercentage = value.includes("%");
        const isRange = value.includes("–");

        if (!isPercentage && !isRange && value.includes("$")) {
          // For dollar amounts
          const numValue = parseInt(value.replace(/\D/g, ""));
          gsap.to(el, {
            innerHTML: numValue,
            duration: 2,
            snap: { innerHTML: 1 },
            onUpdate: function () {
              el.innerHTML =
                "$" +
                Math.floor(this.targets()[0].innerHTML) +
                value.replace(/[0-9$]/g, "");
            },
            scrollTrigger: {
              trigger: ".revenue-grid",
              start: "top 80%",
              once: true,
            },
          });
        } else {
          // For percentages and ranges, just fade in
          gsap.to(el, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ".revenue-grid",
              start: "top 80%",
              once: true,
            },
          });
        }
      });

      // Floating animation for decorative elements
      gsap.to(".float-element", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

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
    hidden: { opacity: 0, y: 30 },
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
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-grid-slate-100/50 bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{ y: backgroundY }}
      />

      {/* Animated Decorative Elements */}
      <motion.div
        className="float-element absolute top-20 sm:top-40 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-100/40 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="float-element absolute bottom-20 sm:bottom-40 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-100/40 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="float-element absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: i * 0.2 }}
        />
      ))}

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-purple-50 border border-green-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
            <span className="text-green-700 text-xs sm:text-sm font-medium">
              Our Global Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Crown Bankers
            <motion.span
              className="block mt-2 bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Roadmap (2022 – 2028)
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4"
            variants={itemVariants}
          >
            Bridging renewable energy and financial solutions for a sustainable
            future
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div
          className="max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          ref={timelineRef}
        >
          <div className="relative">
            {/* Central Line Container */}
            <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 overflow-hidden">
              <div
                ref={lineRef}
                className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
              />
            </div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-8 sm:mb-12 lg:mb-16 ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                } justify-start`}
              >
                <div
                  className={`w-full sm:w-5/12 ${
                    index % 2 === 0
                      ? "sm:text-right sm:pr-8"
                      : "sm:text-left sm:pl-8"
                  } pl-16 sm:pl-0`}
                >
                  <div className="milestone-card relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 border border-slate-100">
                    {/* Year Badge */}
                    <motion.div
                      className={`absolute -top-3 sm:-top-4 ${
                        index % 2 === 0
                          ? "left-4 sm:right-8 sm:left-auto"
                          : "left-4 sm:left-8"
                      } bg-gradient-to-r ${
                        milestone.color
                      } text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${
                        milestone.color
                      } rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg ${
                        index % 2 === 0 ? "sm:ml-auto" : ""
                      }`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <milestone.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3
                      className={`text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 ${
                        index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                      } text-left`}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed ${
                        index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                      } text-left`}
                    >
                      {milestone.description}
                    </p>

                    {/* Stats */}
                    <motion.div
                      className={`flex items-center ${
                        index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                      } justify-start`}
                    >
                      <span
                        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}
                      >
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        {milestone.stats}
                      </span>
                    </motion.div>

                    {/* Decorative Corner */}
                    <div
                      className={`absolute -bottom-2 ${
                        index % 2 === 0 ? "-left-2" : "-right-2"
                      } w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br ${
                        milestone.color
                      } opacity-10 rounded-2xl`}
                    />
                  </div>
                </div>

                {/* Center Dot */}
                <div className="timeline-dot absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 z-20">
                  <motion.div
                    className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${milestone.color} rounded-full shadow-lg border-4 border-white`}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue Model Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
            <span className="text-green-700 text-xs sm:text-sm font-medium">
              Diversified Revenue Model
            </span>
          </motion.div>
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Sustainable & High-Yield
            <span className="block mt-2 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Revenue Streams
            </span>
          </motion.h3>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            variants={itemVariants}
          >
            Our diversified multi-industry approach generates stable returns
            across solar energy, EV investments, and crypto assets
          </motion.p>
        </motion.div>

        {/* Revenue Stats Grid */}
        <div className="revenue-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {revenueStats.map((stat, index) => (
            <div
              key={index}
              className="revenue-card relative bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-slate-100 opacity-0"
            >
              <motion.div
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                {stat.title}
              </h4>
              <div
                className={`stat-number text-xl sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                data-value={stat.amount}
                style={{
                  opacity:
                    stat.amount.includes("%") || stat.amount.includes("–")
                      ? 1
                      : 0,
                }}
              >
                {stat.amount.includes("%") || stat.amount.includes("–")
                  ? stat.amount
                  : "$0"}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-1 sm:mb-2">
                {stat.period}
              </p>
              <p className="text-xs text-slate-400">{stat.profit}</p>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur-xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 shadow-xl">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 flex items-center justify-center gap-2">
                <Battery className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Daily Returns:</span>{" "}
                1.5%–2.4%
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </h4>
              <p className="text-sm sm:text-base text-white/90">
                Join the future of sustainable finance and renewable energy
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CrownBankersJourney;
