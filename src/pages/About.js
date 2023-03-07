import Footer from "../layouts/Footer/Footer";
import "../index.css"
import "./style.css";
function About() {
  return (
    <>
      <div class="container">
  <h1 class="text-center heading">About Me</h1>
  <p class="lead">Hey, hope you've enjoyed viewing my page?</p>
  <p>My name is Ndidiamaka Siokwu. I know how difficult it could be to pronounce my name so you can call me Kerrion.</p>
  <p>I am a Front-End Web Developer based in Derbyshire, England. I have always been fascinated with the web and it gives me great joy to create great looking and functional websites which keeps users coming back.</p>
  <h3 class="text-center subheading">Skills</h3>
  <div class="container skills-container">
    <div class="skill-card p-1">
      <i class="fa-brands fa-html5 tools">
        <div class="tool-name">HTML 5</div>
      </i>
    </div>
    <div class="skill-card p-1">
      <i class="fa-brands fa-react tools">
        <div class="tool-name">React</div>
      </i>
    </div>
    <div class="skill-card p-1">
      <i class="fa-brands fa-js tools">
        <div class="tool-name">JavaScript</div>
      </i>
    </div>
    <div class="skill-card p-1">
      <i class="fa-brands fa-npm tools">
        <div class="tool-name">NPM</div>
      </i>
    </div>
    <div class="skill-card p-1">
      <i class="fa-brands fa-bootstrap tools">
        <div class="tool-name">Bootstrap</div>
      </i>
    </div>
    <div class="skill-card p-1">
      <i class="fa-brands fa-node tools">
        <div class="tool-name">Node.js</div>
      </i>
    </div>
    <div class="skill-card p-1">
      <i class="fa-brands fa-github tools">
        <div class="tool-name">GitHub</div>
      </i>
    </div>
    <div class="skill-card p-1">
      <i class="fa-brands fa-css3-alt tools">
        <div class="tool-name">CSS 3</div>
      </i>
    </div>
  </div>
  <h5>Others</h5>
  <ul>
    <li>Web API's</li>
    <li>Third Party API's</li>
    <li>Server API's</li>
    <li>VS Code</li>
    <li>Terminal</li>
  </ul>
</div>

      <Footer />
    </>
  )
}

export default About;