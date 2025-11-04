"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";

function HowToBridge() {
    const steps = [
        {
            id: 1,
            img: "/images/slider_1.png", // replace with your actual image path
            text: "Step 1: Open OKX wallet app on your mobile & click dex",
        },
        {
            id: 2,
            img: "/images/slider_2.png",
            text: "Step 2: From the swap menu click the “from”",
        },
        {
            id: 3,
            img: "/images/slider_3.jpg",
            text: "Step 3: From the drop down select the token you want to swap from",
        },
        {
            id: 4,
            img: "/images/slider_4.png",
            text: "Step 4: Now select the “to”",
        },
        {
            id: 5,
            img: "/images/slider_5.png",
            text: "Step 5: In the drop down, copy and paste the $OKOX contract address and select the token",
        },
        {
            id: 6,
            img: "/images/slider_6.jpg",
            text: "Step 6: enter the amount, click swap & voila!! It’s done.",
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
                <h1 className='section-title'>HOW TO BRIDGE ON MOBILE<br /><span>FEW Taps to Mascot Magic</span></h1>
                <div className='download-wallet'><img src='/images/wallet.png' />Download The OKX Wallet</div>
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
                                ← Prev
                            </button>

                            <button
                                onClick={nextSlide}
                                className="btn-next"
                            >
                                Next →
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