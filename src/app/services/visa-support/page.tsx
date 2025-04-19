'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, GlobeAsiaAustraliaIcon, DocumentCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function VisaSupport() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Common countries and their visa requirements
  const countryVisa = [
    {
      country: "United States",
      visa: "F-1 Student Visa",
      requirements: [
        "Acceptance letter from a SEVP-certified institution",
        "I-20 Form",
        "SEVIS fee payment receipt",
        "Financial documentation proving sufficient funds",
        "Ties to home country",
        "English proficiency test scores"
      ]
    },
    {
      country: "United Kingdom",
      visa: "Student Visa (Tier 4)",
      requirements: [
        "CAS (Confirmation of Acceptance for Studies)",
        "Proof of finances for tuition and living expenses",
        "English language proficiency",
        "TB test results (for some countries)",
        "ATAS certificate (for certain subjects)"
      ]
    },
    {
      country: "Canada",
      visa: "Study Permit",
      requirements: [
        "Letter of acceptance from a DLI",
        "Proof of financial support",
        "Clean criminal record",
        "Medical examination results",
        "Biometrics",
        "Intent to leave Canada after studies"
      ]
    },
    {
      country: "Australia",
      visa: "Student Visa (Subclass 500)",
      requirements: [
        "Confirmation of Enrollment (CoE)",
        "Genuine Temporary Entrant (GTE) statement",
        "Financial capacity proof",
        "English proficiency test results",
        "Health insurance (OSHC)",
        "Character and health requirements"
      ]
    },
    {
      country: "Germany",
      visa: "National Visa for Study Purposes",
      requirements: [
        "University admission letter",
        "Proof of financial resources (blocked account)",
        "Health insurance coverage",
        "German language proficiency (or English for English-taught programs)",
        "Academic records and certificates"
      ]
    }
  ];

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
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Visa Support Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Navigate complex visa requirements with our comprehensive support, ensuring a smooth and hassle-free application process for your international education journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" 
                  className="px-6 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 shadow-md">
                  Get Visa Consultation
                </Link>
                <Link href="/services" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
                  All Services
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
                alt="International student with passport and visa"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Visa Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Visa Application Support Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From documentation preparation to interview coaching, we provide end-to-end visa support services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentation Guidance</h3>
              <p className="text-gray-600">
                We provide detailed checklists and guidance for preparing all required documents according to specific embassy requirements.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Customized document checklist</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Document format verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Translation assistance</span>
                </li>
              </ul>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Application Filing</h3>
              <p className="text-gray-600">
                We assist with completing application forms accurately and scheduling visa appointments at the earliest available dates.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Form filling guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Application review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Appointment scheduling</span>
                </li>
              </ul>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview Preparation</h3>
              <p className="text-gray-600">
                Our experts conduct mock interviews and provide training on how to confidently answer common visa interview questions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mock interview sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Country-specific preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Post-interview guidance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Country-specific Requirements Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Country-Specific Visa Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each country has unique visa requirements for international students. Here's an overview of major study destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {countryVisa.map((item, index) => (
              <motion.div
                key={item.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <GlobeAsiaAustraliaIcon className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{item.country}: {item.visa}</h3>
                </div>
                <div className="pl-9">
                  <p className="font-medium text-gray-700 mb-2">Key Requirements:</p>
                  <ul className="space-y-2">
                    {item.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Rate Section */}
      <div className="bg-gradient-to-r from-[#1F4091] to-[#4F75C4] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Industry-Leading Visa Success Rate</h2>
                <p className="text-xl mb-8 text-blue-100">
                  Our experienced visa counselors maintain a remarkable 98% success rate in student visa applications across all major study destinations.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-5 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">USA Student Visas</span>
                      <span className="font-bold">97%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-[#F09022] h-2.5 rounded-full" style={{ width: '97%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">UK Student Visas</span>
                      <span className="font-bold">99%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-[#F09022] h-2.5 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Canada Study Permits</span>
                      <span className="font-bold">96%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-[#F09022] h-2.5 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Australian Student Visas</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div className="bg-[#F09022] h-2.5 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/success-stories" className="inline-flex items-center text-blue-100 hover:text-white group">
                    Read success stories
                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/media/Photos/pexels-anastasiya-gepp-654466-1462630.jpg"
                alt="Happy student with approved visa"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about the student visa application process.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How far in advance should I apply for my student visa?</h3>
              <p className="text-gray-600">
                We recommend applying for your student visa at least 3-4 months before your course start date. Some countries like the USA allow applications up to 120 days before the program start date, while others have different timelines. Our counselors will guide you on the optimal application timing for your specific destination.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What financial documents do I need for a student visa?</h3>
              <p className="text-gray-600">
                Most countries require proof that you can cover tuition fees and living expenses. This typically includes bank statements, sponsorship letters, scholarship award letters, or proof of education loans. The specific amount varies by country and length of study. We provide a detailed financial requirements checklist for your target country.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if my visa application is rejected?</h3>
              <p className="text-gray-600">
                If your visa application is rejected, we analyze the reason for rejection and help you address the concerns. Depending on the country and reason, we can assist with filing an appeal, requesting an administrative review, or preparing a fresh application with stronger documentation. Our experience helps identify and rectify the issues that led to the rejection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I work while studying on a student visa?</h3>
              <p className="text-gray-600">
                Work permissions vary significantly by country. For example, the USA allows up to 20 hours per week on-campus work, the UK allows up to 20 hours during term and full-time during holidays, while Canada permits up to 20 hours off-campus work per week. We provide country-specific guidance on work rights and restrictions for international students.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded transition-colors duration-300"
            >
              Get Your Visa Consultation
              <DocumentCheckIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 