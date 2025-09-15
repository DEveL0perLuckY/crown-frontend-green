import { motion } from "framer-motion";
import { CheckCircle, Shield, Star } from "lucide-react";

const BusinessPlanSec9 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Terms & <span className="text-green-600">Benefits</span></h2>
          <p className="text-lg text-gray-600">Everything you need to know before getting started</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Terms Card */}
          <motion.div 
            className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-7 h-7 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Terms</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> ROI credited <b>Mon–Fri</b></li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Referral & binary withdrawals available <b>24/7</b></li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Monthly ROI withdrawals allowed <b>up to 5 times</b></li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Withdrawals approved & paid within <b>0–8 hours</b></li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> ROI withdrawal charges <b>3%–7%</b></li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Binary capping limit <b>$1,000 – $7,000</b></li>
            </ul>
          </motion.div>

          {/* Benefits Card */}
          <motion.div 
            className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Star className="w-7 h-7 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> 24/7 unlimited access to live support</li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Zero withdrawal charges on referral & binary incomes</li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Referral earnings credited instantly</li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Referral rewards up to <b>9%</b></li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Binary bonus <b>10%</b> on the weaker leg</li>
              <li><CheckCircle className="inline w-5 h-5 text-green-500 mr-2" /> Progress from <b>Sunstone</b> to <b>Celestial</b> in Crown rewards</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlanSec9;
