'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MerktopAssistantPrivacyPage() {
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
            <span className="text-[#B8E92D] text-sm font-medium">Merktop Assistant</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Merktop Assistant
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
              Merktop Assistant is an intelligent assistant designed to assist with a wide range of tasks through the use of AI and integrations with various APIs. This Privacy Policy outlines how Merktop Assistant processes, uses, and protects your data during interactions.
            </p>
            <p className="text-white/70 leading-relaxed">
              Merktop, the parent company, is committed to safeguarding your privacy and ensuring compliance with applicable data protection laws (GDPR, CCPA, etc.).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Assistant collects and processes the following types of data during your interactions:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">User Input:</strong> The information you provide when interacting with Merktop Assistant, such as queries, commands, or requests.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> Information about your device, IP address, browser type, and language preferences automatically collected during use.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">API Request Data:</strong> When interacting with third-party services (e.g., PubMed, WooCommerce, etc.), Merktop Assistant may send requests that include the data necessary for those services to function (e.g., search queries, API keys, etc.).</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Merktop Assistant does not collect or store sensitive personal information such as social security numbers, financial data, or health records, unless explicitly stated for specific services or integrations.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The data collected is used exclusively to:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Provide Responses and Assistance:</strong> Merktop Assistant uses the information you provide to deliver responses, perform tasks, and assist with your queries.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Third-Party API Integrations:</strong> Merktop Assistant may interact with external APIs or services (e.g., PubMed, Google Sheets, WooCommerce) to retrieve or manage data as part of its functionality.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Improve Service Quality:</strong> Merktop Assistant may use non-personal data (e.g., usage statistics, interaction history) to optimize the service, improve its accuracy, and enhance the user experience.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Merktop Assistant does not use your data for marketing purposes or share it with third parties for commercial gain.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Assistant does not store personal data or interaction history beyond the current session. Once the session ends, all data is discarded.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Temporary Data Use:</strong> Some data may be temporarily stored for the duration of the session to provide relevant responses or actions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">API Request Data:</strong> When interacting with third-party APIs, data may be retained for the time necessary to process the request (e.g., API calls to PubMed). However, Merktop Assistant does not retain or log this data after the session ends.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Assistant does not share any personal or sensitive data with third parties unless explicitly required by the functionality of third-party services. For example:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Third-Party APIs:</strong> When interacting with services such as PubMed or WooCommerce, Merktop Assistant sends necessary data (e.g., search queries, product information) to those services to fulfill your request. These services are governed by their own privacy policies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Service Providers:</strong> In some cases, Merktop may work with third-party service providers (e.g., cloud hosting) who assist in the operation of the service. These providers are not permitted to use the data for any purpose other than assisting with service delivery.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security Measures</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Assistant takes appropriate technical and organizational measures to protect your data:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Encryption:</strong> All data exchanges are secured using encryption protocols (e.g., HTTPS, SSL/TLS).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access Control:</strong> Data is only accessible to authorized systems and is not shared with unauthorized third parties.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">No Personal Data Storage:</strong> Since Merktop Assistant does not retain personal data beyond the session, there is no permanent data storage to protect beyond technical logs for system operations.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Despite these security measures, we cannot guarantee absolute protection, as no system can be 100% secure.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Rights and Control</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have the following rights regarding the data you share with Merktop Assistant:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access to Data:</strong> You can request access to any data you've shared during interactions with Merktop Assistant, though it is generally limited to the current session.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Deletion of Data:</strong> Since Merktop Assistant does not store personal data permanently, there is no specific deletion process. Once the session ends, your data is not retained.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Revoke API Permissions:</strong> For any third-party services that require API access (e.g., Google Sheets, PubMed), you can revoke permissions through the respective service settings.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              For more information or if you wish to exercise your rights, please contact us at <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Ethical Message</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Merktop Assistant is designed to provide information and perform tasks based on available data.</strong> However, it is not a substitute for professional advice in fields such as healthcare, law, or finance. Always consult a qualified professional for advice or assistance in these areas.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              Merktop may update this Privacy Policy from time to time. Any significant changes will be communicated through the service, and the "Last Updated" date will be revised. We encourage users to review this policy periodically to stay informed of any changes.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, or how Merktop Assistant handles your data, please contact us at:
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
