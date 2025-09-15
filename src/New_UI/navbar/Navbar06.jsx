import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar06 = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState([]);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      hasDropdown: false,
      url: "/",
    },
    {
      name: "About Us",
      hasDropdown: true,
      dropdownItems: [
        { name: "Team", url: "/team" },
        { name: "Business Plan", url: "/business-plan" },
        { name: "Legal", url: "/legal" },
      ],
    },
    {
      name: "Services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Service", url: "/service" },
        { name: "Service Details", url: "/services-details" },
      ],
    },
    {
      name: "Reports",
      hasDropdown: true,
      dropdownItems: [
        { name: "Trade View", url: "/trade-view" },
        { name: "Solar Purchase Document", url: "/solar-purchase-document" },
      ],
    },
    {
      name: "PDF Downloads",
      hasDropdown: false,
      url: "/pdf-downloads",
    },
    {
      name: "Contact Us",
      hasDropdown: false,
      url: "/contact",
    },
  ];

  // Set active item based on current URL
  useEffect(() => {
    const currentPath = location.pathname;

    navItems.forEach((item) => {
      if (item.url === currentPath) {
        setActiveItem(item.name);
      } else if (item.hasDropdown) {
        item.dropdownItems.forEach((dropdownItem) => {
          if (dropdownItem.url === currentPath) {
            setActiveItem(item.name);
          }
        });
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Close mobile menu when switching to desktop
      if (!mobile && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  // GSAP animations for mobile sidebar
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);

    // Animate overlay
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      onStart: () => {
        overlayRef.current.style.display = "block";
      },
    });

    // Animate sidebar
    gsap.to(sidebarRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    // Animate menu items
    gsap.fromTo(
      menuItemsRef.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        delay: 0.2,
        ease: "power3.out",
      }
    );

    // Prevent body scroll
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    // Animate menu items out
    gsap.to(menuItemsRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      ease: "power3.in",
    });

    // Animate sidebar out
    gsap.to(sidebarRef.current, {
      x: "-100%",
      duration: 0.4,
      delay: 0.1,
      ease: "power3.in",
      onComplete: () => {
        setIsMobileMenuOpen(false);
        setMobileExpandedItems([]);
      },
    });

    // Animate overlay out
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      ease: "power2.in",
      onComplete: () => {
        overlayRef.current.style.display = "none";
      },
    });

    // Enable body scroll
    document.body.style.overflow = "unset";
  };

  const handleItemClick = (item) => {
    if (!item.hasDropdown) {
      setActiveItem(item.name);
      if (isMobile) {
        closeMobileMenu();
      }
      setActiveDropdown(null);
    }
  };

  const handleDropdownToggle = (e, itemName) => {
    e.preventDefault();
    e.stopPropagation();

    if (isMobile) {
      setMobileExpandedItems((prev) =>
        prev.includes(itemName)
          ? prev.filter((item) => item !== itemName)
          : [...prev, itemName]
      );
    } else {
      setActiveDropdown(activeDropdown === itemName ? null : itemName);
    }
  };

  const handleDropdownItemClick = (parentItem) => {
    setActiveItem(parentItem.name);
    setActiveDropdown(null);
    if (isMobile) {
      closeMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const isActiveParent = (item) => {
    if (location.pathname === item.url) return true;
    if (item.hasDropdown) {
      return item.dropdownItems.some(
        (dropdownItem) => location.pathname === dropdownItem.url
      );
    }
    return false;
  };

  return (
    <>
      <motion.div
        className="navbar-container bg-white/95 backdrop-blur-md rounded-3xl px-4 md:px-6 py-4 max-w-7xl 
        mx-auto fixed top-4 left-4 right-4 z-50 shadow-xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center bg-transparent">
            <motion.img
              src="/assets/logo1.png"
              alt="logo1"
              className="h-10 md:h-12 lg:h-14 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.ul
              className="flex items-center space-x-2 lg:space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  className="relative dropdown-container"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.4 }}
                >
                  {item.hasDropdown ? (
                    <>
                      <div
                        className={`relative font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 inline-flex items-center gap-1 cursor-pointer ${
                          isActiveParent(item)
                            ? "text-green-700 font-bold"
                            : "text-gray-700 hover:text-green-700"
                        }`}
                      >
                        <motion.span
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          {item.name}
                        </motion.span>
                        <motion.button
                          onClick={(e) => handleDropdownToggle(e, item.name)}
                          className="ml-1 p-0.5"
                          animate={{
                            rotate: activeDropdown === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.button>
                        {isActiveParent(item) && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                            layoutId="activeIndicator"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.url}
                      onClick={() => handleItemClick(item)}
                      className={`relative font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 ${
                        isActiveParent(item)
                          ? "text-green-700 font-bold"
                          : "text-gray-700 hover:text-green-700"
                      }`}
                    >
                      <motion.span
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        {item.name}
                      </motion.span>
                      {isActiveParent(item) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                          layoutId="activeIndicator"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.url}
                              onClick={() => handleDropdownItemClick(item)}
                              className={`block w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                                location.pathname === dropdownItem.url
                                  ? "bg-green-50 text-green-700 font-semibold"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-green-700"
                              }`}
                            >
                              <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropdownIndex * 0.05 }}
                                whileHover={{ x: 4 }}
                                className="block"
                              >
                                {dropdownItem.name}
                              </motion.span>
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Desktop Auth Buttons */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <LoginButton />
              <Link to="/signup">
                <button className="relative cursor-pointer py-2 px-4 lg:py-3 lg:px-7 text-center font-barlow inline-flex justify-center text-sm lg:text-base uppercase text-green-600 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-green-600 focus:outline-offset-4 overflow-hidden">
                  <span className="relative z-20 font-semibold">Sign Up</span>
                  <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-[#77c279b6] rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
                </button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="relative z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            >
              <span
                className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 my-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          )}
        </nav>
      </motion.div>

      {/* Mobile Sidebar Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40 hidden"
        onClick={closeMobileMenu}
      />

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transform -translate-x-full"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/assets/logo1.png" alt="logo1" className="h-10 w-auto" />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100%-80px)]">
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className="opacity-0"
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={(e) => handleDropdownToggle(e, item.name)}
                      className={`w-full text-left px-6 py-3 font-medium transition-all duration-300 flex items-center justify-between ${
                        isActiveParent(item)
                          ? "text-green-700 bg-green-50 font-bold border-l-4 border-green-500"
                          : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileExpandedItems.includes(item.name)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Items */}
                    <AnimatePresence>
                      {mobileExpandedItems.includes(item.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gray-50"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.url}
                              onClick={() => handleDropdownItemClick(item)}
                              className={`block w-full text-left pl-12 pr-6 py-2.5 text-sm transition-all duration-200 ${
                                location.pathname === dropdownItem.url
                                  ? "text-green-700 font-semibold bg-green-100"
                                  : "text-gray-600 hover:text-green-700 hover:bg-gray-100"
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    onClick={() => handleItemClick(item)}
                    className={`block w-full text-left px-6 py-3 font-medium transition-all duration-300 ${
                      isActiveParent(item)
                        ? "text-green-700 bg-green-50 font-bold border-l-4 border-green-500"
                        : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="p-4 border-t border-gray-200">
            <div className="space-y-3">
              <LoginButton mobile />
              <Link to="/signup" className="block">
                <button className="w-full relative cursor-pointer py-3 px-7 text-center font-barlow inline-flex justify-center text-base uppercase text-green-600 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-green-600 focus:outline-offset-4 overflow-hidden">
                  <span className="relative z-20 font-semibold text-sm">
                    Sign Up
                  </span>
                  <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-[#77c279b6] rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
                  <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#16A34A] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .hamburger-line {
          @apply w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300;
        }
        
        .hamburger-line:nth-child(2) {
          @apply my-1;
        }
      `}</style> */}
    </>
  );
};

export default Navbar06;

export const LoginButton = ({ mobile }) => {
  return (
    <>
      <Link to="/login" className={mobile ? "block" : ""}>
        <button className={`button ${mobile ? "w-full" : ""}`}>
          <p>Login</p>
        </button>
      </Link>
      <style jsx>{`
        .button {
          all: unset;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0.46rem 1.75rem;
          border: #4caf50 solid 0.15em;
          border-radius: 0.25em;
          color: #16a34a;
          font-size: 0.9em;
          font-weight: 500;
          cursor: pointer;
          overflow: hidden;
          transition: border 300ms, color 300ms;
          user-select: none;
        }

        .button p {
          z-index: 1;
        }

        .button:hover {
          color: #212121;
        }

        .button:active {
          border-color: teal;
        }

        .button::after,
        .button::before {
          content: "";
          position: absolute;
          width: 9em;
          aspect-ratio: 1;
          background: #4caf50;
          opacity: 50%;
          border-radius: 50%;
          transition: transform 500ms, background 300ms;
        }

        .button::before {
          left: 0;
          transform: translateX(-8em);
        }

        .button::after {
          right: 0;
          transform: translateX(8em);
        }

        .button:hover:before {
          transform: translateX(-1em);
        }

        .button:hover:after {
          transform: translateX(1em);
        }

        .button:active:before,
        .button:active:after {
          background: teal;
        }
      `}</style>
    </>
  );
};
