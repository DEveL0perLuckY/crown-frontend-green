import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  CheckCircle,
  FileCheck,
  Globe,
  Building2,
  ExternalLink,
  Award,
  Lock,
  Gift,
  DollarSign,
  Clock,
  Star,
  FileText,
  Scale,
  BadgeCheck,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LegalCompliance06 = () => {
  const sectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const statsRef = useRef([]);
  const featuresRef = useRef(null);
  const mainCardRef = useRef(null);
  const certificatesRef = useRef(null);
  const mapSectionRef = useRef(null);
  const termsRef = useRef(null);
  const complianceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        heroTextRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );

      // Stats counter animation
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(
          stat,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5 + index * 0.1,
            ease: "power2.out",
          }
        );

        const numberElement = stat.querySelector(".stat-number");
        if (numberElement) {
          const endValue = parseInt(numberElement.getAttribute("data-value"));
          gsap.to(numberElement, {
            textContent: endValue,
            duration: 2,
            delay: 0.5,
            snap: { textContent: 1 },
            ease: "power1.inOut",
          });
        }
      });

      // Features cards animation
      if (featuresRef.current) {
        const features = featuresRef.current.children;
        gsap.fromTo(
          features,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Main card animation
      gsap.fromTo(
        mainCardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: "top 80%",
          },
        }
      );

      // Certificates animation
      if (certificatesRef.current) {
        const certs = certificatesRef.current.children;
        gsap.fromTo(
          certs,
          { opacity: 0, x: (index) => (index === 0 ? -50 : 50) },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: certificatesRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Terms animation
      if (termsRef.current) {
        const terms = termsRef.current.children;
        gsap.fromTo(
          terms,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: termsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Map section animation
      gsap.fromTo(
        mapSectionRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapSectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate map pins
      const mapPins = document.querySelectorAll(".map-pin");
      gsap.fromTo(
        mapPins,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mapSectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description:
        "Adherence to international financial regulations and standards",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Jurisdictional",
      description: "Licensed operations in United Kingdom and New Zealand",
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Verified Registration",
      description: "Government-authenticated corporate documentation",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection",
      description: "GDPR compliant with enterprise-grade security protocols",
    },
  ];

  const operationalTerms = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Return Processing",
      description:
        "Returns processed Monday through Friday with monthly withdrawal options",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fee Structure",
      description:
        "Transparent fee schedule: 3-7% on returns, commission withdrawals exempt",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Partnership Benefits",
      description:
        "Direct referral commissions up to 9% with binary bonus structure",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Achievement Tiers",
      description:
        "Progressive recognition system from Sunstone through Celestial levels",
    },
  ];

  const complianceHighlights = [
    {
      title: "Anti-Money Laundering (AML)",
      description:
        "Comprehensive AML policies in accordance with FATF recommendations",
    },
    {
      title: "Know Your Customer (KYC)",
      description:
        "Rigorous identity verification procedures for all account holders",
    },
    {
      title: "Financial Conduct",
      description: "Operations aligned with FCA and FSPR regulatory frameworks",
    },
    {
      title: "Audit & Reporting",
      description:
        "Regular third-party audits and transparent financial reporting",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Header Section */}
      <section className="relative mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div ref={heroTextRef} className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Regulated Financial Institution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Regulatory <span className="font-semibold">Compliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Operating under full regulatory authorization in the United
              Kingdom and New Zealand
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
            {[
              { number: "2", label: "Licensed Jurisdictions", suffix: "" },
              { number: "100", label: "Regulatory Compliance", suffix: "%" },
              { number: "2019", label: "Year Established", suffix: "" },
              { number: "24", label: "Compliance Monitoring", suffix: "/7" },
            ].map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                  <span className="stat-number" data-value={stat.number}>
                    0
                  </span>
                  <span className="text-green-600 font-normal">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <div
          ref={mainCardRef}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Corporate Registration</h3>
                <p className="text-gray-300 mt-1">
                  CROWNQUEST ASSET MANAGEMENT LIMITED
                </p>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 mb-10">
              <p className="leading-relaxed">
                Crown Bankers operates with full regulatory compliance across
                multiple jurisdictions. Our corporate entity, CROWNQUEST ASSET
                MANAGEMENT LIMITED, maintains active registrations with
                governmental authorities in both the United Kingdom and New
                Zealand, ensuring adherence to international financial
                regulations and best practices.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
              <div className="flex gap-3">
                <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Legal Entity Disclosure
                  </h4>
                  <p className="text-gray-700">
                    Official documentation is issued under "CROWNQUEST ASSET
                    MANAGEMENT LIMITED" in compliance with regulatory
                    requirements. This entity operates commercially as Crown
                    Bankers across all jurisdictions.
                  </p>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div
              ref={certificatesRef}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              {/* UK Certificate */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://crownbankers.com/assets/img/th-1/uk.png"
                      alt="United Kingdom"
                      className="w-16 h-10 rounded shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        United Kingdom
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Companies House Registration
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Registration Number:</span>
                    <span className="font-medium text-gray-900">11892829</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Incorporation Date:</span>
                    <span className="font-medium text-gray-900">
                      March 2019
                    </span>
                  </div>
                </div>
                <a
                  href="/assets/img/th-1/Certificate of Incorporation.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full"
                >
                  <FileCheck className="w-5 h-5" />
                  Download Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* NZ Certificate */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://crownbankers.com/assets/img/th-1/new-zealand.png"
                      alt="New Zealand"
                      className="w-16 h-10 rounded shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        New Zealand
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        NZBN Registration
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">NZBN:</span>
                    <span className="font-medium text-gray-900">
                      9429049590171
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Registration Date:</span>
                    <span className="font-medium text-gray-900">
                      April 2019
                    </span>
                  </div>
                </div>
                <a
                  href="/assets/img/th-1/Certificate of Incorporation- New Zealand.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full"
                >
                  <FileCheck className="w-5 h-5" />
                  Download Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence Map Section */}
        <div
          ref={mapSectionRef}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white mb-16 overflow-hidden"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Global Regulatory Presence
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Licensed and regulated in key financial jurisdictions worldwide
            </p>
          </div>

          {/* World Map */}
          <div className="relative max-w-6xl mx-auto">
  {/* Background World Map */}
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Blank_world_map_%28green_color%29.svg"
    alt="World Map"
    className="w-full h-auto"
  />

  <svg
    viewBox="0 0 1200 600"
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
  >
    <line
      x1="587"
      y1="180"
      x2="1020"
      y2="455"
      stroke="red"
      strokeWidth="2"
      strokeDasharray="5,5"
      opacity="0.8"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="0;10"
        dur="2s"
        repeatCount="indefinite"
      />
    </line>

    <g transform="translate(587, 180)">
      <circle r="8" fill="red">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r="5" fill="white" />
    </g>

    <g transform="translate(1020, 455)">
      <circle r="8" fill="red">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r="5" fill="white" />
    </g>
  </svg>
</div>


          {/* Location Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">United Kingdom</h4>
                  <p className="text-gray-400 text-sm">European Headquarters</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400" />
                  Companies House Registration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400" />
                  FCA Compliance Standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400" />
                  GDPR Data Protection
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">New Zealand</h4>
                  <p className="text-gray-400 text-sm">
                    Asia-Pacific Operations
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  NZBN Registration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  FSPR Compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Privacy Act Compliance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Framework Section */}
        <div ref={complianceRef} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive compliance program ensures adherence to
              international financial regulations and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {complianceHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Terms */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Operational Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent terms and conditions governing our financial services
            </p>
          </div>

          <div
            ref={termsRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {operationalTerms.map((term, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center text-green-700 mb-5 group-hover:scale-110 transition-transform">
                  {term.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {term.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div
          ref={featuresRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center text-green-700 mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Verify Our Credentials
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Download our official registration certificates or verify our status
            directly with government regulatory bodies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/assets/img/th-1/Certificate of Incorporation.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FileCheck className="w-6 h-6" />
              Download Certificates
            </a>
            <a
              href="https://beta.companieshouse.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
            >
              <ExternalLink className="w-6 h-6" />
              Verify Registration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalCompliance06;
