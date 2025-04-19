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

export default function ScholarshipOpportunities2023() {
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
                Scholarships
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                5 Scholarship Opportunities You Shouldn't Miss in 2023
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>April 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Jennifer Lee</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>6 min read</span>
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
              src="/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg"
              alt="Student receiving scholarship"
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
              <h2>The Life-Changing Impact of Scholarships</h2>
              <p>
                Securing a scholarship can make a significant difference in your study abroad journey, transforming what might seem like an unattainable dream into a tangible reality. Beyond the obvious financial benefits, scholarships often provide networking opportunities, mentorship, and prestige that can enhance your academic journey and future career prospects.
              </p>
              <p>
                In this article, we'll explore five prestigious global scholarship opportunities with approaching deadlines in 2023. We'll cover eligibility requirements, application processes, benefits, and strategies for crafting a competitive application. Whether you're an undergraduate student looking to study abroad for the first time or a professional seeking to advance your education, these opportunities could be your gateway to a transformative international education experience.
              </p>

              <h2>1. Fulbright Foreign Student Program</h2>
              <h3>Overview</h3>
              <p>
                The Fulbright Program is one of the most recognized and prestigious scholarship programs globally, sponsored by the U.S. Department of State. The Foreign Student Program brings citizens of other countries to the United States for master's degree or Ph.D. studies at U.S. universities.
              </p>

              <h3>Eligibility</h3>
              <ul>
                <li>Citizenship in a country with an active Fulbright Foreign Student Program</li>
                <li>Minimum of a bachelor's degree or equivalent</li>
                <li>Sufficient English proficiency for graduate-level study</li>
                <li>Typically requires at least 2 years of professional work experience after undergraduate studies (varies by country)</li>
              </ul>

              <h3>Benefits</h3>
              <ul>
                <li>Full tuition coverage</li>
                <li>Monthly stipend for living expenses</li>
                <li>Health insurance</li>
                <li>Book and equipment allowances</li>
                <li>Round-trip airfare to the host country</li>
                <li>Opportunities for professional development and cultural exchange</li>
              </ul>

              <h3>Application Strategy</h3>
              <p>
                The Fulbright application process is highly competitive and comprehensive. Successful applicants typically demonstrate:
              </p>
              <ul>
                <li><strong>Clear Academic Goals:</strong> Articulate how your proposed study aligns with your long-term career objectives.</li>
                <li><strong>Community Impact:</strong> Explain how you plan to contribute to your home country upon return.</li>
                <li><strong>Cultural Ambassadorship:</strong> Demonstrate your potential to serve as a cultural ambassador between your country and the United States.</li>
                <li><strong>Academic Excellence:</strong> Strong academic records, particularly in your field of study.</li>
                <li><strong>Professional Experience:</strong> Relevant work experience that enhances your academic goals.</li>
              </ul>

              <p>
                Application deadlines vary by country, so check with your local Fulbright Commission or U.S. Embassy for specific dates, typically 12-18 months before the intended start date.
              </p>

              <h2>2. Commonwealth Scholarship and Fellowship Plan</h2>
              <h3>Overview</h3>
              <p>
                The Commonwealth Scholarship and Fellowship Plan (CSFP) is an international program under which member governments offer scholarships and fellowships to citizens of other Commonwealth countries. The UK's Commonwealth Scholarships are particularly prestigious and well-funded.
              </p>

              <h3>Eligibility</h3>
              <ul>
                <li>Citizenship in a Commonwealth country</li>
                <li>Permanent residency in a Commonwealth country</li>
                <li>Typically requires a first degree of at least upper second class (2:1) honors standard</li>
                <li>Cannot have previously received a Commonwealth Scholarship for the same level of study</li>
              </ul>

              <h3>Benefits</h3>
              <ul>
                <li>Full tuition fees</li>
                <li>Monthly stipend (living allowance)</li>
                <li>Travel expenses to and from the UK</li>
                <li>Research support grant (for PhD scholars)</li>
                <li>Thesis grant (for doctoral candidates)</li>
                <li>Study travel grant for academic purposes</li>
                <li>Family allowances (if applicable)</li>
              </ul>

              <h3>Application Strategy</h3>
              <p>
                Commonwealth Scholarships are highly competitive, with selection criteria focusing on:
              </p>
              <ul>
                <li><strong>Academic Merit:</strong> Exceptional academic achievements and potential.</li>
                <li><strong>Quality of Research Proposal:</strong> For research degrees, a well-developed and feasible research plan.</li>
                <li><strong>Development Impact:</strong> Clear explanation of how your studies will contribute to sustainable development in your home country.</li>
                <li><strong>Professional Networks:</strong> Demonstrating how you'll use and strengthen professional networks in your field.</li>
                <li><strong>Career Plan:</strong> A clear vision for applying your acquired knowledge upon returning home.</li>
              </ul>

              <p>
                Applications typically open in August and close in October for studies beginning the following academic year.
              </p>

              <h2>3. Chevening Scholarships</h2>
              <h3>Overview</h3>
              <p>
                Chevening is the UK government's international awards program aimed at developing global leaders. Funded by the Foreign, Commonwealth and Development Office (FCDO) and partner organizations, Chevening offers fully-funded scholarships for one-year master's degrees at any UK university.
              </p>

              <h3>Eligibility</h3>
              <ul>
                <li>Citizenship in a Chevening-eligible country or territory</li>
                <li>Return to your home country for at least two years after your scholarship ends</li>
                <li>At least two years of work experience (equivalent to 2,800 hours)</li>
                <li>Bachelor's degree that will enable entry to a postgraduate program at a UK university</li>
                <li>Meet the Chevening English language requirement by a specified deadline</li>
              </ul>

              <h3>Benefits</h3>
              <ul>
                <li>Full tuition fees</li>
                <li>Monthly stipend</li>
                <li>Travel costs to and from the UK</li>
                <li>Arrival allowance</li>
                <li>Homeward departure allowance</li>
                <li>Cost of one visa application</li>
                <li>Travel grant for attending Chevening events in the UK</li>
              </ul>

              <h3>Application Strategy</h3>
              <p>
                Chevening looks for applicants who demonstrate:
              </p>
              <ul>
                <li><strong>Leadership and Influence:</strong> Evidence of your potential to be a future leader in your field.</li>
                <li><strong>Networking Abilities:</strong> Skills in building and maintaining relationships.</li>
                <li><strong>Personal, Academic, and Professional Achievements:</strong> A track record of success and ambition.</li>
                <li><strong>Commitment to Development:</strong> A clear vision for how your studies will benefit your home country.</li>
              </ul>

              <p>
                Applications typically open in early August and close in early November each year, with studies commencing in September/October the following year.
              </p>

              <h2>4. DAAD Scholarships (German Academic Exchange Service)</h2>
              <h3>Overview</h3>
              <p>
                The German Academic Exchange Service (DAAD) is the largest German support organization in the field of international academic cooperation. DAAD offers a wide range of scholarships for international students to study in Germany at various levels.
              </p>

              <h3>Eligibility</h3>
              <ul>
                <li>Requirements vary by program but generally include:</li>
                <li>Bachelor's degree (for master's scholarships) or master's degree (for doctoral scholarships)</li>
                <li>Strong academic record (typically among the top 30% of your class)</li>
                <li>Language proficiency in German or English, depending on the program</li>
                <li>Some programs have country-specific requirements or preferences</li>
              </ul>

              <h3>Benefits</h3>
              <ul>
                <li>Monthly stipend (€850-€1,200 depending on academic level)</li>
                <li>Health, accident, and personal liability insurance</li>
                <li>Travel subsidy</li>
                <li>One-off study allowance</li>
                <li>Monthly rent subsidy and family allowance (if applicable)</li>
                <li>German language course (2-6 months) before the start of the academic program</li>
              </ul>

              <h3>Application Strategy</h3>
              <p>
                DAAD places high value on:
              </p>
              <ul>
                <li><strong>Academic Excellence:</strong> Outstanding academic records and references.</li>
                <li><strong>Compelling Research Proposal:</strong> For research grants, a well-structured and feasible research plan.</li>
                <li><strong>Relevance to Development:</strong> How your study or research will contribute to the development of your home country.</li>
                <li><strong>German Connection:</strong> Demonstrating interest in German culture, language, or academic traditions can strengthen your application.</li>
              </ul>

              <p>
                Deadlines vary by program but are typically between October and December for programs starting the following academic year.
              </p>

              <h2>5. Orange Knowledge Programme</h2>
              <h3>Overview</h3>
              <p>
                The Orange Knowledge Programme (OKP) is funded by the Dutch Ministry of Foreign Affairs and managed by Nuffic. It offers scholarships for short courses (up to 12 months) and master's programs (12-24 months) at participating Dutch institutions.
              </p>

              <h3>Eligibility</h3>
              <ul>
                <li>Citizenship and residence in one of the 53 OKP countries</li>
                <li>Maximum age limit of 45 years at the time of application (for some scholarships)</li>
                <li>At least two years of relevant work experience</li>
                <li>Employer's statement supporting your scholarship application</li>
                <li>Not have received an OKP scholarship in the past</li>
              </ul>

              <h3>Benefits</h3>
              <ul>
                <li>Tuition fees</li>
                <li>Living allowances</li>
                <li>International travel costs</li>
                <li>Health insurance</li>
                <li>Visa costs</li>
                <li>Arrival and departure allowances</li>
              </ul>

              <h3>Application Strategy</h3>
              <p>
                Successful OKP applicants generally demonstrate:
              </p>
              <ul>
                <li><strong>Professional Relevance:</strong> Clear connection between your current work, the chosen program, and future career plans.</li>
                <li><strong>Employer Support:</strong> Strong endorsement from your employer, showing institutional backing.</li>
                <li><strong>Development Impact:</strong> How your study will contribute to your organization and broader development goals in your country.</li>
                <li><strong>Gender and Geographical Balance:</strong> The program aims for diversity and may prioritize underrepresented regions or genders.</li>
              </ul>

              <p>
                The OKP has multiple application deadlines throughout the year, depending on the specific program and host institution.
              </p>

              <h2>Crafting a Winning Scholarship Application</h2>
              <p>
                Regardless of which scholarship you're applying for, these universal tips can help strengthen your application:
              </p>

              <h3>Start Early</h3>
              <p>
                Begin your preparation at least 6-12 months before the application deadline. This gives you ample time to:
              </p>
              <ul>
                <li>Research programs thoroughly</li>
                <li>Prepare for and take language proficiency tests</li>
                <li>Secure strong recommendation letters</li>
                <li>Draft, revise, and perfect your personal statement or research proposal</li>
                <li>Gather and authenticate necessary documents</li>
              </ul>

              <h3>Tell Your Unique Story</h3>
              <p>
                Scholarship committees review thousands of applications from academically qualified candidates. What will make yours stand out is your personal narrative:
              </p>
              <ul>
                <li>Connect your past experiences, current goals, and future aspirations into a compelling story</li>
                <li>Highlight challenges you've overcome that demonstrate resilience and determination</li>
                <li>Show, don't tell—use specific examples rather than general statements</li>
                <li>Explain how this particular scholarship and program aligns with your unique journey</li>
              </ul>

              <h3>Emphasize Impact and Multiplier Effect</h3>
              <p>
                Most prestigious scholarships aim to develop future leaders who will create positive change:
              </p>
              <ul>
                <li>Clearly articulate how you plan to use your education to benefit your community and country</li>
                <li>Provide specific examples of how you've already demonstrated leadership and created impact</li>
                <li>Explain how the knowledge and networks gained will create a multiplier effect</li>
              </ul>

              <h3>Seek Feedback</h3>
              <p>
                Before submitting your application:
              </p>
              <ul>
                <li>Have professors, mentors, or advisors review your application materials</li>
                <li>If possible, connect with past scholarship recipients for insights</li>
                <li>Use your university's career or international education office for guidance</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                These five scholarship opportunities represent some of the most prestigious and comprehensive funding options for international education in 2023. While the application processes are demanding and competition is fierce, the rewards—both financial and professional—make them well worth pursuing.
              </p>
              <p>
                Remember that scholarship applications often require multiple components and careful attention to deadlines. Start early, be meticulous in your preparation, and present your authentic self and vision. Even if you're not successful in your first application, the process itself is valuable, helping you refine your academic and career goals while developing important skills.
              </p>
              <p>
                With careful preparation, strategic thinking, and genuine passion, you can position yourself as a strong candidate for these life-changing opportunities. Good luck with your applications!
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 bg-primary">
                  <div className="h-full w-full flex items-center justify-center text-white text-2xl font-bold">
                    JL
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Jennifer Lee</h3>
                  <p className="text-gray-600 text-sm mb-2">Scholarship & Funding Specialist</p>
                  <p className="text-gray-700">
                    Jennifer Lee has over a decade of experience in international education and scholarship advising. As a former Fulbright and Commonwealth Scholarship recipient, she has firsthand experience with the application process and has since helped hundreds of students secure prestigious scholarships for international study.
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
                    <Link href="/blog/study-germany-tuition-free" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Complete Guide to Studying in Germany Without Tuition Fees</h4>
                      <p className="text-sm text-gray-600 mt-1">Discover how to access Germany's world-class education...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/engineering-programs-abroad" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Top Engineering Programs for International Students in 2023</h4>
                      <p className="text-sm text-gray-600 mt-1">An in-depth look at the most prestigious engineering programs...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ielts-exam-strategies" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">How to Ace Your IELTS Exam: Proven Strategies</h4>
                      <p className="text-sm text-gray-600 mt-1">Master the four sections of the IELTS exam...</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Need Scholarship Guidance?</h3>
                <p className="text-blue-100 mb-4">Our scholarship specialists can help you identify opportunities and craft winning applications.</p>
                <Link href="/contact" className="block text-center py-2 px-4 bg-white text-primary hover:bg-blue-50 rounded-lg font-medium transition-colors">
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 