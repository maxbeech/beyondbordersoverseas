'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  PresentationChartBarIcon, 
  AcademicCapIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  EnvelopeOpenIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    variants={fadeIn}
    className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-accent"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Component for process step cards
const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => (
  <motion.div 
    variants={fadeIn}
    className="flex items-start"
  >
    <div className="flex-shrink-0 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md mr-4">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default function ApplicationAssistance() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-48 h-48 rounded-full bg-accent/10 -ml-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 -mb-32 -mr-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Application Assistance
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive application assistance helps you present your strongest profile to universities worldwide, maximizing your chances of acceptance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-accent mr-3" />
                  <span className="text-gray-700">Personalized SOP and Essay Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-accent mr-3" />
                  <span className="text-gray-700">Professional CV and Resume Review</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-accent mr-3" />
                  <span className="text-gray-700">LOR Guidance and Recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-accent mr-3" />
                  <span className="text-gray-700">Complete Application Form Support</span>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300 shadow-md"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg border-8 border-white">
                <Image 
                  src="/media/Photos/pexels-pixabay-256455.jpg" 
                  alt="Student getting application assistance"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-primary font-bold">95%</span>
                  <span className="text-gray-700">Application Success Rate</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Comprehensive Application Services
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our expert team provides end-to-end support for all aspects of your university applications.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard 
              icon={<DocumentTextIcon className="h-8 w-8" />}
              title="Statement of Purpose"
              description="Expert guidance for crafting compelling SOPs that highlight your academic strengths and career aspirations."
            />
            <FeatureCard 
              icon={<ClipboardDocumentListIcon className="h-8 w-8" />}
              title="Resume Building"
              description="Professional CV development tailored to academic applications, emphasizing relevant experiences and achievements."
            />
            <FeatureCard 
              icon={<EnvelopeOpenIcon className="h-8 w-8" />}
              title="Letters of Recommendation"
              description="Strategic advice on selecting recommenders and guidance on content that strengthens your application."
            />
            <FeatureCard 
              icon={<PresentationChartBarIcon className="h-8 w-8" />}
              title="Essay Writing Support"
              description="Assistance with supplemental essays, personal statements, and diversity statements that make your application stand out."
            />
            <FeatureCard 
              icon={<DocumentMagnifyingGlassIcon className="h-8 w-8" />}
              title="Document Review"
              description="Thorough review of all application materials to ensure accuracy, consistency, and compliance with university requirements."
            />
            <FeatureCard 
              icon={<ClipboardDocumentCheckIcon className="h-8 w-8" />}
              title="Application Submission"
              description="Comprehensive assistance with form completion, document uploads, and timely submission to meet all deadlines."
            />
          </motion.div>
        </div>
      </section>
      
      {/* Application Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Application Process
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From profile evaluation to application tracking, we support you at every step of your journey.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12 max-w-4xl mx-auto"
          >
            <ProcessStep 
              number={1}
              title="Initial Consultation"
              description="We begin with a detailed discussion of your academic background, career goals, and university preferences to understand your unique profile."
            />
            <ProcessStep 
              number={2}
              title="Documentation Planning"
              description="Our consultants create a personalized document checklist and timeline, ensuring all application requirements are met ahead of deadlines."
            />
            <ProcessStep 
              number={3}
              title="SOP & Essay Development"
              description="We guide you through drafting compelling statements that showcase your strengths and align with your target program's requirements."
            />
            <ProcessStep 
              number={4}
              title="Application Preparation"
              description="Our team assists with form completion, document uploads, and final verification before submission to ensure everything is perfect."
            />
            <ProcessStep 
              number={5}
              title="Application Tracking"
              description="After submission, we help you track your applications, respond to additional requests, and prepare for interviews if required."
            />
          </motion.div>
        </div>
      </section>
      
      {/* Success Rate Stats */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-accent-light">Application Success Rate</p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-4xl font-bold mb-2">800+</div>
              <p className="text-accent-light">Partner Universities</p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <p className="text-accent-light">Successful Applications</p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-4xl font-bold mb-2">30+</div>
              <p className="text-accent-light">Countries Worldwide</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Application Assistance?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center mt-1 mr-4">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Consultants</h3>
                    <p className="text-gray-600">Our application specialists have helped thousands of students secure admissions to top universities worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center mt-1 mr-4">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Approach</h3>
                    <p className="text-gray-600">We develop application strategies tailored to your unique profile, goals, and target universities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center mt-1 mr-4">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">University Insights</h3>
                    <p className="text-gray-600">We provide inside knowledge about university preferences and program-specific requirements to optimize your applications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center mt-1 mr-4">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">End-to-End Support</h3>
                    <p className="text-gray-600">From university selection to accepting admission offers, we guide you through the entire application journey.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn} 
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Photos/pexels-kampus-5940860.jpg" 
                    alt="Students working on applications"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
                  <div className="text-accent font-bold text-sm">Expert Application Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Application Journey?</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Contact our application specialists today for a free consultation and take the first step toward your dream university.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 shadow-md"
                >
                  Free Consultation
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors duration-300 shadow-md"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 