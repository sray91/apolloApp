import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({children}) => {
    const linkStyle = `
     Hover:opacity-70
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
            <nav className="flex sm:justify-between justify-around items-center bg-purple-300 lg:px-20 sm:px-6 py-8">
                <h3 className={logoStyle}>ApolloFitness</h3>
                <ul className="flex">
                    <li className={linkStyle}><Link to="/">Home</Link></li>
                    <li className={linkStyle}><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>

            <main>{children}</main>

            <footer className="text-center py-8 bg-purple-300">
                <p>Copyright 2021 <span  className={logoStyle}>ApolloFitness</span></p>
            </footer>
        </div>
    )
}

export default Layout