'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Hero video paths (we have 4 videos in the home_hero_slider folder)
const heroMedia = [
  '/media/home_hero_slider/159028-818026299_small.mp4',
  '/media/home_hero_slider/69623-531621064_small.mp4',
  '/media/home_hero_slider/21472-318172509_small.mp4',
  '/media/home_hero_slider/90933-629483642_tiny.mov',
];

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  // Ensure video plays when it's active
  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.play().catch(err => console.error('Video play error:', err));
    }
  }, [currentMediaIndex, isClient]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Media slider */}
      <div className="absolute inset-0">
        {isClient && (
          <>
            {/* Current media with fade effect */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMediaIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  >
                    <source src={heroMedia[currentMediaIndex]} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Stronger dark overlay to ensure text visibility */}
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80 mix-blend-multiply" />
            <div 
              className="absolute inset-0 opacity-20 mix-blend-overlay" 
              style={{ 
                backgroundImage: `url('/media/pattern.svg')`,
                backgroundSize: '20px 20px'
              }}
            />
          </>
        )}
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Global Education Experts
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Your pathway to academic excellence with access to 800+ universities across 30+ countries. Comprehensive support from test preparation to visa processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors duration-300 text-center"
              >
                Start Your Journey
              </Link>
              <Link 
                href="/universities" 
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/30 transition-colors duration-300 text-center"
              >
                Explore Universities
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">800+ Partner Universities</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">30+ Destination Countries</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Expert Test Preparation</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 