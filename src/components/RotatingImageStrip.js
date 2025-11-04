import React from "react";
import "../styles/RotatingImageStrip.scss";

const RotatingImageStrip = () => {
    const images = [
        "/images/pic_1.jpg",
        "/images/pic_2.jpg",
        "/images/pic_3.jpg",
        "/images/pic_4.jpg",
        "/images/pic_5.jpg",
        "/images/pic_6.jpg",
        "/images/pic_7.jpg",
        "/images/pic_8.jpg",
        "/images/pic_9.jpg",
        "/images/pic_10.jpg",
    ];

    return (
        <div className="rotating-strip-wrapper">
            <div className="rotating-strip-container">
                <div className="rotating-strip">
                    {[...images, ...images].map((src, index) => (
                        <img key={index} src={src} alt={`img-${index}`} className="strip-img" />
                    ))}
                </div>
            </div>
            <div className="rotating-strip-container rotating-strip-container-reverse">
                <div className="rotating-strip">
                    {[...images, ...images].map((src, index) => (
                        <img key={index} src={src} alt={`img-${index}`} className="strip-img" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RotatingImageStrip;
