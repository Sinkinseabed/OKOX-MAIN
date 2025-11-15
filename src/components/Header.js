"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import "../styles/Header.scss";
import Image from "next/image";
import social_1 from "@/../public/images/social_1.png";
import social_2 from "@/../public/images/social_2.png";
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { t } = useTranslation();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <header className="header-container">
      <div className="header-inner">
        <div className="logo">$OKOX</div>
        <div className="social-icons mobile-social-icons responsive-only">
            <a className="social-icon-btn" target="_blank" rel="noopener noreferrer" href="https://t.me/OKOXXLayer">
              <Image src={social_2} alt="Telegram" width={25} height={25} />
            </a>
            <a className="social-icon-btn" target="_blank" rel="noopener noreferrer" href="https://x.com/OKXOKOX">
              <Image src={social_1} alt="X (Twitter)" width={25} height={25} />
            </a>
        </div>
        
        <nav className="nav-links">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t('header.home')}</a>
          <a href="#tokenomics" onClick={(e) => scrollToSection(e, 'tokenomics')}>{t('header.tokenomics')}</a>
          <a href="#bridge" onClick={(e) => scrollToSection(e, 'bridge')}>{t('header.bridge')}</a>
          <a href="#timeline" onClick={(e) => scrollToSection(e, 'timeline')}>{t('header.timeline')}</a>
        </nav>
        <a target="_blank" href="https://web3.okx.com/" className="buy-btn" rel="noopener noreferrer">
          {t('header.buyButton')}
        </a>
      </div>
      <div className="menu-icon responsive-only" onClick={toggleSidebar}>
        <img src="/images/menu.png" />
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className='close-icon' onClick={toggleSidebar}><img src='./images/close.png' /></div>
        <div className="sidebar-content">
          <div className="sidebar-logo">$OKOX</div>
          <nav className="sidebar-nav">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t('header.home')}</a>
            <a href="#tokenomics" onClick={(e) => scrollToSection(e, 'tokenomics')}>{t('header.tokenomics')}</a>
            <a href="#bridge" onClick={(e) => scrollToSection(e, 'bridge')}>{t('header.bridge')}</a>
            <a href="#timeline" onClick={(e) => scrollToSection(e, 'timeline')}>{t('header.timeline')}</a>
          </nav>
          <a 
            target="_blank" 
            href="https://web3.okx.com/" 
            className="buy-btn"
            rel="noopener noreferrer"
            onClick={toggleSidebar}
          >
            {t('header.buyButton')}
          </a>
        </div>
      </div>
      <LanguageSelector />
    </header>
  );
}
