import { Check, DollarSign, TrendingUp, Globe } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: <DollarSign className="w-8 h-8 " />,
    name: "Basic Plan",
    price: "$500",
    period: "/Monthly",
    description:
      "For newcomers or those looking to establish a solid foundation in finance and investments.",
    features: [
      "Comprehensive Portfolio Analysis",
      "Monthly Market Insights",
      "Access to Basic Financial Tools",
      "Investment Strategy Recommendations",
    ],
    highlight: false,
  },
  {
    icon: <TrendingUp className="w-8 h-8 " />,
    name: "Premium Plan",
    price: "$1,500",
    period: "/Monthly",
    description:
      "For those seeking personalized investment strategies with a deeper level of insight.",
    features: [
      "Personalized investment strategy",
      "Priority email and phone support",
      "Quarterly performance reviews",
      "Exclusive webinars & market updates",
    ],
    highlight: false,
  },
  {
    icon: <Globe className="w-8 h-8 " />,
    name: "Elite Plan",
    price: "$5,000",
    period: "/Monthly",
    description:
      "For high-net-worth individuals and seasoned investors, the Elite Plan offers comprehensive.",
    features: [
      "Everything in Premium Plan",
      "Advanced risk management tools",
      "Tailored portfolio management",
      "VIP support and 24/7 consultation",
    ],
    highlight: true,
  },
];

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-16 px-5 text-green-700">
      {plans.map((plan, index) => (
        <div
          key={index}
          className=" relative rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:scale-105 group
             bg-white border-gray-300 hover:bg-gradient-to-b hover:from-green-900 hover:to-green-700 hover:text-white hover:border-none"
        >
          {/* Icon circle */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  bg-white border-gray-300 group-hover:bg-green-800 group-hover:border-white group-hover:text-white"
          >
            <div
              className="hover:text-white"
            >
              {plan.icon}
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6 pt-12 pb-8 flex flex-col items-center text-center">
            {/* Plan Name */}
            <span
              className="px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-300 
                border border-green-600 text-green-700 group-hover:border-green-300 group-hover:text-green-200"
            >
              {plan.name}
            </span>

            {/* Price */}
            <div className="flex items-end mb-3">
              <h3
                className="text-4xl font-bold transition-all duration-300 
                    text-green-700 group-hover:text-white"
              >
                {plan.price}
              </h3>
              <span
                className="ml-1 transition-all duration-300 
                text-gray-600 group-hover:text-green-200"
              >
                {plan.period}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-sm mb-6 transition-all duration-300 
                  text-gray-600 group-hover:text-green-200"

            >
              {plan.description}
            </p>

            {/* Divider */}
            <div className="w-full h-px mb-6 bg-gray-300 opacity-60"></div>

            {/* Features */}
            <ul className="w-full flex flex-col gap-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 
                      bg-green-600"

                  >
                    <Check
                      className="w-4 h-4 text-white"
                    />
                  </div>
                  <span
                    className="text-sm transition-all duration-300 
                        text-gray-800 group-hover:text-white"
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold w-full transition-colors duration-300 
                bg-green-600 text-white hover:bg-green-700 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-green-600"
            >
              <span>Select Package</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
