import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

ReactDOM.render(<App appTitle="New React"/>, document.getElementById('root'));
registerServiceWorker();
