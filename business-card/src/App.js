import React from 'react';
import "./index.css"
import Header from "./components/Header"
import Logo from "./images/picture.png"

export default function App(){
    return(
        <div className='container'>
          <img src={Logo} className="image" alt=""/>
          <Header />
        </div>
    )
}
