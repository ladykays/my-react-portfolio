import NavBar from "../NavBar/NavBar";
//import useLocation hook
import { useLocation } from "react-router-dom";
import resume from "../../assets/other/Front-End Web Development CV.pdf";
import profile from "../../assets/images/profile.png";
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
        <img src={profile} alt="N. K. Siokwu" className="profile-pic" />
        <h1 className = "hero-section-text welcome">Hello...</h1>
        <h4 className = "hero-section-text intro ">My name is N. K. Siokwu. I am a Front-End Web Developer from England. </h4>
        <div className = "cta-button-container d-flex">
          <a href="/work" className="btn cta-warning shadow" style={{marginRight: "10px"}}>View My Portfolio</a>
          <a href={resume} className="btn cta-warning shadow mr-2 ">View My Resume</a>
        </div>
      </section>
      )}
      {/* If not on the homepage, load the hero section without text */}
      {!isHomePage && <div className="hero-section other">
        </div>}
    </>  
  )
}

export default Header;