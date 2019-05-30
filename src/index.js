import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// in case we want to wrap MyContext to App.js do the following (or simply pass it as a wrapper to each individual component)
// you'll need to import it
import { MyProvider } from './context';

ReactDOM.render(
    <MyProvider>
        <App />
    </MyProvider>, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
