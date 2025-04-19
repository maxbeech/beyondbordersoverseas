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

export default function PostStudyWorkCanada() {
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
                Work Permits & Immigration
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Post-Study Work Options in Canada: The Complete Guide
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>January 20, 2023</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Olivia Martinez</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>12 min read</span>
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
              src="/media/Photos/toronto-2898200_1280.jpg"
              alt="Toronto cityscape"
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
              <h2>Understanding Canada's Appeal for International Graduates</h2>
              <p>
                Canada has emerged as one of the most attractive destinations for international students, not only for its world-class education but also for its welcoming immigration policies that offer clear pathways to work and permanent residency after graduation. Unlike many other countries, Canada has designed policies that actively encourage international graduates to stay, work, and contribute to the Canadian economy.
              </p>
              <p>
                This guide provides a comprehensive overview of post-study work options in Canada, eligibility requirements, application processes, and strategies for transitioning from international student to permanent resident. Whether you're currently studying in Canada or planning to enroll in a Canadian institution, understanding these pathways will help you maximize your opportunities after graduation.
              </p>

              <h2>Post-Graduation Work Permit (PGWP) Program</h2>
              <p>
                The cornerstone of Canada's post-study work options is the Post-Graduation Work Permit (PGWP) program, which allows international graduates from eligible Canadian institutions to obtain an open work permit to gain valuable Canadian work experience.
              </p>

              <h3>Eligibility Requirements</h3>
              <p>
                To qualify for a PGWP, you must:
              </p>
              <ul>
                <li>Have completed a full-time study program at a Designated Learning Institution (DLI) in Canada that was at least 8 months long</li>
                <li>Have graduated from a public post-secondary institution, a private post-secondary institution that operates under the same rules as public institutions, or a private institution authorized by provincial statute to confer degrees</li>
                <li>Apply for the PGWP within 180 days of receiving written confirmation (such as a transcript or official letter) that you've completed your study program</li>
                <li>Have had valid student status during your studies</li>
                <li>Have not previously been issued a PGWP (the program is a one-time opportunity)</li>
              </ul>

              <h3>Duration of the PGWP</h3>
              <p>
                The length of your PGWP depends on the duration of your study program:
              </p>
              <ul>
                <li><strong>Programs less than 8 months:</strong> Not eligible for PGWP</li>
                <li><strong>Programs 8 months to less than 2 years:</strong> PGWP may be issued for the same length as the study program</li>
                <li><strong>Programs 2 years or longer:</strong> PGWP may be issued for 3 years</li>
                <li><strong>Multiple programs:</strong> If you completed more than one eligible program, you may be able to get a PGWP that combines the length of each program</li>
              </ul>
              <p>
                This duration flexibility is one of the key advantages of Canada's system, as it provides significant time for graduates to gain meaningful work experience.
              </p>

              <h3>Application Process</h3>
              <p>
                You can apply for a PGWP either online or on paper. The application process typically includes:
              </p>
              <ol>
                <li><strong>Gather Documentation:</strong> Letter of completion or transcript, copy of study permit, passport, application form, and processing fee (CAD 255 as of 2023)</li>
                <li><strong>Submit Application:</strong> Apply through the Immigration, Refugees and Citizenship Canada (IRCC) online portal or send a paper application</li>
                <li><strong>Biometrics:</strong> You may need to provide fingerprints and a photo if you haven't done so for a previous application</li>
                <li><strong>Processing:</strong> Current processing times vary but typically range from 2-3 months</li>
              </ol>
              <p>
                <strong>Important Note:</strong> You can start working full-time as soon as you submit your PGWP application if you had a valid study permit when you completed your program and you meet all PGWP eligibility requirements.
              </p>

              <h2>Transitioning from PGWP to Permanent Residency</h2>
              <p>
                The PGWP is designed as a stepping stone to permanent residency in Canada. After gaining Canadian work experience, you become eligible for several immigration pathways.
              </p>

              <h3>Express Entry System</h3>
              <p>
                The Express Entry system manages applications for three federal economic immigration programs:
              </p>
              <ul>
                <li><strong>Federal Skilled Worker Program (FSWP)</strong></li>
                <li><strong>Federal Skilled Trades Program (FSTP)</strong></li>
                <li><strong>Canadian Experience Class (CEC)</strong> – Most relevant for PGWP holders</li>
              </ul>
              <p>
                The Canadian Experience Class is particularly favorable for international graduates with PGWP work experience. To qualify under CEC, you need:
              </p>
              <ul>
                <li>At least 12 months of full-time (or equivalent part-time) skilled work experience in Canada within the 3 years before applying</li>
                <li>The work experience must be in National Occupational Classification (NOC) skill type 0, or skill level A or B (managerial, professional, or technical jobs and skilled trades)</li>
                <li>Meet or exceed the required language levels (minimum CLB 7 for NOC 0 or A jobs, or CLB 5 for NOC B jobs)</li>
              </ul>
              <p>
                The Express Entry system uses a Comprehensive Ranking System (CRS) to score candidates. Factors that boost your CRS score include:
              </p>
              <ul>
                <li>Higher education level (bachelor's, master's, or doctoral degree)</li>
                <li>Strong language skills in English and/or French</li>
                <li>Canadian work experience</li>
                <li>Being younger (with maximum points for ages 20-29)</li>
                <li>Having a provincial nomination (adds 600 points)</li>
                <li>Having a valid job offer from a Canadian employer (adds 50 or 200 points depending on the job)</li>
              </ul>

              <h3>Provincial Nominee Programs (PNPs)</h3>
              <p>
                Each Canadian province and territory (except Quebec, which has its own immigration system) operates its own Provincial Nominee Program. Many PNPs have specific streams targeting international graduates, often with lower requirements than federal programs.
              </p>
              <p>
                Notable PNP streams for international graduates include:
              </p>
              <ul>
                <li><strong>British Columbia PNP - International Graduate Stream:</strong> For graduates from eligible B.C. institutions with job offers in skilled occupations</li>
                <li><strong>Ontario Immigrant Nominee Program (OINP) - International Student Stream:</strong> For graduates from eligible Ontario institutions with job offers</li>
                <li><strong>Alberta Advantage Immigration Program - Graduate Entrepreneur Stream:</strong> For graduates who want to establish or operate a business in Alberta</li>
                <li><strong>Manitoba Provincial Nominee Program - Career Employment Pathway:</strong> For graduates from Manitoba institutions with long-term job offers</li>
                <li><strong>Nova Scotia Nominee Program - International Graduate Entrepreneur Stream:</strong> For graduates who have started or bought a business in Nova Scotia</li>
              </ul>
              <p>
                A provincial nomination adds 600 points to your CRS score in Express Entry, virtually guaranteeing an invitation to apply for permanent residency.
              </p>

              <h3>Quebec's Immigration Programs</h3>
              <p>
                Quebec manages its own immigration system with specific programs for international graduates:
              </p>
              <ul>
                <li><strong>Quebec Experience Program (PEQ):</strong> For graduates from eligible Quebec institutions who meet French language requirements</li>
                <li><strong>Quebec Regular Skilled Worker Program:</strong> Points-based system that favors graduates from Quebec institutions</li>
              </ul>
              <p>
                International graduates from Quebec institutions should note that French language proficiency is generally required for Quebec's immigration pathways.
              </p>

              <h2>Finding Employment on a PGWP</h2>
              <p>
                Securing relevant employment is crucial for both financial stability and for building the necessary experience to qualify for permanent residency.
              </p>

              <h3>Job Search Strategies</h3>
              <p>
                Effective strategies for international graduates include:
              </p>
              <ul>
                <li><strong>Leverage Campus Resources:</strong> University career centers often provide job search assistance, resume reviews, and interview preparation specifically tailored to international students</li>
                <li><strong>Build a Professional Network:</strong> Attend industry events, join professional associations, and connect with alumni to expand your network</li>
                <li><strong>Co-op and Internship Experience:</strong> Previous co-op or internship experience during your studies can often lead to full-time employment opportunities</li>
                <li><strong>Target In-Demand Sectors:</strong> Research industries with labor shortages in Canada, such as information technology, healthcare, and skilled trades</li>
                <li><strong>Consider Location Strategy:</strong> Be open to opportunities in smaller cities or rural areas where competition may be less fierce and some PNPs have lower thresholds</li>
                <li><strong>Canadian-Style Resume and Cover Letter:</strong> Adapt your application materials to Canadian expectations, which may differ from those in your home country</li>
              </ul>

              <h3>Understanding Canadian Workplace Culture</h3>
              <p>
                Success in the Canadian workplace involves understanding cultural norms:
              </p>
              <ul>
                <li>Communication styles tend to be direct but polite</li>
                <li>Punctuality is highly valued</li>
                <li>Teamwork and collaboration are emphasized</li>
                <li>Work-life balance is generally respected</li>
                <li>Hierarchies exist but are often less rigid than in some other countries</li>
                <li>Initiative and independent problem-solving are appreciated</li>
              </ul>

              <h2>Special Programs and Options</h2>
              <p>
                Beyond the standard PGWP and permanent residency pathways, Canada offers several specialized programs:
              </p>

              <h3>Start-up Visa Program</h3>
              <p>
                For entrepreneurial graduates, the Start-up Visa Program offers permanent residency if you:
              </p>
              <ul>
                <li>Have a qualifying business</li>
                <li>Secure a letter of support from a designated organization (venture capital fund, angel investor group, or business incubator)</li>
                <li>Meet language requirements (minimum CLB 5)</li>
                <li>Have sufficient settlement funds</li>
              </ul>

              <h3>Global Talent Stream</h3>
              <p>
                Part of the Temporary Foreign Worker Program, the Global Talent Stream provides expedited work permits (processing within 2 weeks) for highly skilled individuals in specific in-demand occupations, particularly in technology.
              </p>

              <h3>Self-Employed Persons Program</h3>
              <p>
                For graduates with exceptional abilities in cultural activities, athletics, or farm management, this program offers permanent residency without the need for Canadian work experience.
              </p>

              <h3>Spousal Open Work Permits</h3>
              <p>
                If your spouse or common-law partner is a Canadian citizen, permanent resident, or has a valid study or work permit, you may be eligible for an open work permit that allows you to work for any employer.
              </p>

              <h2>Common Challenges and Solutions</h2>
              
              <h3>Limited Time to Find Qualifying Work</h3>
              <p>
                <strong>Challenge:</strong> The PGWP has a fixed duration, creating pressure to find qualifying work quickly.
              </p>
              <p>
                <strong>Solution:</strong> Begin your job search before graduation, utilize career services, consider short-term positions to build experience, and be flexible with location and starting positions.
              </p>

              <h3>Meeting Language Requirements</h3>
              <p>
                <strong>Challenge:</strong> Language requirements for permanent residency can be stringent, especially for Express Entry.
              </p>
              <p>
                <strong>Solution:</strong> Continue improving your language skills even after graduation through conversation groups, advanced courses, or language exchange programs. Take practice tests before your official language exams.
              </p>

              <h3>Navigating Complex Immigration Processes</h3>
              <p>
                <strong>Challenge:</strong> Immigration rules can be complex and subject to change.
              </p>
              <p>
                <strong>Solution:</strong> Regularly check the IRCC website for updates, consider consulting with a regulated immigration consultant or lawyer for complex cases, and attend immigration information sessions offered by many institutions.
              </p>

              <h3>Credential Recognition</h3>
              <p>
                <strong>Challenge:</strong> Some employers may not recognize foreign qualifications that preceded your Canadian education.
              </p>
              <p>
                <strong>Solution:</strong> Obtain credential assessments if necessary, emphasize your Canadian education and experiences, and seek out bridging programs designed to help international professionals integrate into the Canadian workforce.
              </p>

              <h2>Recent Changes and Future Outlook</h2>
              <p>
                Canada's immigration landscape continues to evolve. Recent and anticipated developments include:
              </p>
              <ul>
                <li><strong>Increased Immigration Targets:</strong> Canada has announced higher immigration targets for the coming years, with a significant focus on economic immigration</li>
                <li><strong>Digital Platform Modernization:</strong> IRCC is investing in digital transformation to improve application processing times</li>
                <li><strong>Focus on Specific Sectors:</strong> Increased emphasis on attracting graduates in healthcare, technology, clean energy, and other strategic sectors</li>
                <li><strong>Regional Distribution Initiatives:</strong> Greater focus on directing immigrants to regions outside major urban centers</li>
              </ul>

              <h2>Success Stories and Case Studies</h2>

              <h3>Case Study: From International Student to Tech Professional</h3>
              <p>
                Raj came to Canada from India to pursue a master's degree in Computer Science at the University of Waterloo. During his studies, he completed two co-op terms with a tech company in Kitchener. After graduation, the company hired him full-time on a PGWP. After one year of work experience, Raj qualified for the Canadian Experience Class and received his permanent residency within 6 months of applying through Express Entry.
              </p>
              <p>
                <strong>Key Success Factors:</strong> In-demand field of study, co-op experience leading to full-time employment, and quick action on applying for permanent residency once eligible.
              </p>

              <h3>Case Study: From Student to Entrepreneur</h3>
              <p>
                Sophia, from Brazil, completed a Business Management program at a college in Toronto. Unable to find immediate employment, she started a digital marketing agency focused on helping Canadian businesses reach Latin American markets. Her business plan was accepted by a designated business incubator, allowing her to apply through the Start-up Visa Program and receive permanent residency.
              </p>
              <p>
                <strong>Key Success Factors:</strong> Identifying a market niche, leveraging cultural and language skills, and utilizing alternative immigration pathways.
              </p>

              <h2>Conclusion</h2>
              <p>
                Canada's post-study work options offer international graduates exceptional opportunities to build careers and establish permanent lives in Canada. The integration of study permits, post-graduation work permits, and various pathways to permanent residency creates a clear and logical progression for those who wish to immigrate to Canada through the education route.
              </p>
              <p>
                With proper planning, an understanding of the requirements, and strategic career decisions, international graduates can successfully navigate the transition from student to permanent resident. Canada's continued commitment to attracting and retaining international talent suggests that these pathways will remain accessible and may even become more streamlined in the future.
              </p>
              <p>
                For those considering studying in Canada, the post-graduation opportunities should be factored into your decision-making process, as they represent a significant advantage of the Canadian education system compared to many other international study destinations.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 bg-primary">
                  <div className="h-full w-full flex items-center justify-center text-white text-2xl font-bold">
                    OM
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Olivia Martinez</h3>
                  <p className="text-gray-600 text-sm mb-2">Immigration Consultant</p>
                  <p className="text-gray-700">
                    Olivia Martinez is a Regulated Canadian Immigration Consultant (RCIC) with over 8 years of experience specializing in student transitions to permanent residency. A former international student herself, she founded CanGrad Immigration Services, which has helped hundreds of international graduates successfully navigate their immigration journey in Canada.
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
                    <Link href="/blog/us-student-visa-guide" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">The Ultimate Guide to U.S. Student Visa Application</h4>
                      <p className="text-sm text-gray-600 mt-1">Everything you need to know about F-1 visas...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/comparative-education-systems" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Comparing Education Systems: US vs. UK vs. Australia</h4>
                      <p className="text-sm text-gray-600 mt-1">Understand the key differences in academic structure...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/adapting-new-culture" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Cultural Adaptation: Tips for International Students</h4>
                      <p className="text-sm text-gray-600 mt-1">Navigate cultural differences with confidence...</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Immigration Assessment</h3>
                <p className="text-blue-100 mb-4">Wondering if you qualify for Canadian permanent residency? Get a personalized assessment of your immigration options.</p>
                <Link href="/contact" className="block text-center py-2 px-4 bg-white text-primary hover:bg-blue-50 rounded-lg font-medium transition-colors">
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 