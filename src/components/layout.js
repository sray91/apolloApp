import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({children}) => {
    const linkStyle = `
     Hover:opacity-70
     text-white
     text-sm
     sm:text-lg
    `
    const logoStyle=`
    text-white 
    sm:text-base
    text-sm
    `
    
    return (
        <div>
            <nav className="flex sm:justify-between justify-around items-center bg-gray-800 lg:px-20 sm:px-6 py-8">
                <StaticImage src="../images/logo_w_words.png" alt="ApolloFitnessLogoWords" />
                <ul className="flex">
                    <li className={linkStyle}><Link to="/">Home</Link></li>
                    <li className={linkStyle}><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>

            <main className="bg-gray-800">{children}</main>

            <footer className="text-center py-8 bg-gray-800">
                <p className="font-notosans text-white sm:text-base text-sm">Copyright 2021 <span  className={logoStyle}>ApolloFitness</span></p>
            </footer>
        </div>
    )
}

export default Layout