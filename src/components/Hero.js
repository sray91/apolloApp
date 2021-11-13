import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// this is the content for the main page

const Hero = () => {    
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 mb-14 lg:mb-28">
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="font-notosans text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        Smart and intuitive
                    </h2>
                    <p className="font-notosans text-gray-400 text-lg text-center lg:text-left mb-6">
                        The fitness app that learns as it helps you grow stronger.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <button type="button" className="btn btn-purple hover:bg-white hover:text-black">Get it on Android</button>
                        <button type="button" className="btn btn-white hover:bg-purple-600 hover:text-white">Get it on iOS</button>
                    </div>
                </div>
                <StaticImage src="../images/hero1.png" alt="SwayFitHero1" className="flex justify-items-start"/>
            </div>
        </section>
    )
}

export default Hero