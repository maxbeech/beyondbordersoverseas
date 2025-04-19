'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Navigation structure with dropdown menus
  const navigation = [
    { name: 'Home', href: '/' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/media/logo-icon_only.png"
                alt="Bisley Base Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-700' : 'text-white'
                }`}>
                  Bisley Base
                </span>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-600' : 'text-emerald-100'
                }`}>
                  Childcare & Preschool
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-3 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                  pathname === item.href
                    ? isScrolled
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-white bg-white/10 backdrop-blur-sm'
                    : isScrolled
                      ? 'text-gray-700 hover:text-emerald-700'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/"
              className="ml-2 inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-200'
              }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl mobile-menu-container">
              <motion.div
                className="h-full p-6 overflow-y-scroll"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/media/logo-icon_only.png"
                      alt="Bisley Base Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <span className="text-lg font-bold text-emerald-700">Bisley Base</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          pathname === item.href
                            ? 'text-emerald-700 bg-emerald-50'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-700'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    href="/"
                    className="w-full block text-center px-4 py-2 rounded-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a Tour
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 