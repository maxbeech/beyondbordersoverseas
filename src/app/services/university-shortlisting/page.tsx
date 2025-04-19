'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GlobeAltIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronRightIcon
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

// Destination card component
interface DestinationCardProps {
  name: string;
  universities: number;
  flagSrc: string;
  highlights: string[];
  delay?: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  name, universities, flagSrc, highlights, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-xl shadow-md p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-3 overflow-hidden rounded-full border border-gray-200 shadow-sm flex-shrink-0">
            <Image 
              src={flagSrc} 
              alt={`${name} flag`} 
              width={40} 
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1F4091]">{name}</h3>
            <p className="text-sm text-gray-600">{universities}+ Universities</p>
          </div>
        </div>
        
        <div className="space-y-2 mt-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start">
              <ChevronRightIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
              <p className="ml-2 text-gray-700 text-sm">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

// Step card component
interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({ 
  number, title, description, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white rounded-xl shadow-md relative p-6 border-t-4 border-[#69AFFD]">
        <div className="absolute -top-6 left-6 bg-gradient-to-r from-[#1F4091] to-[#69AFFD] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
          {number}
        </div>
        <h3 className="text-lg font-semibold text-[#1F4091] mt-6 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </FadeIn>
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
      <div className="bg-white rounded-xl shadow-md p-6 h-full">
        <div className="p-3 bg-[#69AFFD]/10 rounded-xl w-fit mb-4 text-[#1F4091]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

export default function UniversityShortlisting() {
  // Popular destination countries data
  const destinations = [
    {
      name: "Germany",
      universities: 120,
      flagSrc: "/media/Previous clients/germany-flag.png",
      highlights: [
        "No or low tuition fees at public universities",
        "Strong engineering and research programs",
        "18-month post-study work visa",
        "High quality of life and safety"
      ]
    },
    {
      name: "USA",
      universities: 200,
      flagSrc: "/media/Previous clients/usa-flag.png",
      highlights: [
        "World-class universities with extensive research",
        "Flexible education system with diverse programs",
        "Strong campus culture and facilities",
        "OPT allows up to 3 years of work after graduation"
      ]
    },
    {
      name: "Canada",
      universities: 100,
      flagSrc: "/media/Previous clients/canada-flag.png",
      highlights: [
        "High-quality education at reasonable costs",
        "Post-graduation work permit up to 3 years",
        "Pathway to permanent residency",
        "Safe, multicultural environment"
      ]
    },
    {
      name: "UK",
      universities: 120,
      flagSrc: "/media/Previous clients/uk-flag.png",
      highlights: [
        "Prestigious universities with global recognition",
        "Shorter degree programs (3 years for Bachelor's)",
        "Graduate Immigration Route for 2-year work visa",
        "Rich cultural experience"
      ]
    },
    {
      name: "Australia",
      universities: 40,
      flagSrc: "/media/Previous clients/australia-flag.png",
      highlights: [
        "Strong focus on research and innovation",
        "Post-study work visa up to 4 years",
        "High graduate employability",
        "Excellent quality of life"
      ]
    },
    {
      name: "New Zealand",
      universities: 8,
      flagSrc: "/media/Previous clients/newzealand-flag.png",
      highlights: [
        "3-year post-study work visa",
        "High-quality education with practical focus",
        "Safe and welcoming environment",
        "Balanced lifestyle and natural beauty"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/pexels-pixabay-256455.jpg"
            alt="University Shortlisting"
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
              University Shortlisting
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Finding the perfect university match based on your academic profile, career goals, and preferences across 800+ universities worldwide.
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
                Get University Recommendations
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
                  Why University Selection Is Critical
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Choosing the right university is one of the most important decisions you'll make in your educational journey. It goes beyond rankings and reputation – it's about finding an institution that aligns with your academic strengths, career aspirations, financial considerations, and personal preferences.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-8">
                  At Beyond Borders Overseas, we understand that each student is unique, with different goals, interests, and circumstances. Our university shortlisting service provides personalized recommendations based on a comprehensive evaluation of your profile and preferences, ensuring the universities you apply to are the right fit for your future.
                </p>
              </FadeIn>
              
              <div className="space-y-4">
                <FadeIn delay={0.3}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">Access to 800+ universities</span> across 30+ countries
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.35}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">Data-driven recommendations</span> based on your profile and past successful applications
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">Balanced selection</span> of ambitious, moderate, and safe university options
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.45}>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold text-[#1F4091]">Detailed insights</span> on programs, scholarships, living costs, and post-graduation opportunities
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Photos/pexels-olly-3762800.jpg" 
                    alt="Student considering university options"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-[300px]">
                  <div className="flex items-start mb-3">
                    <div className="p-2 bg-[#69AFFD]/20 rounded-full text-[#1F4091] mr-3 flex-shrink-0">
                      <GlobeAltIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[#1F4091] font-bold">Our Global Network</div>
                      <p className="text-gray-600 text-sm mt-1">
                        Direct partnerships with universities in 30+ countries for insider knowledge and enhanced applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#F09022]/10 -mb-32 -mr-32"></div>
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-[#69AFFD]/10 -ml-16"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Our University Shortlisting Process
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to finding your perfect university match
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (visible on md and above) */}
            <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-1 bg-gradient-to-r from-[#69AFFD] via-[#1F4091] to-[#F09022] z-0 rounded-full"></div>
            
            <StepCard
              number={1}
              title="Profile Analysis"
              description="We evaluate your academic history, test scores, extracurricular activities, work experience, and career aspirations to understand your strengths and potential areas for improvement."
              delay={0.2}
            />
            <StepCard
              number={2}
              title="Preference Assessment"
              description="We discuss your preferences for country, city type, program structure, budget, scholarship needs, campus culture, and post-graduation goals to understand what matters most to you."
              delay={0.3}
            />
            <StepCard
              number={3}
              title="Research & Matching"
              description="Our experts search our extensive database to identify universities and programs that match your profile and preferences, considering admission requirements, acceptance rates, and more."
              delay={0.4}
            />
            <StepCard
              number={4}
              title="Recommendation Review"
              description="We present a balanced list of ambitious, moderate, and safe options with detailed reports on each, discussing the pros and cons to help you make informed decisions."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Comprehensive Evaluation Factors
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our university recommendations consider these critical factors
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<AcademicCapIcon className="h-6 w-6" />}
              title="Academic Profile Match"
              description="We analyze how your academic credentials align with each university's admission requirements and typical accepted student profiles to ensure realistic options."
              delay={0.2}
            />
            <FeatureCard
              icon={<DocumentTextIcon className="h-6 w-6" />}
              title="Program Curriculum & Quality"
              description="We evaluate program structure, specialization options, faculty expertise, research opportunities, internships, and industry connections relevant to your field."
              delay={0.3}
            />
            <FeatureCard
              icon={<CurrencyDollarIcon className="h-6 w-6" />}
              title="Financial Considerations"
              description="We assess tuition fees, scholarship opportunities, living expenses, and overall return on investment to match options within your budget constraints."
              delay={0.4}
            />
            <FeatureCard
              icon={<MapPinIcon className="h-6 w-6" />}
              title="Location & Lifestyle"
              description="We consider city type, climate, safety, cultural fit, and accommodation options to ensure your comfort and adaptation to the new environment."
              delay={0.5}
            />
            <FeatureCard
              icon={<BriefcaseIcon className="h-6 w-6" />}
              title="Career Prospects"
              description="We analyze post-graduation work visa options, employment rates, alumni network strength, and career services to support your long-term goals."
              delay={0.6}
            />
            <FeatureCard
              icon={<GlobeAltIcon className="h-6 w-6" />}
              title="Global Recognition"
              description="We evaluate program accreditations, university rankings, and international employer recognition to ensure your degree has value worldwide."
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Popular Study Destinations
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore key features of top countries in our university network
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.name}
                name={destination.name}
                universities={destination.universities}
                flagSrc={destination.flagSrc}
                highlights={destination.highlights}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.8}>
              <p className="text-gray-700 mb-6">
                Our network extends beyond these countries to include options in France, Netherlands, Singapore, Japan, Ireland, Denmark, Sweden, Finland, and many more destinations worldwide.
              </p>
              <Link
                href="/universities"
                className="inline-flex items-center px-6 py-3 bg-[#1F4091] text-white font-medium rounded-md hover:bg-[#1F4091]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore All Destinations
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/Photos/pexels-pixabay-207684.jpg" 
                  alt="Students achieving success with university placements"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4091]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <blockquote className="text-white text-lg italic">
                    "Beyond Borders helped me gain admission to my dream university in Germany. Their personalized university recommendations were spot-on for my profile and goals."
                    <footer className="mt-2 text-sm font-medium">— Priya Sharma, Technical University of Munich</footer>
                  </blockquote>
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-6">
                  Our Success Metrics
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-8">
                  Our university shortlisting service has helped thousands of students secure placements at their ideal institutions. Our approach is validated by these impressive outcomes:
                </p>
              </FadeIn>
              
              <div className="grid grid-cols-2 gap-6">
                <FadeIn delay={0.2}>
                  <div className="bg-[#69AFFD]/10 p-5 rounded-lg text-center">
                    <div className="text-4xl font-bold text-[#1F4091] mb-1">92%</div>
                    <p className="text-gray-700 text-sm">Admission success rate at recommended universities</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="bg-[#69AFFD]/10 p-5 rounded-lg text-center">
                    <div className="text-4xl font-bold text-[#1F4091] mb-1">85%</div>
                    <p className="text-gray-700 text-sm">Students received admission from their top 3 choices</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="bg-[#69AFFD]/10 p-5 rounded-lg text-center">
                    <div className="text-4xl font-bold text-[#1F4091] mb-1">$12M+</div>
                    <p className="text-gray-700 text-sm">In scholarships secured for our students annually</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="bg-[#69AFFD]/10 p-5 rounded-lg text-center">
                    <div className="text-4xl font-bold text-[#1F4091] mb-1">15,000+</div>
                    <p className="text-gray-700 text-sm">Students successfully placed at universities worldwide</p>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.6}>
                <div className="mt-8">
                  <Link
                    href="/success-stories"
                    className="inline-flex items-center text-[#1F4091] font-medium hover:text-[#F09022] transition-colors"
                  >
                    Read Success Stories
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1F4091] via-[#1F4091] to-[#1F4091]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <FadeIn>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Ready to Find Your Perfect University Match?
                </h3>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/90 mt-2">
                  Book a free consultation with our university shortlisting experts today.
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
                  href="/universities" 
                  className="px-6 py-3 bg-white text-[#1F4091] font-medium rounded-md hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Browse Universities
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 