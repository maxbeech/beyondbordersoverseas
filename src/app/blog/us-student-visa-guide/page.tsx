'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  UserIcon, 
  ClockIcon, 
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';

export default function USStudentVisaGuide() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1F4091] to-[#4F75C4] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex items-center text-[#69AFFD] bg-white/10 px-3 py-1 rounded-full text-sm">
                Visa Guides
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The Ultimate Guide to U.S. Student Visa Application
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>March 30, 2023</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>David Miller</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>8 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative -mt-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/media/Photos/pexels-pixabay-207684.jpg"
              alt="American flag and visa documents"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-grow"
          >
            <div className="prose prose-lg max-w-none">
              <h2>Introduction to U.S. Student Visas</h2>
              <p>
                The F-1 student visa is the primary visa type for international students studying in the United States. Each year, hundreds of thousands of students from around the world embark on the journey to obtain this visa, which serves as their gateway to educational opportunities at American institutions.
              </p>
              <p>
                Navigating the U.S. visa application process can seem daunting, with its specific documentation requirements, interview procedures, and various deadlines. This comprehensive guide aims to demystify the process, providing you with a clear roadmap from determining your eligibility to successfully obtaining your F-1 visa and arriving in the United States.
              </p>
              <p>
                Understanding the nuances of the visa application process is crucial not only for ensuring a successful application but also for avoiding common pitfalls that could delay or jeopardize your academic plans. With thorough preparation and knowledge of what to expect, you can approach this process with confidence.
              </p>

              <h2>Types of U.S. Student Visas</h2>
              <p>
                Before diving into the application process, it's important to understand the different types of student visas available and which one is appropriate for your educational goals:
              </p>
              <ul>
                <li><strong>F-1 Visa:</strong> The most common type for academic students attending a university, college, high school, private elementary school, seminary, conservatory, or language training program. F-1 visa holders must maintain a full course load.</li>
                <li><strong>M-1 Visa:</strong> For students attending vocational or non-academic institutions, other than language training programs.</li>
                <li><strong>J-1 Visa:</strong> For exchange visitors participating in programs that promote cultural exchange, including undergraduate and graduate students, scholars, and professors.</li>
              </ul>
              <p>
                This guide will primarily focus on the F-1 visa, as it's the most relevant for international students pursuing degree programs at U.S. institutions.
              </p>

              <h2>Step 1: Gain Admission to a SEVP-Approved Institution</h2>
              <p>
                The first and most crucial step in the student visa process is gaining admission to a Student and Exchange Visitor Program (SEVP)-approved school in the United States. Here's what this involves:
              </p>
              <ul>
                <li>Research and apply to U.S. institutions that align with your academic goals and offer SEVP certification</li>
                <li>Complete the application requirements, which typically include standardized tests (such as TOEFL, IELTS, SAT, GRE, or GMAT)</li>
                <li>Submit academic transcripts, recommendation letters, and personal statements</li>
                <li>Demonstrate sufficient financial resources to cover your education expenses</li>
              </ul>
              <p>
                Once accepted, the institution will issue you a Form I-20 (Certificate of Eligibility for Nonimmigrant Student Status), a crucial document that you'll need for your visa application.
              </p>

              <h2>Step 2: Pay the SEVIS Fee</h2>
              <p>
                After receiving your Form I-20, you'll need to pay the SEVIS (Student and Exchange Visitor Information System) fee, which is currently $350 for F-1 visa applicants. This fee funds the system that maintains information on international students during their stay in the United States.
              </p>
              <p>
                The SEVIS fee must be paid before your visa interview, and you should bring the payment receipt to your interview. You can pay this fee online through the U.S. Immigration and Customs Enforcement website.
              </p>

              <h2>Step 3: Complete the Online Visa Application (DS-160)</h2>
              <p>
                The next step is to complete the Online Nonimmigrant Visa Application (Form DS-160). This comprehensive form collects personal information, details about your travel plans, and information about your background.
              </p>
              <p>
                When completing the DS-160:
              </p>
              <ul>
                <li>Have your passport, Form I-20, and other relevant documents handy</li>
                <li>Set aside at least 60-90 minutes to complete the form in one session (the form times out after 20 minutes of inactivity)</li>
                <li>Answer all questions truthfully and consistently with previous visa applications</li>
                <li>Upload a recent photograph that meets the specified requirements</li>
                <li>Print the confirmation page with the barcode to bring to your visa interview</li>
              </ul>

              <h2>Step 4: Pay the Visa Application Fee</h2>
              <p>
                The visa application fee for F-1 visas is currently $160. Payment methods vary by country, so check with your local U.S. Embassy or Consulate for specific instructions. Keep the payment receipt, as you'll need it for your interview.
              </p>
              <p>
                In some countries, you'll need to pay this fee before scheduling your visa interview, while in others, you may schedule the interview first and then pay the fee.
              </p>

              <h2>Step 5: Schedule Your Visa Interview</h2>
              <p>
                With your DS-160 confirmation and fee payment complete, you can schedule your visa interview at the U.S. Embassy or Consulate in your country. Wait times for interview appointments vary widely depending on the location and the time of year, so it's advisable to schedule your interview as early as possible.
              </p>
              <p>
                F-1 visas can be issued up to 120 days before the start date of your program, as indicated on your Form I-20. However, you cannot enter the United States more than 30 days before your program start date.
              </p>
              <p>
                When scheduling your interview, be mindful of:
              </p>
              <ul>
                <li>Peak application times (typically summer months for fall semester starts)</li>
                <li>Processing times at your specific embassy or consulate</li>
                <li>Any potential administrative processing that might be required after your interview</li>
              </ul>

              <h2>Step 6: Prepare for Your Visa Interview</h2>
              <p>
                The visa interview is a critical component of the application process. Consular officers use this opportunity to assess whether you are a genuine student with the intention to return to your home country after completing your studies.
              </p>
              <h3>Essential Documents to Bring</h3>
              <ul>
                <li>Valid passport (with at least six months validity beyond your intended period of stay)</li>
                <li>Form I-20 signed by both you and your school's designated official</li>
                <li>DS-160 confirmation page</li>
                <li>SEVIS fee payment receipt</li>
                <li>Visa application fee payment receipt</li>
                <li>One 2x2 inch photograph (if your photo upload with the DS-160 failed)</li>
                <li>Academic transcripts, standardized test scores, and diplomas/degrees</li>
                <li>Evidence of financial resources to cover educational expenses</li>
                <li>Evidence of ties to your home country (property ownership, family obligations, employment offers after graduation)</li>
                <li>Any evidence of previous visits to the U.S. and compliance with visa terms</li>
              </ul>

              <h3>Common Interview Questions</h3>
              <p>
                While each interview is unique, consular officers typically ask questions about:
              </p>
              <ul>
                <li>Your choice of school and program</li>
                <li>How your planned studies relate to your career goals</li>
                <li>Your academic background and qualifications</li>
                <li>How you plan to finance your education</li>
                <li>Your ties to your home country and intentions to return after completing your studies</li>
                <li>Your knowledge of the school and program you'll be attending</li>
              </ul>

              <h3>Interview Tips</h3>
              <ul>
                <li><strong>Be Concise:</strong> Consular officers typically have only a few minutes for each interview, so keep your answers clear and to the point.</li>
                <li><strong>Be Honest:</strong> Never misrepresent your intentions or background information.</li>
                <li><strong>Speak English:</strong> The interview will be conducted in English, so this is an opportunity to demonstrate your language proficiency.</li>
                <li><strong>Demonstrate Non-Immigrant Intent:</strong> Clearly articulate your plans to return to your home country after completing your studies.</li>
                <li><strong>Show Preparation:</strong> Demonstrate knowledge about your program and how it fits into your career plans.</li>
                <li><strong>Maintain Confidence:</strong> Be polite and professional, maintaining eye contact and a confident demeanor.</li>
              </ul>

              <h2>Step 7: After the Interview</h2>
              <p>
                Following your interview, the consular officer will make one of three decisions:
              </p>
              <ol>
                <li><strong>Approved:</strong> Your visa is approved, and your passport with the visa will be returned to you, typically within a few days.</li>
                <li><strong>Administrative Processing:</strong> Additional information or background checks are needed before a decision can be made. This can take several weeks or even months.</li>
                <li><strong>Denied:</strong> Your application is rejected. The officer should provide a reason for the denial, and you may be able to reapply if the circumstances change.</li>
              </ol>
              <p>
                If your visa is approved, check all information on it for accuracy before leaving the embassy or consulate. Pay attention to the visa type, validity dates, and number of allowed entries.
              </p>

              <h2>Step 8: Preparing for Your Arrival in the U.S.</h2>
              <p>
                Once you have your F-1 visa, you can begin preparing for your journey to the United States. Remember that you cannot enter the U.S. more than 30 days before your program start date as indicated on your Form I-20.
              </p>
              <h3>Before Your Departure</h3>
              <ul>
                <li>Arrange accommodation (either on-campus housing or off-campus alternatives)</li>
                <li>Research health insurance options (many schools require international students to have health insurance)</li>
                <li>Familiarize yourself with U.S. customs regulations to ensure a smooth entry</li>
                <li>Contact your university's international student office for orientation information</li>
                <li>Make copies of all important documents (passport, visa, I-20, financial documents)</li>
              </ul>

              <h3>Documents to Carry With You</h3>
              <p>
                When traveling to the U.S., keep these documents in your carry-on luggage:
              </p>
              <ul>
                <li>Valid passport with F-1 visa</li>
                <li>Original Form I-20</li>
                <li>Admission letter from your school</li>
                <li>Financial documents proving you can support yourself</li>
                <li>Contact information for your school's international student office</li>
                <li>Address where you'll be staying initially</li>
              </ul>

              <h2>Common Pitfalls and How to Avoid Them</h2>
              <p>
                Many student visa applications face delays or denials due to preventable mistakes. Here are some common pitfalls and how to avoid them:
              </p>

              <h3>Insufficient Financial Documentation</h3>
              <p>
                Consular officers need to verify that you have sufficient funds to cover your educational expenses without unauthorized employment in the U.S.
              </p>
              <p>
                <strong>Solution:</strong> Provide comprehensive financial documentation, including bank statements, scholarship letters, sponsor affidavits, and any other proof of financial resources.
              </p>

              <h3>Weak Ties to Home Country</h3>
              <p>
                Failing to demonstrate strong ties to your home country may raise concerns about your intention to return after completing your studies.
              </p>
              <p>
                <strong>Solution:</strong> Present evidence of family, economic, and social ties to your home country, such as property ownership, family relationships, or job offers after graduation.
              </p>

              <h3>Inconsistent or Inaccurate Information</h3>
              <p>
                Discrepancies between your visa application, supporting documents, and interview responses can raise red flags.
              </p>
              <p>
                <strong>Solution:</strong> Double-check all information for consistency and accuracy before submission. Review your DS-160 carefully before finalizing it.
              </p>

              <h3>Poor Interview Preparation</h3>
              <p>
                Being unprepared for interview questions or unable to articulate your educational plans clearly can lead to visa denial.
              </p>
              <p>
                <strong>Solution:</strong> Practice potential interview questions, research your school and program thoroughly, and be able to explain how your studies align with your career goals.
              </p>

              <h3>Applying Too Late</h3>
              <p>
                Last-minute applications may not allow sufficient time for processing, especially if administrative processing is required.
              </p>
              <p>
                <strong>Solution:</strong> Start the application process as soon as you receive your I-20, ideally 3-4 months before your intended departure date.
              </p>

              <h2>Maintaining F-1 Status After Arrival</h2>
              <p>
                Obtaining your F-1 visa is just the beginning. To maintain your legal status in the U.S., you must:
              </p>
              <ul>
                <li>Maintain a full course load (typically 12 credit hours for undergraduates, 9 for graduates)</li>
                <li>Make normal progress toward completing your program</li>
                <li>Only work on-campus during the first academic year (and only 20 hours per week during the school year)</li>
                <li>Report any changes in address, major, or academic status to your Designated School Official (DSO)</li>
                <li>Ensure your I-20 remains valid and request extensions if needed</li>
                <li>Maintain valid health insurance</li>
                <li>File tax returns if required, even if you earned no income in the U.S.</li>
              </ul>
              <p>
                Your school's international student office is an invaluable resource for questions about maintaining your status and taking advantage of benefits like Curricular Practical Training (CPT) and Optional Practical Training (OPT).
              </p>

              <h2>Conclusion</h2>
              <p>
                Securing an F-1 student visa requires careful planning, thorough preparation, and attention to detail. By understanding the process and requirements outlined in this guide, you'll be well-positioned to navigate the application successfully and begin your academic journey in the United States.
              </p>
              <p>
                Remember that each step—from gaining admission to a SEVP-approved institution to maintaining your F-1 status after arrival—plays a crucial role in ensuring a smooth experience. Take advantage of resources available to you, including your school's international student office, the U.S. Embassy or Consulate website, and educational advising centers in your home country.
              </p>
              <p>
                With the right preparation and a positive attitude, you can overcome the challenges of the visa application process and focus on the exciting educational opportunities that await you in the United States.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 bg-primary">
                  <div className="h-full w-full flex items-center justify-center text-white text-2xl font-bold">
                    DM
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">David Miller</h3>
                  <p className="text-gray-600 text-sm mb-2">Immigration Consultant & Former U.S. Consular Officer</p>
                  <p className="text-gray-700">
                    David Miller spent 12 years as a U.S. Consular Officer before transitioning to education consulting. He has processed thousands of student visa applications and now specializes in helping international students navigate the U.S. immigration system. David holds a Master's in International Relations and regularly conducts workshops on U.S. visa processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="mt-8 flex items-center justify-between">
              <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-primary">
                  <ShareIcon className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-primary">
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="sticky top-24">
              {/* Related Articles */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/blog/comparative-education-systems" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Comparing Education Systems: US vs. UK vs. Australia</h4>
                      <p className="text-sm text-gray-600 mt-1">Understand the key differences in academic structure...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ielts-exam-strategies" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">How to Ace Your IELTS Exam: Proven Strategies</h4>
                      <p className="text-sm text-gray-600 mt-1">Master the four sections of the IELTS exam...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/adapting-new-culture" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Cultural Adaptation: Tips for International Students</h4>
                      <p className="text-sm text-gray-600 mt-1">Practical advice for overcoming culture shock...</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Need Visa Application Help?</h3>
                <p className="text-blue-100 mb-4">Our visa specialists can guide you through every step of the process, from document preparation to interview coaching.</p>
                <Link href="/contact" className="block text-center py-2 px-4 bg-white text-primary hover:bg-blue-50 rounded-lg font-medium transition-colors">
                  Get Expert Assistance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 