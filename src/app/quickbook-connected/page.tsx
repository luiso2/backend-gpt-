export const metadata = {
  title: 'QuickBook Connected | Merktop',
  description: 'Your QuickBooks account has been successfully connected to Merktop.',
};

export default function QuickBookConnectedPage() {
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
        .success-icon {
          width: 100px;
          height: 100px;
          background: #10b981;
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
        .checkmark {
          width: 50px;
          height: 50px;
          border: 5px solid white;
          border-radius: 50%;
          position: relative;
        }
        .checkmark:after {
          content: '';
          position: absolute;
          width: 15px;
          height: 30px;
          border: solid white;
          border-width: 0 5px 5px 0;
          top: 5px;
          left: 17px;
          transform: rotate(45deg);
        }
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
        .info-box ul { list-style: none; padding: 0; }
        .info-box li {
          color: #6b7280;
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
          font-size: 14px;
        }
        .info-box li:before {
          content: '✓';
          color: #10b981;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .button {
          display: inline-block;
          background: #B8E92D; /* Match "Get Started" CTA background */
          color: black; /* Match CTA text color for contrast */
          padding: 15px 40px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          margin-top: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(184, 233, 45, 0.3);
        }
        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(184, 233, 45, 0.5);
        }
        /* Hide global site footer on this page */
        .footer-modern { display: none !important; }
      `}</style>

      <div className="container">
        <div className="success-icon">
          <div className="checkmark"></div>
        </div>

        <h1>Successfully Connected! 🎉</h1>
        <p className="subtitle">
          Your QuickBooks account has been successfully connected to Merktop.
          You can now sync your accounting data automatically.
        </p>

        <div className="info-box">
          <h3>What can you do now?</h3>
          <ul>
            <li>Automatically sync customers and invoices</li>
            <li>Manage payments and transactions</li>
            <li>Generate real-time financial reports</li>
            <li>Integrate QuickBooks with other Merktop tools</li>
          </ul>
        </div>

        <a href="https://www.merktop.com" className="button" target="_blank" rel="noopener noreferrer">
          Go to Merktop Dashboard
        </a>

      </div>
    </>
  );
}