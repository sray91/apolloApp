import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

// this is the layout for every page
// includes logo and navigation at the top and footer at the bottom
// main section gets passed the children, which is "Header.js" and is called in index.js

const Layout = ({children}) => {
    return (
        <div>
            <nav className="flex sm:justify-between justify-around items-center bg-gray-800 lg:px-20 sm:px-6 py-8">
                <StaticImage src="../images/logo_w_words.png" alt="SwayFitLogoWords"/>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-9 text-white font-notosans font-bold text-sm">
                    <li className="Hover:opacity-70"><Link to="/">home</Link></li>
                    <li className="Hover:opacity-70"><Link to="/dashboard">dashboard</Link></li>
                    <button type="button" class="bg-purple-600 text-white rounded-md font-bold font-notosans px-7 py-3"><Link to="/login">login</Link></button>
                </ul>
                <div class="flex sm:hidden flex-1 justify-end px-6">
                    <i class="text-2xl fas fa-bars text-white"></i>
                </div>
            </nav>

            <main className="bg-gray-800">{children}</main>

            <footer className="text-center py-8 bg-gray-800">
                <p className="font-notosans text-white sm:text-base text-sm">Copyright 2021 <span  className="font-notosans text-white sm:text-base text-sm">SwayFit</span></p>
            </footer>
        </div>
    )
}

export default Layout