import React from 'react'
import Video from '../videos/heroVideo.mp4'

// this is the "header" for the main page

const Header = () => {
    return (
        <header className="text-center position: absolute inset-0 overflow-hidden w-full h-full">
            <video autoPlay loop className="w-full h-full object-cover">
                <source src={Video} type="video/mp4" />
                <track kind="captions" srcLang="en" src="" />
            </video>
            <h1 className="font-notosans font-bold lg:text-5xl sm:text-4xl text-2xl pb-4 text-white z-20 max-h-full">Welcome to SwayFit!</h1>
                <p className="font-notosans lg:text-2xl sm:text-lg text-sm text-white">Your fitness journey partner.</p>
        </header>
    )
}

export default Header