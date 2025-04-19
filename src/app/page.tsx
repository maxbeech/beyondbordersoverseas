'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import { 
  AcademicCapIcon, 
  GlobeAltIcon,
  DocumentTextIcon,
  IdentificationIcon,
  ArrowRightIcon,
  MapIcon,
  ClipboardDocumentCheckIcon,
  BriefcaseIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
        duration: duration,
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
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Services card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 group"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center font-medium text-accent group-hover:text-accent-dark"
        >
          Learn more 
          <motion.span 
            className="ml-1 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </motion.span>
        </Link>
      </motion.div>
    </FadeIn>
  );
};

// Step Card Component
interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="relative">
      <div className="bg-white p-6 rounded-xl shadow-md relative z-10 h-full border-t-4 border-[#F09022]">
        <div className="absolute -top-6 -left-6 bg-gradient-to-br from-[#69AFFD] to-[#1F4091] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

// Testimonial Card Component
interface TestimonialProps {
  quote: string;
  author: string;
  university: string;
  country: string;
  imageSrc: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  quote, author, university, country, imageSrc, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
        <div className="p-6 flex-grow">
          <div className="mb-4 text-accent">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-4">{quote}</p>
          <div className="mt-auto">
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-primary">
              {university}, {country}
            </p>
          </div>
        </div>
        <div className="relative h-48 w-full">
          <Image 
            src={imageSrc} 
            alt={author} 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      quote: "Beyond Borders Overseas made my dream of studying at a top German university come true. Their counselors guided me through every step of the application process.",
      author: "Priya Sharma",
      university: "Technical University of Munich",
      country: "Germany",
      imageSrc: "/media/Photos/pexels-ketut-subiyanto-4307787.jpg"
    },
    {
      quote: "I couldn't have navigated the complex visa process without the help of Beyond Borders. Their test preparation courses also helped me score exceptionally well on my IELTS exam.",
      author: "Ahmad Khalid",
      university: "University of Toronto",
      country: "Canada",
      imageSrc: "/media/Photos/pexels-kampus-5940860.jpg"
    },
    {
      quote: "The scholarship guidance from Beyond Borders Overseas helped me secure a 75% tuition waiver. Their personalized approach to university selection was invaluable.",
      author: "Li Wei",
      university: "University of Melbourne",
      country: "Australia",
      imageSrc: "/media/Photos/pexels-olly-3762800.jpg"
    }
  ];
  
  // Latest Blog Posts data
  const latestPosts = [
    {
      title: "Complete Guide to Studying in Germany Without Tuition Fees",
      date: "May 12, 2023",
      image: "/media/Photos/building-8259184_1280.jpg",
      excerpt: "Discover how to access Germany's world-class education system with zero or minimal tuition fees, and what requirements you need to meet.",
      link: "/blog/study-germany-tuition-free"
    },
    {
      title: "How to Ace Your IELTS Exam: Proven Strategies",
      date: "April 28, 2023",
      image: "/media/Photos/pexels-theshantanukr-16562727.jpg",
      excerpt: "Master the four sections of the IELTS exam with these expert tips from our top instructors who have helped students achieve band 8+ scores.",
      link: "/blog/ielts-exam-strategies"
    },
    {
      title: "5 Scholarship Opportunities You Shouldn't Miss in 2023",
      date: "April 15, 2023",
      image: "/media/Photos/pexels-padmathilaka-wanigasekara-49566452-7616700.jpg",
      excerpt: "From Fulbright to Commonwealth scholarships, learn about the most prestigious global funding opportunities and how to craft a winning application.",
      link: "/blog/scholarship-opportunities-2023"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#69AFFD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Our Comprehensive Services
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From test preparation to visa processing, we provide end-to-end support for your international education journey.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<AcademicCapIcon className="h-6 w-6" />}
              title="Test Preparation"
              description="Expert coaching for IELTS, TOEFL, GRE, GMAT, and SAT with personalized study plans and practice tests."
              link="/services/test-preparation"
              delay={0.2}
            />
            <ServiceCard
              icon={<GlobeAltIcon className="h-6 w-6" />}
              title="University Shortlisting"
              description="Tailored university recommendations based on academic profile, budget, and career goals across 30+ countries."
              link="/services/university-shortlisting"
              delay={0.3}
            />
            <ServiceCard
              icon={<DocumentTextIcon className="h-6 w-6" />}
              title="Application Assistance"
              description="End-to-end support with university applications, including SOP, LORs, CV development, and document verification."
              link="/services/application-assistance"
              delay={0.4}
            />
            <ServiceCard
              icon={<IdentificationIcon className="h-6 w-6" />}
              title="Visa Support"
              description="Comprehensive guidance on student visa requirements, application procedures, and interview preparation."
              link="/services/visa-support"
              delay={0.5}
            />
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.6}>
              <Link 
                href="/services" 
                className="inline-flex items-center px-6 py-3 bg-[#1F4091] text-white font-medium rounded-md hover:bg-[#1F4091]/90 transition-colors duration-300 border-2 border-white shadow-md"
              >
                View All Services
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1F4091] to-[#1F4091]/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">800+</div>
                <p className="text-[#69AFFD]">Partner Universities</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">30+</div>
                <p className="text-[#69AFFD]">Countries</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">15k+</div>
                <p className="text-[#69AFFD]">Success Stories</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">98%</div>
                <p className="text-[#69AFFD]">Visa Success Rate</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Application Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#69AFFD]/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#F09022]/10 -mb-32 -mr-32"></div>
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-[#69AFFD]/10 -ml-16"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Simple 3-Step Application Process
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process makes your study abroad journey smooth and hassle-free.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (visible on md and above) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#69AFFD] via-[#1F4091] to-[#F09022] -z-10 rounded-full"></div>
            
            <StepCard
              number={1}
              title="Profile Evaluation"
              description="We'll evaluate your academic profile and choose the best university options tailored to your goals and qualifications."
              delay={0.2}
            />
            <StepCard
              number={2}
              title="Documentation"
              description="Our experts will guide you through the complete documentation process, ensuring everything meets the requirements."
              delay={0.3}
            />
            <StepCard
              number={3}
              title="Application & Enrollment"
              description="We help you apply to all shortlisted universities and support you until you're successfully enrolled in your dream university."
              delay={0.4}
            />
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.5}>
              <Link 
                href="/application-process" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#1F4091] font-medium rounded-md hover:bg-[#1F4091]/5 transition-colors duration-300 border-2 border-[#1F4091] shadow-md"
              >
                Learn More About Our Process
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#69AFFD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Success Stories
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our students who achieved their dreams of studying abroad.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                university={testimonial.university}
                country={testimonial.country}
                imageSrc={testimonial.imageSrc}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.5}>
              <Link 
                href="/success-stories" 
                className="inline-flex items-center px-6 py-3 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-colors duration-300 border-2 border-white shadow-md"
              >
                View All Success Stories
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#69AFFD]/10 -mt-16 -mr-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <FadeIn direction="right">
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#69AFFD]/20">
                  <Image 
                    src="/media/Photos/pexels-theshantanukr-16504587.jpg" 
                    alt="Students consulting with education experts"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4091]/30 to-transparent"></div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="right">
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#1F4091] to-[#69AFFD] p-4 rounded-lg shadow-lg text-white">
                  <div className="flex items-center space-x-3 font-bold text-lg">
                    <span>Trusted by 15,000+ Students</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-6">
                  Why Choose Beyond Borders Overseas?
                </h2>
              </FadeIn>
              <div className="space-y-6">
                <FadeIn delay={0.1}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#69AFFD]/20 p-2 rounded-full text-[#1F4091]">
                        <MapIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#1F4091]">Global Reach</h3>
                      <p className="mt-2 text-gray-600">Access to over 800 universities across 30+ countries, providing diverse options for your academic journey.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#69AFFD]/20 p-2 rounded-full text-[#1F4091]">
                        <ClipboardDocumentCheckIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#1F4091]">Personalized Guidance</h3>
                      <p className="mt-2 text-gray-600">Tailored counseling based on your academic profile, career goals, and financial considerations.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#69AFFD]/20 p-2 rounded-full text-[#1F4091]">
                        <BriefcaseIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#1F4091]">Experienced Consultants</h3>
                      <p className="mt-2 text-gray-600">Our team of expert counselors have helped thousands of students achieve their study abroad dreams.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#69AFFD]/20 p-2 rounded-full text-[#1F4091]">
                        <UserGroupIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#1F4091]">End-to-End Support</h3>
                      <p className="mt-2 text-gray-600">Comprehensive assistance from test preparation to visa processing and pre-departure guidance.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.5}>
                <div className="mt-8">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center px-6 py-3 bg-[#1F4091] text-white font-medium rounded-md hover:bg-[#1F4091]/90 transition-colors duration-300 border-2 border-white shadow-md"
                  >
                    Learn More About Us
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog & Resources Section */}
      <section className="py-20 bg-gradient-to-b from-[#69AFFD]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Latest from Our Blog
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our resources to learn more about studying abroad, visa requirements, and more.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up" className="h-full">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col group hover:shadow-md transition-shadow duration-300 border border-[#69AFFD]/20">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F4091]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-[#69AFFD] mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">{post.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <Link 
                      href={post.link} 
                      className="inline-flex items-center font-medium text-[#F09022] group-hover:text-[#F09022]/80"
                    >
                      Read More
                      <motion.span 
                        className="ml-1 inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRightIcon className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <FadeIn delay={0.5}>
              <Link 
                href="/blog" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#1F4091] font-medium rounded-md hover:bg-[#1F4091]/5 transition-colors duration-300 border-2 border-[#1F4091] shadow-md"
              >
                View All Articles
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1F4091] via-[#1F4091] to-[#1F4091]/90 text-white">
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M47.5,-61.7C60.2,-53.1,68.2,-36.6,72.6,-19.5C77.1,-2.5,78,15.2,71.9,30.3C65.7,45.4,52.6,57.8,38.1,63.1C23.6,68.3,7.6,66.3,-7.3,62.8C-22.2,59.3,-36,54.2,-48.1,45.2C-60.2,36.2,-70.5,23.3,-74.1,8.6C-77.6,-6.1,-74.3,-22.6,-65.8,-35.7C-57.3,-48.8,-43.6,-58.6,-29.5,-66.4C-15.5,-74.2,-1,-80.2,12.2,-77.2C25.4,-74.3,34.8,-70.4,47.5,-61.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Start Your Global Education Journey?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-white max-w-3xl mx-auto mb-8">
                Get in touch with our expert counselors today for a free consultation and take the first step toward your dream university.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-colors duration-300 text-center border-2 border-white shadow-md"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/universities" 
                  className="px-8 py-4 bg-[#69AFFD] text-white font-medium rounded-md hover:bg-[#69AFFD]/90 transition-colors duration-300 text-center border-2 border-white shadow-md"
                >
                  Explore Universities
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 