"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";

function HowToBridgeDesktop() {
    const steps = [
        {
            id: 1,
            img: "/images/step_1.png",
            text: "Step 1: Open OKX wallet on your desktop & click connect wallet.",
        },
        {
            id: 2,
            img: "/images/step_2.png",
            text: "Step 2: Connect your wallet using QR or browser extension",
        },
        {
            id: 3,
            img: "/images/step_3.png",
            text: "Step 3: On your dashboard click swap from the top menu",
        },
        {
            id: 4,
            img: "/images/step_4.png",
            text: "Step 4: On the swap screen click “From”",
        },
        {
            id: 5,
            img: "/images/step_5.png",
            text: "Step 5: From the list select the chain & the token you want to swap from",
        },
        {
            id: 6,
            img: "/images/step_6.png",
            text: "Step 6: Click the “to” and paste copy paste the $OKOX contract address and select the token",
        },
        {
            id: 7,
            img: "/images/step_7.png",
            text: "Step 7: Once both selected, enter the amount, click swap and voila!!. It’s done",
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
                <h1 className='section-title'>HOW TO BRIDGE ON DESKTOP<br /><span>The Easy Way to Join the Party</span></h1>
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
                                            ← Prev
                                        </button>

                                        <button
                                            onClick={nextSlide}
                                            className="btn-next"
                                        >
                                            Next →
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
                        ← Prev
                    </button>
                        <p className="slide-text">{text}</p>

                    <button
                        onClick={nextSlide}
                        className="btn-next"
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HowToBridgeDesktop