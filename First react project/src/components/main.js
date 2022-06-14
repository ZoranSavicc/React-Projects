import React from 'react';
import "../index.css";

export default function Main(){
    return (
        <main>
            <h1>Fun facts about react</h1>

            <ul className='main-facts'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Maintained by Facebook</li>
            </ul>
        </main>
    )
}