import { Routes, Route } from "react-router-dom";
//import { useState } from "react";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
//import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import NotFound from "./pages/NotFound";



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
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
