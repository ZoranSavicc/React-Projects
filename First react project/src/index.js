import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./Header";
import Footer from "./Footer"
import MainContent from './MainContent';
import "./index.css"

function Page() {
    return (
        <div>
            <Header />

            <MainContent />

            <Footer />
        </div>
    )
}

const container = document.getElementById('root')
const root = createRoot(container);

root.render(<Page/>)