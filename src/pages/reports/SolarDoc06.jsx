import React from "react";
import { motion } from "framer-motion";
import greenBackground from "../../assets/images/backgrounds/greenBackground.jpg";

const SolarDoc06 = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section with Background */}
      <div
        className="relative h-[40vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${greenBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          className="text-center mt-10 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Solar Equipment
          </h1>
          <p className="text-2xl text-green-100 font-light">
            Purchase Agreement
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Commitment Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-1 h-12 bg-green-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Crown Bankers' Commitment to Renewable Energy
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Crown Bankers, our mission is to integrate sustainable energy
              solutions with financial innovation. As part of our ongoing
              efforts to expand our solar energy infrastructure, we are proud to
              share details of a recent purchase agreement with Wuxi Suntek New
              Energy Technology Co., Ltd. This acquisition strengthens our goal
              of advancing solar energy adoption globally.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Agreement Summary Card */}
            <motion.div
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white"
              variants={fadeInScale}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg
                  className="w-8 h-8 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Agreement Summary
              </h3>
              <p className="mb-4 text-green-50">
                This agreement marks the procurement of key equipment required
                for the expansion of our solar power plants. The purchase
                includes:
              </p>
              <motion.ul
                className="space-y-3"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  "50,000 mono solar panels (400W capacity each) to enhance energy production capacity",
                  "Inverters, DC cables, batteries, and other necessary components",
                  "Shipment and delivery arrangements for timely completion",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="text-green-200 mr-2">•</span>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Impact Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              variants={fadeInScale}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <svg
                  className="w-8 h-8 mr-3 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Impact on Our Solar Projects
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The acquired equipment will contribute significantly to Crown
                Bankers' solar energy projects, including those that will power
                thousands of households and industries globally. This
                procurement is part of our long-term plan to foster green energy
                initiatives and reduce our carbon footprint.
              </p>
            </motion.div>
          </div>

          {/* Sustainable Future Section */}
          <motion.div
            className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 mb-8 border border-green-200"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Supporting a Sustainable Future
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                By investing in cutting-edge solar technologies, Crown Bankers
                is driving the shift towards renewable energy. This purchase
                will help us build more efficient solar plants, ensuring
                sustainable energy supply for our growing network of partners
                and clients.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { number: "50,000", label: "Solar Panels" },
                  { number: "20MW", label: "Total Capacity" },
                  { number: "15,000+", label: "Homes Powered" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-green-600">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Access the complete purchase agreement documentation
            </p>
            <motion.a
              href="/assets/img/th-1/Solar Plant Purchase Invoice.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Document
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default SolarDoc06;
