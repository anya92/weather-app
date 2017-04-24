import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/weather-icons/css/weather-icons.css';
import './styles/styles.css';

import App from './components/App';

render(<App />, document.getElementById('root'));
