'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AlgoritmoPrivacyPage() {
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
            <span className="text-[#B8E92D] text-sm font-medium">Algoritmo</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Algoritmo
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
              Algoritmo is a creative and automated assistant designed to generate visual content, manage social media campaigns, and provide educational credit repair services for Algoritmo Credit. Our platform helps users create and manage content for Instagram, using GPT-5 technology to deliver customized posts while integrating with Google Drive and the Instagram Graph API.
            </p>
            <p className="text-white/70 leading-relaxed">
              This Privacy Policy explains how we collect, use, protect, and share your data when using Algoritmo. We are committed to safeguarding your privacy and ensuring compliance with all applicable data protection laws, including GDPR and CCPA. By using Algoritmo, you agree to the terms outlined in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              When interacting with Algoritmo, we collect the following types of information:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Account Information:</strong> Basic personal information provided when using our services, such as your name, email, and Instagram credentials (if connected).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Content Information:</strong> Data related to the posts you create, such as captions, images, hashtags, and other content used in your Instagram campaigns.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Google Drive Data:</strong> If you choose to save content in Google Drive, we access the relevant Google Drive folders to store and manage your content securely.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> Information related to your device, such as IP address, device type, and browser type, which is automatically collected for service optimization purposes.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Algoritmo does not collect sensitive personal data, such as financial details, unless explicitly required for the functionality of our services.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The data we collect is used exclusively for the following purposes:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Content Creation and Management:</strong> We use the data you provide to generate visual content, create Instagram captions, and store content in Google Drive if requested.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Publishing and Scheduling:</strong> If you authorize, we use your Instagram account to publish posts directly to your Instagram feed via the Instagram Graph API.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Campaign Tracking:</strong> We offer the ability to track your campaigns by saving details of the images, captions, and Instagram post links to Google Drive (optional).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Service Improvement:</strong> We analyze interaction data to improve the performance and functionality of Algoritmo, ensuring a better experience.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Algoritmo does not use your data for advertising purposes, and we do not share or sell your personal information to third parties.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Content Data:</strong> Data related to your posts (images, captions) is retained as long as necessary to fulfill your requests and for campaign tracking purposes (if applicable). You may choose to delete this data at any time by disconnecting from Google Drive or Instagram.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">User Account Data:</strong> We retain account information only for the duration of your use of the service. Once you disconnect or stop using the service, we will delete your account information after a reasonable period.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> Collected for operational purposes and is deleted periodically in accordance with our internal data retention policy.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Algoritmo does not share your personal data with third parties for commercial purposes. However, the following data may be shared with external services to provide the functionality you request:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Google Drive:</strong> If you choose to store content on Google Drive, we share the necessary data (e.g., file names, image files) to store content securely.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Instagram:</strong> If you choose to publish posts on Instagram, we share data related to the posts (e.g., captions, images) to the Instagram Graph API to facilitate the publishing process.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              We do not sell or trade your data to any third-party entities.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security Measures</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We implement appropriate security measures to ensure that your data is protected:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Data Encryption:</strong> All data exchanged with Google Drive and Instagram is encrypted using HTTPS to protect your content and account details.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access Control:</strong> We implement strict access controls to ensure that only authorized systems can access your data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">OAuth Authentication:</strong> For Google Drive and Instagram connections, we use OAuth to securely manage access tokens and permissions.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              While we strive to maintain high-security standards, no system can guarantee absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Rights and Control</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have the following rights regarding your data:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access to Your Data:</strong> You can request a copy of the data you have shared with Algoritmo, such as images, captions, and campaign details.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Deletion of Your Data:</strong> You can request that we delete your content stored on Google Drive or Instagram at any time. We also allow you to disconnect your account from these services.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Revocation of Permissions:</strong> If you connect your Google Drive or Instagram account, you can revoke access through your account settings at any time.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:info@algoritmocredit.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@algoritmocredit.com</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Ethical Message</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Algoritmo is designed to assist you with creating and publishing content, offering educational credit repair solutions and tools.</strong> However, Algoritmo does not replace professional financial or credit advice. Always consult with a qualified expert for any professional advice related to financial or credit matters.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a new "Last Updated" date. We encourage users to periodically review this policy to stay informed of any changes.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, you can contact us at:
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              <strong className="text-white">Email:</strong> <a href="mailto:info@algoritmocredit.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@algoritmocredit.com</a><br />
              <strong className="text-white">Company:</strong> Algoritmo Credit<br />
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
          <p>© 2025 Algoritmo Credit. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}
