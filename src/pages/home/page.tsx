import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const sectorsRef = useRef(null);
  const valuesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const sectorsInView = useInView(sectorsRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add counter animation hook
  const useCounter = (end: number, duration: number = 2) => {
    const nodeRef = useRef<HTMLElement>(null);
    const inView = useInView(nodeRef, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (inView) {
        motionValue.set(end);
      }
    }, [inView, end, motionValue]);

    useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest));
      });
      return unsubscribe;
    }, [springValue]);

    return { ref: nodeRef, value: displayValue };
  };

  const stats = [
    {
      number: "40+",
      label: "Years of Excellence",
      subtext: "Since 1983",
      value: 40,
    },
    { number: "11", label: "Supermarkets", subtext: "Across UAE", value: 11 },
    {
      number: "16",
      label: "Grocery Stores",
      subtext: "Community Focused",
      value: 16,
    },
    {
      number: "9",
      label: "Restaurants",
      subtext: "Dining Excellence",
      value: 9,
    },
  ];

  const businessSectors = [
    {
      title: "Retail",
      description:
        "Premium supermarkets and grocery stores delivering quality products to communities across the UAE.",
      icon: "ri-store-2-line",
      image:
        "https://readdy.ai/api/search-image?query=Ultra%20modern%20luxury%20supermarket%20interior%20with%20sleek%20glass%20shelving%2C%20LED%20lighting%20strips%2C%20minimalist%20design%2C%20premium%20product%20displays%2C%20contemporary%20retail%20architecture%2C%20sophisticated%20shopping%20environment&width=400&height=300&seq=retail2&orientation=landscape",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Food & Beverage",
      description:
        "Exceptional dining experiences with diverse culinary offerings that celebrate both local and international flavors.",
      icon: "ri-restaurant-line",
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20fine%20dining%20restaurant%20interior%20with%20modern%20architectural%20elements%2C%20ambient%20lighting%2C%20sleek%20furniture%20design%2C%20sophisticated%20culinary%20atmosphere%2C%20minimalist%20luxury%20dining%20space&width=400&height=300&seq=fnb2&orientation=landscape",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Distribution",
      description:
        "Comprehensive supply chain solutions ensuring efficient delivery of quality products across the region.",
      icon: "ri-truck-line",
      image:
        "https://readdy.ai/api/search-image?query=Futuristic%20automated%20warehouse%20with%20robotic%20systems%2C%20modern%20logistics%20technology%2C%20clean%20industrial%20design%2C%20smart%20distribution%20center%2C%20advanced%20supply%20chain%20infrastructure&width=400&height=300&seq=dist2&orientation=landscape",
      gradient: "from-green-500 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as any,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/25"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <span
                    className="text-black font-bold text-2xl"
                    style={{ fontFamily: '"Pacifico", serif' }}
                  >
                    K
                  </span>
                </motion.div>
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              </div>
              <span
                className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
                style={{ fontFamily: '"Pacifico", serif' }}
              >
                Kmart Group
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/retail", label: "Retail" },
                { to: "/fnb", label: "F&B" },
                { to: "/distribution", label: "Distribution" },
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.to}
                    className="relative text-white hover:text-yellow-400 transition-all duration-300 cursor-pointer whitespace-nowrap group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap overflow-hidden group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </div>
            <button className="md:hidden text-white hover:text-yellow-400 transition-colors">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div className="absolute inset-0" style={{ y, opacity }}>
          <div className="absolute inset-0 ">
            <video
              className="absolute inset-0 w-full h-full object-cover "
              src="/hero bg.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                transform: `translateY(${scrollY * 0.5}px)`, // keeps the parallax movement
              }}
            ></video>
          </div>
        </motion.div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            {
              top: "20%",
              left: "10%",
              size: "w-32 h-32",
              color: "from-yellow-400/20 to-orange-500/20",
              delay: 0,
            },
            {
              top: "40%",
              right: "20%",
              size: "w-24 h-24",
              color: "from-blue-400/20 to-purple-500/20",
              delay: 1,
            },
            {
              bottom: "32%",
              left: "20%",
              size: "w-40 h-40",
              color: "from-green-400/20 to-teal-500/20",
              delay: 2,
            },
            {
              bottom: "20%",
              right: "10%",
              size: "w-28 h-28",
              color: "from-pink-400/20 to-red-500/20",
              delay: 0.5,
            },
          ].map((element, index) => (
            <motion.div
              key={index}
              className={`absolute ${element.size} bg-gradient-to-br ${element.color} rounded-full blur-xl`}
              style={{
                top: element.top,
                left: element.left,
                right: element.right,
                bottom: element.bottom,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
                Since 1983 • Premium Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Where Quality
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Meets Innovation
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl mb-6 text-transparent bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text font-light"
            >
              In Every Aisle and Every Bite!
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Elevating experiences across retail, dining, and distribution with
              cutting-edge innovation and unwavering commitment to excellence
              since 1983.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/about"
                  className="group relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Our Story
                    <motion.i
                      className="ri-arrow-right-line ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="group relative border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm hover:bg-yellow-400 hover:text-black"
                >
                  <span className="flex items-center justify-center">
                    Join Our Journey
                    <motion.i
                      className="ri-external-link-line ml-2"
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
                Our Impact
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
            >
              Four Decades of Excellence
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Building a legacy of quality, innovation, and customer
              satisfaction across the UAE
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const counter = useCounter(stat.value, 2.5);

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-black/80 border-2 border-yellow-400/40 rounded-3xl p-8 transition-all duration-500 backdrop-blur-sm shadow-2xl shadow-yellow-500/20 transform hover:scale-105">
                    {/* Default glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-3xl"></div>

                    {/* Animated border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent, rgba(255, 193, 7, 0.3), transparent)",
                        backgroundSize: "200% 200%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <div className="relative z-10 text-center">
                      <motion.div
                        ref={counter.ref}
                        className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4"
                        initial={{ scale: 0, rotateY: -180 }}
                        animate={
                          statsInView
                            ? { scale: 1, rotateY: 0 }
                            : { scale: 0, rotateY: -180 }
                        }
                        transition={{
                          delay: index * 0.2,
                          duration: 0.8,
                          type: "spring",
                          stiffness: 100,
                        }}
                      >
                        {stat.number.includes("+")
                          ? `${counter.value}+`
                          : counter.value}
                      </motion.div>
                      <motion.h3
                        className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          statsInView
                            ? { y: 0, opacity: 1 }
                            : { y: 20, opacity: 0 }
                        }
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                      >
                        {stat.label}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          statsInView
                            ? { y: 0, opacity: 1 }
                            : { y: 20, opacity: 0 }
                        }
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                      >
                        {stat.subtext}
                      </motion.p>
                    </div>

                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full"
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                    />

                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-400/30 to-transparent rounded-tr-3xl"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Business Sectors */}
      <section ref={sectorsRef} className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={sectorsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
            >
              Business Sectors
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Diversified excellence across retail, dining, and distribution,
              serving communities throughout the UAE
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={sectorsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {businessSectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-slate-800/30 to-black/30 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>

                    <motion.div
                      className="absolute top-6 left-6"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                      >
                        <i className={`${sector.icon} text-white text-2xl`}></i>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        sectorsInView
                          ? { x: 0, opacity: 1 }
                          : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      {sector.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-8 leading-relaxed"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        sectorsInView
                          ? { x: 0, opacity: 1 }
                          : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
                    >
                      {sector.description}
                    </motion.p>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        sectorsInView
                          ? { x: 0, opacity: 1 }
                          : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                    >
                      <Link
                        to={`/${sector.title
                          .toLowerCase()
                          .replace("&", "")
                          .replace(" ", "")}`}
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-all duration-300 font-semibold cursor-pointer whitespace-nowrap group-hover:translate-x-2"
                      >
                        Learn More
                        <motion.i
                          className="ri-arrow-right-line ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </Link>
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-900 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/20 to orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
                Our Foundation
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
            >
              Core Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              The principles that drive our commitment to excellence and
              innovation
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "ri-star-line",
                title: "Elevating Experiences",
                description:
                  "We continuously strive to exceed expectations, creating memorable moments for every customer interaction.",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                icon: "ri-heart-line",
                title: "Customer-Centric Excellence",
                description:
                  "Our customers are at the heart of everything we do, driving our commitment to quality and service.",
                gradient: "from-pink-500 to red-600",
              },
              {
                icon: "ri-lightbulb-line",
                title: "Continuous Innovation",
                description:
                  "We embrace change and innovation, constantly evolving to meet the dynamic needs of our communities.",
                gradient: "from-green-500 to teal-600",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/30 to-black/30 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 backdrop-blur-sm h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <i className={`${value.icon} text-white text-3xl`}></i>
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={
                        valuesInView
                          ? { y: 0, opacity: 1 }
                          : { y: 20, opacity: 0 }
                      }
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={
                        valuesInView
                          ? { y: 0, opacity: 1 }
                          : { y: 20, opacity: 0 }
                      }
                      transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-black mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Experience Excellence?
          </motion.h2>
          <motion.p
            className="text-xl text-black/80 mb-12 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join us in our journey of growth and innovation. Discover
            opportunities, partnerships, and exceptional experiences with Kmart
            Group.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group relative bg-black text-yellow-400 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get In Touch
                  <motion.i
                    className="ri-phone-line ml-2"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="group relative border-2 border-black text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-black hover:text-yellow-400"
              >
                <span className="flex items-center justify-center">
                  Learn Our Story
                  <motion.i
                    className="ri-book-open-line ml-2"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/25">
                    <span
                      className="text-black font-bold text-2xl"
                      style={{ fontFamily: '"Pacifico", serif' }}
                    >
                      K
                    </span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                </div>
                <span
                  className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Pacifico", serif' }}
                >
                  Kmart Group
                </span>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Elevating experiences across retail, dining, and distribution
                since 1983. Where quality meets convenience in every aisle and
                every bite.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: "ri-facebook-fill",
                    gradient: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: "ri-instagram-line",
                    gradient: "from-pink-500 to-purple-600",
                  },
                  {
                    icon: "ri-linkedin-fill",
                    gradient: "from-blue-600 to-blue-700",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/retail", label: "Retail" },
                  { to: "/fnb", label: "Food & Beverage" },
                  { to: "/distribution", label: "Distribution" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer flex items-center group"
                    >
                      <i className="ri-arrow-right-s-line mr-2 transition-transform group-hover:translate-x-1"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-8">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <i className="ri-map-pin-line text-yellow-400 mt-1 group-hover:scale-110 transition-transform"></i>
                  <span className="text-gray-300">
                    Umm Ramool, Rashidiya
                    <br />
                    Dubai, UAE
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <i className="ri-phone-line text-yellow-400 group-hover:scale-110 transition-transform"></i>
                  <span className="text-gray-300">+971 4 XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <i className="ri-mail-line text-yellow-400 group-hover:scale-110 transition-transform"></i>
                  <span className="text-gray-300">info@kmartgroup.ae</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Kmart Group. All rights reserved.
            </p>
            <a
              href="https://readdy.ai/?origin=logo"
              className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
