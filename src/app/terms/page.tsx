'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
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
              These Terms and Conditions ("Terms") govern your use of the Beyond Borders Overseas website 
              and services. By accessing our website or using our services, you agree to be bound by these 
              Terms. If you disagree with any part of these Terms, you may not access the website or use our 
              services.
            </p>

            <h2>Interpretation and Definitions</h2>
            <h3>Interpretation</h3>
            <p>
              Words of which the initial letter is capitalized have meanings defined under the following 
              conditions. The following definitions shall have the same meaning regardless of whether they 
              appear in singular or in plural.
            </p>

            <h3>Definitions</h3>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul>
              <li><strong>"Company"</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) 
                refers to Beyond Borders Overseas, 123 Global Education Tower, New Delhi, India 110001.</li>
              <li><strong>"Services"</strong> refers to education consulting services including but not limited to 
                university application assistance, test preparation, visa support, and related services.</li>
              <li><strong>"Website"</strong> refers to Beyond Borders Overseas, accessible from beyondbordersoverseas.com</li>
              <li><strong>"You"</strong> means the individual accessing or using the Services, or the company, or 
                other legal entity on behalf of which such individual is accessing or using the Services, as applicable.</li>
            </ul>

            <h2>Acknowledgment</h2>
            <p>
              These are the Terms and Conditions governing the use of this Service and the agreement that 
              operates between You and the Company. These Terms and Conditions set out the rights and 
              obligations of all users regarding the use of the Service.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with 
              these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others 
              who access or use the Service.
            </p>

            <h2>Services</h2>
            <p>
              The Company provides education consulting services, including but not limited to:
            </p>
            <ul>
              <li>Test preparation for standardized tests (IELTS, TOEFL, GRE, GMAT, etc.)</li>
              <li>University/program selection and application assistance</li>
              <li>Statement of purpose and essay review</li>
              <li>Visa application and interview preparation</li>
              <li>Education loan guidance</li>
              <li>Pre-departure orientation</li>
            </ul>

            <h2>Service Fees and Payments</h2>
            <p>
              Fees for our services vary depending on the specific services requested. All fees will be clearly 
              communicated to you before you engage our services. Payment terms and methods will be specified 
              in the service agreement or invoice provided to you.
            </p>
            <p>
              All payments are non-refundable unless otherwise stated in a specific service agreement. Partial 
              refunds may be considered on a case-by-case basis and at the sole discretion of the Company.
            </p>

            <h2>User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and 
              current at all times. Failure to do so constitutes a breach of the Terms, which may result in 
              immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any 
              activities or actions under your password. You agree not to disclose your password to any third 
              party. You must notify us immediately upon becoming aware of any breach of security or unauthorized 
              use of your account.
            </p>

            <h2>Your Responsibilities</h2>
            <p>
              By using our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information about yourself and your academic background</li>
              <li>Respond promptly to requests for information or documents</li>
              <li>Attend scheduled appointments and sessions</li>
              <li>Meet deadlines for document submission and application requirements</li>
              <li>Comply with all applicable laws and regulations regarding university applications and visa requirements</li>
              <li>Maintain the confidentiality of any materials provided to you</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive 
              property of the Company and its licensors. The Service is protected by copyright, trademark, and 
              other laws of both India and foreign countries. Our trademarks and trade dress may not be used in 
              connection with any product or service without the prior written consent of the Company.
            </p>
            <p>
              All materials provided to you as part of our services, including but not limited to study materials, 
              templates, and guidance documents, are the property of the Company and are provided for your personal 
              use only. You may not distribute, reproduce, or use these materials for commercial purposes.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall the Company, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>The outcome of university applications or visa applications</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Service</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the Service</li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              The Company does not guarantee acceptance to any university or approval of any visa application. 
              The success of applications depends on numerous factors beyond our control, including but not limited 
              to your academic qualifications, the policies of universities and immigration authorities, and the 
              availability of slots/places.
            </p>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without 
              warranties of any kind, whether express or implied, including, but not limited to, implied warranties 
              of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to 
              its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not 
              be considered a waiver of those rights.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What 
              constitutes a material change will be determined at our sole discretion. By continuing to access or 
              use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Beyond Borders Overseas<br />
              123 Global Education Tower<br />
              New Delhi, India 110001<br />
              Email: legal@beyondbordersoverseas.com<br />
              Phone: +91 987-654-3210
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 