import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
// import App from '../components/Menu';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;
