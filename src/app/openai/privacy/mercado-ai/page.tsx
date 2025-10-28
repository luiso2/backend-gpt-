'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MercadoAIPrivacyPage() {
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
            <span className="text-[#B8E92D] text-sm font-medium">Mercado AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Mercado AI
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
              Mercado AI is an assistant designed to help you create, maintain, and refine your shopping lists in a simple and proactive way. Our goal is to help you organize your shopping efficiently, manage your items, and track purchases. This Privacy Policy explains how we collect, use, protect, and share your data when using Mercado AI.
            </p>
            <p className="text-white/70 leading-relaxed">
              We are committed to protecting your privacy and ensuring compliance with applicable data protection laws (such as GDPR and CCPA). By using Mercado AI, you agree to the terms outlined in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              When you interact with Mercado AI, we collect the following types of information:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Shopping List Data:</strong> Items you add to your list, including quantity, unit, brand, target price, and notes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Purchase Data:</strong> Items you mark as purchased, including the quantity bought, unit price, and total spent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Technical Data:</strong> Information such as your device IP, browser type, and language preferences automatically collected during use to optimize user experience.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Mercado AI does not collect sensitive personal data, such as payment details or personal identifiers, unless explicitly required for specific services.
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
                <span><strong className="text-white">Create and Manage Shopping Lists:</strong> We organize and manage the items you want to buy, allowing you to add, edit, or delete items from your lists.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Mark Items as Purchased:</strong> We record the items you mark as purchased, calculating the total spent and the estimated total based on target prices.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Provide Substitute Suggestions:</strong> We suggest alternative items in case you cannot find the product you are looking for.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Budget Calculations:</strong> We estimate the budget needed to complete your shopping list and calculate the difference between actual and estimated spending.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Export Data:</strong> If you choose to export your list, we provide data in CSV, JSON, or Markdown formats for you to save outside of the conversation.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Mercado AI does not store personal data or shopping lists permanently. We only keep the data for the duration of the conversation session. Data is automatically deleted once the session ends or if the user decides to export the data.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Shopping List Data:</strong> At the end of the conversation, if you do not export your list, it will be automatically deleted.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Purchase Data:</strong> Purchased items are temporarily registered in a purchase history, but they are not stored beyond the session.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Mercado AI does not share your personal data with third parties for commercial purposes. However, we may share certain data with trusted third-party service providers for the following reasons:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">External Export Platforms:</strong> If you decide to export your list, we use third-party services (such as software libraries for generating files) to provide the requested formats.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              We do not sell or trade your data to any third-party entity.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Mercado AI applies reasonable technical and organizational measures to ensure the security of your data:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Secure Data Transmission:</strong> All data exchanged between you and Mercado AI is transmitted securely via HTTPS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access Control:</strong> Personal and sensitive data is protected by access control mechanisms, ensuring only authorized personnel or systems can access the data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">No Permanent Data Storage:</strong> Since Mercado AI does not retain personal data beyond the session, there is minimal risk to your data.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              However, no system can guarantee 100% security. While we strive to keep your data safe, we cannot guarantee complete security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Rights and Control</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have the following rights regarding the data you share with Mercado AI:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Access to Your Data:</strong> You can request information about the items you have added, marked as purchased, or exported during the current session.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Data Deletion:</strong> At the end of the conversation, your data will be automatically deleted unless you decide to export it. We do not retain a historical file of your lists once the session is over.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Revoke Third-Party Access:</strong> If you connect external sources (e.g., uploaded files), you can delete those files or disable any external sources at any time.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              For more information or to exercise your rights, please contact us at <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Ethical Message</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Mercado AI is designed to assist you in organizing your shopping lists.</strong> The information provided is for organizational and shopping support purposes only. It does not replace professional advice, such as health, nutrition, or safety advice.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              Mercado AI reserves the right to modify this privacy policy at any time. Updates will be posted on this page with a new "Last Updated" date. We encourage users to periodically review this policy to stay informed about any changes.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, you can contact us at:
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
