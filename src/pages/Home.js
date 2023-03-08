//import Header from "../layouts/Header/Header";
//import Footer from "../layouts/Footer/Footer";
//my custom style for the homepage
import "./style.css";
import profile from "../assets/images/profile.png"
import resume from "../assets/other/Front-End Web Development CV.pdf"

function Home() {
  return (
    <>
    <section className="hero-section">
      <img src={profile} alt="N. K. Siokwu" className="profile-pic" />
      <h1 className = "hero-section-text welcome">Hello...</h1>
      <h4 className = "hero-section-text intro ">My name is N. K. Siokwu. I am a Front-End Web Developer from England. </h4>
      <div className = "cta-button-container d-flex">
        <a href="my-react-portfolio/work" className="btn cta-warning shadow" style={{marginRight: "10px"}}>View My Portfolio</a>
        <a href={resume} className="btn cta-warning shadow mr-2 ">View My Resume</a>
      </div>
    </section>
    </>
  )
}

export default Home;