import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MERKTOP',
  description: 'Privacy Policy for MERKTOP QuickBooks Integration Application covering data collection, usage, storage, security, sharing, rights, revocation, retention, third-party services, international transfers, children’s privacy, changes, contact, cookies, and compliance.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="legal-page" style={{ backgroundColor: '#0A2E1F', color: '#fff' }}>
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ color: '#B8E92D', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.9, marginBottom: '24px' }}>Effective Date: October 14, 2025</p>

        <div className="legal-content" style={{ lineHeight: 1.7, opacity: 0.95 }}>
          <p>
            This Privacy Policy describes how Merktop ("we," "us," or "our") collects, uses, and protects your information when you use our QuickBooks Integration Application ("Application").
          </p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>1. Information We Collect</h2>
          <h3 style={{ color: '#E6FF5C', marginTop: '16px' }}>1.1 Information You Provide</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>QuickBooks Authorization: When you connect your QuickBooks account, we receive authorization to access your QuickBooks data</li>
            <li>Account Information: Your QuickBooks company information and realm ID</li>
          </ul>
          <h3 style={{ color: '#E6FF5C', marginTop: '16px' }}>1.2 Information from QuickBooks</h3>
          <p>With your authorization, we may access:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Customer and vendor information</li>
            <li>Invoices, bills, and payments</li>
            <li>Financial reports and accounts</li>
            <li>Items and products</li>
            <li>Other data necessary for the Application's functionality</li>
          </ul>
          <h3 style={{ color: '#E6FF5C', marginTop: '16px' }}>1.3 Technical Information</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>API access logs and timestamps</li>
            <li>Error logs and diagnostic information</li>
            <li>Application usage statistics</li>
          </ul>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Provide and maintain the Application's functionality</li>
            <li>Process your requests to read, create, update, or delete QuickBooks data</li>
            <li>Improve and optimize the Application</li>
            <li>Troubleshoot technical issues</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p><strong>Important:</strong> We only access your QuickBooks data when you explicitly authorize us and only to perform the functions you request.</p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>3. Data Storage and Security</h2>
          <h3 style={{ color: '#E6FF5C', marginTop: '16px' }}>3.1 What We Store</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>OAuth Tokens: Securely encrypted access and refresh tokens</li>
            <li>Realm ID: Your QuickBooks company identifier</li>
            <li>Logs: Temporary logs for debugging (automatically deleted after 30 days)</li>
          </ul>
          <h3 style={{ color: '#E6FF5C', marginTop: '16px' }}>3.2 What We Don't Store</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Your QuickBooks username or password</li>
            <li>Complete copies of your financial data</li>
            <li>Credit card or payment information</li>
          </ul>
          <h3 style={{ color: '#E6FF5C', marginTop: '16px' }}>3.3 Security Measures</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>All data transmission uses HTTPS/TLS encryption</li>
            <li>OAuth tokens are encrypted at rest</li>
            <li>Access to systems is restricted and monitored</li>
            <li>Regular security audits and updates</li>
          </ul>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>4. Data Sharing and Disclosure</h2>
          <p>We do NOT sell, rent, or trade your information. We may share your information only in these limited circumstances:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>With Your Consent: When you explicitly authorize us to share specific data</li>
            <li>Service Providers: With trusted third-party services that help us operate the Application (under strict confidentiality agreements)</li>
            <li>Legal Requirements: When required by law, court order, or government regulation</li>
            <li>Business Transfers: In connection with a merger, acquisition, or sale of assets (with notice to you)</li>
          </ul>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>5. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Access: Request a copy of the data we have about you</li>
            <li>Correction: Request correction of inaccurate data</li>
            <li>Deletion: Request deletion of your data (subject to legal obligations)</li>
            <li>Revocation: Revoke the Application's access to your QuickBooks account at any time</li>
            <li>Data Portability: Request your data in a portable format</li>
          </ul>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>6. Revoking Access</h2>
          <p>You can revoke the Application's access to your QuickBooks account at any time by:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Logging into your QuickBooks Online account</li>
            <li>Going to Settings → Apps</li>
            <li>Finding this Application and clicking "Disconnect"</li>
          </ul>
          <p>After disconnection, we will no longer have access to your QuickBooks data, and stored tokens will be invalidated.</p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>7. Data Retention</h2>
          <p>We retain your information only as long as necessary to:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Provide the Application's services</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p>When you disconnect the Application, we delete or anonymize your data within 90 days, except where retention is required by law.</p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>8. Third-Party Services</h2>
          <p>This Application integrates with:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>QuickBooks Online: Subject to Intuit's Privacy Policy</li>
            <li>Intuit Platform: Subject to Intuit's Terms of Service</li>
          </ul>
          <p>We recommend reviewing Intuit's privacy policies at: <a href="https://www.intuit.com/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: '#B8E92D' }}>https://www.intuit.com/privacy/</a></p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>9. International Data Transfers</h2>
          <p>Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.</p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>10. Children's Privacy</h2>
          <p>The Application is not intended for use by individuals under the age of 18. We do not knowingly collect information from children.</p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Posting the new Privacy Policy on this page</li>
            <li>Updating the "Effective Date" at the top</li>
            <li>Sending you an email notification (if applicable)</li>
          </ul>
          <p>Your continued use of the Application after changes constitutes acceptance of the updated policy.</p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>12. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Company: Merktop</li>
            <li>Website: www.merktop.com</li>
            <li>Email: privacy@merktop.com</li>
            <li>Support: support@merktop.com</li>
          </ul>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>13. Cookie Policy</h2>
          <p>The Application may use cookies or similar technologies for:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Authentication and session management</li>
            <li>Security and fraud prevention</li>
            <li>Application functionality</li>
          </ul>
          <p>You can control cookies through your browser settings, but disabling them may affect Application functionality.</p>

          <h2 style={{ color: '#E6FF5C', marginTop: '28px' }}>14. Compliance</h2>
          <p>We comply with applicable data protection regulations, including:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>General Data Protection Regulation (GDPR) - for EU users</li>
            <li>California Consumer Privacy Act (CCPA) - for California residents</li>
            <li>Other applicable local and international privacy laws</li>
          </ul>

          <p style={{ marginTop: '24px' }}>© 2025 Merktop. All rights reserved.</p>
          <p>This Privacy Policy was last updated on October 14, 2025.</p>
        </div>
      </div>
    </section>
  )
}
