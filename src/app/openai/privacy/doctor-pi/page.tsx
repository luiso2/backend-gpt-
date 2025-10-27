'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DoctorPiPrivacyPage() {
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
            <span className="text-[#B8E92D] text-sm font-medium">Doctor Pi</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Doctor Pi
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
              Doctor Pi is a multilingual biomedical assistant designed to provide information exclusively sourced from PubMed through the NCBI E-utilities API. It does not use any proprietary knowledge or data. All responses are based solely on PubMed's scientific and medical literature. Doctor Pi supports over 20 languages and adapts its language according to the user's preference, maintaining scientific terminology in English (such as author names, journal titles, and keywords).
            </p>
            <p className="text-white/70 leading-relaxed">
              This Privacy Policy explains how Doctor Pi processes user data, interacts with PubMed, and handles sensitive information.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Doctor Pi does not collect or store any personal data from users during interactions. However, some technical data may be processed during the use of the service, such as:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">API Request Data:</strong> Doctor Pi retrieves information through PubMed's NCBI E-utilities API, including data from endpoints like /esearch.fcgi, /efetch.fcgi, /elink.fcgi, and others.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Search Queries:</strong> The search queries you input into Doctor Pi are sent to PubMed's servers to retrieve relevant information. These queries are not stored but processed in real-time for the purpose of delivering results.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> This includes IP address, browser type, and language preferences, which are automatically collected by the NCBI E-utilities API during interactions. This data is used solely for technical and operational purposes to ensure proper service functionality.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Doctor Pi does not track personal identifiers or store any data permanently. All information is retrieved and processed in real-time from PubMed without retaining any user-related data.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The data collected is used exclusively for the following purposes:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Retrieve Scientific Data:</strong> Doctor Pi interacts with PubMed's API to search, fetch, and summarize biomedical and scientific information from publicly available publications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Provide Relevant Responses:</strong> Doctor Pi processes search queries to offer accurate, evidence-based responses. The agent searches for systematic reviews, meta-analyses, and recent studies, prioritizing high-quality sources.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Improve Service Functionality:</strong> Technical data may be used to monitor and improve system performance and optimize the quality of interactions.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Doctor Pi does not collect, sell, or share any personal data for marketing or commercial purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">No Personal Data Storage:</strong> Doctor Pi does not store personal data or search queries. The system operates in real-time, retrieving data directly from PubMed and presenting it to the user without retaining any of that data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Temporary Data Use:</strong> Technical information (such as API requests) may be temporarily logged for service operational purposes. This data is used solely to ensure the proper functioning of the service.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Doctor Pi does not retain any user-related data after the completion of an interaction.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Doctor Pi does not share any user data or information with third parties. The only external interaction is with PubMed's servers through the NCBI E-utilities API, which provides publicly available medical and scientific literature.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">PubMed (NCBI E-utilities API):</strong> Doctor Pi only communicates with PubMed to fetch medical and scientific data. The information retrieved is used strictly for educational and informational purposes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">No Third-Party Sharing:</strong> We do not sell, trade, or share any data collected from users with third-party entities.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security Measures</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We take appropriate technical measures to ensure the security of your data during interactions with Doctor Pi:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Secure API Communication:</strong> All data exchanged with PubMed's servers is transmitted securely using HTTPS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">No Personal Data Storage:</strong> As Doctor Pi does not store any personal data, there is no personal data to secure beyond the brief, technical exchange during API calls.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              However, as with any online service, complete security cannot be guaranteed. We strive to ensure that all interactions with Doctor Pi are safe and secure.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Control and Rights</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Since Doctor Pi does not collect personal data, users do not need to manage data access, modifications, or deletions. All interactions with Doctor Pi are handled in real-time with no permanent data retention or tracking.
            </p>
            <p className="text-white/70 leading-relaxed">
              If you have any concerns about your privacy or would like to learn more about how Doctor Pi interacts with PubMed, feel free to contact us at <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Ethical Message</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Doctor Pi does not replace professional medical advice.</strong> All information provided is derived from publicly available scientific and medical sources (PubMed) for educational and informational purposes only. Users should consult a healthcare provider for personal medical advice.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted with a new "Last Updated" date. Users are encouraged to review this policy periodically.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions about this Privacy Policy or the information that Doctor Pi retrieves and processes, please contact us at:
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
