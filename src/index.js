import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";


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