import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  TrendingUp,
  Leaf,
  Shield,
  FileText,
  ArrowUpRight,
  BarChart3,
  Users,
  Globe,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BusinessPlanSec3 = () => {
  const [chartData, setChartData] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    // Animate chart data on mount
    setChartData({
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Crown Bankers Portfolio",
          data: [100, 118, 142, 168, 195, 232],
          borderColor: "rgba(5, 150, 105, 1)",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: "rgba(22, 163, 74, 1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
        },
        {
          label: "Market Average",
          data: [100, 108, 115, 125, 138, 152],
          borderColor: "rgb(156, 163, 175)",
          backgroundColor: "rgba(156, 163, 175, 0.1)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderDash: [5, 5],
        },
      ],
    });
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Portfolio Management",
      description:
        "Our team of financial experts carefully selects and manages diverse investments to maximize returns while managing risk.",
      color: "from-blue-500 to-indigo-600",
      iconColor: "blue-500",
      bgColor: "bg-blue-50",
      stats: "15+ Years Experience",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Green Investment Focus",
      description:
        "We prioritize environmentally responsible investments that deliver strong financial returns while supporting a sustainable future.",
      color: "from-green-500 to-emerald-600",
      iconColor: "green-500",
      bgColor: "bg-green-50",
      stats: "40% ESG Portfolio",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Diversified Risk Management",
      description:
        "Our investment strategy spreads risk across multiple sectors, asset classes, and geographies to protect your capital.",
      color: "from-purple-500 to-pink-600",
      iconColor: "purple-500",
      bgColor: "bg-purple-50",
      stats: "Risk Score: A+",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Transparent Reporting",
      description:
        "Access detailed reports of your investment performance with real-time updates through our secure online portal.",
      color: "from-orange-500 to-red-600",
      iconColor: "orange-500",
      bgColor: "bg-orange-50",
      stats: "24/7 Access",
    },
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            family: "Inter, sans-serif",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.parsed.y + "%";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Inter, sans-serif",
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          font: {
            size: 12,
            family: "Inter, sans-serif",
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <BarChart3 className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Invest With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Crown Bankers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of investors who trust us to grow their wealth
            through strategic, sustainable investments
          </p>
        </motion.div>

        {/* Chart and Stats Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Investment Growth Chart
              </h3>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">+132% Growth</span>
              </div>
            </div>
            <div className="h-80">
              {chartData && <Line data={chartData} options={chartOptions} />}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">232%</p>
                <p className="text-sm text-gray-600">Total Returns</p>
              </div>
              <div className="text-center border-x border-gray-100">
                <p className="text-3xl font-bold text-gray-900">18.5%</p>
                <p className="text-sm text-gray-600">Annual Average</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">52%</p>
                <p className="text-sm text-gray-600">Above Market</p>
              </div>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                number: "4.9/5",
                label: "Average Review Score",
                icon: <Star className="w-6 h-6" />,
              },
              {
                number: "99.9%",
                label: "Uptime Guarantee",
                icon: <ShieldCheck className="w-6 h-6" />,
              },

              {
                number: "98%",
                label: "Client Satisfaction",
                icon: <TrendingUp className="w-6 h-6" />,
              },
              {
                number: "A+",
                label: "Security Rating",
                icon: <Shield className="w-6 h-6" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`text-${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats badge */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span
                    className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
                  >
                    {feature.stats}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Investment Journey?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join Crown Bankers today and watch your wealth grow
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started Now
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default BusinessPlanSec3;
