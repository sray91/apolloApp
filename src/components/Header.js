import React from 'react'

// this is the "header" for the main page

const Header = () => {    
    return (
        <header className="pt-16 pb-10 text-center bg-gray-800">
            <h1 className="font-notosans font-bold lg:text-5xl sm:text-4xl text-2xl pb-4 text-white">Welcome to SwayFit!</h1>
                <p className="font-notosans lg:text-2xl sm:text-lg text-sm text-white">Your fitness journey partner.</p>
        </header>
    )
}

export default Header