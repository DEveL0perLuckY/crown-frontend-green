import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Gift, 
  DollarSign, 
  TrendingUp,
  Gem,
  Flame,
  Sun,
  Star,
  Zap,
  Sunrise,
  CloudSnow,
  Moon,
  Sparkles,
  Crown,
  Castle
} from 'lucide-react';

const BusinessPlanSec8 = () => {
  const rankIcons = {
    'Sunstone': <Gem className="w-5 h-5" />,
    'Solar Flare': <Flame className="w-5 h-5" />,
    'Radiant': <Sun className="w-5 h-5" />,
    'Luminous': <Star className="w-5 h-5" />,
    'Photon': <Zap className="w-5 h-5" />,
    'Helios': <Sunrise className="w-5 h-5" />,
    'Aurora': <CloudSnow className="w-5 h-5" />,
    'Eclipse': <Moon className="w-5 h-5" />,
    'Nova': <Sparkles className="w-5 h-5" />,
    'Solaris': <Crown className="w-5 h-5" />,
    'Celestial': <Castle className="w-5 h-5" />
  };

  const rankData = [
    { rank: 'Sunstone', gift: 'Apple Gift Card of $100', cash: '$100', business: '$10,000' },
    { rank: 'Solar Flare', gift: 'Premium Smartwatch', cash: '$500', business: '$50,000' },
    { rank: 'Radiant', gift: 'High-End Headphones', cash: '$1,000', business: '$100,000' },
    { rank: 'Luminous', gift: 'High-Performance Laptop', cash: '$2,500', business: '$250,000' },
    { rank: 'Photon', gift: 'Luxury Watch', cash: '$5,000', business: '$500,000' },
    { rank: 'Helios', gift: 'High-End Home Theater System', cash: '$10,000', business: '$1,000,000' },
    { rank: 'Aurora', gift: 'Custom High-End Gaming PC', cash: '$20,000', business: '$2,000,000' },
    { rank: 'Eclipse', gift: 'Luxury Vacation Package', cash: '$40,000', business: '$4,000,000' },
    { rank: 'Nova', gift: 'Premium Electric Vehicle', cash: '$80,000', business: '$8,000,000' },
    { rank: 'Solaris', gift: 'Yacht', cash: '$160,000', business: '$16,000,000' },
    { rank: 'Celestial', gift: 'Luxury Property', cash: '$320,000', business: '$32,000,000' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
            Achievement Rank Benefits
          </h2>
          <p className="text-lg text-gray-600">
            Progress through ranks and unlock exclusive rewards
          </p>
        </motion.div>

        {/* Classic Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white border border-gray-200">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-6 py-4 text-left font-semibold">RANK</th>
                <th className="px-6 py-4 text-left font-semibold">GIFT</th>
                <th className="px-6 py-4 text-right font-semibold">CASH</th>
                <th className="px-6 py-4 text-right font-semibold">BUSINESS ON BOTH SIDES</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {rankData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">
                        {rankIcons[item.rank]}
                      </div>
                      <span className="font-semibold text-gray-900">{item.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{item.gift}</td>
                  <td className="px-6 py-4 text-right font-semibold text-green-600">{item.cash}</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">{item.business}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-1">11 Achievement Levels</h3>
            <p className="text-gray-600">From Sunstone to Celestial</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <Gift className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-1">Premium Rewards</h3>
            <p className="text-gray-600">Valuable gifts at each level</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-1">Cash Bonuses</h3>
            <p className="text-gray-600">Up to $320,000 in rewards</p>
          </div>
        </motion.div>

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How to Qualify</h4>
              <p className="text-gray-700">
                Achieve the required business volume on both sides of your organization to unlock each rank. 
                Rewards are cumulative and delivered upon qualification.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessPlanSec8;