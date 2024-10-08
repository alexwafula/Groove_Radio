import React, { useState } from 'react';

const HeroSection = ({ title, subtitle, link, image, altText }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const streamUrl = 'https://stream.zeno.fm/xhykh0okx2ltv'; // Main stream URL from Zeno API

    const musicPlayerDownloadLink = 'https://example.com/download'; //Replace with real link

    const handleLiveStreamClick = () => {
        const audioElement = document.getElementById('audio-player');
        if (!isPlaying) {
            audioElement.play();
            setIsPlaying(true);
        } else {
            audioElement.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section className="grid md:grid-cols-2 grid-cols-1 min-h-screen lg:min-h-[480px] bg-black text-white px-6 md:px-16 py-12 md:py-24">
            <div className="flex flex-col justify-center md:items-start items-center text-center md:text-left">
                <h2 className="text-4xl font-bold lg:text-6xl text-white mb-4">
                    {title}
                </h2>
                <p className="text-lg md:text-2xl mb-8 w-full md:w-3/4">
                    {subtitle}
                </p>
                <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
                    <button
                        onClick={handleLiveStreamClick}
                        className="p-4 text-sm font-semibold text-white bg-tigerEye rounded shadow-md 
                            border-2 border-tigerEye md:text-base hover:bg-white hover:text-tigerEye"
                    >
                        {isPlaying ? 'Stop Stream' : 'Live Stream'}
                    </button>
                    <a
                        href={musicPlayerDownloadLink}
                        className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md 
                            border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
                        download
                    >
                        Download Our Music Player
                    </a>
                    <audio id="audio-player" src={streamUrl} />
                </div>
            </div>

            <div className="flex justify-center items-center">
                <img
                    src={image}
                    alt={altText}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
            </div>
        </section>
    );
};

export default HeroSection;


