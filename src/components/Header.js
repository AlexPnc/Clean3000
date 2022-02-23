import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo-clean3000-transparent.png"

const Header = () => {
    return (
        <Link to="/">
            <header className="App-header">
                <img src={logo} alt="" />
            </header>
        </Link>
    )
}

export default Header