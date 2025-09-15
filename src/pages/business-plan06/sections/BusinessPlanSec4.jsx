import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  TrendingUp, 
  Leaf,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const BusinessPlanSec4 = () => {
  return (
    <section className="py-20 bg-white" id="solar-energy">
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
            <Sun className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium uppercase tracking-wide text-sm">
              Solar Energy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Invest in the Future of Solar Energy
          </h2>
          <p className="text-xl text-gray-600">with Crown Bankers</p>
        </motion.div>

        {/* First Section with Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000" 
              alt="Solar panels at sunset"
              className="rounded-lg shadow-lg w-full"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">Solar panels at sunset</p>
          </div>
          
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The sun shines bright, not only in the sky but also in the world of renewable energy. 
              Solar panel technology is experiencing a surge in demand, driven by growing environmental 
              concerns and the increasing affordability of solar installations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At our company, we believe in the power of the sun and are here to help you capitalize 
              on this exciting opportunity by investing in the future of solar energy.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">$1.3T</h4>
                <p className="text-gray-600">Market Size by 2027</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <Leaf className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">Clean</h4>
                <p className="text-gray-600">Renewable Energy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Section with Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Solar? A Brighter Tomorrow Starts Here
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Solar energy is a clean, renewable resource with immense potential to power our homes, 
              businesses, and entire communities. As the world transitions towards a more sustainable 
              future, the demand for solar energy is expected to skyrocket.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The global solar energy market is projected to reach a staggering $1.3 trillion by 2027 
              <span className="text-sm text-gray-500"> [Source: Grand View Research]</span>. By investing 
              in solar panel technology, you're not just investing in a company; you're investing in a 
              cleaner, more sustainable future for generations to come.
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-3">
              {[
                "Sustainable investment with long-term growth potential",
                "Government incentives and tax benefits",
                "Contribute to environmental conservation",
                "Diversify your investment portfolio"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="https://i.pinimg.com/736x/b5/99/5a/b5995ac6f2359cfc8655fc69bf26eaa9.jpg" 
              alt="Solar panels with sunset"
              className="rounded-lg object-cover shadow-lg w-full h-96"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">Solar panels with sunset</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Invest in Solar Energy?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Crown Bankers in building a sustainable future while growing your wealth
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default BusinessPlanSec4;