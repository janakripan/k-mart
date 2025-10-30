
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const leadershipRef = useRef(null);
  const valuesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });
  const leadershipInView = useInView(leadershipRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    {
      year: '1983',
      title: 'Foundation',
      description:
        'Kmart Group was established with a vision to provide quality retail experiences to the UAE community.',
      icon: 'ri-building-line',
    },
    {
      year: '1990s',
      title: 'Expansion',
      description:
        'Expanded our retail footprint across Dubai and surrounding emirates, establishing our reputation for excellence.',
      icon: 'ri-map-line',
    },
    {
      year: '2000s',
      title: 'Diversification',
      description:
        'Ventured into food & beverage sector, bringing diverse culinary experiences to our customers.',
      icon: 'ri-restaurant-line',
    },
    {
      year: '2010s',
      title: 'Innovation',
      description:
        'Launched comprehensive distribution services, creating an integrated supply chain ecosystem.',
      icon: 'ri-truck-line',
    },
    {
      year: '2020s',
      title: 'Digital Transformation',
      description:
        'Embraced technology and digital solutions to enhance customer experiences across all sectors.',
      icon: 'ri-smartphone-line',
    },
    {
      year: 'Today',
      title: 'Excellence',
      description:
        'Leading the market with 11 supermarkets, 16 groceries, and 9 restaurants, serving communities across the UAE.',
      icon: 'ri-star-line',
    },
  ];

  const leadership = [
    {
      name: 'Ahmed Al-Mansouri',
      position: 'Chief Executive Officer',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20business%20executive%20portrait%2C%20confident%20middle-aged%20man%20in%20elegant%20business%20suit%2C%20sophisticated%20office%20background%2C%20premium%20corporate%20headshot%2C%20black%20and%20gold%20professional%20atmosphere&width=300&height=400&seq=ceo1&orientation=portrait',
      description:
        'Leading Kmart Group with over 25 years of retail and business development experience.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operating Officer',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20portrait%2C%20confident%20female%20executive%20in%20elegant%20business%20attire%2C%20sophisticated%20office%20setting%2C%20premium%20corporate%20headshot%2C%20black%20and%20gold%20professional%20atmosphere&width=300&height=400&seq=coo1&orientation=portrait',
      description:
        'Overseeing operations across all business sectors with expertise in supply chain management.',
    },
    {
      name: 'Mohammed Hassan',
      position: 'Chief Financial Officer',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20business%20executive%20portrait%2C%20confident%20businessman%20in%20premium%20suit%2C%20sophisticated%20corporate%20environment%2C%20elegant%20office%20background%2C%20black%20and%20gold%20professional%20setting&width=300&height=400&seq=cfo1&orientation=portrait',
      description:
        'Managing financial strategy and growth initiatives with extensive experience in corporate finance.',
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
        ease: 'easeOut',
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
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
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
        ease: 'easeOut',
      },
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <span className="text-black font-bold text-xl" style={{ fontFamily: '"Pacifico", serif' }}>
                    K
                  </span>
                </motion.div>
                <span
                  className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Pacifico", serif' }}
                >
                  Kmart Group
                </span>
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us', active: true },
                { to: '/retail', label: 'Retail' },
                { to: '/fnb', label: 'F&B' },
                { to: '/distribution', label: 'Distribution' },
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.to}
                    className={`${
                      link.active ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                    } transition-colors cursor-pointer whitespace-nowrap`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all cursor-pointer whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Corporate%20headquarters%20building%20exterior%2C%20modern%20business%20architecture%2C%20professional%20office%20complex%2C%20elegant%20commercial%20building%20design%2C%20black%20and%20gold%20architectural%20elements%2C%20sophisticated%20corporate%20environment&width=1920&height=1080&seq=about-hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-yellow-900/30"
          style={{ y }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={containerVariants}>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight"
            >
              Our Story
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto"
            >
              Four decades of excellence, innovation, and unwavering commitment to serving the UAE community
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To elevate experiences across retail, dining, and distribution by delivering exceptional quality,
                convenience, and innovation that enriches the lives of our customers and communities throughout the UAE.
              </p>
              <div className="space-y-4">
                {[
                  'Customer-centric approach in everything we do',
                  'Continuous innovation and improvement',
                  'Sustainable business practices',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="ri-check-line text-black text-sm"></i>
                    </motion.div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://readdy.ai/api/search-image?query=Modern%20corporate%20team%20meeting%20in%20elegant%20boardroom%2C%20diverse%20business%20professionals%20collaborating%2C%20sophisticated%20office%20interior%2C%20premium%20meeting%20room%20with%20black%20and%20gold%20design%20elements%2C%20professional%20business%20atmosphere&width=600&height=400&seq=mission1&orientation=landscape"
                alt="Our Mission"
                className="w-full h-96 object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={timelineInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-yellow-100 border border-yellow-300 rounded-full text-yellow-600 font-semibold text-sm tracking-wide uppercase">
                Our Evolution
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-900"
            >
              Our Journey
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From humble beginnings to industry leadership - discover the milestones that shaped Kmart Group
            </motion.p>
          </motion.div>

          {/* Modern Infographic Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <motion.div
              initial="hidden"
              animate={timelineInView ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-4"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    className="relative mx-auto mb-6 w-20 h-20 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center shadow-lg z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={timelineInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    <span className="text-2xl font-bold text-yellow-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute -inset-2 border-2 border-yellow-300 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
                    initial={{ y: 50, opacity: 0 }}
                    animate={timelineInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  >
                    {/* Year Badge */}
                    <motion.div
                      className="inline-block mb-4"
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: 'spring' }}
                    >
                      <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-sm rounded-full shadow-md">
                        {item.year}
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto"
                      variants={iconVariants}
                      whileHover="hover"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <i className={`${item.icon} text-yellow-600 text-xl`}></i>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-yellow-600 transition-colors duration-300"
                      initial={{ x: -20, opacity: 0 }}
                      animate={timelineInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-sm leading-relaxed text-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={timelineInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Connection Arrow (Desktop) */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      className="hidden xl:block absolute top-10 -right-2 z-20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                    >
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                        <i className="ri-arrow-right-line text-white text-sm"></i>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Decorative Elements */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex space-x-2">
              {[0, 0.2, 0.4].map((delay, index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={leadershipRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={leadershipInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            >
              Leadership Team
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Meet the visionary leaders driving Kmart Group's continued success and innovation
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={leadershipInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500/40 transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <motion.div
                    className="p-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={leadershipInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-yellow-400 font-semibold mb-4">{leader.position}</p>
                    <p className="text-gray-300 leading-relaxed">{leader.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              The fundamental principles that guide our decisions and shape our culture
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: 'ri-star-line',
                title: 'Elevating Experiences',
                description:
                  'We continuously strive to exceed expectations, creating memorable moments for every customer interaction across all our business sectors.',
              },
              {
                icon: 'ri-heart-line',
                title: 'Customer-Centric Excellence',
                description:
                  'Our customers are at the heart of everything we do, driving our commitment to quality, service, and continuous improvement.',
              },
              {
                icon: 'ri-lightbulb-line',
                title: 'Continuous Innovation',
                description:
                  'We embrace change and innovation, constantly evolving to meet the dynamic needs of our communities and stay ahead of market trends.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all duration-300 h-full">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <i className={`${value.icon} text-black text-3xl`}></i>
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={valuesInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={valuesInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
                  >
                    {value.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join Our Journey
          </motion.h2>
          <motion.p
            className="text-xl text-black/80 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Be part of our continued growth and success. Explore career opportunities,
            partnerships, and ways to connect with Kmart Group.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-yellow-400 transition-all cursor-pointer whitespace-nowrap"
              >
                Explore Our Sectors
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-2xl" style={{ fontFamily: '"Pacifico", serif' }}>
                    K
                  </span>
                </div>
                <span
                  className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Pacifico", serif' }}
                >
                  Kmart Group
                </span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Elevating experiences across retail, dining, and distribution since 1983. Where quality
                meets convenience in every aisle and every bite.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-facebook-fill', gradient: 'from-blue-500 to-blue-600' },
                  { icon: 'ri-instagram-line', gradient: 'from-pink-500 to-purple-600' },
                  { icon: 'ri-linkedin-fill', gradient: 'from-blue-600 to-blue-700' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { to: '/about', label: 'About Us' },
                  { to: '/retail', label: 'Retail' },
                  { to: '/fnb', label: 'Food & Beverage' },
                  { to: '/distribution', label: 'Distribution' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-yellow-400 mt-1"></i>
                  <span className="text-gray-300">
                    Umm Ramool, Rashidiya<br />
                    Dubai, UAE
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-yellow-400"></i>
                  <span className="text-gray-300">+971 4 XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line text-yellow-400"></i>
                  <span className="text-gray-300">info@kmartgroup.ae</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
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
