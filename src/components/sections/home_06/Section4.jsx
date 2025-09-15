import { ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import ceoImg from "/src/assets/teamImg/ceo.png";
import cfoImg from "/src/assets/teamImg/cfo.png";
import cmoImg from "/src/assets/teamImg/cmo.png";
import dopImg from "/src/assets/teamImg/dop.png";
import rmImg from "/src/assets/teamImg/rm.png";


// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Adrian Cadiz",
    position: "Chief Executive Officer",
    image: ceoImg,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sophie Taylor",
    position: "Chief Financial Officer",
    image: cfoImg,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Edward Barrington",
    position: "Chief Marketing Officer",
    image: cmoImg,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Joseph Carter",
    position: "Director of Operations",
    image: dopImg,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Anee Sandrova",
    position: "Relationship Manager",
    image: rmImg,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];


function Section4() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Team carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !w-2 !h-2 !bg-gray-400 !opacity-50 !mx-1",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-gray-800 !opacity-100",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="!pb-12"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="relative">
                    {/* Position label */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-black/20 text-white px-3 py-1 rounded text-sm font-medium">
                        {member.position}
                      </span>
                    </div>

                    {/* Team member image */}
                    <div className="relative overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-[80vh] object-cover"
                      />

                      {/* Bottom overlay with name and social icons */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <h3 className="text-white text-xl font-semibold mb-3">
                          {member.name}
                        </h3>

                        {/* Social media icons */}
                        <div className="flex gap-3">
                          <a
                            href={member.socialLinks.facebook}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Facebook className="w-4 h-4 text-white" />
                          </a>
                          <a
                            href={member.socialLinks.twitter}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Twitter className="w-4 h-4 text-white" />
                          </a>
                          <a
                            href={member.socialLinks.linkedin}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Linkedin className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Our Team button */}
            <div className="flex justify-start">
              <button
                // variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-medium bg-transparent"
              >
                Our Team
              </button>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Building Wealth Through Strategic Investments
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                We specialize in creating tailored investment strategies that
                maximize growth, minimize risk, and help you achieve long-term
                financial success.
              </p>
            </div>

            {/* All Team button */}
            <div className="pt-4">
              <Link to="/team">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 group">
                  All Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
