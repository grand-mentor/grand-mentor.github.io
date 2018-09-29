import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
    , document.getElementById('root')
);
// registerServiceWorker();
