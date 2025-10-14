import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'End User License Agreement (EULA) | MERKTOP',
  description: 'MERKTOP End User License Agreement outlining license scope, usage restrictions, data privacy, QuickBooks integration policy, warranty disclaimer, and liability limitations.',
}

export default function EULAPage() {
  return (
    <section className="legal-page" style={{ backgroundColor: '#0A2E1F', color: '#fff' }}>
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ color: '#B8E92D', marginBottom: '16px' }}>End User License Agreement (EULA)</h1>
        <p style={{ opacity: 0.9, marginBottom: '24px' }}>Last updated: {new Date().getFullYear()}</p>

        <div className="legal-content" style={{ lineHeight: 1.7, opacity: 0.95 }}>
          <p>
            This End User License Agreement ("Agreement") is a legal agreement between you ("User", "you") and MERKTOP ("Company", "we", "our") governing the use of MERKTOP software, services, and integrations.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>1. License Grant</h2>
          <p>
            MERKTOP grants you a non-exclusive, non-transferable, revocable license to use our software and services solely for your business purposes in accordance with this Agreement.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>2. Restrictions</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Do not copy, modify, distribute, sell, or sublicense the software.</li>
            <li>Do not reverse engineer, decompile, or attempt to extract source code.</li>
            <li>Do not use the software for unlawful activities or in violation of third-party terms.</li>
          </ul>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>3. Data Privacy</h2>
          <p>
            We process data in compliance with applicable privacy laws. By using our services, you acknowledge that data will be collected, processed, and stored for operational purposes, security, and service improvements. Refer to our Privacy Policy for details.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>4. QuickBooks Integration Policy</h2>
          <p>
            If you connect QuickBooks to MERKTOP, you authorize us to access and process accounting-related data solely to provide automation and reporting features. You retain full ownership of your accounting data. You can disconnect QuickBooks at any time; upon disconnection, related data processing stops.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>5. Warranty Disclaimer</h2>
          <p>
            MERKTOP provides the software and services "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MERKTOP shall not be liable for any indirect, incidental, consequential, or special damages, including lost profits or data, arising out of or in connection with the use or inability to use the software or services.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>7. Account Termination</h2>
          <p>
            We may suspend or terminate your access if you violate this Agreement or misuse the services. You may terminate your account at any time. Upon termination, your license to use the software ceases immediately.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>8. Changes to Terms</h2>
          <p>
            We may update this Agreement to reflect changes in our services or legal requirements. Continued use after updates constitutes acceptance of the revised terms. We will provide notice of material changes.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>9. Governing Law</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws applicable to MERKTOP and its principal place of business, without regard to conflict of law principles.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>10. Contact</h2>
          <p>
            For questions or concerns about this Agreement, contact us at <a href="mailto:info@merktop.com" style={{ color: '#B8E92D' }}>info@merktop.com</a>.
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>11. Acceptance</h2>
          <p>
            By using MERKTOP software and services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement.
          </p>
        </div>
      </div>
    </section>
  )
}