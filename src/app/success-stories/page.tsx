'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StarIcon, AcademicCapIcon, MapPinIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function SuccessStories() {
  // Sample success stories data
  const successStories = [
    {
      studentName: "Siddhant Shivale",
      fromCountry: "India",
      university: "GISMA University",
      country: "Germany",
      program: "MSc in International Business Management",
      year: "2023",
      quote: "With the expert guidance from Beyond Borders Overseas, I successfully secured both admission and visa for my MSc program at GISMA University. Their detailed knowledge of German education requirements was instrumental in my success. The counselors guided me through every step of the application process with personalized attention.",
      highlight: "Successfully secured admission and visa",
      image: "/media/Previous clients/A big congratulations to Siddhant Shivale on securing his admission and visa for the MSc in International Business Management at GISMA University, Germany.png",
      featured: true
    },
    {
      studentName: "Ishita Mehra",
      fromCountry: "India",
      university: "GISMA University",
      country: "Germany",
      program: "MSc in International Business Management",
      year: "2023",
      quote: "The counselors at Beyond Borders Overseas provided me with outstanding support throughout my application journey. Their expertise made it possible for me to secure both admission and visa for my dream program in Germany. I'm particularly grateful for their guidance on document preparation and visa interview preparation.",
      highlight: "Secured visa & admission successfully",
      image: "/media/Previous clients/Big cheers to Ishita Mehra for securing her visa & admission to pursue an MSc in International Business Management at GISMA University, Germany.png",
      featured: true
    },
    {
      studentName: "Aadarsh Singh",
      fromCountry: "India",
      university: "Technical University of Applied Sciences Würzburg-Schweinfurt",
      country: "Germany",
      program: "Engineering",
      year: "2023",
      quote: "Beyond Borders Overseas provided exceptional guidance throughout my application and visa process for THWS. Their expertise with German university requirements and thorough document preparation made my student visa approval possible. I would highly recommend their services to anyone looking to study in Germany.",
      highlight: "Successfully secured Germany Student Visa",
      image: "/media/Previous clients/Congratulations to Aadarsh ​​Singh on securing his Germany Student Visa for THWS – Technical University of Applied Sciences Würzburg-Schweinfurt.png",
      featured: true
    },
    {
      studentName: "Prasanth Chinta",
      fromCountry: "India",
      university: "Berlin International College",
      country: "Germany",
      program: "International Business",
      year: "2023",
      quote: "I'm deeply grateful to the Beyond Borders team for their comprehensive support in securing my student visa for Berlin International College. Their attention to detail and expertise in visa application procedures was invaluable. From university selection to visa approval, their guidance was exceptional throughout the journey.",
      highlight: "Germany Student Visa approved",
      image: "/media/Previous clients/A hearty congratulations to Prasanth Chinta for getting his Germany Student Visa approved for Berlin International College (BIC).png",
      featured: false
    },
    {
      studentName: "Raj Patel",
      fromCountry: "India",
      university: "ETH Zurich",
      country: "Switzerland",
      program: "MSc Robotics",
      year: "2023",
      quote: "The counselors at Beyond Borders Overseas helped me navigate the complex Swiss university application system with ease. Their detailed guidance on preparing my academic portfolio and interview preparation made all the difference. I'm now studying at one of Europe's most prestigious technical universities.",
      highlight: "Received full scholarship",
      image: "/media/Photos/man-6027027_1280.jpg",
      featured: false
    },
    {
      studentName: "Olivia Kim",
      fromCountry: "South Korea",
      university: "Harvard University",
      country: "United States",
      program: "JD Law",
      year: "2022",
      quote: "I had nearly given up on my dream of studying law at Harvard until I connected with Beyond Borders Overseas. Their strategic approach to application planning, personal statement refinement, and interview preparation was transformative. Their belief in my potential pushed me to achieve what seemed impossible.",
      highlight: "Accepted to all 3 universities applied to",
      image: "/media/Photos/pexels-theshantanukr-16562727.jpg",
      featured: false
    }
  ];

  // Testimonials from successful students (can be different from detailed success stories)
  const testimonials = [
    {
      content: "Beyond Borders Overseas provided exceptional guidance throughout my application and visa process for THWS. Their expertise with German university requirements and thorough document preparation made my student visa approval possible.",
      name: "Aadarsh Singh",
      university: "Technical University of Applied Sciences Würzburg-Schweinfurt, Germany",
      image: "/media/Previous clients/Congratulations to Aadarsh ​​Singh on securing his Germany Student Visa for THWS – Technical University of Applied Sciences Würzburg-Schweinfurt.png"
    },
    {
      content: "I'm deeply grateful to the Beyond Borders team for their comprehensive support in securing my student visa for Berlin International College. Their attention to detail and expertise in visa application procedures was invaluable.",
      name: "Prasanth Chinta",
      university: "Berlin International College (BIC), Germany",
      image: "/media/Previous clients/A hearty congratulations to Prasanth Chinta for getting his Germany Student Visa approved for Berlin International College (BIC).png"
    },
    {
      content: "With the expert guidance from Beyond Borders Overseas, I successfully secured both admission and visa for my MSc program at GISMA University. Their detailed knowledge of German education requirements was instrumental in my success.",
      name: "Siddhant Shivale",
      university: "GISMA University, Germany",
      image: "/media/Previous clients/A big congratulations to Siddhant Shivale on securing his admission and visa for the MSc in International Business Management at GISMA University, Germany.png"
    },
    {
      content: "The counselors at Beyond Borders Overseas provided me with outstanding support throughout my application journey. Their expertise made it possible for me to secure both admission and visa for my dream program in Germany.",
      name: "Ishita Mehra",
      university: "GISMA University, Germany",
      image: "/media/Previous clients/Big cheers to Ishita Mehra for securing her visa & admission to pursue an MSc in International Business Management at GISMA University, Germany.png"
    }
  ];

  // Statistics
  const statistics = [
    { label: "Students Placed", value: "5,000+" },
    { label: "Germany Visa Success Rate", value: "97%" },
    { label: "Partner Universities in Germany", value: "50+" },
    { label: "Students in GISMA University", value: "100+" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1F4091] to-[#4F75C4] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/media/pattern.svg"
            alt="Background pattern"
            fill
            className="object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Students' Success Stories</h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover how we've helped thousands of students achieve their dream of studying in Germany and other prestigious universities worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" 
                  className="px-6 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 shadow-md">
                  Start Your Journey
                </Link>
                <Link href="/services/visa-assistance" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors duration-300">
                  Visa Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hidden md:block"
            >
              <Image
                src="/media/Photos/pexels-ketut-subiyanto-4307787.jpg"
                alt="Happy international student"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Statistics Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Germany Success Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedication to helping students achieve their German education dreams is reflected in our impressive success rates.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories in Germany</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read about our students who successfully secured admissions and visas for prestigious German universities with our expert guidance.
            </p>
          </motion.div>

          <div className="space-y-16">
            {successStories.filter(story => story.featured).map((story, index) => (
              <motion.div
                key={story.studentName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                  <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={story.image}
                      alt={story.studentName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`md:col-span-7 ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="flex items-center mb-6">
                      <span className="bg-primary/10 p-2 rounded-full mr-4">
                        <AcademicCapIcon className="h-6 w-6 text-primary" />
                      </span>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{story.studentName}</h3>
                        <p className="text-gray-600">{story.fromCountry}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-accent mr-1" />
                        <span className="text-gray-700">{story.university}, {story.country}</span>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="h-5 w-5 text-accent mr-1" />
                        <span className="text-gray-700">{story.program}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-accent mr-1" />
                        <span className="text-gray-700">{story.year}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="relative pl-4 border-l-4 border-primary mb-4 italic text-gray-600">
                        "{story.quote}"
                      </div>
                      
                      <div className="bg-accent/10 text-accent font-medium px-4 py-2 rounded-lg inline-block">
                        {story.highlight}
                      </div>
                    </div>
                    
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      Begin your success story
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">German Student Visa Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our students who successfully secured their German student visas and university admissions with our guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-4 text-accent">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4 relative flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.university}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* More Success Stories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more inspiring journeys of students who achieved their international education goals with our guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.filter(story => !story.featured).map((story, index) => (
              <motion.div
                key={story.studentName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={story.image}
                    alt={story.studentName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.studentName}</h3>
                  <div className="mb-4 text-sm">
                    <div className="flex items-center mb-1">
                      <MapPinIcon className="h-4 w-4 text-accent mr-1" />
                      <span className="text-gray-700">{story.university}, {story.country}</span>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-accent mr-1" />
                      <span className="text-gray-700">{story.program}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.quote}</p>
                  <div className="mb-4">
                    <span className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                      {story.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#1F4091] to-[#4F75C4] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Germany Study Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take the first step toward your education in Germany. Our expert counselors are ready to guide you through admissions and visa processes.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#F09022] hover:bg-[#F09022]/90 text-white font-medium rounded-md transition-colors duration-300 text-lg shadow-md"
            >
              Get Your Germany Visa Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 