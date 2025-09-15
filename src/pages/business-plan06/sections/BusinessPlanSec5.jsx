import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Car,
  TrendingUp,
  Battery,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const BusinessPlanSec5 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  return (
    <section
      className="py-20 bg-gray-50"
      //   style={{
      //     backgroundImage: `url('https://res.cloudinary.com/dygdftjr8/image/upload/v1742807676/4_tbowdb.jpg')`,
      //     backgroundAttachment: "fixed",
      //     backgroundPosition: "center",
      //     backgroundSize: "cover",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium uppercase tracking-wide text-sm">
              Electronic Vehicles
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Charge Up Your Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How our platform can plug you into the Electrifying EV Revolution
          </p>
        </motion.div>

        {/* First Section with Image */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://crownbankers.com/assets/img/plan/car.png"
              alt="Man using EV charging station"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Man using EV charging station
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Case for EVs: Powering a Cleaner, Smarter Tomorrow
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              The electric vehicle (EV) revolution is sparking a transformation
              in transportation, and it's creating a wealth of opportunities for
              forward-thinking investors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At our Platform, we're here to help you jumpstart your portfolio
              and become a part of this exciting future.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <Car className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">$1.8T</h4>
                <p className="text-gray-600">Market Size by 2030</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <Battery className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">35%</h4>
                <p className="text-gray-600">Annual Growth Rate</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second Section with Image */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why EVs? Buckle Up for a Charged-Up Ride
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The world is shifting towards cleaner transportation solutions,
              and EVs are leading the charge. Government incentives, falling
              battery costs, and rising consumer demand are all accelerating EV
              adoption.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In fact, the global EV market is expected to reach a staggering
              $1.8 trillion by 2030
              <span className="text-sm text-gray-500">
                {" "}
                [Source: Market Research Future]
              </span>
              . This unprecedented growth presents a compelling investment
              opportunity you won't want to miss.
            </p>

            {/* Benefits List */}
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                "Invest in the future of transportation",
                "Benefit from government incentives and subsidies",
                "Capitalize on falling battery costs",
                "Join the sustainable mobility revolution",
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <img
              src="https://crownbankers.com/assets/img/plan/ev.png"
              alt="Family charging electric vehicle"
              className="rounded-lg shadow-lg w-full"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Family charging electric vehicle
            </p>
          </motion.div>
        </motion.div>

        {/* Investment Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <TrendingUp />,
              title: "High Growth Potential",
              value: "250% projected returns",
            },
            {
              icon: <Zap />,
              title: "Innovation Leaders",
              value: "Top EV manufacturers",
            },
            {
              icon: <Battery />,
              title: "Battery Technology",
              value: "Next-gen investments",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-4"
            >
              Ready to Drive Your Portfolio Forward?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
            >
              Join Crown Bankers and invest in the electric vehicle revolution
              today
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start Investing in EVs
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default BusinessPlanSec5;
