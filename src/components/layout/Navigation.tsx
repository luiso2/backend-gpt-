'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import AIPanel from '@/components/ui/AIPanel';
import { motion, AnimatePresence } from 'framer-motion';
import './navigation.css';

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node) &&
          servicesButtonRef.current && !servicesButtonRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // CSS-in-JS Styles
  const styles = {
    header: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(10, 46, 31, 0.95)' : 'rgba(10, 46, 31, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(184, 233, 45, 0.1)',
      transition: 'all 0.3s ease',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '70px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#B8E92D',
      transition: 'transform 0.3s ease',
    },
    desktopMenu: {
      display: 'none',
      alignItems: 'center',
      gap: '40px',
    },
    menuItem: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      position: 'relative' as const,
      transition: 'color 0.3s ease',
      padding: '8px 0',
    },
    servicesButton: {
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 0',
      transition: 'color 0.3s ease',
    },
    dropdown: {
      position: 'absolute' as const,
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(10, 46, 31, 0.98)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(184, 233, 45, 0.2)',
      borderRadius: '12px',
      padding: '8px',
      minWidth: '220px',
      marginTop: '10px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    dropdownItem: {
      display: 'block',
      padding: '12px 16px',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      fontSize: '15px',
    },
    actions: {
      display: 'none',
      alignItems: 'center',
      gap: '20px',
    },
    languageSelector: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    languageOption: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    getStartedButton: {
      padding: '10px 24px',
      backgroundColor: '#B8E92D',
      color: '#0A2E1F',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(184, 233, 45, 0.3)',
    },
    mobileMenuButton: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '4px',
      padding: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    hamburgerLine: {
      width: '24px',
      height: '2px',
      backgroundColor: '#B8E92D',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      position: 'fixed' as const,
      top: '70px',
      right: isMenuOpen ? '0' : '-100%',
      width: '80%',
      maxWidth: '300px',
      height: 'calc(100vh - 70px)',
      backgroundColor: 'rgba(10, 46, 31, 0.98)',
      backdropFilter: 'blur(10px)',
      borderLeft: '1px solid rgba(184, 233, 45, 0.2)',
      transition: 'right 0.3s ease',
      padding: '30px',
      overflowY: 'auto' as const,
      zIndex: 999,
    },
    mobileMenuItem: {
      display: 'block',
      padding: '15px 0',
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'color 0.3s ease',
    },
    mobileActions: {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
    },
  };

  const services = [
    { name: t.nav.services.all, href: '/services' },
    { name: t.nav.services.n8n, href: '/services/n8n-automations' },
    { name: t.nav.services.software, href: '/services/software-development' },
    { name: t.nav.services.web, href: '/services/web-applications' },
    { name: t.nav.services.stores, href: '/services/online-stores' },
  ];

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          <nav style={styles.nav}>
            {/* Logo */}
            <Link 
              href="/" 
              style={styles.logo}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Image src="/logo.jpg" alt="MERKTOP" width={40} height={40} style={{ borderRadius: '8px' }} />
        <span>MERKTOP</span>
            </Link>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ alignItems: 'center', gap: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <Link 
                  href="/" 
                  style={styles.menuItem}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8E92D'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                >
                  {t.nav.home}
                </Link>
                
                <div style={{ position: 'relative' }}>
                  <button
                    ref={servicesButtonRef}
                    style={styles.servicesButton}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#B8E92D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                  >
                    {t.nav.services.title}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 8L2 4h8L6 8z" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        ref={servicesRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={styles.dropdown}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            style={styles.dropdownItem}
                            onClick={() => setIsServicesOpen(false)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(184, 233, 45, 0.1)';
                              e.currentTarget.style.color = '#B8E92D';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#fff';
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/portfolio" 
                  style={styles.menuItem}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8E92D'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                >
                  {t.nav.portfolio}
                </Link>
                
                <Link 
                  href="/contact" 
                  style={styles.menuItem}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#B8E92D'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="desktop-actions" style={{ alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div 
                  style={styles.languageSelector}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(184, 233, 45, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(184, 233, 45, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <span
                    style={{
                      ...styles.languageOption,
                      backgroundColor: language === 'es' ? 'rgba(184, 233, 45, 0.2)' : 'transparent',
                      color: language === 'es' ? '#B8E92D' : '#fff',
                    }}
                    onClick={() => setLanguage('es')}
                  >
                    ES
                  </span>
                  <span
                    style={{
                      ...styles.languageOption,
                      backgroundColor: language === 'en' ? 'rgba(184, 233, 45, 0.2)' : 'transparent',
                      color: language === 'en' ? '#B8E92D' : '#fff',
                    }}
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </span>
                </div>

                <button
                  style={styles.getStartedButton}
                  onClick={() => setIsAIPanelOpen(true)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(184, 233, 45, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(184, 233, 45, 0.3)';
                  }}
                >
                  {t.nav.getStarted}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              style={styles.mobileMenuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button"
            >
              <span style={{
                ...styles.hamburgerLine,
                transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }} />
              <span style={{
                ...styles.hamburgerLine,
                opacity: isMenuOpen ? 0 : 1,
              }} />
              <span style={{
                ...styles.hamburgerLine,
                transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        <Link 
          href="/" 
          style={styles.mobileMenuItem}
          onClick={() => setIsMenuOpen(false)}
        >
          {t.nav.home}
        </Link>
        
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            style={styles.mobileMenuItem}
            onClick={() => setIsMenuOpen(false)}
          >
            {service.name}
          </Link>
        ))}
        
        <Link 
          href="/portfolio" 
          style={styles.mobileMenuItem}
          onClick={() => setIsMenuOpen(false)}
        >
          {t.nav.portfolio}
        </Link>
        
        <Link 
          href="/contact" 
          style={styles.mobileMenuItem}
          onClick={() => setIsMenuOpen(false)}
        >
          {t.nav.contact}
        </Link>

        <div style={styles.mobileActions}>
          <div style={{ ...styles.languageSelector, width: '100%', justifyContent: 'center' }}>
            <span
              style={{
                ...styles.languageOption,
                backgroundColor: language === 'es' ? 'rgba(184, 233, 45, 0.2)' : 'transparent',
                color: language === 'es' ? '#B8E92D' : '#fff',
              }}
              onClick={() => setLanguage('es')}
            >
              ES
            </span>
            <span
              style={{
                ...styles.languageOption,
                backgroundColor: language === 'en' ? 'rgba(184, 233, 45, 0.2)' : 'transparent',
                color: language === 'en' ? '#B8E92D' : '#fff',
              }}
              onClick={() => setLanguage('en')}
            >
              EN
            </span>
          </div>

          <button
            style={{ ...styles.getStartedButton, width: '100%' }}
            onClick={() => {
              setIsAIPanelOpen(true);
              setIsMenuOpen(false);
            }}
          >
            {t.nav.getStarted}
          </button>
        </div>
      </div>

      {/* Add mobile styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
        }
      `}</style>

      {/* AI Panel */}
      <AIPanel isOpen={isAIPanelOpen} onClose={() => setIsAIPanelOpen(false)} />
    </>
  );
};

export default Navigation;