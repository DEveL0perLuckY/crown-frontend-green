import { useState } from "react";
import {
  Download,
  Search,
  Globe,
  FileText,
  CheckCircle,
  Mail,
  User,
  MessageSquare,
  Languages,
  ArrowRight,
} from "lucide-react";

const PDFDownloads06 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Document information
  const documentTitle = "Company Brochure 2025";
  const documentDescription =
    "Download our company brochure (currently available in English only).";

  // Multiple language options
  const languages = [
    { code: "en", name: "English", url: "/crown_bankers.pdf", available: true },
    {
      code: "es",
      name: "Spanish",
      url: "/crown_bankers.pdf",
      available: false,
    },
    { code: "fr", name: "French", url: "/crown_bankers.pdf", available: false },
    { code: "de", name: "German", url: "/crown_bankers.pdf", available: false },
    {
      code: "it",
      name: "Italian",
      url: "/crown_bankers.pdf",
      available: false,
    },
    {
      code: "pt",
      name: "Portuguese",
      url: "/crown_bankers.pdf",
      available: false,
    },
    {
      code: "zh",
      name: "Chinese",
      url: "/crown_bankers.pdf",
      available: false,
    },
    {
      code: "ja",
      name: "Japanese",
      url: "/crown_bankers.pdf",
      available: false,
    },
    { code: "ko", name: "Korean", url: "/crown_bankers.pdf", available: false },
    { code: "hi", name: "Hindi", url: "/crown_bankers.pdf", available: false },
    { code: "ar", name: "Arabic", url: "/crown_bankers.pdf", available: false },
    {
      code: "ru",
      name: "Russian",
      url: "/crown_bankers.pdf",
      available: false,
    },
    {
      code: "tr",
      name: "Turkish",
      url: "/crown_bankers.pdf",
      available: false,
    },
    { code: "nl", name: "Dutch", url: "/crown_bankers.pdf", available: false },
    {
      code: "sv",
      name: "Swedish",
      url: "/crown_bankers.pdf",
      available: false,
    },
  ];

  // Filter languages based on search term
  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    language: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      language: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleLanguageClick = (lang) => {
    if (lang.available) {
      window.open(lang.url, "_blank");
    } else {
      setSelectedLanguage(lang);
      setFormData((prev) => ({
        ...prev,
        language: lang.name,
      }));
      // Scroll to form
      document
        .getElementById("request-form")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://www.lrsoutputmanagement.com/resources/a31f5597-23fa-4ff5-89ed-628cacaab9c8/lrs-output-management-document-process-automation-banner.jpg')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60"></div>
        </div>
        
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <FileText className="w-10 h-10" />
            </div> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Document Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive company documentation in multiple
              languages
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search available languages..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Document Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 lg:p-12">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {documentTitle}
                  </h2>
                  <p className="text-gray-600">{documentDescription}</p>
                </div>
                <div className="hidden sm:block">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FileText className="w-4 h-4" />
                    <span>PDF Format</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center mb-6">
                  <Languages className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Select Your Language
                  </h3>
                </div>

                {filteredLanguages.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageClick(lang)}
                        className={`
                          relative group p-4 rounded-xl transition-all duration-200
                          ${
                            lang.available
                              ? "bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200"
                              : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                          }
                        `}
                      >
                        <div className="text-center">
                          <p
                            className={`font-semibold ${
                              lang.available ? "text-gray-900" : "text-gray-500"
                            }`}
                          >
                            {lang.name}
                          </p>
                          {lang.available ? (
                            <Download className="w-4 h-4 mx-auto mt-2 text-emerald-600" />
                          ) : (
                            <span className="text-xs text-gray-400 mt-1 block">
                              Coming soon
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">
                      No languages match your search.
                    </p>
                    <button
                      className="text-blue-600 hover:text-blue-700 font-medium"
                      onClick={() => setSearchTerm("")}
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                      alt="Professional documents and translations"
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          15+ Languages
                        </p>
                        <p className="text-sm text-gray-600">
                          Growing language support
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Professional Quality
                        </p>
                        <p className="text-sm text-gray-600">
                          Native speaker translations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Quick Delivery
                        </p>
                        <p className="text-sm text-gray-600">
                          2-3 business days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Request Translation
                </h2>
                <p className="text-lg text-gray-600">
                  Need our documentation in a language that's not currently
                  available? Submit a request and we'll prepare it for you.
                </p>
              </div>

              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">
                      Request submitted successfully!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll process your request within 2-3 business days.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Lucky Mourya"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Requested Language
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="language"
                      required
                      value={formData.language}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., Spanish, French, German"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Information
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Any specific requirements or deadlines?"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full sm:w-auto px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center
                    ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    }
                  `}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <p className="text-gray-600">Languages Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <p className="text-gray-600">Downloads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer CTA */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Documentation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to assist you with any questions about our documents or translation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              View FAQ
            </button>
          </div>
        </div>
      </section> */}

      <style jsx>{`
        .bg-grid-white\/0.05 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255, 255, 255, 0.05)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default PDFDownloads06;
