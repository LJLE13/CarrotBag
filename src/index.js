import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './components/Context';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './css/main.css';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);
