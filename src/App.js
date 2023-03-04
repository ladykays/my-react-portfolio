import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

//import { Grid, Cell,Menu,MenuItem } from "react-foundation";
//import './App.css';

function App() {
  return (
    <>
     <div className="container">
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
