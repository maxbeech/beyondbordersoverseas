'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  GlobeAltIcon,
  DocumentTextIcon,
  IdentificationIcon,
  BanknotesIcon,
  LightBulbIcon,
  LanguageIcon,
  MapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

// Animation component for fade-in effects
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

// Service card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  imageSrc: string;
  delay?: number;
  imagePosition?: 'left' | 'right';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  link, 
  imageSrc,
  delay = 0,
  imagePosition = 'right'
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
      {/* Content Side */}
      <div className={`${imagePosition === 'right' ? 'order-1' : 'order-1 lg:order-2'}`}>
        <FadeIn delay={delay} direction={imagePosition === 'right' ? 'right' : 'left'}>
          <div className="flex items-center mb-4">
            <div className="p-3 bg-[#69AFFD]/20 rounded-xl text-[#1F4091] mr-4">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-[#1F4091]">{title}</h3>
          </div>
          <p className="text-gray-700 mb-6">{description}</p>
          
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-[#F09022]">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
          
          <Link href={link} className="inline-flex items-center px-5 py-3 bg-[#1F4091] text-white font-medium rounded-md hover:bg-[#1F4091]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Learn More
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
      
      {/* Image Side */}
      <div className={`${imagePosition === 'right' ? 'order-2' : 'order-2 lg:order-1'}`}>
        <FadeIn delay={delay + 0.1} direction={imagePosition === 'right' ? 'left' : 'right'}>
          <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image 
              src={imageSrc} 
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4091]/40 to-transparent opacity-60"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default function Services() {
  // Services data
  const services = [
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Test Preparation",
      description: "Comprehensive coaching for all major standardized tests required for international university admissions. Our experienced instructors use proven methodologies and personalized strategies to help you achieve your target scores.",
      features: [
        "Personalized study plans based on diagnostic assessments",
        "Expert coaching for IELTS, TOEFL, GRE, GMAT, and SAT",
        "Regular practice tests and performance tracking",
        "Small batch sizes for individualized attention",
        "Flexible scheduling options including weekends"
      ],
      link: "/services/test-preparation",
      imageSrc: "/media/Photos/pexels-theshantanukr-16562727.jpg",
      imagePosition: 'right'
    },
    {
      icon: <GlobeAltIcon className="h-6 w-6" />,
      title: "University Shortlisting",
      description: "Finding the right university is crucial for your academic and career success. We analyze your profile, preferences, and aspirations to recommend institutions that align with your goals and maximize your chances of admission.",
      features: [
        "Access to a database of 800+ universities across 30+ countries",
        "Profile-based matching with suitable programs and universities",
        "Guidance on university rankings, fees, scholarships, and post-graduation opportunities",
        "Analysis of admission requirements and acceptance rates",
        "Recommendations tailored to your academic profile and budget"
      ],
      link: "/services/university-shortlisting",
      imageSrc: "/media/Photos/pexels-pixabay-256455.jpg",
      imagePosition: 'left'
    },
    {
      icon: <BanknotesIcon className="h-6 w-6" />,
      title: "Loans & Finance",
      description: "Education financing shouldn't be a barrier to your international education dreams. Our finance specialists connect you with optimal loan options and scholarship opportunities to fund your studies abroad.",
      features: [
        "Partnership with leading financial institutions for education loans",
        "Documentation support for loan applications",
        "Guidance on scholarship applications and eligibility requirements",
        "Financial planning advice for study abroad budgets",
        "Assistance with proof of funds for visa applications"
      ],
      link: "/services/loans-finance",
      imageSrc: "/media/Photos/pexels-kelly-1179532-2881370.jpg",
      imagePosition: 'right'
    },
    {
      icon: <IdentificationIcon className="h-6 w-6" />,
      title: "Visa Support",
      description: "Navigating visa requirements can be complex and stressful. Our visa experts provide end-to-end support to ensure a smooth application process with high approval rates.",
      features: [
        "Expert guidance on visa requirements for different countries",
        "Documentation preparation and verification",
        "Mock visa interviews and preparation sessions",
        "Application lodgment assistance",
        "Follow-up support throughout the visa process"
      ],
      link: "/services/visa-support",
      imageSrc: "/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg",
      imagePosition: 'left'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/pexels-pixabay-207684.jpg"
            alt="Beyond Borders Overseas Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4091]/80 to-[#1F4091]/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Comprehensive Services
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              From test preparation to visa processing, we provide end-to-end support for your international education journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                End-to-End Study Abroad Services
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600">
                Beyond Borders Overseas offers comprehensive services to make your international education journey seamless and successful. Explore our specialized offerings designed to address every aspect of studying abroad.
              </p>
            </FadeIn>
          </div>
          
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              link={service.link}
              imageSrc={service.imageSrc}
              delay={0.2 + index * 0.1}
              imagePosition={service.imagePosition as 'left' | 'right'}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#F09022]/10 -mb-32 -mr-32"></div>
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-[#69AFFD]/10 -ml-16"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Why Students Choose Us
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our specialized approach ensures you receive the highest quality guidance at every step.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                <div className="p-3 bg-[#69AFFD]/10 rounded-xl w-fit mb-4 text-[#1F4091]">
                  <LightBulbIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">Expert Counselors</h3>
                <p className="text-gray-600">
                  Our counselors are certified professionals with first-hand international education experience, ensuring you receive knowledgeable guidance.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                <div className="p-3 bg-[#69AFFD]/10 rounded-xl w-fit mb-4 text-[#1F4091]">
                  <LanguageIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">Global Network</h3>
                <p className="text-gray-600">
                  With direct partnerships with 800+ universities worldwide, we offer exclusive access and insights to strengthen your applications.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                <div className="p-3 bg-[#69AFFD]/10 rounded-xl w-fit mb-4 text-[#1F4091]">
                  <MapIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">Country Specialists</h3>
                <p className="text-gray-600">
                  Our team includes specialists for each major study destination, providing in-depth knowledge of country-specific requirements and opportunities.
                </p>
              </div>
            </FadeIn>
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
                  Ready to Begin Your International Education Journey?
                </h3>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/90 mt-2">
                  Book a free consultation with our expert counselors today.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Free Consultation
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 