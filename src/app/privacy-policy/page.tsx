'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Beyond Borders Overseas ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website and use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>

            <h3>Personal Data</h3>
            <p>
              When you register for our services, fill out forms, or otherwise interact with our website, 
              we may collect personally identifiable information, such as:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Academic records and qualifications</li>
              <li>Passport details (when required for visa applications)</li>
              <li>Financial information (for loan processing and financial guidance)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, our servers may automatically log the standard data provided by your 
              web browser. This data may include:
            </p>
            <ul>
              <li>Your computer's IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on each page</li>
              <li>Other details about your visit</li>
            </ul>

            <h3>Cookies and Similar Technologies</h3>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies to help 
              customize our website and improve your experience. For more information about how we use 
              cookies, please refer to our Cookie Policy.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect about you for various purposes, including:</p>
            <ul>
              <li>Providing, personalizing, and improving our services</li>
              <li>Processing applications and enrollments</li>
              <li>Communicating with you about our services</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Sending you marketing and promotional communications (with your consent)</li>
              <li>Analyzing usage patterns and trends to enhance our website</li>
              <li>Protecting against unauthorized access and legal liability</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share your information with third parties in certain situations:</p>
            <ul>
              <li>With universities and educational institutions as part of your application process</li>
              <li>With visa processing authorities when providing visa assistance</li>
              <li>With financial institutions when processing loan applications</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal 
              information. While we have taken reasonable steps to secure the personal information you 
              provide to us, please be aware that no security measures are perfect or impenetrable, and 
              no method of data transmission can be guaranteed against interception or other types of misuse.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your 
              state, province, country, or other governmental jurisdiction where the data protection laws 
              may differ from those in your jurisdiction. If you are located outside India and choose to 
              provide information to us, please note that we transfer the information to India and process 
              it there.
            </p>

            <h2>Your Privacy Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li>Right to access the personal information we hold about you</li>
              <li>Right to request correction of inaccurate information</li>
              <li>Right to request deletion of your information</li>
              <li>Right to object to or restrict processing of your information</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details provided in the "Contact Us" 
              section below.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under 16 years of age. We do not knowingly collect 
              personal information from children under 16. If you are a parent or guardian and believe your 
              child has provided us with personal information, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by 
              posting the new privacy policy on this page and updating the "Last Updated" date. You are 
              advised to review this privacy policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this privacy policy or our practices, please contact us at:
            </p>
            <p>
              Beyond Borders Overseas<br />
              123 Global Education Tower<br />
              New Delhi, India 110001<br />
              Email: privacy@beyondbordersoverseas.com<br />
              Phone: +91 987-654-3210
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 