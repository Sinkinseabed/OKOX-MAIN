"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const CommunityTimelineNew = () => {
    const { t } = useTranslation();
    
    const mascotData = [
        {
            id: 1,
            img: "/images/timeline_1.jpg",
            alt: t('timeline.tweet1.alt'),
            text: t('timeline.tweet1.text'),
        },
        {
            id: 2,
            img: "/images/timeline_2.jpg",
            alt: t('timeline.tweet2.alt'),
            text: t('timeline.tweet2.text'),
            link: "https://x.com/okx/status/1654547798258331651",
        },
        {
            id: 3,
            img: "/images/timeline_3.jpg",
            alt: t('timeline.tweet3.alt'),
            text: t('timeline.tweet3.text'),
            link: "https://x.com/OKXOKOX/status/1645853887910539264",
        },
        {
            id: 4,
            img: "/images/timeline_4.jpg",
            alt: t('timeline.tweet4.alt'),
            text: t('timeline.tweet4.text'),
            link: "https://x.com/okx/status/1654547798258331651",
        },
        {
            id: 5,
            img: "/images/timeline_5.jpg",
            alt: t('timeline.tweet5.alt'),
            text: t('timeline.tweet5.text'),
            link: "https://x.com/OKXOKOX/status/1964200745013579895",
        },
        {
            id: 6,
            img: "/images/timeline_6.jpg",
            alt: t('timeline.tweet6.alt'),
            text: t('timeline.tweet6.text'),
            link: "https://x.com/okxokox/status/1970727100928946521?s=46",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 > mascotData.length - cardsPerPage ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? mascotData.length - cardsPerPage : prev - 1
        );
    };

    const currentCards = mascotData.slice(
        currentIndex,
        currentIndex + cardsPerPage
    );


    return (
        <div className='community-timeline-section community-timeline-section-new' id='timeline'>
            <div className='community-border'></div>

            <div className='community-timeline-content'>
                <div className='community-header'>
                    <h1 className="section-title">{t('timeline.title')}<br /><span>{t('timeline.subtitle')}</span></h1>
                    {/* <p>$OKOX started as a joke.<br /> Now it's building a story — powered by community, memes, and milestones.<br />
                        Every step adds to the legend. Every holder becomes part of history.</p> */}
                </div>
                <div className='community-timeline-content-right'>
                    <section className="mascot-section">

                        {mascotData.map(({ id, img, alt, text, link }) => (
                            <div className='mobile slider-step' key={id}>
                                <div className="mascot-card" key={id}>
                                    <div className="tweet-box">
                                        <img src={img} alt={alt} className="tweet-img" />
                                    </div>
                                    <p className="text-box">
                                        {text}{" "}
                                        {link && (
                                            <>
                                                {" "}
                                                <a href={link} target="_blank" rel="noopener noreferrer" className="link">
                                                    {link}
                                                </a>
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {mascotData.map(({ id, img, alt, text, link }) => (
                                <div
                                    key={id}
                                    className="slider-step desktop"
                                >
                                    <div className="mascot-card" key={id}>
                                        <div className="tweet-box">
                                            <img src={img} alt={alt} className="tweet-img" />
                                        </div>
                                        <p className="text-box">
                                            {text}{" "}
                                            {link && (
                                                <>
                                                    {" "}
                                                    <a href={link} target="_blank" rel="noopener noreferrer" className="link">
                                                        {link}
                                                    </a>
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                        ))
                        }
                    </section>

                    {/* <div className="slider-buttons desktop">
                        <button onClick={prevSlide} className="buy-btn btn-prev" > ← PREV</button>
                        <button onClick={nextSlide} className="buy-btn btn-next">NEXT →</button>
                    </div> */}
                </div>
                <div className='timeline-info-wrapper'>
                    <p className='timeline-info'>{t('timeline.description')}</p>
                </div>
            </div>
        </div>
    )
}

export default CommunityTimelineNew