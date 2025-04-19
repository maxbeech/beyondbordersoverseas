'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const footerAnimationDelayed = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  });

  return (
    <footer className="bg-[#1F4091] text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
          >
            <Image
              src="/media/logo-with_text.png"
              alt="Beyond Borders Overseas Logo"
              width={180}
              height={50}
              className="mb-6"
            />
            <p className="text-white mb-4">
              Beyond Borders Overseas empowers students worldwide to secure placements at over 800 universities across 30+ countries, offering end-to-end support from test prep to visa processing.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Column 2: Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.2)}
          >
            <h3 className="text-xl font-bold mb-6 text-[#F09022] border-b-2 border-[#F09022] pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/test-preparation" className="text-white hover:text-[#69AFFD] transition-colors">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link href="/services/university-shortlisting" className="text-white hover:text-[#69AFFD] transition-colors">
                  University Shortlisting
                </Link>
              </li>
              <li>
                <Link href="/services/loans-finance" className="text-white hover:text-[#69AFFD] transition-colors">
                  Loans & Finance
                </Link>
              </li>
              <li>
                <Link href="/services/visa-support" className="text-white hover:text-[#69AFFD] transition-colors">
                  Visa Support
                </Link>
              </li>
              <li>
                <Link href="/application-process" className="text-white hover:text-[#69AFFD] transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/universities" className="text-white hover:text-[#69AFFD] transition-colors">
                  Partner Universities
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 3: Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.3)}
          >
            <h3 className="text-xl font-bold mb-6 text-[#F09022] border-b-2 border-[#F09022] pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white hover:text-[#69AFFD] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-white hover:text-[#69AFFD] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-[#69AFFD] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#69AFFD] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white hover:text-[#69AFFD] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-white hover:text-[#69AFFD] transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 4: Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.4)}
          >
            <h3 className="text-xl font-bold mb-6 text-[#F09022] border-b-2 border-[#F09022] pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-[#69AFFD] mr-3 mt-1" />
                <span className="text-white">
                  123 Global Education Tower<br />
                  New Delhi, India<br />
                  110001
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-4 w-4 text-[#69AFFD] mr-3" />
                <a href="tel:+919876543210" className="text-white hover:text-[#69AFFD] transition-colors">
                  +91 987-654-3210
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-[#69AFFD] mr-3" />
                <a href="mailto:info@beyondbordersoverseas.com" className="text-white hover:text-[#69AFFD] transition-colors">
                  info@beyondbordersoverseas.com
                </a>
              </li>
              <li className="flex items-center">
                <FaGlobe className="h-4 w-4 text-[#69AFFD] mr-3" />
                <span className="text-white">Serving students from 50+ countries</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded transition-colors duration-300 shadow-md"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-white/20 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white">© {currentYear} Beyond Borders Overseas. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-4">
              <Link href="/terms" className="text-white hover:text-[#69AFFD] transition-colors">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="text-white hover:text-[#69AFFD] transition-colors">Privacy Policy</Link>
              <Link href="/sitemap" className="text-white hover:text-[#69AFFD] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 