"use client";
import { useState } from 'react';
import Link from "next/link";
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
  return (
    <header className="header-container">
      <div className="header-inner">
        <div className="logo">$OKOX</div>
        <div className="social-icons mobile-social-icons responsive-only">
            <a className="social-icon-btn " target="_blank" href="https://t.me/OKOXXLayer"><Image src={social_2} alt="Social Icon 2" width={25} height={25} /></a>
            <a className="social-icon-btn" target="_blank" href="https://x.com/OKXOKOX"><Image src={social_1} alt="Social Icon 1" width={25} height={25} /></a>
        </div>
        
        <nav className="nav-links">
          <Link href="#home">HOME</Link>
          <Link href="#tokenomics">TOKENOMICS</Link>
          <Link href="#bridge">BRIDGE</Link>
          <Link href="#timeline">TIMELINE</Link>
        </nav>
        <a target="_blank" href="https://web3.okx.com/" className="buy-btn">BUY $OKOX</a>
      </div>
      <div className="menu-icon responsive-only" onClick={toggleSidebar}>
        <img src="/images/menu.png" />
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className='close-icon' onClick={toggleSidebar}><img src='./images/close.png' /></div>
        <div className="sidebar-content">
          <div className="sidebar-logo">$OKOX</div>
          <nav className="sidebar-nav">
            <Link href="#home">HOME</Link>
            <Link href="#tokenomics">TOKENOMICS</Link>
            <Link href="#bridge">BRIDGE</Link>
            <Link href="#timeline">TIMELINE</Link>
          </nav>
          <a 
            target="_blank" 
            href="https://web3.okx.com/" 
            className="buy-btn"
            rel="noopener noreferrer"
          >
            BUY $OKOX
          </a>
        </div>
      </div>
      <LanguageSelector />
    </header>
  );
}
