import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DynamicHtmlLang from "@/components/layout/DynamicHtmlLang";
import { CartProvider } from "@/contexts/CartContext";
import ClientLayout from "./ClientLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Solo mantener globals.css que contiene las variables CSS base
import "./globals.css";
import "./hero-modern.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MERKTOP - AI Automations & Business Development Solutions",
  description: "Leading provider of AI automations with n8n, custom software development, web applications, e-commerce platforms, and digital transformation solutions.",
  keywords: "AI automations, n8n, software development, web applications, e-commerce, business development, digital transformation",
  authors: [{ name: "MERKTOP" }],
  openGraph: {
    title: "MERKTOP - AI Automations & Business Development Solutions",
    description: "Transform your business with AI-powered automations and custom software solutions",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
  },
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <DynamicHtmlLang />
          <CartProvider>
            <ClientLayout>
              <Navigation />
              <main className="main-content">
                {children}
              </main>
              <Footer />
            </ClientLayout>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
