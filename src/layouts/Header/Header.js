import NavBar from "../NavBar/NavBar";
//import useLocation hook
import { useLocation } from "react-router-dom";

//my custom style for the header section
import "./header.css";



function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <NavBar />
      {/* If on the homepage, load the hero section with text */}
      {isHomePage && (
      <section className="hero-section">
        <h1 className = "hero-section-text welcome">Hello...</h1>
        <h4 className = "hero-section-text intro ">My name is N. K. Siokwu. I am a Front-End Web Developer from England. </h4>
        <a href="/work" className="button warning">View My Portfolio</a>
      </section>
      )}
      {/* If not on the homepage, load the hero section without text */}
      {!isHomePage && <div className="hero-section other"></div>}
    </>  
  )
}

export default Header;