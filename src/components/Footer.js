"use client";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import copy from "@/../public/images/copy.png";
import social_1 from "@/../public/images/social_1.png";
import social_2 from "@/../public/images/social_2.png";

const Footer = () => {
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
        <footer className="footer-section">
            <div className="footer-wave-top"></div>
            <div className="footer-container">
                <div className="footer-left">
                    <img src="/images/footer_banner.png" alt="Mascot" className="mascot-img" />
                </div>

                <div className="footer-right">
                    <div className="footer-right-inner">
                        <h2 className="footer-title">{t('footer.joinUs')}</h2>
                        <div className="social-icons">
                            <a className="social-icon-btn " target="_blank" href="https://x.com/OKXOKOX"><Image src={social_2} alt="Social Icon 2" width={50} height={50} /></a>
                            <a className="social-icon-btn social-icon-btn2"  target="_blank" href="https://t.me/OKOXXLayer" ><Image src={social_1} alt="Social Icon 1" width={50} height={50} /></a>
                        </div>

                        <div className="contract-box desktop">
                            <div className="contract-box-text">
                                0x980855C4A8B601DF572E6877F908C8BED38BCB5
                                <span className="copy-icon" onClick={() => copyToClipboard('0x980855C4A8B601DF572E6877F908C8BED38BCB5')}>
                                    {copied ? <span className="copied-text">{t('common.copied')}</span> : <>
                                        <Image src={copy} alt="Copy Icon" width={16} height={16} />
                                    </>}
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="footer-bottom desktop">
                            <p>{t('footer.copyright')}</p>
                        </div>
                </div>
            </div>
            <div className="footer-wave-top footer-wave-bottom">
                <p className="mobile">{t('footer.copyright')}</p>
            </div>

        </footer>
    );
};

export default Footer;