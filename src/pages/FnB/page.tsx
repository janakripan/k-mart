import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FnB() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const restaurants = [
    {
      name: "Kmart Café Express",
      type: "Quick Service Restaurant",
      location: "Dubai Mall",
      image:
        "https://readdy.ai/api/search-image?query=modern%20upscale%20quick%20service%20restaurant%20interior%20with%20sleek%20black%20and%20gold%20design%2C%20contemporary%20dining%20space%20with%20premium%20finishes%2C%20warm%20lighting%20and%20elegant%20seating%20arrangements&width=400&height=300&seq=fnb1&orientation=landscape",
    },
    {
      name: "Golden Spoon Bistro",
      type: "Fine Dining",
      location: "Jumeirah Beach",
      image:
        "https://readdy.ai/api/search-image?query=elegant%20fine%20dining%20restaurant%20interior%20with%20black%20and%20gold%20luxury%20theme%2C%20sophisticated%20table%20settings%2C%20ambient%20lighting%20and%20premium%20decor%20elements&width=400&height=300&seq=fnb2&orientation=landscape",
    },
    {
      name: "Urban Kitchen",
      type: "Casual Dining",
      location: "City Centre",
      image:
        "https://readdy.ai/api/search-image?query=modern%20casual%20dining%20restaurant%20with%20contemporary%20black%20and%20gold%20accents%2C%20comfortable%20seating%20areas%2C%20stylish%20interior%20design%20with%20warm%20atmosphere&width=400&height=300&seq=fnb3&orientation=landscape",
    },
    {
      name: "Spice Route",
      type: "International Cuisine",
      location: "Marina Walk",
      image:
        "https://readdy.ai/api/search-image?query=upscale%20international%20cuisine%20restaurant%20interior%20featuring%20black%20and%20gold%20design%20elements%2C%20modern%20dining%20space%20with%20cultural%20touches%20and%20premium%20ambiance&width=400&height=300&seq=fnb4&orientation=landscape",
    },
    {
      name: "Coffee Corner",
      type: "Coffee Shop",
      location: "Business Bay",
      image:
        "https://readdy.ai/api/search-image?query=premium%20coffee%20shop%20interior%20with%20modern%20black%20and%20gold%20design%2C%20sleek%20counter%20area%2C%20comfortable%20seating%20and%20contemporary%20coffee%20bar%20setup&width=400&height=300&seq=fnb5&orientation=landscape",
    },
    {
      name: "Fresh Garden",
      type: "Healthy Dining",
      location: "DIFC",
      image:
        "https://readdy.ai/api/search-image?query=modern%20healthy%20dining%20restaurant%20with%20black%20and%20gold%20accents%2C%20fresh%20green%20elements%2C%20contemporary%20interior%20design%20and%20premium%20healthy%20food%20presentation&width=400&height=300&seq=fnb6&orientation=landscape",
    },
  ];

  const features = [
    {
      icon: "ri-restaurant-line",
      title: "Premium Dining Experience",
      description:
        "Curated culinary experiences across diverse restaurant concepts",
    },
    {
      icon: "ri-team-line",
      title: "Expert Culinary Team",
      description: "World-class chefs creating exceptional dining experiences",
    },
    {
      icon: "ri-global-line",
      title: "International Flavors",
      description: "Diverse cuisine options from around the world",
    },
    {
      icon: "ri-award-line",
      title: "Award-Winning Service",
      description: "Recognized excellence in hospitality and customer service",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y, opacity }}>
          <div className="absolute inset-0 ">
            <video
              className="absolute inset-0 w-full h-full object-cover "
              src="/fnb-bg.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`, // keeps the parallax movement
              }}
            ></video>
          </div>
        </motion.div>

        <div
          className={`relative z-10 max-w-4xl mx-auto px-6 text-left transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Food & Beverage
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Exceptional culinary experiences that blend international flavors
            with local hospitality, creating memorable dining moments across the
            UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Explore Our Restaurants
            </button>
            <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
              View Menu Collection
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-yellow-500/30 to-yellow-700/30 rounded-full blur-lg animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                9
              </div>
              <div className="text-gray-400 text-lg">Restaurant Outlets</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-400 text-lg">Cuisine Types</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                500K+
              </div>
              <div className="text-gray-400 text-lg">Customers Served</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                40
              </div>
              <div className="text-gray-400 text-lg">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Why Choose Our F&B Division
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver exceptional dining experiences through innovation,
              quality, and unmatched hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Our Restaurant Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our diverse collection of dining destinations across the
              UAE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm font-semibold rounded-full">
                      {restaurant.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>{restaurant.location}</span>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-400 font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Book your table or
            explore franchise opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Make a Reservation
            </button>
            <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
              Franchise Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div
                className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4"
                style={{ fontFamily: "Pacifico, serif" }}
              >
                logo
              </div>
              <p className="text-gray-400 mb-4">
                Elevating dining experiences across the UAE since 1983.
              </p>
              <div className="flex space-x-4">
                <i className="ri-facebook-fill text-yellow-400 text-xl cursor-pointer hover:text-yellow-300 transition-colors"></i>
                <i className="ri-instagram-line text-yellow-400 text-xl cursor-pointer hover:text-yellow-300 transition-colors"></i>
                <i className="ri-twitter-line text-yellow-400 text-xl cursor-pointer hover:text-yellow-300 transition-colors"></i>
                <i className="ri-linkedin-fill text-yellow-400 text-xl cursor-pointer hover:text-yellow-300 transition-colors"></i>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/retail"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Retail
                  </a>
                </li>
                <li>
                  <a
                    href="/distribution"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Distribution
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Fine Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Casual Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Quick Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Catering
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Umm Ramool, Rashidiya</p>
                <p>Dubai, UAE</p>
                <p>+971 4 XXX XXXX</p>
                <p>info@kmartgroup.ae</p>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Kmart Group. All rights reserved. |{" "}
              <a
                href="https://readdy.ai/?origin=logo"
                className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer"
              >
                Website Builder
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
