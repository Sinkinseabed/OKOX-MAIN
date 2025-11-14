"use client";

import React, { useState } from 'react'
import { motion } from "framer-motion";

const CommunityTimelineNew = () => {
    const mascotData = [
        {
            id: 1,
            img: "/images/timeline_1.jpg",
            alt: "Tweet 1",
            text: `On April 1, 2023, the official OKX account announced the mascot:”Every great brand needs a mascot. OKX is excited to introduce ours"OKOX."`,
        },
        {
            id: 2,
            img: "/images/timeline_2.jpg",
            alt: "Tweet 2",
            text: `few days later, on April 4th, the official OKX replied to a now-deleted comment using its mascot, OK OX. `,
            link: "https://x.com/okx/status/1654547798258331651",
        },
        {
            id: 3,
            img: "/images/timeline_3.jpg",
            alt: "Tweet 3",
            text: `On April 15, 2024, an anonymous developer decides to launch one of the first coins on Xlayer, OKOX.`,
            link: "https://x.com/OKXOKOX/status/1645853887910539264",
        },
        {
            id: 4,
            img: "/images/timeline_4.jpg",
            alt: "Tweet 4",
            text: `On May 5, 2023, the OKX account once again teased the OKOX mascot along with Pepe. "Don't let your memes be dreams"`,
            link: "https://x.com/okx/status/1654547798258331651",
        },
        {
            id: 5,
            img: "/images/timeline_5.jpg",
            alt: "Tweet 5",
            text: `The team has since received multiple interactions from OKX official accounts in the meantime.`,
            link: "https://x.com/OKXOKOX/status/1964200745013579895",
        },
        {
            id: 6,
            img: "/images/timeline_6.jpg",
            alt: "Tweet 6",
            text: `On September 26, 2025, the developer handed over his 2% supply to the community. `,
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
        <div className='community-timeline-section community-timeline-section-new'>
            <div className='community-border'></div>

            <div className='community-timeline-content'>
                <div className='community-header'>
                    <h1 className="section-title">COMMUNITY TIMELINE<br /><span>From April Fools to All-Time Highs</span></h1>
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
                            <>
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
                            </>
                        ))
                        }
                    </section>

                    {/* <div className="slider-buttons desktop">
                        <button onClick={prevSlide} className="buy-btn btn-prev" > ← PREV</button>
                        <button onClick={nextSlide} className="buy-btn btn-next">NEXT →</button>
                    </div> */}
                </div>
                <div className='timeline-info-wrapper'>
                    <p className='timeline-info'>$OKOX started as a joke.<br /> Now it's building a story — powered by community, memes, and milestones.<br />
                        Every step adds to the legend. Every holder becomes part of history.</p>
                </div>
            </div>
        </div>
    )
}

export default CommunityTimelineNew