import React from 'react';
import ReactDOM from 'react-dom';
import "mdbreact/dist/css/mdb.css";
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
    google: {
      families: ['Fjalla One:400', 'sans-serif']
    }
  });


ReactDOM.render(<App />, document.getElementById('root'));

