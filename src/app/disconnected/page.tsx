export const metadata = {
  title: 'QuickBook Disconnected | Merktop',
  description: 'Your QuickBooks account has been disconnected from Merktop.',
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
          max-width: 700px;
          width: 100%;
          padding: 60px 40px;
          text-align: center;
          animation: slideIn 0.5s ease-out;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .disconnect-icon {
          width: 100px;
          height: 100px;
          background: #ef4444; /* Red for disconnected */
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
        .xmark {
          position: relative;
          width: 50px;
          height: 50px;
        }
        .xmark:before, .xmark:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 5px;
          background: white;
          transform-origin: center;
        }
        .xmark:before { transform: translate(-50%, -50%) rotate(45deg); }
        .xmark:after { transform: translate(-50%, -50%) rotate(-45deg); }

        h1 {
          color: #ffffff;
          font-size: 32px;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .subtitle {
          color: #ffffff;
          font-size: 18px;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .container p { color: #ffffff; }

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
        .info-box p {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
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
          color: #0A2E1F;
          font-weight: bold;
          position: absolute;
          left: 8px;
          top: 0;
        }

        .button-group {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .button {
          display: inline-block;
          background: #B8E92D; /* Match header CTA */
          color: black;
          padding: 15px 28px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(184, 233, 45, 0.3);
        }
        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(184, 233, 45, 0.5);
        }

        .support {
          margin-top: 24px;
          font-size: 14px;
        }
        .support a { color: #B8E92D; text-decoration: none; }
        .support a:hover { text-decoration: underline; }

        .legal {
          margin-top: 18px;
          font-size: 13px;
          color: #6b7280;
        }
        .legal a { color: #6b7280; text-decoration: none; }
        .legal a:hover { text-decoration: underline; }

        /* Hide global site footer on this page */
        .footer-modern { display: none !important; }
      `}</style>

      <div className="container">
        <div className="disconnect-icon">
          <div className="xmark"></div>
        </div>

        <h1>Connection Disconnected</h1>
        <p className="subtitle">
          You have successfully disconnected your QuickBooks account from Merktop.
          Your information is safe and we no longer have access to your data.
        </p>

        <div className="info-box">
          <h3>⚠️ Important</h3>
          <p>
            By disconnecting QuickBooks, all automatic synchronizations have been stopped.
            If you want to use this integration again, you'll need to reconnect your account.
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

        <div className="button-group">
          <a href="/" className="button">Back to Merktop</a>
          <a href="https://www.merktop.com/quickbooks/reconnect" className="button" target="_blank" rel="noopener noreferrer">Reconnect QuickBooks</a>
        </div>

        <p className="support">
          Did you have any issues? Contact us at
          {' '}<a href="mailto:support@merktop.com">support@merktop.com</a>
        </p>

        <div className="legal">
          <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </>
  );
}