'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function FreedumbPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2E1F] to-[#0F3D2A] py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/openai/privacy"
          className="inline-flex items-center gap-2 text-[#B8E92D] hover:text-[#7FD858] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Privacy Overview
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#B8E92D]/10 border border-[#B8E92D]/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-[#B8E92D]" />
            <span className="text-[#B8E92D] text-sm font-medium">Freedumb</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Freedumb
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-white/60 text-sm">
            <span>Effective Date: October 27, 2025</span>
            <span className="hidden sm:inline">•</span>
            <span>Last Updated: October 27, 2025</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-8"
        >
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Freedumb is an innovative platform designed to provide a wide range of services, from data management to personal productivity tools. Our mission is to empower users with intelligent solutions while respecting their privacy and data security. This Privacy Policy explains how we collect, use, protect, and share your data when you use Freedumb.
            </p>
            <p className="text-white/70 leading-relaxed">
              We are committed to ensuring your privacy is safeguarded and comply with all applicable data protection regulations (such as GDPR and CCPA). By using Freedumb, you agree to the terms outlined in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              When you interact with Freedumb, we collect the following types of information:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Account Information:</strong> Personal details you provide when creating an account, such as your name, email address, and other contact information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">User Input:</strong> Any data or content you provide when using Freedumb's features (e.g., text input, preferences, settings).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> Information such as your IP address, device type, browser, and usage patterns, which is automatically collected for analytics and service optimization purposes.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Freedumb does not collect sensitive personal data such as financial details, health information, or personal identifiers unless specifically required for the functionality of the service.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use the data we collect for the following purposes:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Provide and Improve Services:</strong> To offer personalized features, manage your account, and improve the functionality of Freedumb.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Enhance User Experience:</strong> To tailor the platform to your preferences, making it easier for you to achieve your goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Support and Communication:</strong> To assist you with any issues you may encounter and provide updates or relevant notifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Analytics and Performance:</strong> To gather usage statistics that help us enhance and optimize the platform.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Freedumb will not use your data for advertising, marketing, or selling purposes without your consent.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Freedumb retains your data only for as long as necessary to provide our services. Once the data is no longer needed, we will delete it in accordance with applicable retention policies.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">User Account Data:</strong> Retained as long as your account is active, or until you request its deletion.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">User Content:</strong> Stored temporarily based on the features you use, and deleted upon account closure or request.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> Collected for analytics purposes and deleted periodically to ensure the service remains optimized.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Freedumb does not sell, rent, or share your personal data with third parties for marketing purposes. We may share data with third-party service providers to assist us in operating the platform, such as hosting services, analytics providers, or payment processors.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Service Providers:</strong> We may share necessary data with trusted third-party service providers who assist us in operating Freedumb. These providers are subject to strict confidentiality agreements.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Legal Compliance:</strong> We may disclose your data if required by law or to protect our rights, safety, or the rights of others.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Freedumb implements industry-standard security measures to protect your data:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Data Encryption:</strong> All data exchanged between you and Freedumb is transmitted securely using encryption protocols (e.g., HTTPS).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access Control:</strong> Your data is protected by access control mechanisms to ensure it is only available to authorized systems and personnel.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Regular Audits:</strong> We conduct regular security audits and assessments to identify vulnerabilities and ensure that your data is safe.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              However, please note that no system can guarantee 100% security. While we strive to protect your information, we cannot guarantee complete security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Rights and Control</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have the following rights regarding the data you share with Freedumb:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access to Data:</strong> You can request to view the information we hold about you at any time.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Data Deletion:</strong> You can request that we delete your account and all associated data, subject to applicable laws and retention policies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Data Portability:</strong> You can request to receive your data in a machine-readable format or transfer it to another service.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              For any requests, please contact us at <a href="mailto:info@freedumb.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@freedumb.com</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Ethical Message</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Freedumb is designed to offer tools that enhance productivity and data management.</strong> Freedumb does not replace professional advice. Always consult with relevant professionals for specialized needs, such as legal, medical, or financial matters.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted with a new "Last Updated" date. We encourage users to periodically review this policy to stay informed of any changes.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, you can contact us at:
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              <strong className="text-white">Email:</strong> <a href="mailto:info@freedumb.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@freedumb.com</a><br />
              <strong className="text-white">Company:</strong> Freedumb<br />
              <strong className="text-white">Effective Date:</strong> October 27, 2025
            </p>
          </section>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-white/50 text-sm"
        >
          <p>© 2025 Freedumb. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}
