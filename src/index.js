import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {InfoProvider} from "assets/infoProvider";

ReactDOM.render(
  <React.StrictMode>
    <InfoProvider>
    <App />
    </InfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

