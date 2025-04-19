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

export default function StudyGermanyTuitionFree() {
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
                Country Guides
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Guide to Studying in Germany Without Tuition Fees
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>May 12, 2023</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Dr. Michael Schmidt</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>9 min read</span>
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
              src="/media/Photos/building-8259184_1280.jpg"
              alt="German university building"
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
              <h2>Introduction to Tuition-Free Education in Germany</h2>
              <p>
                Germany has established itself as a premier destination for international students seeking quality education without the burden of high tuition fees. Unlike many countries where university education comes with a hefty price tag, most German public universities offer programs to international students without charging tuition fees, making it an attractive option for students worldwide.
              </p>
              <p>
                This unique approach to higher education stems from Germany's belief that education is a public good that should be accessible to all, regardless of financial background. While students typically pay a semester contribution (ranging from €150 to €350) that covers administrative costs, student services, and often includes a public transportation ticket, this amount is minimal compared to tuition fees in countries like the US, UK, or Australia.
              </p>

              <h2>Why Germany Offers Tuition-Free Education</h2>
              <p>
                Germany's decision to offer tuition-free education to both domestic and international students is driven by several factors:
              </p>
              <ul>
                <li><strong>Economic Strategy:</strong> Germany faces demographic challenges and a skilled labor shortage. By attracting talented international students, many of whom stay after graduation, Germany addresses these challenges while enhancing its workforce.</li>
                <li><strong>Cultural Exchange:</strong> International students bring diverse perspectives and contribute to the cultural fabric of German universities and society.</li>
                <li><strong>Research and Innovation:</strong> A diverse student body contributes to Germany's reputation as a hub for research and innovation.</li>
                <li><strong>Educational Philosophy:</strong> Germany views education as a right rather than a privilege, believing that financial barriers should not prevent qualified students from accessing higher education.</li>
              </ul>

              <h2>Eligibility Requirements for International Students</h2>
              <p>
                While German universities offer tuition-free education, there are specific requirements that international students must meet:
              </p>
              <h3>Academic Requirements</h3>
              <ul>
                <li><strong>Recognized Secondary School Certificate:</strong> Equivalent to the German Abitur (high school diploma)</li>
                <li><strong>University Entrance Qualification:</strong> Some students may need to complete a Studienkolleg (preparatory course) if their secondary education doesn't meet German standards</li>
                <li><strong>Previous Academic Records:</strong> Strong academic performance is generally expected</li>
              </ul>

              <h3>Language Requirements</h3>
              <ul>
                <li><strong>For German-taught Programs:</strong> Proficiency in German (typically TestDaF or DSH certification)</li>
                <li><strong>For English-taught Programs:</strong> Proficiency in English (TOEFL, IELTS, or equivalent)</li>
                <li><strong>Basic German Skills:</strong> Even for English-taught programs, basic German knowledge is beneficial for daily life</li>
              </ul>

              <h3>Financial Requirements</h3>
              <ul>
                <li><strong>Proof of Financial Resources:</strong> Currently about €11,208 per year (€934 per month) in a blocked account or scholarship confirmation</li>
                <li><strong>Semester Contribution:</strong> Approximately €150-€350 per semester</li>
                <li><strong>Health Insurance:</strong> Valid health insurance coverage is mandatory</li>
              </ul>

              <h2>Top Tuition-Free Universities in Germany</h2>
              <p>
                Germany boasts several world-class universities that offer tuition-free education to international students:
              </p>
              <ol>
                <li><strong>Technical University of Munich (TUM)</strong> - Consistently ranked among the top technical universities globally, offering programs in engineering, natural sciences, medicine, and social sciences.</li>
                <li><strong>Ludwig Maximilian University of Munich (LMU)</strong> - One of Germany's oldest and most prestigious universities with a wide range of programs.</li>
                <li><strong>Heidelberg University</strong> - Germany's oldest university, renowned for research and academic excellence across disciplines.</li>
                <li><strong>Humboldt University of Berlin</strong> - A historic institution in Germany's capital with strengths in humanities and social sciences.</li>
                <li><strong>RWTH Aachen University</strong> - One of Europe's leading science and research institutions, particularly strong in engineering.</li>
                <li><strong>University of Freiburg</strong> - Known for excellence in medicine, natural sciences, and humanities.</li>
              </ol>

              <h2>Application Process</h2>
              <p>
                The application process for German universities typically involves the following steps:
              </p>
              <ol>
                <li><strong>Research Programs and Universities:</strong> Find suitable programs that match your academic background and career goals.</li>
                <li><strong>Check Admission Requirements:</strong> Verify specific requirements for your chosen program.</li>
                <li><strong>Prepare Documentation:</strong> Gather necessary documents, including translated and certified copies of academic records.</li>
                <li><strong>Language Tests:</strong> Take required language proficiency tests (German or English).</li>
                <li><strong>Application Submission:</strong> Apply directly to the university or through uni-assist (a centralized application service for international students).</li>
                <li><strong>Wait for Admission Decision:</strong> Processing times vary by institution.</li>
                <li><strong>Apply for Student Visa:</strong> Once accepted, apply for a German student visa at the German embassy or consulate in your home country.</li>
                <li><strong>Arrange Accommodation:</strong> Secure housing before arrival (university dormitories, private apartments, or shared flats).</li>
                <li><strong>Enroll at the University:</strong> Complete enrollment procedures after arriving in Germany.</li>
              </ol>

              <h2>Living Costs and Financial Planning</h2>
              <p>
                While tuition might be free, living expenses in Germany need careful planning:
              </p>
              <ul>
                <li><strong>Accommodation:</strong> €300-€600 per month depending on the city and type of housing</li>
                <li><strong>Food:</strong> Approximately €200-€250 per month</li>
                <li><strong>Health Insurance:</strong> About €110 per month</li>
                <li><strong>Public Transportation:</strong> Often included in the semester contribution</li>
                <li><strong>Books and Study Materials:</strong> €50-€100 per month</li>
                <li><strong>Personal Expenses:</strong> €100-€200 per month</li>
              </ul>
              <p>
                Total monthly expenses typically range from €800 to €1,000, with higher costs in cities like Munich, Frankfurt, and Hamburg.
              </p>

              <h2>Part-Time Work Opportunities</h2>
              <p>
                International students in Germany are permitted to work part-time to supplement their finances:
              </p>
              <ul>
                <li>Students from EU/EEA countries have unrestricted work rights</li>
                <li>Non-EU/EEA students can work 120 full days or 240 half days per year</li>
                <li>Common student jobs include research assistants, waitstaff, retail, tutoring, and internships</li>
                <li>The minimum wage in Germany is currently €12.00 per hour</li>
              </ul>

              <h2>Post-Graduation Opportunities</h2>
              <p>
                After completing your studies in Germany, you have several options:
              </p>
              <ul>
                <li><strong>18-Month Job-Seeking Visa:</strong> International graduates can stay in Germany for up to 18 months to find employment related to their studies.</li>
                <li><strong>Employment:</strong> Once you secure a job related to your qualification, you can apply for a German work permit.</li>
                <li><strong>EU Blue Card:</strong> Available for highly qualified professionals with a job offer and minimum salary requirement.</li>
                <li><strong>Further Studies:</strong> Continue with a higher degree (Master's after Bachelor's, or PhD after Master's).</li>
                <li><strong>Entrepreneurship:</strong> Start a business in Germany with a special visa for entrepreneurs.</li>
              </ul>

              <h2>Tips for Success in the German University System</h2>
              <p>
                To thrive in German universities, consider these strategies:
              </p>
              <ul>
                <li><strong>Independent Learning:</strong> German universities emphasize self-directed study and independent research.</li>
                <li><strong>Language Skills:</strong> Continuously improve your German skills, even if your program is in English.</li>
                <li><strong>Academic Integrity:</strong> Understand and adhere to strict standards regarding plagiarism and academic honesty.</li>
                <li><strong>Networking:</strong> Build professional connections through internships, conferences, and university events.</li>
                <li><strong>Cultural Integration:</strong> Embrace German culture and participate in social activities to build a support network.</li>
                <li><strong>Time Management:</strong> Balance academic responsibilities with part-time work and social life.</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Studying in Germany offers a unique opportunity to obtain a high-quality education at minimal cost. While the application process requires careful planning and the academic environment demands discipline and independence, the benefits—quality education, international experience, career opportunities, and potential for long-term residence—make it an attractive option for students worldwide.
              </p>
              <p>
                With proper preparation and a clear understanding of the requirements and expectations, international students can successfully navigate Germany's tuition-free education system and lay the foundation for a promising global career.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 bg-primary">
                  <div className="h-full w-full flex items-center justify-center text-white text-2xl font-bold">
                    MS
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dr. Michael Schmidt</h3>
                  <p className="text-gray-600 text-sm mb-2">International Education Consultant</p>
                  <p className="text-gray-700">
                    Dr. Schmidt holds a PhD in International Education from Humboldt University and has advised over 500 students on studying in Germany. With 15+ years of experience in German higher education, he specializes in helping international students navigate admissions and visa processes.
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
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <Image 
                  src="/media/Photos/pexels-theshantanukr-16562727.jpg" 
                  alt="IELTS Exam Strategies" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Test Preparation</span>
                <h3 className="mt-2 text-lg font-semibold">
                  <Link href="/blog/ielts-exam-strategies" className="text-gray-900 hover:text-primary">
                    How to Ace Your IELTS Exam: Proven Strategies
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Master the four sections of the IELTS exam with these expert tips from our top instructors.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <Image 
                  src="/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg" 
                  alt="Scholarship Opportunities" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Scholarships</span>
                <h3 className="mt-2 text-lg font-semibold">
                  <Link href="/blog/scholarship-opportunities-2023" className="text-gray-900 hover:text-primary">
                    5 Scholarship Opportunities You Shouldn't Miss in 2023
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  From Fulbright to Commonwealth scholarships, learn about the most prestigious global funding opportunities.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <Image 
                  src="/media/Photos/pexels-pixabay-207684.jpg" 
                  alt="US Student Visa Guide" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Visa Guides</span>
                <h3 className="mt-2 text-lg font-semibold">
                  <Link href="/blog/us-student-visa-guide" className="text-gray-900 hover:text-primary">
                    The Ultimate Guide to U.S. Student Visa Application
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Navigate the complex F-1 visa application process with our step-by-step guide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-[#4F75C4] rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Study in Germany?</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Our team of expert counselors can guide you through the entire process, from university selection to visa application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 shadow-md"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/services/university-shortlisting" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300"
                >
                  Our University Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 