import React from 'react';
import "../index.css";
import Logo from "../images/logo.png"

export default function Nav(){
    return (
        <nav>
            <div className='logo'>
                <img src={Logo} className="image" alt="Logo"/>
                <h3>React Facts</h3>
            </div>
            <h4>React Project 1</h4>
        </nav>
    )
}