"use client";

import Image from "next/image";
import banner_1 from "@/../public/images/banner_1.png";
import copy from "@/../public/images/copy.png";
import social_1 from "@/../public/images/social_1.png";
import social_2 from "@/../public/images/social_2.png";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import RotatingImageStrip from "./RotatingImageStrip";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const { t } = useTranslation();
  
  return (
    <div className="hero-section-container">
      <section className="hero">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-left">
            <h1 className="section-title">
              {t('hero.title')}<br />
              <span>{t('hero.subtitle')}</span>
            </h1>
            <div className="mobile mobile-banner">
              <Image
              src={banner_1}
              alt="OKOX Mascot"
              className="hero-image"
              priority
            />
            </div>
            <p className="contract-label">{t('contractAddress')}:</p>
            <div className="contract-box">
              <div className="contract-box-text">
                0x980855C4A8B601DF572E6877F908C8BED38BCB5
                <span className="copy-icon" onClick={() => copyToClipboard('0x980855C4A8B601DF572E6877F908C8BED38BCB5')}>
                  {copied ? <span className="copied-text">Copied!</span> : <>
                    <Image src={copy} alt="Copy Icon" width={16} height={16} />
                  </>}
                </span>
              </div>
            </div>

            <div className="hero-buttons desktop">
              <a className="buy-btn" target="_blank" href="https://web3.okx.com/">{t('header.buyButton')}</a>
              <a className="social-icon-btn " target="_blank" href="https://x.com/OKXOKOX"><Image src={social_2} alt="Social Icon 2" width={50} height={50} /></a>
              <a className="social-icon-btn social-icon-btn2" target="_blank" href="https://t.me/OKOXXLayer" ><Image src={social_1} alt="Social Icon 1" width={50} height={50} /></a>
            </div>

            <div className="token-stats">
              <div className="stat-box">10.63% {t('hero.burned')}</div>
              <div className="stat-box stat-box2">2% {t('hero.lockedForCommunity')}</div>
              <div className="stat-box stat-box3">87.37% {t('hero.lockedInLiquidity')}</div>
            </div>


          </div>

          {/* Right Side Image */}
          <div className="hero-right">
            <Image
              src={banner_1}
              alt="OKOX Mascot"
              className="hero-image"
              priority
            />
          </div>
          <div className="steps">
            <div className="step-box">1. {t('hero.copy')}</div>
            <div className="step-box">2. {t('hero.add')}</div>
            <div className="step-box">
              3. {t('hero.bridge')}
            </div>
          </div>
        </div>
      </section>
      <RotatingImageStrip />
    </div>

  );
}
