'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

// Navigation structure
const navItems = [
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    subItems: [
      { name: 'Test Preparation', path: '/services/test-preparation' },
      { name: 'University Shortlisting', path: '/services/university-shortlisting' },
      { name: 'Loans & Finance', path: '/services/loans-finance' },
      { name: 'Visa Support', path: '/services/visa-support' },
    ] 
  },
  { 
    name: 'Applications', 
    path: '/application-process',
  },
  { 
    name: 'Universities', 
    path: '/universities',
  },
  { 
    name: 'Success Stories', 
    path: '/success-stories',
  },
  { 
    name: 'Resources', 
    path: '/blog',
  },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm flex items-center">
              <FaGlobe className="mr-2 h-3 w-3" />
              <p>Global Education Experts - 800+ Universities Across 30+ Countries</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+919876543210" className="flex items-center text-sm hover:text-accent transition-colors">
                <FaPhone className="mr-2 h-3 w-3" />
                <span>+91 987-654-3210</span>
              </a>
              <a href="mailto:info@beyondbordersoverseas.com" className="flex items-center text-sm hover:text-accent transition-colors">
                <FaEnvelope className="mr-2 h-3 w-3" />
                <span>info@beyondbordersoverseas.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'} sticky top-0 left-0 w-full z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/media/logo-with_text.png"
                alt="Beyond Borders Overseas Logo"
                width={180}
                height={50}
                className="h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className={`px-2 py-2 rounded text-sm font-medium transition-colors hover:text-accent relative whitespace-nowrap
                            ${pathname.startsWith(item.path) ? 'text-accent' : 'text-gray-800'}`}
                        >
                          {item.name}
                          <span className="ml-1 text-xs opacity-70">▼</span>
                          
                          {/* Animated underline */}
                          {pathname.startsWith(item.path) && (
                            <motion.div 
                              className="absolute bottom-0 left-0 h-0.5 bg-accent"
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </button>
                        <AnimatePresence>
                          {(activeDropdown === item.name) && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 mt-1 w-64 rounded-md shadow-lg bg-white z-50 overflow-hidden"
                              onMouseEnter={() => setActiveDropdown(item.name)}
                              onMouseLeave={() => setActiveDropdown(null)}
                            >
                              <div className="py-2">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.path}
                                    className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors
                                      ${pathname === subItem.path ? 'text-accent font-medium' : 'text-gray-800'}`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`px-2 py-2 rounded text-sm font-medium transition-colors hover:text-accent relative whitespace-nowrap
                          ${pathname === item.path ? 'text-accent' : 'text-gray-800'}`}
                      >
                        {item.name}
                        
                        {/* Animated underline */}
                        {pathname === item.path && (
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-accent"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link 
                    href="/contact"
                    className="ml-1 px-3 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    Start Journey
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-primary hover:text-accent focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-white shadow-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`w-full text-left px-3 py-3 rounded text-base font-medium flex justify-between items-center
                            ${pathname.startsWith(item.path) ? 'text-accent' : 'text-gray-800'}`}
                        >
                          {item.name}
                          <span className="ml-1 text-xs">{activeDropdown === item.name ? '▲' : '▼'}</span>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 space-y-1 border-l-2 border-accent ml-3 mt-1 mb-2"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className={`block px-3 py-2 text-sm hover:bg-gray-50 transition-colors
                                    ${pathname === subItem.path ? 'text-accent' : 'text-gray-600'}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block px-3 py-3 rounded text-base font-medium transition-colors
                          ${pathname === item.path ? 'text-accent' : 'text-gray-800'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-2 pb-3">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-primary text-white rounded font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start Journey
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
} 