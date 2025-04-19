'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  BookOpenIcon
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

// Testimonial card component
interface TestimonialProps {
  quote: string;
  author: string;
  test: string;
  score: string;
  university?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  quote, author, test, score, university, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white rounded-xl shadow-sm p-6 h-full border-t-4 border-[#F09022]">
        <div className="mb-4 text-[#F09022]">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-4">{quote}</p>
        <div className="mt-auto">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-[#1F4091]">
            {test} - {score} {university && `| ${university}`}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

// Test card component
interface TestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const TestCard: React.FC<TestCardProps> = ({ 
  icon, title, description, features, delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-xl shadow-md p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div className="p-3 bg-[#69AFFD]/10 rounded-xl w-fit mb-4 text-[#1F4091]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <ChevronRightIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
              <p className="ml-2 text-gray-700 text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

// Feature component
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex items-start">
        <div className="p-3 bg-[#69AFFD]/10 rounded-xl text-[#1F4091] mr-4 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1F4091] mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default function TestPreparation() {
  // Test offerings data
  const testOfferings = [
    {
      icon: <BookOpenIcon className="h-6 w-6" />,
      title: "IELTS",
      description: "International English Language Testing System for university admissions and immigration purposes.",
      features: [
        "Specialized training for all four test components: Reading, Writing, Listening, and Speaking",
        "Tailored preparation for both Academic and General Training modules",
        "Weekly mock tests with detailed feedback and score prediction",
        "Focused grammar and vocabulary enhancement sessions",
        "One-on-one speaking practice with certified instructors"
      ]
    },
    {
      icon: <BookOpenIcon className="h-6 w-6" />,
      title: "TOEFL",
      description: "Test of English as a Foreign Language accepted by thousands of institutions worldwide.",
      features: [
        "Computer-based training that simulates the actual test environment",
        "Strategic approaches to Integrated Writing and Speaking tasks",
        "Speed reading techniques for the Reading section",
        "Note-taking strategies for the Listening section",
        "Full-length practice tests with detailed analysis"
      ]
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "GRE",
      description: "Graduate Record Examination required for admission to most graduate programs globally.",
      features: [
        "Comprehensive preparation for Verbal, Quantitative, and Analytical Writing sections",
        "Advanced vocabulary building techniques and text completion strategies",
        "Quantitative problem-solving methods and data interpretation tactics",
        "Analytical writing practice with expert evaluation",
        "Adaptive test strategies to maximize scores"
      ]
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "GMAT",
      description: "Graduate Management Admission Test primarily for business school applicants.",
      features: [
        "Focused training on Quantitative, Verbal, Integrated Reasoning, and Analytical Writing",
        "Data sufficiency and problem-solving techniques for the Quantitative section",
        "Critical reasoning and sentence correction strategies for the Verbal section",
        "Time management skills for optimal performance",
        "Business-oriented vocabulary enhancement"
      ]
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "SAT",
      description: "Scholastic Assessment Test required for undergraduate admissions in the US and other countries.",
      features: [
        "Comprehensive preparation for Evidence-Based Reading, Writing, and Mathematics",
        "Strategic approaches to multiple-choice questions and the optional essay",
        "Grammar rules and reading comprehension techniques",
        "Advanced math problem-solving strategies",
        "Full-length practice tests with detailed analysis"
      ]
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "PTE",
      description: "Pearson Test of English Academic accepted by thousands of institutions worldwide.",
      features: [
        "Computer-based training that simulates the actual test environment",
        "Strategic approaches to all test components: Speaking & Writing, Reading, and Listening",
        "Voice recording analysis for the Speaking section",
        "Summarizing techniques for the Writing section",
        "Time management strategies for optimal performance"
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The structured approach and personalized attention at Beyond Borders helped me achieve my target score. The mock tests were particularly helpful in building my confidence.",
      author: "Rahul Mehta",
      test: "IELTS",
      score: "Band 8.0",
      university: "University of Toronto"
    },
    {
      quote: "I was struggling with the Quantitative section of the GRE, but the specialized techniques taught in the course made a huge difference. I exceeded my target score by 6 points!",
      author: "Aisha Khan",
      test: "GRE",
      score: "328/340",
      university: "Columbia University"
    },
    {
      quote: "The TOEFL preparation was comprehensive and well-structured. The instructors are knowledgeable and provided valuable insights into the test pattern.",
      author: "Liu Wei",
      test: "TOEFL",
      score: "112/120",
      university: "University of Melbourne"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/pexels-theshantanukr-16562727.jpg"
            alt="Test Preparation"
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
              Test Preparation
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Expert coaching for all major standardized tests with personalized strategies to help you achieve your target scores.
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
                Enroll Now
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
                  Why Choose Our Test Preparation Services?
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  At Beyond Borders Overseas, we understand that standardized tests are a crucial part of your international education journey. Our comprehensive test preparation programs are designed to help you excel in these assessments through personalized coaching, proven methodologies, and regular practice.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-8">
                  Our expert instructors have helped thousands of students achieve their target scores, opening doors to prestigious institutions worldwide. With our structured approach, you'll develop the skills and confidence needed to perform at your best on test day.
                </p>
              </FadeIn>
              
              <div className="space-y-6">
                <Feature 
                  icon={<AcademicCapIcon className="h-6 w-6" />}
                  title="Expert Instructors"
                  description="Learn from certified teachers with proven track records of helping students achieve high scores."
                  delay={0.3}
                />
                <Feature 
                  icon={<ChartBarIcon className="h-6 w-6" />}
                  title="Personalized Approach"
                  description="Tailored study plans based on diagnostic assessments to target your specific strengths and weaknesses."
                  delay={0.4}
                />
                <Feature 
                  icon={<UserGroupIcon className="h-6 w-6" />}
                  title="Small Batch Sizes"
                  description="Limited students per batch to ensure individualized attention and interactive learning environment."
                  delay={0.5}
                />
                <Feature 
                  icon={<ClockIcon className="h-6 w-6" />}
                  title="Flexible Scheduling"
                  description="Choose from weekday, weekend, or online classes to fit your busy schedule."
                  delay={0.6}
                />
              </div>
            </div>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Photos/pexels-ketut-subiyanto-4307787.jpg" 
                    alt="Students preparing for standardized tests"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-[280px]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[#1F4091] font-bold">Our Success Rate</div>
                    <div className="text-[#F09022] font-bold">95%</div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    of our students achieve or exceed their target scores in standardized tests.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Test Offerings Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#F09022]/10 -mb-32 -mr-32"></div>
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-[#69AFFD]/10 -ml-16"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Our Test Preparation Programs
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive preparation courses for all major standardized tests required for international university admissions.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testOfferings.map((test, index) => (
              <TestCard
                key={test.title}
                icon={test.icon}
                title={test.title}
                description={test.description}
                features={test.features}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Our Approach
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured methodology designed to maximize your test performance.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-md relative p-6 border-t-4 border-[#69AFFD]">
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-[#1F4091] to-[#69AFFD] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold text-[#1F4091] mt-6 mb-3">Diagnostic Assessment</h3>
                <p className="text-gray-600 text-sm">
                  We begin with a comprehensive evaluation to identify your strengths and areas for improvement, establishing a baseline for your preparation.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-md relative p-6 border-t-4 border-[#69AFFD]">
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-[#1F4091] to-[#69AFFD] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold text-[#1F4091] mt-6 mb-3">Customized Study Plan</h3>
                <p className="text-gray-600 text-sm">
                  Based on your assessment results, we create a personalized study plan focusing on areas that will have the greatest impact on your score.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-xl shadow-md relative p-6 border-t-4 border-[#69AFFD]">
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-[#1F4091] to-[#69AFFD] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold text-[#1F4091] mt-6 mb-3">Structured Learning</h3>
                <p className="text-gray-600 text-sm">
                  Through a combination of instructor-led sessions, self-study materials, and practice exercises, you'll develop the skills needed for success.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <div className="bg-white rounded-xl shadow-md relative p-6 border-t-4 border-[#69AFFD]">
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-[#1F4091] to-[#69AFFD] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-lg font-semibold text-[#1F4091] mt-6 mb-3">Regular Mock Tests</h3>
                <p className="text-gray-600 text-sm">
                  We conduct full-length practice tests under exam conditions, providing detailed feedback and strategies for improvement until you reach your target score.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-4">
                Student Success Stories
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our students who achieved their target scores and gained admission to top universities.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                test={testimonial.test}
                score={testimonial.score}
                university={testimonial.university}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/Photos/pexels-ketut-subiyanto-4308104.jpg" 
                  alt="Test preparation class"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mb-6">
                  Course Details
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Our test preparation courses are designed to fit your schedule and learning preferences. Choose from the following options:
                </p>
              </FadeIn>
              
              <div className="space-y-4 mb-8">
                <FadeIn delay={0.2}>
                  <div className="bg-[#69AFFD]/10 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1F4091] mb-2">Regular Batch</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">8-week comprehensive program</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">3 sessions per week (2 hours each)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">Weekday and weekend batches available</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="bg-[#69AFFD]/10 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1F4091] mb-2">Intensive Batch</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">4-week accelerated program</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">5 sessions per week (3 hours each)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">Ideal for those with tight deadlines</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.4}>
                  <div className="bg-[#69AFFD]/10 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1F4091] mb-2">One-on-One Coaching</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">Personalized coaching sessions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">Flexible scheduling based on your availability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-[#F09022] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-700">Maximum attention and customization</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.5}>
                <p className="text-gray-700 mb-6">
                  All courses include comprehensive study materials, regular practice tests, performance tracking, and access to our online resource library.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.6}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#1F4091] text-white font-medium rounded-md hover:bg-[#1F4091]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
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
                  Ready to Ace Your Standardized Tests?
                </h3>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/90 mt-2">
                  Book a free consultation with our test preparation experts today.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Contact Us
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