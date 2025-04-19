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

export default function IeltsExamStrategies() {
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
                Test Preparation
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How to Ace Your IELTS Exam: Proven Strategies
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>April 28, 2023</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>Sarah Johnson</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>7 min read</span>
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
              src="/media/Photos/pexels-theshantanukr-16562727.jpg"
              alt="IELTS exam preparation"
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
              <h2>Understanding the IELTS Exam</h2>
              <p>
                The International English Language Testing System (IELTS) is one of the most widely accepted English proficiency tests globally. Whether you're pursuing higher education, immigration, or professional certification in an English-speaking country, a strong IELTS score can open doors to numerous opportunities.
              </p>
              <p>
                The IELTS exam consists of four key sections: Listening, Reading, Writing, and Speaking. Each section assesses different language skills and requires specific strategies to excel. This comprehensive guide provides proven techniques from experienced instructors who have helped countless students achieve band 8+ scores.
              </p>

              <h2>General Preparation Strategies</h2>
              <p>
                Before diving into section-specific strategies, let's cover some general approaches that apply to the entire exam:
              </p>
              <ul>
                <li><strong>Consistent Practice:</strong> Regular exposure to English through diverse materials is crucial for improvement.</li>
                <li><strong>Familiarize Yourself with the Format:</strong> Understanding the exam structure helps reduce anxiety and improves time management.</li>
                <li><strong>Track Your Progress:</strong> Regular practice tests help identify strengths and weaknesses.</li>
                <li><strong>Develop a Study Schedule:</strong> Allocate specific time blocks for each section based on your needs.</li>
                <li><strong>Learn from Mistakes:</strong> Analyze incorrect answers to understand patterns of errors.</li>
              </ul>

              <h2>Mastering the Listening Section</h2>
              <p>
                The IELTS Listening section consists of four recordings of native English speakers and includes 40 questions to be completed in 30 minutes.
              </p>
              
              <h3>Key Strategies for Listening Success</h3>
              <ul>
                <li><strong>Preview Questions:</strong> Use the time before each recording to read the questions and predict possible answers.</li>
                <li><strong>Identify Keywords:</strong> Underline key terms in questions to listen for specifically.</li>
                <li><strong>Listen for Signpost Language:</strong> Words like "however," "furthermore," and "alternatively" signal important information.</li>
                <li><strong>Watch for Distractors:</strong> Speakers often mention incorrect information before providing the correct answer.</li>
                <li><strong>Write as You Listen:</strong> Don't wait until the end to write answers, as you might forget details.</li>
                <li><strong>Check Spelling and Grammar:</strong> Even if your answer is conceptually correct, spelling errors will cost points.</li>
              </ul>

              <h3>Common Pitfalls to Avoid</h3>
              <p>
                Many test-takers struggle with:
              </p>
              <ul>
                <li>Getting distracted after missing an answer</li>
                <li>Failing to recognize different accents</li>
                <li>Missing answers due to synonyms or paraphrasing</li>
                <li>Not following instructions regarding word limits</li>
              </ul>

              <h2>Excelling in the Reading Section</h2>
              <p>
                The Reading section includes three passages of increasing difficulty with 40 questions to be completed in 60 minutes.
              </p>
              
              <h3>Effective Reading Techniques</h3>
              <ul>
                <li><strong>Skim First:</strong> Quickly read through each passage to understand the main ideas before tackling questions.</li>
                <li><strong>Scan for Specific Information:</strong> Learn to locate key details without reading every word.</li>
                <li><strong>Recognize Question Types:</strong> Different question formats (multiple choice, matching, true/false/not given) require different approaches.</li>
                <li><strong>Pay Attention to Qualifiers:</strong> Words like "always," "never," "some," or "most" can change the meaning of statements.</li>
                <li><strong>Allocate Time Wisely:</strong> Spend roughly 20 minutes on each passage, with the most challenging passage potentially requiring more time.</li>
              </ul>

              <h3>Advanced Strategies for Higher Bands</h3>
              <ul>
                <li><strong>Understand Inference Questions:</strong> Learn to read between the lines when information is implied but not stated directly.</li>
                <li><strong>Master True/False/Not Given Questions:</strong> "Not Given" means the information cannot be determined from the passage—it doesn't mean it's false.</li>
                <li><strong>Develop Vocabulary Recognition:</strong> Practice recognizing synonyms and paraphrases of key terms.</li>
              </ul>

              <h2>Conquering the Writing Section</h2>
              <p>
                The Writing section consists of two tasks. Task 1 requires describing visual information (graph, table, chart, or diagram) in 150+ words, while Task 2 is an essay of 250+ words.
              </p>
              
              <h3>Task 1: Visual Information Description</h3>
              <ul>
                <li><strong>Understand the Format:</strong> Include an introduction, overview, and detailed paragraphs.</li>
                <li><strong>Select Key Features:</strong> Identify and describe significant trends, comparisons, or stages.</li>
                <li><strong>Use Appropriate Language:</strong> Employ a variety of sentence structures and vocabulary for describing changes, trends, and comparisons.</li>
                <li><strong>Avoid Personal Opinion:</strong> Stick to the data presented without interpretation.</li>
                <li><strong>Practice Data Interpretation:</strong> Regularly analyze different types of visual information to improve speed and accuracy.</li>
              </ul>

              <h3>Task 2: Essay Writing</h3>
              <ul>
                <li><strong>Analyze the Question:</strong> Ensure you understand what the question is asking before planning your response.</li>
                <li><strong>Plan Your Essay:</strong> Spend 5 minutes creating a structure with an introduction, 2-3 body paragraphs, and a conclusion.</li>
                <li><strong>Take a Clear Position:</strong> Make your stance clear if it's an opinion essay.</li>
                <li><strong>Develop Ideas Logically:</strong> Each paragraph should have a main idea supported by examples or explanations.</li>
                <li><strong>Use Cohesive Devices:</strong> Connect ideas using linking words and phrases.</li>
                <li><strong>Demonstrate Range:</strong> Show your command of vocabulary and grammatical structures.</li>
                <li><strong>Allocate Time Wisely:</strong> Spend about 20 minutes on Task 1 and 40 minutes on Task 2.</li>
              </ul>

              <h2>Excelling in the Speaking Section</h2>
              <p>
                The Speaking section is a face-to-face interview lasting 11-14 minutes and consists of three parts: introduction and interview, individual long turn, and discussion.
              </p>
              
              <h3>Preparation Strategies</h3>
              <ul>
                <li><strong>Practice Regularly:</strong> Speak English daily, ideally with native speakers or advanced learners.</li>
                <li><strong>Record Yourself:</strong> Identify issues with pronunciation, intonation, and fluency.</li>
                <li><strong>Expand Your Vocabulary:</strong> Learn topic-specific vocabulary for common themes like education, environment, technology, etc.</li>
                <li><strong>Develop Examples:</strong> Prepare personal experiences related to common topics.</li>
                <li><strong>Work on Fluency:</strong> Practice speaking without long pauses or frequent self-corrections.</li>
              </ul>

              <h3>Part-Specific Approaches</h3>
              <ul>
                <li><strong>Part 1 (Introduction):</strong> Prepare concise but detailed answers about familiar topics like your hometown, work/studies, and hobbies.</li>
                <li><strong>Part 2 (Long Turn):</strong> Use the one-minute preparation time to make notes. Structure your response with an introduction, main points, and conclusion.</li>
                <li><strong>Part 3 (Discussion):</strong> Demonstrate critical thinking by considering different perspectives on abstract or complex issues.</li>
              </ul>

              <h3>Speaking Assessment Criteria</h3>
              <p>
                Examiners assess four areas:
              </p>
              <ul>
                <li><strong>Fluency and Coherence:</strong> Speaking naturally without too many hesitations and connecting ideas logically.</li>
                <li><strong>Lexical Resource:</strong> Using a wide range of vocabulary accurately and appropriately.</li>
                <li><strong>Grammatical Range and Accuracy:</strong> Using various grammatical structures with minimal errors.</li>
                <li><strong>Pronunciation:</strong> Speaking clearly with appropriate intonation and stress patterns.</li>
              </ul>

              <h2>Final Week Preparation</h2>
              <p>
                In the week leading up to your IELTS exam:
              </p>
              <ul>
                <li><strong>Take Full Practice Tests:</strong> Simulate test conditions with timed practice.</li>
                <li><strong>Review Key Strategies:</strong> Remind yourself of section-specific approaches.</li>
                <li><strong>Get Adequate Rest:</strong> Ensure you're well-rested, especially the night before the exam.</li>
                <li><strong>Organize Materials:</strong> Prepare your ID and other required documents.</li>
                <li><strong>Visit the Test Center Location:</strong> Familiarize yourself with the route to reduce stress on test day.</li>
              </ul>

              <h2>Test Day Tips</h2>
              <ul>
                <li><strong>Arrive Early:</strong> Give yourself extra time for registration and settling in.</li>
                <li><strong>Manage Anxiety:</strong> Use deep breathing or other relaxation techniques if needed.</li>
                <li><strong>Follow Instructions Carefully:</strong> Listen to and read all instructions before starting each section.</li>
                <li><strong>Manage Your Time:</strong> Keep an eye on the clock throughout the exam.</li>
                <li><strong>Stay Positive:</strong> If you struggle with a question, move on and return to it if time permits.</li>
              </ul>

              <h2>After the Exam</h2>
              <p>
                Once you've completed your IELTS exam:
              </p>
              <ul>
                <li><strong>Relax and Reflect:</strong> Note what went well and what could be improved if you need to retake the test.</li>
                <li><strong>Check Results Online:</strong> Results are typically available 13 days after the test.</li>
                <li><strong>Understand Your Band Scores:</strong> Each section receives a band score from 1 to 9, with an overall average.</li>
                <li><strong>Consider a Remark:</strong> If you believe your score doesn't reflect your performance, you can request a reevaluation.</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Success in the IELTS exam requires a combination of language skills, test-specific strategies, and confident execution. By understanding the format, practicing regularly, and applying the techniques outlined in this guide, you can maximize your potential for achieving your target band score.
              </p>
              <p>
                Remember that improving English proficiency is a journey, not just a destination. The skills you develop while preparing for IELTS will serve you well beyond the exam, helping you communicate effectively in academic, professional, and personal contexts in English-speaking environments.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 bg-primary">
                  <div className="h-full w-full flex items-center justify-center text-white text-2xl font-bold">
                    SJ
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm mb-2">IELTS Instructor & Language Coach</p>
                  <p className="text-gray-700">
                    Sarah has been teaching IELTS preparation courses for over 12 years and holds CELTA and DELTA qualifications. As a former IELTS examiner, she has unique insights into the assessment process. Sarah specializes in helping students overcome test anxiety and develop effective exam strategies.
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
                    <Link href="/blog/comparative-education-systems" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Comparing Education Systems: US vs. UK vs. Australia</h4>
                      <p className="text-sm text-gray-600 mt-1">Understand the key differences in academic structure...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/scholarship-opportunities-2023" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">5 Scholarship Opportunities You Shouldn't Miss in 2023</h4>
                      <p className="text-sm text-gray-600 mt-1">From Fulbright to Commonwealth scholarships...</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/study-germany-tuition-free" className="group">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">Complete Guide to Studying in Germany Without Tuition Fees</h4>
                      <p className="text-sm text-gray-600 mt-1">Discover how to access Germany's world-class education...</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Need IELTS Preparation Help?</h3>
                <p className="text-blue-100 mb-4">Our expert instructors can help you achieve your target band score with personalized coaching.</p>
                <Link href="/contact" className="block text-center py-2 px-4 bg-white text-primary hover:bg-blue-50 rounded-lg font-medium transition-colors">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 