import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return (
        <header className="pt-16 pb-10 text-center">
        <StaticImage src="../images/logo.png" alt="ApolloFitnessLogo" />
        <h1 className="font-semibold lg:text-5xl sm:text-4xl text-2xl pb-4">Welcome to Apollo Fitness</h1>
        <p className=" lg:text-2xl sm:text-lg text-sm font-light">Your partner in your fitness journey</p>
        </header>
    )
}

export default Header