import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    const wordStyle = `
    lg:text-2xl 
    sm:text-lg 
    text-sm 
    font-light
    `
    const headerStyle = `
    font-semibold 
    lg:text-5xl 
    sm:text-4xl 
    text-2xl 
    pb-4
    `
    
    return (
        <header className="pt-16 pb-10 text-center bg-gray-800">
        <StaticImage src="../images/logo.png" alt="SwayFitLogoWords" />
        <h1 className={headerStyle}>Welcome to SwayFit!</h1>
        <p className={wordStyle}>Your fitness journey partner</p>
        </header>
    )
}

export default Header