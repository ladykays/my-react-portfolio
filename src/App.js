import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
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
