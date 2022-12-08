import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { searchRobots } from './reducers';
// Redux setup
const store = createStore(searchRobots);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);