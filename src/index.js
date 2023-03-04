/* //TODO: Uncomment the import statements below and the "const-root" codeblock further down the page to return to the old way of doing things
//import React from "react";
//import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "foundation-sites/dist/css/foundation.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
//TODO: Uncomment this and the commented out code in the import section to return to the old way of doing things
/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "foundation-sites/dist/css/foundation.min.css";
//This is a component based helper package 
import { BrowserRouter } from 'react-router-dom' //deconstruct the component

// using ReactDOM to inject the app into the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// renders root element into the DOM
//<App /> calls the app function
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);