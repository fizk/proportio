import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import './favicon.png'
import './favicon192.png'
import './favicon512.png'
import './favicon.svg'
import './manifest.json'

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
