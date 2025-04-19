'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BanknotesIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

// Animation component
const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  className?: string;
}> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  className = "" 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Feature card component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, title, description, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-xl shadow-md p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div className="p-3 bg-[#69AFFD]/10 rounded-xl w-fit mb-4 text-[#1F4091]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

// Loan option card component
interface LoanOptionCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  delay?: number;
}

const LoanOptionCard: React.FC<LoanOptionCardProps> = ({ 
  title, description, features, image, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F4091]/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="p-6 flex-grow">
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-[#F09022]">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <p className="ml-3 text-gray-700 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

// Scholarship card component
interface ScholarshipCardProps {
  title: string;
  amount: string;
  description: string;
  eligibility: string[];
  delay?: number;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ 
  title, amount, description, eligibility, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#F09022]">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[#1F4091]">{title}</h3>
          <div className="bg-[#69AFFD]/10 px-3 py-1 rounded-md text-[#1F4091] font-semibold">
            {amount}
          </div>
        </div>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        <div className="space-y-2">
          <h4 className="font-medium text-[#1F4091]">Eligibility Criteria:</h4>
          {eligibility.map((item, index) => (
            <div key={index} className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
              <p className="ml-2 text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default function LoansFinance() {
  // Loan options data
  const loanOptions = [
    {
      title: "Education Loans with Collateral",
      description: "Secured education loans that offer lower interest rates and higher loan amounts for students with eligible collateral.",
      features: [
        "Interest rates starting from 8% per annum",
        "Loan amount up to 100% of course fee + living expenses",
        "Repayment period of 7-15 years with flexible EMI options",
        "Moratorium period covering course duration + 6 months",
        "Tax benefits under Section 80E applicable"
      ],
      image: "/media/Photos/pexels-kelly-1179532-2881370.jpg"
    },
    {
      title: "Education Loans without Collateral",
      description: "Unsecured education loans that offer quicker processing for students without collateral, suitable for courses with high employability.",
      features: [
        "Interest rates starting from 10.5% per annum",
        "Loan amount up to ₹40 lakhs / $50,000",
        "Repayment period of 5-10 years",
        "Co-applicant with steady income required",
        "Digital process with minimal documentation"
      ],
      image: "/media/Photos/pexels-pixabay-256455.jpg"
    },
    {
      title: "Specialized International Student Loans",
      description: "Loans specifically designed for international students through partnerships with global lending institutions and universities.",
      features: [
        "Country-specific loan programs with optimized terms",
        "Co-signer options from destination countries available",
        "Currency hedging options to manage exchange rate risks",
        "Pre-approved loans aligned with university acceptance",
        "Integrated with scholarship and grant opportunities"
      ],
      image: "/media/Photos/pexels-pixabay-207684.jpg"
    }
  ];

  // Scholarship options data
  const scholarshipOptions = [
    {
      title: "Merit-Based Country Scholarships",
      amount: "Up to 100% tuition",
      description: "Highly competitive scholarships offered by governments for international students with outstanding academic performance.",
      eligibility: [
        "Outstanding academic record (typically top 10% of class)",
        "Strong standardized test scores",
        "Proven leadership and extracurricular achievements",
        "Clear statement of purpose aligned with host country objectives"
      ]
    },
    {
      title: "University-Specific Scholarships",
      amount: "20-50% tuition waiver",
      description: "Scholarships offered directly by universities to attract talented international students to their programs.",
      eligibility: [
        "Academic performance meeting university criteria",
        "Early application submission",
        "Program-specific requirements (portfolio, projects, etc.)",
        "Demonstrated interest in the university through application quality"
      ]
    },
    {
      title: "Need-Based Financial Aid",
      amount: "Varies by financial need",
      description: "Financial assistance based on demonstrated financial need rather than solely academic merit.",
      eligibility: [
        "Documented financial need through family income statements",
        "Academic standing meeting minimum requirements",
        "Complete financial documentation with application",
        "Timely submission of all required financial forms"
      ]
    },
    {
      title: "Field-Specific Scholarships",
      amount: "Partial to full funding",
      description: "Scholarships targeting students in specific fields of study, often in STEM, healthcare, or other priority areas.",
      eligibility: [
        "Enrollment in qualifying programs (STEM, medicine, etc.)",
        "Academic excellence in the specific field",
        "Research or work experience in the relevant area",
        "Commitment to work in the field post-graduation"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/pexels-kelly-1179532-2881370.jpg"
            alt="Loans & Finance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4091]/90 to-[#1F4091]/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              className="inline-block bg-[#F09022] text-white px-3 py-1 text-sm font-medium rounded-md mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Services
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Loans & Finance
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Securing optimal financial solutions to fund your international education journey without financial stress.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Financial Guidance
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-6">
                  Finance Your Global Education Dreams
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Financing should never be a barrier to your international education aspirations. At Beyond Borders Overseas, we understand that navigating the financial aspects of studying abroad can be complex and overwhelming.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Our specialized financial advisory services help you explore and secure optimal funding options, including education loans, scholarships, grants, and financial aid packages tailored to your specific situation and needs.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-700 mb-8">
                  With our extensive network of banking partners and institutional connections across the globe, we provide you with access to competitive loan terms, exclusive scholarship opportunities, and comprehensive guidance on managing your education investment wisely.
                </p>
              </FadeIn>
              
              <div className="space-y-4">
                <FadeIn delay={0.4}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">Personalized financial planning</span> based on your budget and country of study
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.45}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">Partnerships with 30+ financial institutions</span> for exclusive education loan options
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">Expert scholarship application support</span> to maximize financial aid opportunities
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.55}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">End-to-end documentation assistance</span> for smooth loan processing
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg" 
                    alt="Financial planning for international students"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-[280px]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[#1F4091] font-bold">Success Rate</div>
                    <div className="text-[#F09022] font-bold">95%</div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    of our students successfully secure funding for their international education through our guidance.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Financial Services Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#F09022]/10 -mb-32 -mr-32"></div>
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-[#69AFFD]/10 -ml-16"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Our Comprehensive Financial Services
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end financial guidance and support for your international education journey
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BanknotesIcon className="h-6 w-6" />}
              title="Education Loan Guidance"
              description="We connect you with optimal education loan options from our partner banks and financial institutions, ensuring competitive interest rates and favorable terms for your specific needs."
              delay={0.2}
            />
            <FeatureCard
              icon={<AcademicCapIcon className="h-6 w-6" />}
              title="Scholarship Application Support"
              description="Our experts help you identify and apply for relevant scholarships, prepare compelling applications, and maximize your chances of securing merit-based and need-based financial aid."
              delay={0.3}
            />
            <FeatureCard
              icon={<DocumentTextIcon className="h-6 w-6" />}
              title="Documentation Assistance"
              description="We provide comprehensive support with loan documentation, including income proofs, collateral papers, financial statements, and other required paperwork for swift loan processing."
              delay={0.4}
            />
            <FeatureCard
              icon={<CalculatorIcon className="h-6 w-6" />}
              title="Financial Planning"
              description="Our counselors help you create a detailed financial plan covering tuition fees, living expenses, insurance, travel costs, and emergency funds to ensure a stress-free study abroad experience."
              delay={0.5}
            />
            <FeatureCard
              icon={<ClipboardDocumentCheckIcon className="h-6 w-6" />}
              title="Loan Comparison Services"
              description="We compare multiple loan options across parameters like interest rates, processing fees, repayment terms, and visa approval compatibility to help you make informed decisions."
              delay={0.6}
            />
            <FeatureCard
              icon={<ShieldCheckIcon className="h-6 w-6" />}
              title="Forex Advisory"
              description="We provide guidance on managing foreign exchange requirements, including currency conversion strategies, remittance procedures, and hedging options to protect against currency fluctuations."
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Loan Options Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Education Loan Options
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore tailored education loan solutions to finance your international studies
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanOptions.map((option, index) => (
              <LoanOptionCard
                key={option.title}
                title={option.title}
                description={option.description}
                features={option.features}
                image={option.image}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Our Loan Processing Approach
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined process to secure your education financing
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {/* Connecting line (visible on lg and above) */}
            <div className="hidden lg:block absolute top-1/2 left-[60px] right-[60px] h-1 bg-gradient-to-r from-[#69AFFD] via-[#1F4091] to-[#F09022] z-0 rounded-full"></div>
            
            <FadeIn delay={0.2}>
              <div className="relative z-10">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-white mb-4 mx-auto shadow-lg bg-gradient-to-r from-[#69AFFD] to-[#1F4091]">
                  1
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h3 className="text-lg font-semibold text-[#1F4091] mb-3">Financial Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    We evaluate your financial situation, budget constraints, and funding needs to determine the most suitable loan options.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="relative z-10">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-white mb-4 mx-auto shadow-lg bg-gradient-to-r from-[#69AFFD] to-[#1F4091]">
                  2
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h3 className="text-lg font-semibold text-[#1F4091] mb-3">Loan Recommendation</h3>
                  <p className="text-gray-600 text-sm">
                    Our experts recommend the most suitable loan products from our partner institutions based on your profile and requirements.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="relative z-10">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-white mb-4 mx-auto shadow-lg bg-gradient-to-r from-[#69AFFD] to-[#1F4091]">
                  3
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h3 className="text-lg font-semibold text-[#1F4091] mb-3">Documentation Support</h3>
                  <p className="text-gray-600 text-sm">
                    We assist you in preparing and organizing all required documents for the loan application, ensuring accuracy and completeness.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="relative z-10">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-white mb-4 mx-auto shadow-lg bg-gradient-to-r from-[#69AFFD] to-[#1F4091]">
                  4
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h3 className="text-lg font-semibold text-[#1F4091] mb-3">Application & Disbursal</h3>
                  <p className="text-gray-600 text-sm">
                    We coordinate with the financial institution throughout the application process and follow up until successful loan disbursal.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Scholarship Options Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Scholarship Opportunities
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Maximize your financial aid with these scholarship options
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipOptions.map((scholarship, index) => (
              <ScholarshipCard
                key={scholarship.title}
                title={scholarship.title}
                amount={scholarship.amount}
                description={scholarship.description}
                eligibility={scholarship.eligibility}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <FadeIn delay={0.6}>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Beyond these categories, our scholarship database includes country-specific, organization-sponsored, and niche scholarships that might be perfect for your unique profile. Our experts will help you identify and apply for the most relevant opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#1F4091] text-white font-medium rounded-md hover:bg-[#1F4091]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Scholarship Guidance
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="bg-white rounded-xl shadow-md p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-24 h-24 bg-[#F09022]/10 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#69AFFD]/10 rounded-tl-full"></div>
              
              <div className="text-[#F09022] mb-6">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "The financial guidance provided by Beyond Borders Overseas was instrumental in making my dream of studying at the University of Toronto a reality. Their team helped me secure a competitive education loan and a partial scholarship that reduced my financial burden significantly. The step-by-step support throughout the documentation process was invaluable."
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/media/Photos/pexels-kampus-5940860.jpg" 
                    alt="Student testimonial" 
                    width={48} 
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#1F4091]">Rahul Sharma</p>
                  <p className="text-sm text-gray-600">University of Toronto, Canada</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1F4091] via-[#1F4091] to-[#1F4091]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <FadeIn>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Ready to Explore Your Financial Options?
                </h3>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/90 mt-2">
                  Book a free consultation with our financial experts today.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/services" 
                  className="px-6 py-3 bg-white text-[#1F4091] font-medium rounded-md hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Explore Other Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 