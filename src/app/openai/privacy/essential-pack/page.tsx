'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function EssentialPackPrivacyPage() {
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
            <span className="text-[#B8E92D] text-sm font-medium">Merktop Essential Pack</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy of Merktop Essential Pack
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
              Merktop Essential Pack ("the Agent") is an AI assistant that interacts with the WooCommerce API endpoints (/gpt/v1/*) to manage products, stocks, and sales data. This Privacy Policy explains how the agent handles operational information, ensures data confidentiality, and complies with applicable privacy standards (GDPR, CCPA).
            </p>
            <p className="text-white/70 leading-relaxed">
              Merktop, the parent company, is the controller responsible for data processing through this agent.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Essential Pack processes only the information required for WooCommerce operations. Specifically:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Operational Data:</strong> Product information such as SKU, name, price, stock quantity, and categories.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Regional Identifiers:</strong> Prefixes and metadata for regional segmentation (HB-, CM-, OR-), including automated text for short descriptions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">API Access Information:</strong> WooCommerce credentials or tokens used to authenticate requests, handled securely through HTTPS connections.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Usage Logs:</strong> Non-personal data like timestamps, executed endpoints, and error codes for debugging and service optimization.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              <strong className="text-white">No customer personal information</strong> (such as buyer names, addresses, or payments) is accessed or stored.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Purpose of Data Processing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The data collected is used strictly for:
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Product Management:</strong> Creating, updating, and synchronizing WooCommerce product information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Regional Operations:</strong> Applying shipping and distribution rules by prefix and region.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Performance Optimization:</strong> Temporarily caching categories, taxonomies, and configurations to reduce API latency.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Error Handling:</strong> Logging execution issues to improve reliability and efficiency.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Merktop Essential Pack does not use data for analytics, profiling, or marketing purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Execution Behavior and Automation</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Essential Pack follows a secure, deterministic automation policy:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Single Confirmation:</strong> The agent confirms once at the beginning of the workflow; no repeated permission prompts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Direct Execution:</strong> Upon confirmation, operations execute immediately.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Full Payload Integrity:</strong> Every API operation sends complete payloads to ensure accurate and auditable transactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Regional Handling:</strong> If a region is not provided, the agent asks once ("¿Almacén? (HB/CM/OR)") and continues processing automatically.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              This behavior minimizes human error and ensures consistent data synchronization.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention and Storage</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Temporary Caching:</strong> Certain data (site instructions, taxonomies, categories) may be cached briefly to optimize speed and avoid redundant API calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">No Persistent Storage:</strong> The agent does not permanently store product or transactional data outside the WooCommerce environment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Secure WooCommerce Storage:</strong> All final data resides within your WooCommerce database, under your direct control.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Cached data is automatically deleted after completion or timeout.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Essential Pack does not share data with third parties, except as required to operate through WooCommerce's infrastructure:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">WooCommerce REST API:</strong> All actions occur through authenticated and encrypted API requests.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Infrastructure Providers:</strong> Limited access by Merktop's infrastructure partners for uptime and security monitoring — without visibility into product or API data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Legal Requirements:</strong> Data may be disclosed if mandated by law or to defend legitimate legal claims.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              No user or product data is sold, rented, or monetized.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Security Measures</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop applies strong security practices to protect API communications and operational integrity:
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span>Encrypted data transfers via HTTPS/TLS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span>No plaintext storage of credentials or tokens.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span>Automatic revocation of expired keys and sessions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span>Strict compliance with WooCommerce REST API authentication scopes.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Access control is managed at the user's WooCommerce level.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. User Rights and Controls</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You maintain full ownership and control of your WooCommerce data. You can:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Revoke Access:</strong> Disable API keys or revoke the agent's credentials at any time.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Request Log Deletion:</strong> Contact Merktop to request removal of anonymized operational logs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span><strong className="text-white">Audit Changes:</strong> Use WooCommerce's activity logs to verify product updates or changes initiated by the agent.</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Requests can be submitted to <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a>.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Compliance and Transparency</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Merktop Essential Pack complies with:
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span>GDPR (General Data Protection Regulation – EU)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span>CCPA (California Consumer Privacy Act)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8E92D] font-bold mt-1">•</span>
                <span>WooCommerce REST API Usage Policy</span>
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Data handling strictly follows the principle of <strong className="text-white">data minimization</strong> — only the data essential for operational execution is processed.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Updates to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              Merktop may revise this Privacy Policy periodically. Any updates will be published with a new "Last Updated" date. Continued use of the agent after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Company:</strong> Merktop<br />
              <strong className="text-white">Email:</strong> <a href="mailto:info@merktop.com" className="text-[#B8E92D] hover:text-[#7FD858] transition-colors">info@merktop.com</a><br />
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
