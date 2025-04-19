'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPinIcon, 
  GlobeAltIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

// Animation component for fade-in effects
const FadeIn = ({ children, delay = 0, direction = null, className = "" }) => {
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

// Team member component
const TeamMember = ({ name, role, bio, imgSrc, delay }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full group">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F4091]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1F4091]">{name}</h3>
          <p className="text-[#69AFFD] font-medium mb-3">{role}</p>
          <p className="text-gray-600 text-sm">{bio}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default function About() {
  // Team members data
  const teamMembers = [
    {
      name: "Rajiv Sharma",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in international education counseling, Rajiv has helped thousands of students achieve their study abroad dreams.",
      imgSrc: "/media/Photos/pexels-buro-millennial-636760-1438072.jpg"
    },
    {
      name: "Priya Patel",
      role: "Head of Counseling",
      bio: "A certified education counselor with expertise in university applications for the UK, USA, and Canada. She specializes in SOP development.",
      imgSrc: "/media/Photos/pexels-kampus-5940860.jpg"
    },
    {
      name: "Dr. Michael Chen",
      role: "Test Prep Director",
      bio: "A Ph.D. in Education with 10+ years of experience coaching students for IELTS, TOEFL, GRE, and GMAT with proven success strategies.",
      imgSrc: "/media/Photos/pexels-theshantanukr-16562727.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Visa Specialist",
      bio: "Former visa officer with deep knowledge of immigration requirements across multiple countries, ensuring high success rates for our students.",
      imgSrc: "/media/Photos/pexels-anastasiya-gepp-654466-1462630.jpg"
    }
  ];

  // Values data
  const values = [
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Student-First Approach",
      description: "We prioritize understanding each student's unique goals, strengths, and constraints to provide truly personalized guidance."
    },
    {
      icon: <GlobeAltIcon className="h-6 w-6" />,
      title: "Global Perspective",
      description: "Our counselors have lived and studied abroad, bringing first-hand international education experience to our advising."
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Educational Excellence",
      description: "We partner only with reputable institutions and pursue placements that align with academic merit and career aspirations."
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Lifetime Support",
      description: "Our relationship with students extends beyond admissions—we provide ongoing guidance throughout their educational journey."
    }
  ];

  return (
    <>
      {/* Hero Section with parallax effect */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Photos/building-8259184_1280.jpg"
            alt="About Beyond Borders Overseas"
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
              About Beyond Borders Overseas
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Empowering students worldwide to achieve their global education dreams with personalized guidance and support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 bg-white text-[#1F4091] font-medium rounded-md hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <span className="text-[#F09022] font-semibold">OUR STORY</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mt-2 mb-6">
                  Bridging Dreams Across Continents
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Founded in 2010, Beyond Borders Overseas was born from a vision to make quality global education accessible to aspiring students around the world. What began as a small consultancy has evolved into a comprehensive education service provider with a presence in multiple countries.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Our founder, Rajiv Sharma, experienced firsthand the challenges of navigating the complex international education landscape when he was a student. This personal journey inspired him to create a service that simplifies the process for others, providing the guidance he wished he had.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-700 mb-6">
                  Today, we're proud to have helped over 15,000 students secure placements at prestigious universities across 30+ countries, with a remarkable 98% visa success rate. Our team of experienced counselors, test preparation experts, and visa specialists work together to ensure each student's journey is smooth and successful.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 md:gap-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#69AFFD]/20 p-2 rounded-full text-[#1F4091]">
                      <MapPinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-[#1F4091]">5</span>
                      <span className="text-gray-600 text-sm">Global Offices</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#69AFFD]/20 p-2 rounded-full text-[#1F4091]">
                      <GlobeAltIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-[#1F4091]">30+</span>
                      <span className="text-gray-600 text-sm">Destination Countries</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#69AFFD]/20 p-2 rounded-full text-[#1F4091]">
                      <AcademicCapIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-[#1F4091]">15k+</span>
                      <span className="text-gray-600 text-sm">Success Stories</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/Photos/pexels-pixabay-207684.jpg" 
                    alt="Beyond Borders Overseas headquarters"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 h-[250px] w-[250px] bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col justify-center">
                  <p className="text-2xl font-bold text-[#1F4091] mb-2">Our Mission</p>
                  <p className="text-gray-700">
                    To empower students to realize their global education aspirations through personalized guidance, ethical counseling, and comprehensive support at every step of their journey.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#F09022]/10 -mb-32 -mr-32"></div>
        <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-[#69AFFD]/10 -ml-16"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[#F09022] font-semibold">OUR VALUES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mt-2 mb-4">
                What Drives Us
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values define how we work and guide every interaction with our students.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.2 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-md p-6 h-full border-t-4 border-[#69AFFD]">
                  <div className="p-3 bg-[#69AFFD]/10 rounded-xl w-fit mb-4 text-[#1F4091]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1F4091]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[#F09022] font-semibold">OUR TEAM</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mt-2 mb-4">
                Meet Our Education Experts
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced counselors bring rich insights from their own international education experiences.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imgSrc={member.imgSrc}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[#F09022] font-semibold">CREDENTIALS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4091] mt-2 mb-4">
                Our Accreditations & Partnerships
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're recognized by prestigious organizations and institutions worldwide.
              </p>
            </FadeIn>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#69AFFD]/10 rounded-full -mt-16 -mr-16"></div>
            
            <FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="bg-[#1F4091]/5 p-4 rounded-full mb-4">
                    <Image 
                      src="/media/Previous clients/logo-placeholder-1.png" 
                      alt="British Council" 
                      width={80} 
                      height={80}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-[#1F4091] font-medium text-center">British Council Certified</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="bg-[#1F4091]/5 p-4 rounded-full mb-4">
                    <Image 
                      src="/media/Previous clients/logo-placeholder-2.png" 
                      alt="ICEF" 
                      width={80} 
                      height={80}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-[#1F4091] font-medium text-center">ICEF Agency</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="bg-[#1F4091]/5 p-4 rounded-full mb-4">
                    <Image 
                      src="/media/Previous clients/logo-placeholder-3.png" 
                      alt="Association of Australian Education Representatives in India" 
                      width={80} 
                      height={80}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-[#1F4091] font-medium text-center">AAERI Member</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="bg-[#1F4091]/5 p-4 rounded-full mb-4">
                    <Image 
                      src="/media/Previous clients/logo-placeholder-4.png" 
                      alt="Education New Zealand" 
                      width={80} 
                      height={80}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-[#1F4091] font-medium text-center">Education NZ Partner</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="bg-[#1F4091]/5 p-4 rounded-full mb-4">
                    <Image 
                      src="/media/Previous clients/logo-placeholder-5.png" 
                      alt="ETS Authorized Testing Center" 
                      width={80} 
                      height={80}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-[#1F4091] font-medium text-center">ETS Authorized Center</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="bg-[#1F4091]/5 p-4 rounded-full mb-4">
                    <Image 
                      src="/media/Previous clients/logo-placeholder-6.png" 
                      alt="DAAD" 
                      width={80} 
                      height={80}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-[#1F4091] font-medium text-center">DAAD Recognized</p>
                </div>
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
                  Ready to Start Your Global Education Journey?
                </h3>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/90 mt-2">
                  Get in touch for a free consultation with our expert counselors.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-[#F09022] text-white font-medium rounded-md hover:bg-[#F09022]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Us Today
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 