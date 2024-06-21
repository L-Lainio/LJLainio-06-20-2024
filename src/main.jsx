import React from 'react';
import { ReactDOM, createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world... this is my profile page ♥ by LLainio </h1>);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
