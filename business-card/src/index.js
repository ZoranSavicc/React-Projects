import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css"
import App from "./App"

function Page() {
    return (
        <App/>
    )
}

const container = document.getElementById('root')
const root = createRoot(container);

root.render(<Page/>)
