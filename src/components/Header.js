import React from 'react'
import Video from '../videos/heroVideo3.mp4'

// this is the "header" for the main page

const Header = () => {
    return (
        <section className="position: relative flex items-center justify-center h-screen sm:h-96 -my-30 py-36 overflow-hidden bg-gray-800">
            <video autoPlay loop muted playsInline className="position: absolute z-10 w-auto min-w-full min-h-full max-w-none">
                <source src={Video} type="video/mp4" />
                <track kind="captions" srcLang="en" src="" />
            </video>
            <div className="flex flex-col position: relative z-30 text-center">
                <h1 className="font-notosans font-bold lg:text-5xl sm:text-4xl text-2xl pb-4 text-white">Welcome to SwayFit!</h1>
                <p className="font-notosans lg:text-2xl sm:text-lg text-sm text-white">Your fitness journey partner.</p>
            </div>
        </section>
    )
}

export default Header