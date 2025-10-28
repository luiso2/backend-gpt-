'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LAMattressPrivacyPage() {
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
            <span className="text-[#B8E92D] text-sm font-medium">Merktop LA Mattress</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Merktop La Mattress
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
              Merktop La Mattress is an intelligent assistant designed to help users with mattress-related information, such as product details, recommendations, and customer support, based on the available data from various trusted sources. This Privacy Policy explains how we handle your data, interactions with the assistant, and any third-party services it integrates with.
            </p>
            <p className="text-white/70 leading-relaxed">
              Merktop, the parent company, is committed to ensuring that your privacy is protected and complies with all applicable data protection regulations (such as GDPR and CCPA).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              When you interact with Merktop La Mattress, the following types of information may be collected:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">User Input:</strong> The information you provide when asking about mattress products, making inquiries, or interacting with the assistant.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> Automatically collected data such as your IP address, device information, browser type, and language preferences, which helps improve user experience and service functionality.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Third-Party Integration Data:</strong> If Merktop La Mattress interacts with third-party services (e.g., e-commerce platforms, product databases), some of your data may be used to fulfill your requests (e.g., product details, availability, and recommendations).</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Merktop La Mattress does not collect or store sensitive personal data such as financial information, payment details, or any other personal identifiers unless explicitly stated for a specific service.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The data collected by Merktop La Mattress is used exclusively for the following purposes:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Product Recommendations and Queries:</strong> The assistant uses the data you provide to recommend mattresses, answer product-related inquiries, and assist with customer service.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Improvement of Service:</strong> We may use non-personal data such as user preferences and interaction history to improve the performance and accuracy of Merktop La Mattress.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Third-Party Services:</strong> If the assistant interacts with external services (e.g., e-commerce platforms), your data may be temporarily shared with these services to provide accurate product information, pricing, or availability.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Merktop La Mattress does not use your data for advertising, marketing, or selling purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Temporary Data Retention:</strong> Merktop La Mattress does not retain personal data permanently. Data provided during an interaction is used temporarily to fulfill the requested service and is discarded at the end of the session.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Third-Party Data Retention:</strong> Any data exchanged with third-party platforms (e.g., e-commerce APIs) is subject to their own privacy policies. We only share data necessary to process your queries (e.g., product IDs, availability, etc.).</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop La Mattress does not share personal data with third parties for marketing or commercial purposes. However, we may share certain data with trusted third-party service providers for the following reasons:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">E-Commerce Platforms:</strong> If you are making a purchase or receiving recommendations, we may interact with third-party platforms to retrieve product data or facilitate transactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Service Providers:</strong> We may use trusted third-party providers for infrastructure, technical support, or hosting services. These providers are bound by confidentiality agreements and are not permitted to use your data for any purpose other than assisting in the operation of Merktop La Mattress.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              We do not sell or trade your data to any third-party entity.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security Measures</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop La Mattress employs strong technical and organizational measures to ensure the security of your data:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Encryption:</strong> All data exchanged between you and Merktop La Mattress is transmitted securely via HTTPS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access Control:</strong> Personal and sensitive data is protected by access control mechanisms to ensure only authorized personnel or systems have access to the data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">No Permanent Storage of Personal Data:</strong> Since no personal data is retained beyond the session, there is minimal risk to your data.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              However, please note that no system can guarantee 100% security, and while we strive to keep your data safe, we cannot guarantee complete security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Rights and Control</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have the following rights regarding the data you share with Merktop La Mattress:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access to Data:</strong> You can request access to any information that Merktop La Mattress has processed during your interaction, though this is typically limited to the current session.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Deletion of Data:</strong> Since Merktop La Mattress does not store personal data permanently, no special deletion process is required. All data is discarded after each session.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Revoke Third-Party Access:</strong> If Merktop La Mattress interacts with third-party services (e.g., e-commerce platforms), you can revoke access or modify settings directly with the third-party service.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              For further information or to exercise your rights, please contact us at <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Ethical Message</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Merktop La Mattress is designed to provide useful, evidence-based information about mattresses.</strong> However, the assistant does not replace professional advice, such as healthcare or legal advice. For any concerns regarding health, safety, or other professional matters, always consult a qualified expert.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. All updates will be posted with a new "Last Updated" date. Users are encouraged to review this policy periodically.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about this Privacy Policy, how Merktop La Mattress handles your data, or to exercise your rights, please contact us at:
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              <strong className="text-white">Email:</strong> <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a><br />
              <strong className="text-white">Company:</strong> Merktop<br />
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
          <p>© 2025 Merktop. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}
