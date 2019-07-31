import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let deferredPrompt: any;

window.addEventListener('beforeinstallprompt', (e) => {
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    // Update UI notify the user they can add to home screen
    // showInstallPromotion();
});

window.addEventListener('load', () => {
    setTimeout(() => {
        if (deferredPrompt && !window.matchMedia('(display-mode: standalone)').matches) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((d: any) => alert(JSON.stringify(d)))
        }
    }, 3000)
})