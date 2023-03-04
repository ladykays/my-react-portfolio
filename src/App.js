import { Routes, Route } from "react-router-dom";
//import { useState } from "react";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

//import { Grid, Cell,Menu,MenuItem } from "react-foundation";
//import './App.css';

function App() {
  /* const title = "Hello... <br/> My name is Kay"
  const [page] = useState("home");

  const handlePageHeaderView = () => {
    if (page === "home") {
        <Header title = {title} />; 
    }
  } */
  return (
    <>
     <div>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home  />} /> 
        <Route path="/work" element={<Work  />} /> 
        <Route path="/about" element={<About  />} /> 
        <Route path="/contact" element={<Contact  />} /> 
      </Routes>
      
    </div> 

    
      </>
  );
}

export default App;
