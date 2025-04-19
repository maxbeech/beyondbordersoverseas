'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define types for navigation items
interface SubItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  subItems?: SubItem[];
}

// Get all site pages from navigation structure
// This ensures sitemap is automatically updated when pages change
const getNavItems = (): NavItem[] => {
  // Same nav structure as Header.tsx
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
    },
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

  // Additional utility pages not in the main navigation
  const utilityPages: NavItem[] = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  // Combined page list
  const allPages = [
    ...navItems,
    ...utilityPages
  ];

  return allPages;
};

interface FlattenedPage {
  name: string;
  path: string;
  isSubItem?: boolean;
  parent?: string;
}

// Process all pages into a flat list including subItems
const getAllPages = (): FlattenedPage[] => {
  const items = getNavItems();
  const flattenedPages: FlattenedPage[] = [];

  items.forEach(item => {
    // Add main page
    flattenedPages.push({
      name: item.name,
      path: item.path
    });

    // Add subpages if they exist
    if (item.subItems) {
      item.subItems.forEach(subItem => {
        flattenedPages.push({
          name: subItem.name,
          path: subItem.path,
          isSubItem: true,
          parent: item.name
        });
      });
    }
  });

  return flattenedPages;
};

export default function Sitemap() {
  const allPages = getAllPages();

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find all the pages on our website organized in a convenient list.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">Main Pages</h2>
              <ul className="space-y-3">
                {allPages
                  .filter(page => !page.isSubItem)
                  .filter(page => !page.path.includes('/privacy-policy') && !page.path.includes('/terms') && !page.path.includes('/sitemap'))
                  .map((page, index) => (
                    <motion.li 
                      key={page.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    >
                      <Link 
                        href={page.path} 
                        className="text-gray-700 hover:text-accent transition-colors duration-300 flex items-center"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 mr-2 text-primary" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {page.name}
                      </Link>
                    </motion.li>
                  ))}
              </ul>
            </div>

            {/* Service Pages */}
            <div>
              <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">Services</h2>
              <ul className="space-y-3">
                {allPages
                  .filter(page => page.isSubItem && page.parent === 'Services')
                  .map((page, index) => (
                    <motion.li 
                      key={page.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    >
                      <Link 
                        href={page.path} 
                        className="text-gray-700 hover:text-accent transition-colors duration-300 flex items-center"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 mr-2 text-primary" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {page.name}
                      </Link>
                    </motion.li>
                  ))}
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">Legal & Utility</h2>
              <ul className="space-y-3">
                {allPages
                  .filter(page => 
                    page.path.includes('/privacy-policy') || 
                    page.path.includes('/terms') || 
                    page.path.includes('/sitemap')
                  )
                  .map((page, index) => (
                    <motion.li 
                      key={page.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      <Link 
                        href={page.path} 
                        className="text-gray-700 hover:text-accent transition-colors duration-300 flex items-center"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 mr-2 text-primary" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {page.name}
                      </Link>
                    </motion.li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 