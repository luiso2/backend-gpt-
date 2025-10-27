'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SheetCreatorPrivacyPage() {
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
            <span className="text-[#B8E92D] text-sm font-medium">Merktop Sheet Creator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Merktop Sheet Creator
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
            <p className="text-white/70 leading-relaxed">
              Merktop Sheet Creator is a tool that allows users to interact with Google Sheets through the Google Sheets API. By using this agent, users authenticate with their Google account and grant permission to access their Google Sheets data. This Privacy Policy explains how we collect, use, share, and protect your information when using Merktop Sheet Creator.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              When you use Merktop Sheet Creator, we collect the following types of information:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Google Account Information:</strong> When you authenticate with your Google account, we collect information such as your Google account name, email address, and profile details. We only request the necessary permissions to interact with Google Sheets on your behalf.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Google Sheets Data:</strong> When you authorize Merktop Sheet Creator to access your Google Sheets, we collect and store the data from the sheets that you allow us to access. This includes the content of the sheets, such as text, numbers, and other data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Usage Information:</strong> Data about how you interact with Merktop Sheet Creator, such as the actions you take and the frequency of use.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access and Modify Google Sheets:</strong> Provide the functionality of creating, modifying, and managing Google Sheets based on your instructions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Improve Our Service:</strong> Analyze usage data to improve the functionality, performance, and user experience of Merktop Sheet Creator.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Provide Support:</strong> Contact you regarding any issues or updates related to the service.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We do not share your personal information or Google Sheets data with third parties except in the following cases:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Google Services:</strong> We use Google Sheets API to interact with your Google Sheets data. The data is processed according to Google's API terms and privacy policy. For more information on how Google handles your data, please review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#B8E92D] hover:text-[#7FD858] underline transition-colors">Google's Privacy Policy here</a>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Service Providers:</strong> We may share information with third-party service providers who assist us in operating Merktop Sheet Creator, such as data storage or technical support providers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Legal Compliance:</strong> We may disclose your information if required by law or to protect our legal rights.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Security of Your Information</h2>
            <p className="text-white/70 leading-relaxed">
              We take reasonable precautions to protect your information from unauthorized access, alteration, or disclosure. However, please note that when using third-party services like Google Sheets, the security of your data may also depend on the security measures employed by Google.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-white/70 leading-relaxed">
              We retain your information and the data from Google Sheets as long as you continue to use Merktop Sheet Creator. If you decide to revoke access to your Google Sheets or discontinue using the service, we will delete the data associated with your Google account, unless otherwise required by law.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have certain rights regarding your information, including:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access:</strong> You can request a copy of the data we have collected from your Google Sheets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Revocation of Access:</strong> You can revoke the access permissions granted to Merktop Sheet Creator via your Google account settings at any time.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Deletion:</strong> You can request the deletion of your data from Merktop Sheet Creator. To do so, please contact us at <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a>.</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Google Authentication</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Sheet Creator uses Google OAuth to authenticate users. When you sign in with your Google account, you are granting us permission to access your Google Sheets data based on the specific permissions you grant. We only request the minimum required permissions necessary to perform the operations you request.
            </p>
            <p className="text-white/70 leading-relaxed">
              For more information on Google's OAuth process and their privacy practices, please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#B8E92D] hover:text-[#7FD858] underline transition-colors">Google's Privacy Policy</a>.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date. We recommend reviewing this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              <strong className="text-white">Email:</strong> <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a>
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
