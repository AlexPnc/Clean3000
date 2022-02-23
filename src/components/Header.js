import React from 'react'
import { useHistory } from 'react-router-dom';
import logo from "../images/logo-clean3000-transparent.png"

const Header = () => {
    const navigate = useHistory();
    const goToHome = () => {
        navigate.push("/");
    }
    return (
            <header className="App-header" onClick={() => goToHome()}>
                <img src={logo} alt="" />
            </header>
    )
}

export default Header