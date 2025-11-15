"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import banner_3 from "@/../public/images/banner_3.png";
import Image from 'next/image';
import copy from "@/../public/images/copy.png";
import AnimatedReveal from './AnimatedReveal';

const Tokenomics = () => {
  const { t } = useTranslation();
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

  return (
    <div className='tokenomics-section' id='tokenomics'>
      <div className='footer-wave-top'></div>
      <div className='tokenomics-content'>
        <div className='tokenomics-left' style={{ display: 'none' }}>
          <Image src={banner_3} alt="Banner 3" layout="responsive" />

        </div>
        <div className='tokenomics-right'>
          <AnimatedReveal direction="up">
            <h1 className='section-title'>{t('tokenomics.title')}<br /><span>{t('tokenomics.subtitle')}</span></h1>
          </AnimatedReveal>
          <AnimatedReveal direction="right" delay={0.3}>
            <ul className='tokenomics-list'>
              <li><span></span>{t('tokenomics.totalSupply')}</li>
              <li><span className='span_2'></span>{t('tokenomics.burned')}</li>
              <li><span className='span_3'></span>{t('tokenomics.lockedLiquidity')}</li>
              <li><span className='span_4'></span>{t('tokenomics.communityWallet')}</li>
            </ul>
          </AnimatedReveal>
          <div className='tokenomics-btns'>
            <a className='buy-btn' target="_blank" rel="noopener noreferrer" href="https://web3.okx.com/">{t('tokenomics.buyButton')}</a>
            <a className='buy-btn' target="_blank" rel="noopener noreferrer" href="https://web3.okx.com/">{t('tokenomics.bridgeButton')}</a>
          </div>

          <label className='contract-box-label'>{t('tokenomics.contractAddress')}</label>
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
        </div>
      </div>
      <div className='tokenomics-bottom-text'>{t('tokenomics.bottomText')}</div>
    </div>
  )
}

export default Tokenomics