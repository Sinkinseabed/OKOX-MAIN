"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

function HowToBridgeDesktop() {
    const { t } = useTranslation();
    
    const steps = [
        {
            id: 1,
            img: "/images/step_1.png",
            text: t('bridgeDesktop.steps.step1'),
        },
        {
            id: 2,
            img: "/images/step_2.png",
            text: t('bridgeDesktop.steps.step2'),
        },
        {
            id: 3,
            img: "/images/step_3.png",
            text: t('bridgeDesktop.steps.step3'),
        },
        {
            id: 4,
            img: "/images/step_4.png",
            text: t('bridgeDesktop.steps.step4'),
        },
        {
            id: 5,
            img: "/images/step_5.png",
            text: t('bridgeDesktop.steps.step5'),
        },
        {
            id: 6,
            img: "/images/step_6.png",
            text: t('bridgeDesktop.steps.step6'),
        },
        {
            id: 7,
            img: "/images/step_7.png",
            text: t('bridgeDesktop.steps.step7'),
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
        <div className='how-to-bridge-block how-to-bridge-section-desktop' id='bridge-desktop'>
            <div className='bridge-header'>
                <h1 className='section-title'>{t('bridgeDesktop.title')}<br /><span>{t('bridgeDesktop.subtitle')}</span></h1>
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
                                <div className='slider-step-text desktop'>
                                    <div className="slider-buttons">
                                        <button
                                            onClick={prevSlide}
                                            className="btn-prev"
                                        >
                                            ← {t('common.prev')}
                                        </button>

                                        <button
                                            onClick={nextSlide}
                                            className="btn-next"
                                        >
                                            {t('common.next')} →
                                        </button>
                                    </div>
                                    <p className="slide-text">{text}</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    <img
                        src="/images/character_3.png"
                        alt="Character Left"
                        className="character-left"
                    />
                    <img
                        src="/images/character_4.png"
                        alt="Character Right"
                        className="character-right"
                    />
                </div>
            </div>
            <div className='slider-step-text mobile'>
                <div className="slider-buttons">
                    <button
                        onClick={prevSlide}
                        className="btn-prev"
                    >
                        ← {t('common.prev')}
                    </button>
                        <p className="slide-text">{text}</p>

                    <button
                        onClick={nextSlide}
                        className="btn-next"
                    >
                        {t('common.next')} →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HowToBridgeDesktop