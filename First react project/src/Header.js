import React from 'react';
import "./index.css";
import Logo from "./images/logo.png";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={Logo} className="image" alt="Logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

