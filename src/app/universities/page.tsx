'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AcademicCapIcon, GlobeAltIcon, MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Sample university data
  const universities = [
    {
      name: "Harvard University",
      country: "United States",
      region: "North America",
      ranking: 1,
      type: "Research",
      programsOffered: ["Business", "Medicine", "Law", "Engineering", "Arts & Sciences"],
      description: "One of the world's most prestigious universities, Harvard consistently ranks among the top universities globally.",
      featured: true,
      image: "/media/Photos/building-8259184_1280.jpg"
    },
    {
      name: "University of Oxford",
      country: "United Kingdom",
      region: "Europe",
      ranking: 2,
      type: "Research",
      programsOffered: ["Business", "Medicine", "Law", "Engineering", "Humanities"],
      description: "The oldest university in the English-speaking world with a rich history of academic excellence and innovation.",
      featured: true,
      image: "/media/Photos/pexels-pixabay-256455.jpg"
    },
    {
      name: "Technical University of Munich",
      country: "Germany",
      region: "Europe",
      ranking: 50,
      type: "Technical",
      programsOffered: ["Engineering", "Computer Science", "Natural Sciences", "Life Sciences"],
      description: "A leading European research university with a focus on innovation and entrepreneurship in technical fields.",
      featured: true,
      image: "/media/Photos/man-6027027_1280.jpg"
    },
    {
      name: "University of Toronto",
      country: "Canada",
      region: "North America",
      ranking: 18,
      type: "Research",
      programsOffered: ["Business", "Medicine", "Engineering", "Arts & Sciences"],
      description: "Canada's top university with strengths across disciplines and a vibrant diverse campus in downtown Toronto.",
      featured: true,
      image: "/media/Photos/pexels-theshantanukr-16562727.jpg"
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      region: "Oceania",
      ranking: 33,
      type: "Research",
      programsOffered: ["Business", "Medicine", "Law", "Engineering", "Arts"],
      description: "Australia's leading university with strong research output and excellent graduate employability outcomes.",
      featured: false,
      image: "/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616706.jpg"
    },
    {
      name: "National University of Singapore",
      country: "Singapore",
      region: "Asia",
      ranking: 11,
      type: "Research",
      programsOffered: ["Business", "Computing", "Engineering", "Medicine", "Social Sciences"],
      description: "Singapore's flagship university offering a global approach to education and research with a focus on Asian perspectives.",
      featured: false,
      image: "/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg"
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      region: "Europe",
      ranking: 8,
      type: "Technical",
      programsOffered: ["Engineering", "Architecture", "Mathematics", "Natural Sciences"],
      description: "Regularly ranked as the top university in continental Europe with strengths in science and technology.",
      featured: false,
      image: "/media/Photos/building-8259184_1280.jpg"
    },
    {
      name: "University of Cape Town",
      country: "South Africa",
      region: "Africa",
      ranking: 226,
      type: "Research",
      programsOffered: ["Business", "Medicine", "Law", "Engineering", "Humanities"],
      description: "The highest-ranked African university with a beautiful campus at the foot of Table Mountain.",
      featured: false,
      image: "/media/Photos/pexels-theshantanukr-16504587.jpg"
    }
  ];

  // Filter universities based on search term and filters
  const filteredUniversities = universities.filter(university => {
    // Search filter
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        university.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Region filter
    const matchesRegion = selectedRegion === 'all' || university.region === selectedRegion;
    
    // Type filter
    const matchesType = selectedType === 'all' || university.type === selectedType;
    
    return matchesSearch && matchesRegion && matchesType;
  });

  // Group regions for filtering
  const regions = Array.from(new Set(universities.map(uni => uni.region)));
  const types = Array.from(new Set(universities.map(uni => uni.type)));

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partner Universities</h1>
              <p className="text-xl text-blue-100 mb-8">
                We have partnerships with over 800 prestigious universities across 30+ countries, giving you access to a world of educational opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" 
                  className="px-6 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 shadow-md">
                  Find Your University
                </Link>
                <Link href="/services/university-shortlisting" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
                  University Shortlisting
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hidden md:block"
            >
              <Image
                src="/media/Photos/pexels-pixabay-207684.jpg"
                alt="International university campus"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Partner Universities Count Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Education Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our extensive network of partner institutions ensures you have access to the best educational opportunities worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-gray-700">Countries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-gray-700">Universities</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-gray-700">Programs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-700">Students Placed</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Perfect University</h2>
            
            <div className="bg-white rounded-xl shadow-sm p-6 mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-grow">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                      placeholder="Search by university or country"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <select
                    className="block w-full py-3 px-4 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    <option value="all">All Regions</option>
                    {regions.map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                  
                  <select
                    className="block w-full py-3 px-4 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="all">All Types</option>
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Universities Section */}
          {filteredUniversities.filter(uni => uni.featured).length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Partner Universities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUniversities
                  .filter(uni => uni.featured)
                  .map((university, index) => (
                    <motion.div
                      key={university.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={university.image}
                          alt={university.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">{university.name}</h4>
                          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Rank: {university.ranking}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span>{university.country}, {university.region}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{university.description}</p>
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Programs Offered:</p>
                          <div className="flex flex-wrap gap-2">
                            {university.programsOffered.slice(0, 4).map(program => (
                              <span key={program} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {program}
                              </span>
                            ))}
                            {university.programsOffered.length > 4 && (
                              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                +{university.programsOffered.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                        <Link 
                          href="/contact" 
                          className="inline-flex items-center text-accent hover:text-accent-dark transition-colors"
                        >
                          Learn more
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* All Universities Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">All Partner Universities</h3>
            {filteredUniversities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUniversities.map((university, index) => (
                  <motion.div
                    key={university.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={university.image}
                        alt={university.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-900">{university.name}</h4>
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Rank: {university.ranking}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span>{university.country}, {university.region}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{university.description}</p>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Programs Offered:</p>
                        <div className="flex flex-wrap gap-2">
                          {university.programsOffered.slice(0, 4).map(program => (
                            <span key={program} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                              {program}
                            </span>
                          ))}
                          {university.programsOffered.length > 4 && (
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                              +{university.programsOffered.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center text-accent hover:text-accent-dark transition-colors"
                      >
                        Learn more
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <div className="text-gray-500 mb-2">No universities found matching your criteria.</div>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedRegion('all');
                    setSelectedType('all');
                  }}
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#1F4091] to-[#4F75C4] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Need Help Finding the Right University?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our expert counselors can provide personalized university recommendations based on your academic profile, career goals, and preferences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 shadow-md"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/services/university-shortlisting" 
                className="px-8 py-3 bg-white text-primary hover:bg-gray-100 font-medium rounded-md transition-colors duration-300 shadow-md"
              >
                Learn About Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 