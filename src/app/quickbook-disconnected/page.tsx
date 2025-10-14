export const metadata = {
  title: 'QuickBook Disconnected | Merktop',
  description: 'You have successfully disconnected your QuickBooks account from Merktop.',
};

export default function QuickBookDisconnectedPage() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          max-width: 600px;
          width: 100%;
          padding: 60px 40px;
          text-align: center;
          animation: slideIn 0.5s ease-out;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .error-icon {
          width: 100px;
          height: 100px;
          background: #ef4444; /* red */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          animation: scaleIn 0.6s ease-out 0.2s both;
        }
        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        .exclamation {
          width: 10px;
          height: 50px;
          background: white;
          border-radius: 5px;
          position: relative;
        }
        .exclamation:after {
          content: '';
          position: absolute;
          bottom: -14px;
          left: -6px;
          width: 22px;
          height: 22px;
          background: white;
          border-radius: 50%;
        }
        h1 {
          color: #111827;
          font-size: 32px;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .subtitle {
          color: #4b5563;
          font-size: 18px;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .info-box {
          background: #f3f4f6;
          border-radius: 12px;
          padding: 20px;
          margin: 30px 0;
          text-align: left;
        }
        .info-box h3 {
          color: #374151;
          font-size: 16px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .info-box ul { list-style: none; padding: 0; }
        .info-box li {
          color: #6b7280;
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
          font-size: 14px;
        }
        .info-box li:before {
          content: '•';
          color: #ef4444;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .button-primary {
          display: inline-block;
          background: #B8E92D; /* Match "Get Started" CTA background */
          color: black; /* CTA text color for contrast */
          padding: 15px 40px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          margin-top: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(184, 233, 45, 0.3);
        }
        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(184, 233, 45, 0.5);
        }
        .button-secondary {
          display: inline-block;
          background: #111827;
          color: white;
          padding: 15px 40px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          margin-top: 20px;
          margin-left: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(17, 24, 39, 0.2);
        }
        .button-secondary:hover { transform: translateY(-2px); }
        /* Hide global site footer on this page */
        .footer-modern { display: none !important; }
      `}</style>

      <div className="container">
        <div className="error-icon">
          <div className="exclamation"></div>
        </div>

        <h1>Connection Disconnected</h1>
        <p className="subtitle">
          You have successfully disconnected your QuickBooks account from Merktop. Your information is safe and we no longer have access to your data.
        </p>

        <div className="info-box">
          <h3>⚠️ Important</h3>
          <p style={{ color: '#4b5563', fontSize: 16 }}>
            By disconnecting QuickBooks, all automatic synchronizations have been stopped. If you want to use this integration again, you'll need to reconnect your account.
          </p>
        </div>

        <div className="info-box">
          <h3>What happened?</h3>
          <ul>
            <li>Merktop's access to your QuickBooks was revoked</li>
            <li>Authentication tokens have been invalidated</li>
            <li>Automatic synchronization has stopped</li>
            <li>Your data remains safe in QuickBooks</li>
          </ul>
        </div>

        <a href="https://www.merktop.com" className="button-secondary" target="_blank" rel="noopener noreferrer">
          Back to Merktop
        </a>
        <a href="/quickbook-connected" className="button-primary">
          Reconnect QuickBooks
        </a>

        <p className="subtitle" style={{ marginTop: 20 }}>
          Did you have any issues? Contact us at <a href="mailto:support@merktop.com">support@merktop.com</a>
        </p>

        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 10 }}>
          <a href="/privacy" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy Policy</a> ·{' '}
          <a href="/terms" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms of Service</a>
        </p>

      </div>
    </>
  );
}