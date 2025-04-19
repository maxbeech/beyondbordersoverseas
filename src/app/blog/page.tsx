'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, CalendarIcon, UserIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 'study-germany-tuition-free',
      title: 'Complete Guide to Studying in Germany Without Tuition Fees',
      excerpt: 'Discover how to access Germany\'s world-class education system with zero or minimal tuition fees, and what requirements you need to meet.',
      content: 'Germany offers international students the opportunity to study at top universities without paying tuition fees...',
      author: 'Dr. Michael Schmidt',
      date: 'May 12, 2023',
      readTime: '9 min read',
      category: 'Country Guides',
      image: '/media/Photos/building-8259184_1280.jpg',
      featured: true
    },
    {
      id: 'ielts-exam-strategies',
      title: 'How to Ace Your IELTS Exam: Proven Strategies',
      excerpt: 'Master the four sections of the IELTS exam with these expert tips from our top instructors who have helped students achieve band 8+ scores.',
      content: 'The International English Language Testing System (IELTS) is one of the most widely accepted English proficiency tests...',
      author: 'Sarah Johnson',
      date: 'April 28, 2023',
      readTime: '7 min read',
      category: 'Test Preparation',
      image: '/media/Photos/pexels-theshantanukr-16562727.jpg',
      featured: true
    },
    {
      id: 'scholarship-opportunities-2023',
      title: '5 Scholarship Opportunities You Shouldn\'t Miss in 2023',
      excerpt: 'From Fulbright to Commonwealth scholarships, learn about the most prestigious global funding opportunities and how to craft a winning application.',
      content: 'Securing a scholarship can make a significant difference in your study abroad journey...',
      author: 'Jennifer Lee',
      date: 'April 15, 2023',
      readTime: '6 min read',
      category: 'Scholarships',
      image: '/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg',
      featured: true
    },
    {
      id: 'us-student-visa-guide',
      title: 'The Ultimate Guide to U.S. Student Visa Application',
      excerpt: 'Navigate the complex F-1 visa application process with our step-by-step guide covering documentation, interviews, and common pitfalls to avoid.',
      content: 'The F-1 student visa is the primary visa type for international students studying in the United States...',
      author: 'David Miller',
      date: 'March 30, 2023',
      readTime: '8 min read',
      category: 'Visa Guides',
      image: '/media/Photos/pexels-pixabay-207684.jpg',
      featured: false
    },
    {
      id: 'comparative-education-systems',
      title: 'Comparing Education Systems: US vs. UK vs. Australia',
      excerpt: 'Understand the key differences in academic structure, teaching methods, and degree recognition between these popular study destinations.',
      content: 'Each country has its unique approach to higher education, from academic calendars to assessment methods...',
      author: 'Emily Watson',
      date: 'March 15, 2023',
      readTime: '10 min read',
      category: 'Education Systems',
      image: '/media/Photos/pexels-ketut-subiyanto-4308104.jpg',
      featured: false
    },
    {
      id: 'adapting-new-culture',
      title: 'Cultural Adaptation: Tips for International Students',
      excerpt: 'Practical advice for overcoming culture shock and building a fulfilling social life in your new home country.',
      content: 'Moving to a new country for education brings exciting opportunities but also challenges in adapting to a different culture...',
      author: 'Sophia Chen',
      date: 'February 28, 2023',
      readTime: '7 min read',
      category: 'Student Life',
      image: '/media/Photos/pexels-buro-millennial-636760-1438072.jpg',
      featured: false
    },
    {
      id: 'engineering-programs-abroad',
      title: 'Top Engineering Programs for International Students in 2023',
      excerpt: 'An in-depth look at the most prestigious engineering programs with strong international student support systems.',
      content: 'For aspiring engineers seeking international education, several universities stand out for their exceptional programs...',
      author: 'Dr. Robert Kim',
      date: 'February 15, 2023',
      readTime: '9 min read',
      category: 'Program Guides',
      image: '/media/Photos/man-6027027_1280.jpg',
      featured: false
    },
    {
      id: 'remote-internships-abroad',
      title: 'Remote Internships: Building Your International Career from Home',
      excerpt: 'How to find and make the most of virtual international internships that can boost your global employability.',
      content: 'The rise of remote work has created new opportunities for students to gain international experience without leaving their home country...',
      author: 'Carlos Mendez',
      date: 'January 30, 2023',
      readTime: '6 min read',
      category: 'Career Development',
      image: '/media/Photos/pexels-kelly-1179532-2881370.jpg',
      featured: false
    }
  ];

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Extract unique categories for the filter
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1F4091] to-[#4F75C4] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/media/pattern.svg"
            alt="Background pattern"
            fill
            className="object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Insights</h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert guides, tips, and insights to help you navigate every aspect of your international education journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#featured" 
                  className="px-6 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 shadow-md">
                  Featured Articles
                </Link>
                <button
                  onClick={() => document.getElementById('search-box')?.focus()}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
                  Search Resources
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hidden md:block"
            >
              <Image
                src="/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616706.jpg"
                alt="Student reading resources"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-6 mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-grow">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search-box"
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                    placeholder="Search by topic, keyword, or category"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <select
                  className="block w-full py-3 px-4 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div id="featured" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">
              Our most popular and helpful resources for international students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <div className="flex items-center mr-4">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="text-accent hover:text-accent-dark transition-colors flex items-center"
                      >
                        Read more
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Resources</h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive collection of resources to help you at every stage of your international education journey.
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <div className="flex items-center mr-4">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="text-accent hover:text-accent-dark transition-colors flex items-center"
                      >
                        Read more
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">No articles found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-primary hover:text-primary-dark font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore resources by specific topics that matter most to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-4 rounded-lg text-center hover:shadow-md transition-all ${
                  selectedCategory === category 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-700 shadow-sm'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <span className="font-medium">{category}</span>
                <div className="text-sm mt-1 opacity-80">
                  {blogPosts.filter(post => post.category === category).length} articles
                </div>
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: categories.length * 0.05 }}
              className={`p-4 rounded-lg text-center hover:shadow-md transition-all ${
                selectedCategory === 'all' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-700 shadow-sm'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              <span className="font-medium">All Categories</span>
              <div className="text-sm mt-1 opacity-80">
                {blogPosts.length} articles
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-[#1F4091] to-[#4F75C4] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with the Latest Resources</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest guides, scholarship opportunities, and expert advice directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F09022] shadow-sm"
                />
                <button className="bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium px-6 py-3 rounded-md transition-colors shadow-md">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 