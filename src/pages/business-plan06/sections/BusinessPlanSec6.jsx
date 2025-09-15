import React, { useState } from "react";
import {
  Zap,
  TrendingUp,
  Shield,
  Users,
  Calendar,
  DollarSign,
  Leaf,
  Sun,
  Battery,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessPlanSec6 = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const packages = [
    {
      id: 0,
      name: "Solar Starter",
      subtitle: "Perfect for beginners",
      minAmount: "$25",
      maxAmount: "$2,499",
      dailyYield: "1.5% – 1.8%",
      duration: "150 days",
      totalOutput: "225% – 270%",
      referralBoost: "7%",
      binaryPowerSurge: "10%",
      powerCapacity: "$1,000",
      renewablePrinciple: "50%",
      color: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      icon: Sun,
      popular: false,
      features: [
        "Entry-level solar investment",
        "Daily energy dividends",
        "Sustainable growth model",
        "Green portfolio starter",
      ],
    },
    {
      id: 1,
      name: "Power Growth",
      subtitle: "Most popular choice",
      minAmount: "$2,500",
      maxAmount: "$19,999",
      dailyYield: "1.8% – 2.1%",
      duration: "140 days",
      totalOutput: "252% – 294%",
      referralBoost: "8%",
      binaryPowerSurge: "10%",
      powerCapacity: "$3,500",
      renewablePrinciple: "60%",
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-300",
      icon: Battery,
      popular: true,
      features: [
        "Optimized energy returns",
        "Enhanced capacity limits",
        "Premium support access",
        "Advanced analytics dashboard",
      ],
    },
    {
      id: 2,
      name: "Elite Energy",
      subtitle: "Premium investment tier",
      minAmount: "$20,000",
      maxAmount: "$50,000",
      dailyYield: "2.1% – 2.4%",
      duration: "130 days",
      totalOutput: "273% – 312%",
      referralBoost: "9%",
      binaryPowerSurge: "10%",
      powerCapacity: "$7,000",
      renewablePrinciple: "80%",
      color: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      borderColor: "border-violet-300",
      icon: Zap,
      popular: false,
      features: [
        "Maximum energy efficiency",
        "Priority investment allocation",
        "Dedicated account manager",
        "Exclusive market insights",
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 1px, transparent 1px), radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-full px-6 py-3 mb-6">
            <Leaf className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold tracking-wide">
              Sustainable Investment Solutions
            </span>
          </div> */}

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-800 block">Investment Packages</span>
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
              and Returns
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Unlock the power of renewable energy with Crown Bankers. Explore our
            tailored investment plans designed to deliver sustainable energy
            returns while maximizing your financial growth.
          </p>

          {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full font-medium">
            <Target className="w-4 h-4" />
            <span>Invest in a cleaner, greener future with us today</span>
          </div> */}
        </div>

        {/* Investment Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                selectedPlan === index ? "scale-105 z-10" : ""
              }`}
              onClick={() => setSelectedPlan(index)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div
                className={`relative rounded-3xl p-8 border-2 transition-all duration-500 shadow-xl hover:shadow-2xl ${
                  selectedPlan === index
                    ? `${pkg.borderColor} bg-gradient-to-br ${pkg.bgGradient} shadow-2xl`
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Rotating Background Element */}
                <div className="absolute top-4 right-4 opacity-10">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-r ${pkg.color} animate-spin-slow`}
                  ></div>
                </div>

                {/* Header */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${pkg.color} shadow-lg`}
                    >
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {pkg.name}
                      </h3>
                      <p className="text-slate-600 font-medium">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Investment Range */}
                <div className="mb-6 p-4 bg-white/70 rounded-xl border border-slate-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600 font-medium">
                      Investment Range
                    </span>
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-2xl font-bold text-slate-800">
                    {pkg.minAmount} – {pkg.maxAmount}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/70 rounded-xl p-4 border border-slate-200/50">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                        Daily Yield
                      </span>
                    </div>
                    <p className="text-lg font-bold text-slate-800">
                      {pkg.dailyYield}
                    </p>
                  </div>

                  <div className="bg-white/70 rounded-xl p-4 border border-slate-200/50">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                        Duration
                      </span>
                    </div>
                    <p className="text-lg font-bold text-slate-800">
                      {pkg.duration}
                    </p>
                  </div>
                </div>

                {/* Total Output Highlight */}
                <div
                  className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${pkg.color} text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium opacity-90">
                        Total Energy Output
                      </p>
                      <p className="text-2xl font-bold">{pkg.totalOutput}</p>
                    </div>
                    <Award className="w-8 h-8 opacity-80" />
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-medium text-slate-800">Referral Boost</p>
                    <p className="text-lg font-bold text-green-600">
                      {pkg.referralBoost}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-medium text-slate-800">Power Surge</p>
                    <p className="text-lg font-bold text-purple-600">
                      {pkg.binaryPowerSurge}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-medium text-slate-800">Power Capacity</p>
                    <p className="text-lg font-bold text-blue-600">
                      {pkg.powerCapacity}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-medium text-slate-800">Renewable %</p>
                    <p className="text-lg font-bold text-emerald-600">
                      {pkg.renewablePrinciple}
                    </p>
                  </div>
                </div>

                {/* Action Button */}

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] ${
                    selectedPlan === index
                      ? `bg-gradient-to-r ${pkg.color} text-white shadow-lg hover:shadow-xl`
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>
                      {selectedPlan === index ? (
                        <Link to="/login">Selected Plan</Link>
                      ) : (
                        "Choose Plan"
                      )}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Revolutionary Orbital CTA Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Ready to Power Your Future?
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of investors who are already earning sustainable
              returns through renewable energy investments.
            </p>
          </div>

          {/* Orbital Investment Hub */}
          <div className="relative max-w-4xl mx-auto h-96 flex items-center justify-center">
            {/* Central Hub */}
            <div className="relative z-20">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 p-1 animate-spin-slow shadow-2xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-4 border-slate-100/80 shadow-inner">
                  <div className="text-center animate-reverse-spin">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">
                      Start Investing
                    </h4>
                    <p className="text-sm text-slate-600 mb-4">
                      Choose your plan
                    </p>
                    <Link to="/login">
                      <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 transform text-sm">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Investment Stats */}
            {[
              {
                icon: Users,
                text: "50K+ Investors",
                color: "from-blue-500 to-cyan-500",
                position: { x: 0, y: -160 },
              },
              {
                icon: TrendingUp,
                text: "$2B+ Invested",
                color: "from-emerald-500 to-green-500",
                position: { x: 120, y: -80 },
              },
              {
                icon: Shield,
                text: "100% Secure",
                color: "from-purple-500 to-violet-500",
                position: { x: 120, y: 80 },
              },
              {
                icon: Award,
                text: "98% Success",
                color: "from-orange-500 to-red-500",
                position: { x: 0, y: 160 },
              },
              {
                icon: Zap,
                text: "24/7 Active",
                color: "from-yellow-500 to-amber-500",
                position: { x: -120, y: 80 },
              },
              {
                icon: Leaf,
                text: "Carbon Neutral",
                color: "from-green-500 to-emerald-500",
                position: { x: -120, y: -80 },
              },
            ].map((item, index) => (
              <div
                key={index}
                className="absolute animate-float"
                style={{
                  transform: `translate(${item.position.x}px, ${item.position.y}px)`,
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: `${3 + index * 0.2}s`,
                }}
              >
                <div
                  className={`relative bg-gradient-to-r ${item.color} p-3 rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer border-2 border-white/50 backdrop-blur-sm`}
                >
                  <div className="text-center">
                    <item.icon className="w-5 h-5 text-white mx-auto mb-1 drop-shadow-sm" />
                    <p className="text-xs font-bold text-white whitespace-nowrap drop-shadow-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Rotating Action Buttons */}
            <div className="absolute inset-0">
              {/* Contact Sales Button */}
              <div
                className="absolute animate-orbit-slow"
                style={{
                  transform: "rotate(0deg) translateY(-220px) rotate(0deg)",
                  transformOrigin: "center 220px",
                }}
              >
                <button className="bg-white border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Contact Sales</span>
                  </div>
                </button>
              </div>

              {/* Compare Plans Button */}
              <div
                className="absolute animate-orbit-slow"
                style={{
                  transform:
                    "rotate(120deg) translateY(-220px) rotate(-120deg)",
                  transformOrigin: "center 220px",
                }}
              >
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Compare Plans</span>
                  </div>
                </button>
              </div>

              {/* Get Support Button */}
              <div
                className="absolute animate-orbit-slow"
                style={{
                  transform:
                    "rotate(240deg) translateY(-220px) rotate(-240deg)",
                  transformOrigin: "center 220px",
                }}
              >
                <Link to="/contact">
                  <button className="bg-white border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Get Support</span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Investment Benefits Banner */}
          <div className="mt-16 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-bold text-lg mb-1">Eco-Friendly</h4>
                <p className="text-sm text-slate-300">
                  100% renewable energy focus
                </p>
              </div>

              <div>
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-bold text-lg mb-1">Secure</h4>
                <p className="text-sm text-slate-300">
                  Bank-grade security protocols
                </p>
              </div>

              <div>
                <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-bold text-lg mb-1">Profitable</h4>
                <p className="text-sm text-slate-300">
                  Consistent daily returns
                </p>
              </div>

              <div>
                <div className="bg-orange-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h4 className="font-bold text-lg mb-1">Instant</h4>
                <p className="text-sm text-slate-300">
                  Real-time energy tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-reverse-spin {
          animation: spin 8s linear infinite reverse;
        }

        .animate-orbit-slow {
          animation: orbit-slow 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes orbit-slow {
          from {
            transform: rotate(0deg) translateY(-220px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateY(-220px) rotate(-360deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessPlanSec6;
