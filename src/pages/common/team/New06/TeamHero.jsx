import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  Quote,
  Linkedin,
  Twitter,
  Mail,
  Zap,
  Heart,
  Shield,
  TrendingUp,
  Building,
  Sun,
} from "lucide-react";

const TeamHero = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("leadership");
  const [hoveredMember, setHoveredMember] = useState(null);

  // Updated team members data with Crown Bankers actual team
  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Adrian Cadiz",
        role: "Chief Executive Officer",
        image:
          "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747138673/C7729T01.JPG_r3xnsb.jpg",
        bio: "With nearly two decades of experience in marketing, business operations, and strategic growth, Adrian Cadiz leads Crown Bankers as CEO. His expertise extends to the renewable energy sector, where he has played a key role in integrating financial solutions with solar and EV projects.",
        expertise: [
          "Strategic Growth",
          "Renewable Energy",
          "Business Operations",
        ],
        linkedin: "#",
        twitter: "#",
        email: "a.cadiz@crownbankers.com",
      },
      {
        id: 2,
        name: "Sophie Taylor",
        role: "Chief Financial Officer",
        image:
          "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747139401/image_1_ngqt9q.png",
        bio: "Sophie Taylor and her team handle the financial strategies at Crown Bankers, making critical decisions on investments and resource allocation. Her expertise ensures sustainable financial growth and stability.",
        expertise: [
          "Financial Strategy",
          "Investment Planning",
          "Resource Allocation",
        ],
        linkedin: "#",
        twitter: "#",
        email: "s.taylor@crownbankers.com",
      },
      {
        id: 3,
        name: "Edward Barrington",
        role: "Chief Marketing Officer",
        image:
          "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747139113/vlcsnap-2025-05-08-17h49m49s722_ybycs6.png",
        bio: "As the Chief Marketing Officer, Edward Barrington oversees all marketing initiatives at Crown Bankers. His expertise in brand development and market expansion plays a crucial role in growing the company's global presence.",
        expertise: [
          "Brand Development",
          "Market Expansion",
          "Global Marketing",
        ],
        linkedin: "#",
        twitter: "#",
        email: "e.barrington@crownbankers.com",
      },
    ],
    operations: [
      {
        id: 4,
        name: "Joseph Carter",
        role: "Director of Operations",
        image:
          "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747139464/vlcsnap-2025-05-08-17h21m08s792_nicu3m.png",
        bio: "Joseph Carter leads the administrative division, handling user inquiries and ensuring smooth internal operations. His dedication to efficiency and customer support enhances the overall experience for Crown Bankers members.",
        expertise: [
          "Operations Management",
          "Customer Support",
          "Process Efficiency",
        ],
        linkedin: "#",
        twitter: "#",
        email: "j.carter@crownbankers.com",
      },
      {
        id: 5,
        name: "Anee Sandrova",
        role: "Relationship Manager",
        image:
          "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747139233/image_nyfo12.png",
        bio: "Anee Sandrova manages relations and operations in the Netherlands, particularly overseeing the Crown Bankers solar plant in Groningen. Her role ensures seamless coordination and development of our renewable energy projects.",
        expertise: [
          "Renewable Energy",
          "Netherlands Operations",
          "Solar Projects",
        ],
        linkedin: "#",
        twitter: "#",
        email: "a.sandrova@crownbankers.com",
      },
    ],
  };

  const departments = [
    { id: "leadership", name: "Executive Leadership", icon: Users },
    { id: "operations", name: "Operations & Management", icon: Building },
  ];

  const currentTeam = teamMembers[selectedDepartment];

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "Pioneering sustainable finance",
    },
    {
      icon: Sun,
      title: "Green Banking",
      description: "Finance meets renewable energy",
    },
    {
      icon: Heart,
      title: "Member Focused",
      description: "Your success is our mission",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Protected at every level",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Hero Header */}
        <motion.div
          className="text-center mt-24 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of finance through innovation and sustainable
            energy integration
          </p>
        </motion.div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all ${
                selectedDepartment === dept.id
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{
                scale: selectedDepartment === dept.id ? 1.05 : 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <dept.icon className="w-5 h-5" />
              <span>{dept.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Team Grid - New Card Style */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDepartment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {currentTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Profile Section */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="relative"
                      animate={{
                        scale: hoveredMember === member.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-2xl object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                    {member.bio}
                  </p>

                  {/* Expertise Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-xs font-medium text-gray-700 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Contact Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </a>

                    <div className="flex gap-2">
                      <motion.a
                        href={member.linkedin}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                      </motion.a>
                      <motion.a
                        href={member.twitter}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Crown Bankers Unique Section - Solar & Finance Integration */}
        <div className="mt-32 mb-20">
          <div className="relative bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-200/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Where Finance Meets
                  <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Renewable Energy
                  </span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Under Adrian Cadiz's visionary leadership, Crown Bankers has
                  pioneered the integration of financial services with renewable
                  energy projects, including our flagship solar plant in
                  Groningen, Netherlands.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Sun className="w-6 h-6 text-yellow-500" />
                    <span className="text-slate-700">
                      Solar Energy Integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-blue-500" />
                    <span className="text-slate-700">EV Project Financing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-green-500" />
                    <span className="text-slate-700">
                      Sustainable Infrastructure
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=600&fit=crop"
                    alt="Solar panels"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-xl">
                      Groningen Solar Plant
                    </p>
                    <p className="text-white/80">Managed by Anee Sandrova</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl p-8 text-center border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-green-200 mx-auto mb-8" />
            <blockquote className="text-2xl lg:text-3xl text-slate-700 font-light italic mb-8 leading-relaxed">
              "At Crown Bankers, we're not just building a financial
              institution—we're creating a sustainable ecosystem where banking
              excellence meets environmental responsibility. Every solar panel
              we finance, every EV project we support, brings us closer to a
              greener tomorrow."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                alt="Adrian Cadiz"
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
              <div className="text-left">
                <p className="font-bold text-slate-900">Adrian Cadiz</p>
                <p className="text-slate-600">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            From our headquarters to the Netherlands and beyond, Crown Bankers
            is making sustainable finance accessible worldwide
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                45+ Countries
              </h3>
              <p className="text-slate-600">
                Serving members across continents with innovative financial
                solutions
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
              <Sun className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Groningen Solar Plant
              </h3>
              <p className="text-slate-600">
                Our flagship renewable energy project in the Netherlands
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Sustainable Growth
              </h3>
              <p className="text-slate-600">
                Balancing profitability with environmental responsibility
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        {/* <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Connect With Our Leadership
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Have questions about our vision or want to explore partnership opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:leadership@crownbankers.com"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Leadership</span>
            </a>
            <a
              href="mailto:careers@crownbankers.com"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              <Briefcase className="w-5 h-5" />
              <span>Join Our Team</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeamHero;
