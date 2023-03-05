import Footer from "../layouts/Footer/Footer";
import "./style.css";
function About() {
  return (
    <>
      <div className="container">
        <h1>About Me</h1>
          <p className="lead">Hey, hope you've enjoyed viewing my page?</p>
          <p>My name is Ndidiamaka Siokwu. I know how difficult it could be to pronounce my name so you can call me Kerrion.</p>
          <p>I am a Front-End Web Developer based in Derbyshire, England. I have always been facinated with the web and it gives me great joy to create great looking and functional websites which keeps users coming back.</p>
        <h3>Skills</h3>
        <div>
          <h5>Languages</h5>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-js"></i>

          <h5>Libraries</h5>
          <i class="fa-brands fa-bootstrap"></i>
          <i class="fa-brands fa-react"></i>

          <h5>Tools</h5>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-node"></i>
          <i class="fa-solid fa-code"></i>
          <i class="fa-solid fa-terminal"></i>

          <h5>Others</h5>
            <ul>
              <li>Foundation Zurb CSS Library</li>
              <li>Web API's</li>
              <li>Third Party API's</li>
              <li>Server API's</li>

            </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;