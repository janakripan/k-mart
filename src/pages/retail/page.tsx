
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Branch {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  mapEmbed: string;
  description: string;
  type: 'supermarket' | 'grocery';
}

export default function Retail() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const supermarketsRef = useRef(null);
  const groceriesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const supermarketsInView = useInView(supermarketsRef, { once: true });
  const groceriesInView = useInView(groceriesRef, { once: true });

  const branches: Branch[] = [
    // Supermarkets
    {
      id: 1,
      name: 'Kmart Dubai Mall',
      city: 'Dubai',
      address: 'The Dubai Mall, Ground Floor, Downtown Dubai, Dubai, UAE',
      phone: '+971 4 362 7500',
      email: 'dubaimall@kmartgroup.ae',
      hours: 'Daily: 10:00 AM - 12:00 AM',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20supermarket%20interior%20in%20Dubai%20Mall%20with%20premium%20shopping%20environment%2C%20elegant%20retail%20design%2C%20sophisticated%20lighting%2C%20high-end%20grocery%20displays%2C%20contemporary%20architecture%20with%20gold%20and%20black%20accents&width=600&height=400&seq=dubai-mall1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1739405345834!2d55.27962831501496!3d25.197197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sThe%20Dubai%20Mall!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Our flagship supermarket located in the heart of Dubai, offering premium shopping experience with the finest selection of products.',
      type: 'supermarket'
    },
    {
      id: 2,
      name: 'Kmart Marina Walk',
      city: 'Dubai',
      address: 'Marina Walk, Dubai Marina, Dubai, UAE',
      phone: '+971 4 368 9200',
      email: 'marina@kmartgroup.ae',
      hours: 'Daily: 8:00 AM - 11:00 PM',
      image: 'https://readdy.ai/api/search-image?query=Modern%20waterfront%20supermarket%20with%20marina%20views%2C%20contemporary%20retail%20space%2C%20elegant%20interior%20design%2C%20premium%20grocery%20store%20with%20sophisticated%20lighting%20and%20gold%20accents%2C%20Dubai%20Marina%20atmosphere&width=600&height=400&seq=marina1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4739405345834!2d55.13962831501496!3d25.077197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Waterfront supermarket with stunning marina views, serving the vibrant Dubai Marina community with quality products and exceptional service.',
      type: 'supermarket'
    },
    {
      id: 3,
      name: 'Kmart Business Bay',
      city: 'Dubai',
      address: 'Business Bay, Sheikh Zayed Road, Dubai, UAE',
      phone: '+971 4 423 5600',
      email: 'businessbay@kmartgroup.ae',
      hours: 'Daily: 6:00 AM - 12:00 AM',
      image: 'https://readdy.ai/api/search-image?query=Corporate%20district%20supermarket%20with%20modern%20business%20environment%2C%20sleek%20retail%20design%2C%20professional%20shopping%20space%2C%20contemporary%20architecture%20with%20gold%20and%20black%20luxury%20accents%2C%20Business%20Bay%20atmosphere&width=600&height=400&seq=business-bay1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4739405345834!2d55.26962831501496!3d25.187197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4b348a67e24b%3A0xff45e502e1ceb7e2!2sBusiness%20Bay!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Strategically located supermarket in the business district, catering to professionals and residents with convenient shopping solutions.',
      type: 'supermarket'
    },
    {
      id: 4,
      name: 'Kmart Sharjah City Centre',
      city: 'Sharjah',
      address: 'Sharjah City Centre, Al Qasimia, Sharjah, UAE',
      phone: '+971 6 531 2400',
      email: 'sharjah@kmartgroup.ae',
      hours: 'Daily: 9:00 AM - 12:00 AM',
      image: 'https://readdy.ai/api/search-image?query=Modern%20shopping%20center%20supermarket%20in%20Sharjah%20with%20cultural%20elements%2C%20contemporary%20retail%20design%2C%20sophisticated%20interior%20with%20traditional%20touches%2C%20premium%20grocery%20displays%20with%20gold%20accents&width=600&height=400&seq=sharjah1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.4739405345834!2d55.39962831501496!3d25.357197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f2b348a67e24b%3A0xff45e502e1ceb7e2!2sSharjah%20City%20Centre!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Serving the vibrant Sharjah community with quality products and exceptional customer service in a modern shopping environment.',
      type: 'supermarket'
    },
    // Groceries and Minimarts
    {
      id: 5,
      name: 'Kmart Express Jumeirah',
      city: 'Dubai',
      address: 'Jumeirah Beach Road, Jumeirah 1, Dubai, UAE',
      phone: '+971 4 344 7800',
      email: 'jumeirah@kmartgroup.ae',
      hours: 'Daily: 7:00 AM - 11:00 PM',
      image: 'https://readdy.ai/api/search-image?query=Compact%20beachside%20grocery%20store%20in%20Jumeirah%20with%20modern%20minimart%20design%2C%20convenient%20shopping%20layout%2C%20coastal%20neighborhood%20atmosphere%2C%20efficient%20retail%20space%20with%20premium%20touches&width=600&height=400&seq=jumeirah-express1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4739405345834!2d55.23962831501496!3d25.237197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b348a67e24b%3A0xff45e502e1ceb7e2!2sJumeirah%20Beach!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Convenient beachside grocery store serving the prestigious Jumeirah community with essential products and quick shopping solutions.',
      type: 'grocery'
    },
    {
      id: 6,
      name: 'Kmart Express Al Barsha',
      city: 'Dubai',
      address: 'Al Barsha 1, Sheikh Zayed Road, Dubai, UAE',
      phone: '+971 4 347 9100',
      email: 'albarsha@kmartgroup.ae',
      hours: 'Daily: 7:00 AM - 11:30 PM',
      image: 'https://readdy.ai/api/search-image?query=Family-oriented%20neighborhood%20grocery%20store%20in%20Al%20Barsha%20with%20warm%20welcoming%20interior%2C%20modern%20minimart%20design%2C%20community-focused%20shopping%20environment%2C%20efficient%20layout%20with%20friendly%20atmosphere&width=600&height=400&seq=al-barsha-express1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.4739405345834!2d55.20962831501496!3d25.117197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f3b348a67e24b%3A0xff45e502e1ceb7e2!2sAl%20Barsha!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Family-friendly neighborhood grocery store serving the Al Barsha community with daily essentials and convenient shopping.',
      type: 'grocery'
    },
    {
      id: 7,
      name: 'Kmart Express Karama',
      city: 'Dubai',
      address: 'Karama Shopping Complex, Karama, Dubai, UAE',
      phone: '+971 4 334 8900',
      email: 'karama@kmartgroup.ae',
      hours: 'Daily: 6:30 AM - 12:00 AM',
      image: 'https://readdy.ai/api/search-image?query=Bustling%20urban%20grocery%20store%20in%20Karama%20with%20vibrant%20community%20atmosphere%2C%20efficient%20minimart%20layout%2C%20diverse%20product%20selection%2C%20modern%20convenience%20store%20design%20with%20local%20character&width=600&height=400&seq=karama-express1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8739405345834!2d55.29962831501496!3d25.247197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1b348a67e24b%3A0xff45e502e1ceb7e2!2sKarama!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Bustling urban grocery store in the heart of Karama, serving the diverse community with quality products and extended hours.',
      type: 'grocery'
    },
    {
      id: 8,
      name: 'Kmart Express Deira',
      city: 'Dubai',
      address: 'Deira City Centre, Port Saeed, Deira, Dubai, UAE',
      phone: '+971 4 295 1200',
      email: 'deira@kmartgroup.ae',
      hours: 'Daily: 7:00 AM - 11:00 PM',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20district%20grocery%20store%20in%20Deira%20with%20heritage%20charm%2C%20modern%20convenience%20store%20features%2C%20cultural%20neighborhood%20atmosphere%2C%20efficient%20shopping%20layout%20with%20authentic%20character&width=600&height=400&seq=deira-express1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2739405345834!2d55.31962831501496!3d25.267197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0b348a67e24b%3A0xff45e502e1ceb7e2!2sDeira!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Traditional district grocery store in historic Deira, combining heritage charm with modern convenience for the local community.',
      type: 'grocery'
    },
    {
      id: 9,
      name: 'Kmart Express Ajman',
      city: 'Ajman',
      address: 'Sheikh Khalifa Bin Zayed Street, Ajman, UAE',
      phone: '+971 6 742 3300',
      email: 'ajman@kmartgroup.ae',
      hours: 'Daily: 7:30 AM - 11:30 PM',
      image: 'https://readdy.ai/api/search-image?query=Coastal%20city%20grocery%20store%20in%20Ajman%20with%20relaxed%20atmosphere%2C%20modern%20minimart%20design%2C%20community-centered%20shopping%20experience%2C%20efficient%20layout%20with%20seaside%20town%20character&width=600&height=400&seq=ajman-express1&orientation=landscape',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1739405345834!2d55.43962831501496!3d25.407197083896598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e8b348a67e24b%3A0xff45e502e1ceb7e2!2sAjman!5e0!3m2!1sen!2sae!4v1635789012345!5m2!1sen!2sae',
      description: 'Coastal city grocery store serving Ajman residents with fresh products and friendly neighborhood service.',
      type: 'grocery'
    }
  ];

  const supermarkets = branches.filter(branch => branch.type === 'supermarket');
  const groceries = branches.filter(branch => branch.type === 'grocery');

  const openBranchModal = (branch: Branch) => {
    setSelectedBranch(branch);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBranchModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedBranch(null), 300);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const renderBranchGrid = (branchList: Branch[], inView: boolean) => (
    <motion.div 
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {branchList.map((branch, index) => (
        <motion.div 
          key={branch.id} 
          variants={cardVariants}
          whileHover="hover"
          className="group cursor-pointer"
          onClick={() => openBranchModal(branch)}
        >
          <div className="relative bg-gradient-to-br from-slate-800/80 to-black/80 border-2 border-yellow-400/40 rounded-3xl overflow-hidden hover:border-yellow-400/60 transition-all duration-500 backdrop-blur-sm shadow-2xl shadow-yellow-500/20">
            {/* Default glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-3xl"></div>
            
            {/* Animated border glow */}
            <motion.div 
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(255, 193, 7, 0.3), transparent)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="relative h-64 overflow-hidden">
              <motion.img 
                src={branch.image} 
                alt={branch.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="absolute top-6 right-6"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <i className="ri-map-pin-line text-black text-xl"></i>
                </div>
              </motion.div>

              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  className="inline-block px-3 py-1 bg-yellow-400/90 backdrop-blur-sm rounded-full text-black text-sm font-semibold mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {branch.city}
                </motion.div>
              </div>
            </div>
            
            <div className="relative z-10 p-8">
              <motion.h3 
                className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              >
                {branch.name}
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-4 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                {branch.description}
              </motion.p>
              <motion.div 
                className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
              >
                View Details
                <motion.i 
                  className="ri-arrow-right-line ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
            
            {/* Floating particles */}
            <motion.div 
              className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.3 
              }}
            />
            <motion.div 
              className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full"
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: index * 0.4 
              }}
            />
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/25"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <span className="text-black font-bold text-2xl" style={{ fontFamily: '"Pacifico", serif' }}>K</span>
                  </motion.div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent" style={{ fontFamily: '"Pacifico", serif' }}>Kmart Group</span>
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/retail', label: 'Retail', active: true },
                { to: '/fnb', label: 'F&B' },
                { to: '/distribution', label: 'Distribution' }
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link to={link.to} className={`relative ${link.active ? 'text-yellow-400' : 'text-white hover:text-yellow-400'} transition-all duration-300 cursor-pointer whitespace-nowrap group`}>
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
                <Link to="/contact" className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap overflow-hidden group">
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20retail%20store%20network%20across%20UAE%20cities%2C%20modern%20supermarket%20chain%20locations%2C%20premium%20shopping%20destinations%2C%20elegant%20retail%20architecture%20with%20gold%20and%20black%20design%20elements%2C%20sophisticated%20commercial%20spaces&width=1920&height=1080&seq=retail-hero1&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-black/70"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
                Premium Retail Locations
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Our Retail
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Network
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our premium supermarket locations and convenient grocery stores across the UAE, each designed to deliver exceptional shopping experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Supermarkets Section */}
      <section ref={supermarketsRef} className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate={supermarketsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
                Premium Supermarkets
              </span>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
            >
              Supermarkets
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Large-scale retail destinations offering comprehensive shopping experiences with premium products and exceptional service
            </motion.p>
          </motion.div>

          {renderBranchGrid(supermarkets, supermarketsInView)}
        </div>
      </section>

      {/* Groceries and Minimarts Section */}
      <section ref={groceriesRef} className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate={groceriesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-400/20 to-teal-500/20 border border-green-400/30 rounded-full text-green-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
                Neighborhood Stores
              </span>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent"
            >
              Groceries & Minimarts
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Convenient neighborhood stores providing daily essentials and quick shopping solutions for local communities
            </motion.p>
          </motion.div>

          {renderBranchGrid(groceries, groceriesInView)}
        </div>
      </section>

      {/* Branch Modal */}
      <AnimatePresence>
        {isModalOpen && selectedBranch && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBranchModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-400/40 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300 shadow-lg"
                onClick={closeBranchModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-close-line text-xl font-bold"></i>
              </motion.button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Left Side - Branch Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm mb-6">
                      {selectedBranch.city}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                      {selectedBranch.name}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {selectedBranch.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="space-y-6"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-map-pin-line text-black text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                        <p className="text-gray-300">{selectedBranch.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-phone-line text-black text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-gray-300">{selectedBranch.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-time-line text-black text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Hours</h4>
                        <p className="text-gray-300">{selectedBranch.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-mail-line text-black text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-gray-300">{selectedBranch.email}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-8"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <motion.button
                      className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 whitespace-nowrap"
                      onClick={closeBranchModal}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center">
                        <i className="ri-arrow-left-line mr-2"></i>
                        Back to All Branches
                      </span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Right Side - Map */}
                <motion.div
                  className="relative h-96 lg:h-full"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <iframe
                    src={selectedBranch.mapEmbed}
                    className="w-full h-full border-0 rounded-r-3xl"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${selectedBranch.name}`}
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 rounded-r-3xl pointer-events-none"></div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-8 cursor-pointer">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/25">
                    <span className="text-black font-bold text-2xl" style={{ fontFamily: '"Pacifico", serif' }}>K</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to orange-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent" style={{ fontFamily: '"Pacifico", serif' }}>Kmart Group</span>
              </Link>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Elevating experiences across retail, dining, and distribution since 1983. Where quality meets convenience in every aisle and every bite.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-facebook-fill', gradient: 'from-blue-500 to-blue-600' },
                  { icon: 'ri-instagram-line', gradient: 'from-pink-500 to-purple-600' },
                  { icon: 'ri-linkedin-fill', gradient: 'from-blue-600 to-blue-700' }
                ].map((social, index) => (
                  <a key={index} href="#" className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg`}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { to: '/about', label: 'About Us' },
                  { to: '/retail', label: 'Retail' },
                  { to: '/fnb', label: 'Food & Beverage' },
                  { to: '/distribution', label: 'Distribution' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer flex items-center group">
                      <i className="ri-arrow-right-s-line mr-2 transition-transform group-hover:translate-x-1"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-8">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <i className="ri-map-pin-line text-yellow-400 mt-1 group-hover:scale-110 transition-transform"></i>
                  <span className="text-gray-300">Umm Ramool, Rashidiya<br />Dubai, UAE</span>
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
            <a href="https://readdy.ai/?origin=logo" className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer">
              Website Builder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
