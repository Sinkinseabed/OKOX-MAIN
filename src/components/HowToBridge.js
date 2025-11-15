"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

function HowToBridge() {
    const { t } = useTranslation();
    
    const steps = [
        {
            id: 1,
            img: "/images/slider_1.png",
            text: t('bridge.steps.step1')
        },
        {
            id: 2,
            img: "/images/slider_2.png",
            text: t('bridge.steps.step2')
        },
        {
            id: 3,
            img: "/images/slider_3.jpg",
            text: t('bridge.steps.step3')
        },
        {
            id: 4,
            img: "/images/slider_4.png",
            text: t('bridge.steps.step4')
        },
        {
            id: 5,
            img: "/images/slider_5.png",
            text: t('bridge.steps.step5')
        },
        {
            id: 6,
            img: "/images/slider_6.jpg",
            text: t('bridge.steps.step6')
        },
    ];

    const [current, setCurrent] = useState(0);


    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % steps.length);
    };


    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + steps.length) % steps.length);
    };

    const { img, text } = steps[current];
    return (
        <div className='how-to-bridge-block how-to-bridge-section-mobile' id='bridge'>
            <div className='bridge-header'>
                <h1 className='section-title'>{t('bridge.title')}<br /><span>{t('bridge.description')}</span></h1>
                <div className='download-wallet'><img src='/images/wallet.png' />{t('bridge.downloadWallet')}</div>
                <div className='download-stores' >
                    <a className='' href='https://apps.apple.com/us/app/okx-buy-bitcoin-btc-crypto/id1327268470' target="_blank">
                        <img src="/images/store_1.png" alt="App Store" className="store-icon" />
                    </a>
                    <a className='' href='https://play.google.com/store/apps/details?id=com.okx.wallet&hl=en_IN' target="_blank">
                        <img src="/images/store_2.png" alt="Google Play Store" className="store-icon" />
                    </a>
                </div>
            </div>

            <div className='slider-container'>
                <div className="slider-container-inner">
                    <div className="">
                        <div className="slider-content">
                            <motion.div
                                key={current}
                                className="slider-step"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0.4 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <div className='slider-image-box'>
                                    <img src={img} alt="Tutorial Step" className="slide-image" />
                                </div>
                                <p className="slide-text desktop">{text}</p>
                            </motion.div>
                        </div>

                        <div className="slider-buttons">
                            <button
                                onClick={prevSlide}
                                className="btn-prev"
                            >
                                {t('bridge.prevButton')}
                            </button>

                            <button
                                onClick={nextSlide}
                                className="btn-next"
                            >
                                {t('bridge.nextButton')}
                            </button>
                        </div>
                    </div>

                    <img
                        src="/images/character_1.png"
                        alt="Character Left"
                        className="character-left"
                    />
                    <img
                        src="/images/character_2.png"
                        alt="Character Right"
                        className="character-right"
                    />
                </div>
            </div>
            <p className="slide-text mobile">{text}</p>

        </div>
    )
}

export default HowToBridge