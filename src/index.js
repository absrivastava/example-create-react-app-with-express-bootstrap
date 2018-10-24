import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <Router
        history={window.history}
    >
        <App/>
    </Router>, document.getElementById('root'));
