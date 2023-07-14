import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';
import { ThemeProvider, CssBaseline } from '@mui/material'
// import theme from './theme'

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);