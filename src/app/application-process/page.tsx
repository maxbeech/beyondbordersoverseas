'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClipboardDocumentCheckIcon, ClockIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function ApplicationProcess() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Your International Education Journey Starts Here</h1>
              <p className="text-xl text-blue-100 mb-8">
                A comprehensive, step-by-step guide to our seamless application process that has helped thousands of students gain admission to top universities worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" 
                  className="px-6 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 shadow-md">
                  Start Your Application
                </Link>
                <Link href="/services" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
                  Explore Services
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
                src="/media/Photos/pexels-theshantanukr-16504587.jpg"
                alt="Student completing application process"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Application Process Step-by-Step */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Step-by-Step Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've simplified the complex process of applying to international universities into clear, manageable steps. Our expert counselors guide you through each phase.
            </p>
          </motion.div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center"
          >
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <ClipboardDocumentCheckIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Step 1: Initial Consultation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Your journey begins with a personalized consultation session with our expert education counselors. We'll discuss your:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-700">Academic background and achievements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-700">Career goals and aspirations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-700">Preferred study destinations and programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-700">Budget considerations and timeline</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  This initial assessment helps us create a tailored roadmap for your international education journey, ensuring we align our services with your specific needs and goals.
                </p>
                <div className="mt-6">
                  <Link href="/contact" className="text-primary font-medium hover:text-primary-dark transition-colors">
                    Schedule your free consultation →
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/Photos/pexels-ketut-subiyanto-4308104.jpg"
                  alt="Initial consultation with education advisor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center"
          >
            <div className="md:col-span-5 order-1">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/Photos/pexels-pixabay-256455.jpg"
                  alt="University shortlisting session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 order-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <AcademicCapIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Step 2: University & Course Selection</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Based on your profile and preferences, our university experts will:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-700">Create a customized list of 6-8 universities categorized as ambitious, moderate, and safe options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-700">Provide detailed insights on course curriculum, faculty, campus facilities, and employment outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-700">Analyze admission requirements, acceptance rates, and scholarship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-700">Consider factors like location, cost of living, and post-study work rights</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  We help you make an informed decision about which universities to apply to, ensuring they align with your academic profile, career aspirations, and financial considerations.
                </p>
                <div className="mt-6">
                  <Link href="/services/university-shortlisting" className="text-primary font-medium hover:text-primary-dark transition-colors">
                    Learn more about university selection →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center"
          >
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <DocumentTextIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Step 3: Application Preparation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our application specialists assist you in crafting compelling applications for your chosen universities:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-700">Statement of Purpose (SOP) & Personal Statement preparation with multiple rounds of revisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-700">Resume/CV optimization for academic applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-700">Recommendation letter guidelines and review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-700">Documentation preparation (academic transcripts, certificates, financial statements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">5</span>
                    <span className="text-gray-700">Portfolio development for creative courses (if applicable)</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  We ensure that your application showcases your strengths, achievements, and potential, significantly improving your chances of admission.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/Photos/pexels-buro-millennial-636760-1438072.jpg"
                  alt="Application preparation support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center"
          >
            <div className="md:col-span-5 order-1">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg"
                  alt="Offer acceptance planning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 order-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Step 4: Application Submission & Follow-up</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We handle the entire submission process and maintain proactive communication with universities:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-700">Accurate completion of online application forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-700">Timely submission of all required documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-700">Payment of application fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-700">Regular follow-ups with universities for application status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">5</span>
                    <span className="text-gray-700">Interview preparation for programs requiring interviews</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  We continuously monitor the progress of your applications, ensuring nothing falls through the cracks and addressing any queries from institutions promptly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                    <DocumentTextIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Step 5: Post-Acceptance Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Once you receive your acceptance letters, we provide comprehensive support to prepare for your journey:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-700">Admission offer evaluation and decision guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-700">Scholarship negotiation (where applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-700">Visa application assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-700">Education loan guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">5</span>
                    <span className="text-gray-700">Pre-departure orientation (accommodation, travel arrangements, banking setup)</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  Our support extends beyond just securing admission – we ensure you're fully prepared for your international education experience, from handling the practical logistics to mentally preparing for your new academic journey.
                </p>
                <div className="mt-6">
                  <Link href="/services/visa-support" className="text-primary font-medium hover:text-primary-dark transition-colors">
                    Learn about our visa support →
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/Photos/pexels-kelly-1179532-2881370.jpg"
                  alt="Post-acceptance services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Application Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When planning your international education, timing is crucial. Here's a typical timeline to follow for a smooth application process.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="bg-primary text-white text-lg font-semibold px-4 py-2 rounded-lg">12-18 months before</span>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Planning Phase</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Begin researching potential study destinations and programs</li>
                    <li>Take standardized tests (IELTS, TOEFL, GRE, GMAT, SAT)</li>
                    <li>Build your academic profile and extracurricular activities</li>
                    <li>Initial consultation with our counselors</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="bg-primary text-white text-lg font-semibold px-4 py-2 rounded-lg">10-12 months before</span>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">University Shortlisting</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Detailed university and program selection</li>
                    <li>Analysis of admission requirements and deadlines</li>
                    <li>Begin preparing documents (transcripts, certificates)</li>
                    <li>Start working on your statement of purpose and CV</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="bg-primary text-white text-lg font-semibold px-4 py-2 rounded-lg">6-9 months before</span>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Preparation & Submission</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Finalize application documents</li>
                    <li>Submit applications (Fall intake)</li>
                    <li>Request recommendation letters</li>
                    <li>Apply for scholarships where applicable</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="bg-primary text-white text-lg font-semibold px-4 py-2 rounded-lg">3-6 months before</span>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer Acceptance & Visa Processing</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Receive and evaluate admission offers</li>
                    <li>Pay tuition deposit to confirm enrollment</li>
                    <li>Begin visa application process</li>
                    <li>Arrange for education loans if needed</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="bg-primary text-white text-lg font-semibold px-4 py-2 rounded-lg">1-3 months before</span>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pre-Departure Preparations</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Book accommodation and flights</li>
                    <li>Attend pre-departure orientation</li>
                    <li>Prepare for travel (currency, insurance, packing)</li>
                    <li>Connect with university international student services</li>
                  </ul>
                </div>
              </motion.div>
            </div>
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Begin Your International Education Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take the first step toward your global academic adventure. Our expert counselors are ready to guide you through every phase of the application process.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 text-lg shadow-md"
            >
              Start Your Application Journey
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 