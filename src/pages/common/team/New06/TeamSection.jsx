import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Mail,
  ChevronLeft,
  ChevronRight,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  TrendingUp,
  Users,
  Target,
  Brain,
  Zap,
  Sun,
  Building,
} from "lucide-react";

const TeamSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("leadership");
  const [currentPage, setCurrentPage] = useState(0);

  // Updated team members data with Crown Bankers actual team
  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Adrian Cadiz",
        role: "Chief Executive Officer",
        image:
          "https://res.cloudinary.com/dcqnkr06e/image/upload/v1747138673/C7729T01.JPG_r3xnsb.jpg",
        bio: "With nearly two decades of experience in marketing, business operations, and strategic growth, Adrian Cadiz leads Crown Bankers as CEO. His expertise extends to the renewable energy sector, where he has played a key role in integrating financial solutions with solar and EV projects. Under his leadership, Crown Bankers continues to drive innovation, efficiency, and expansion across all operations.",
        expertise: [
          "Strategic Growth",
          "Renewable Energy",
          "Business Operations",
          "Solar & EV Integration",
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
          "Financial Growth",
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
          "Strategic Communications",
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
          "Team Leadership",
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
          "Stakeholder Relations",
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
  const itemsPerPage = 3;
  const totalPages = Math.ceil(currentTeam.length / itemsPerPage);
  const displayedMembers = currentTeam.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Leadership Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leaders driving innovation in financial services and
            renewable energy integration
          </p>
        </motion.div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              onClick={() => {
                setSelectedDepartment(dept.id);
                setCurrentPage(0);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedDepartment === dept.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <dept.icon className="w-5 h-5" />
              <span>{dept.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Team Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDepartment + currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          >
            {displayedMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-blue-300 font-medium">{member.role}</p>
                    </div>

                    {/* Social Links Overlay */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <motion.a
                        href={member.linkedin}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-4 h-4 text-gray-700" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="w-4 h-4 text-gray-700" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-xs rounded-full border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Key Focus Areas */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Key Focus Areas
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: Sun,
                value: "Solar Energy",
                label: "Renewable Integration",
              },
              {
                icon: Zap,
                value: "EV Solutions",
                label: "Electric Vehicle Finance",
              },
              {
                icon: Globe,
                value: "Global Reach",
                label: "International Operations",
              },
              {
                icon: TrendingUp,
                value: "Innovation",
                label: "Financial Technology",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values & Mission
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation in Finance",
                description:
                  "Integrating cutting-edge technology with traditional banking to create sustainable financial solutions.",
                color: "blue",
              },
              {
                icon: Sun,
                title: "Renewable Energy Focus",
                description:
                  "Leading the way in financing solar and EV projects, contributing to a sustainable future.",
                color: "green",
              },
              {
                icon: Users,
                title: "Client-First Approach",
                description:
                  "Dedicated to providing exceptional service and creating value for every Crown Bankers member.",
                color: "purple",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`inline-flex p-3 bg-${value.color}-100 rounded-lg mb-4`}
                >
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
