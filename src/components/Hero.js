import React from 'react'

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
                    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    </div>
                </div>
            </div>
            <div className="hidden md:block overflow-hidden bg-purple-600 rounded-l-full absolute h-80 w-2/4 top-26 right-0 lg:-bottom-28 lg:-right-36"></div>
        </section>
    )
}

export default Hero