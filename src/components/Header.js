import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    const wordStyle = `
    text-white
    lg:text-2xl 
    sm:text-lg 
    text-sm 
    font-light
    `
    const headerStyle = `
    text-white
    font-semibold 
    lg:text-5xl 
    sm:text-4xl 
    text-2xl 
    pb-4
    `
    
    return (
        <header className="pt-16 pb-10 text-center bg-gray-800">
        <h1 className={headerStyle}>Welcome!</h1>
        <p className={wordStyle}>Your fitness journey partner</p>
        </header>
    )
}

export default Header