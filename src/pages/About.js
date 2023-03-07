import Footer from "../layouts/Footer/Footer";
import "./style.css";
function About() {
  return (
    <>
      <div className="container">
        <h1 className="text-center heading">About Me</h1>
          <p className="lead">Hey, hope you've enjoyed viewing my page?</p>
          <p>My name is Ndidiamaka Siokwu. I know how difficult it could be to pronounce my name so you can call me Kerrion.</p>
          <p>I am a Front-End Web Developer based in Derbyshire, England. I have always been facinated with the web and it gives me great joy to create great looking and functional websites which keeps users coming back.</p>
        <h3 className="text-center subheading">Skills</h3>
        <div className="container-flex">
          {/* <h5 className="heading">Languages</h5> */}
          <i class="fa-brands fa-html5 tools"></i>
          <i class="fa-brands fa-react tools"></i>
          <i class="fa-brands fa-js tools"></i>

          {/* <h5>Libraries</h5> */}
          <i class="fa-solid fa-terminal tools"></i>
          <i class="fa-brands fa-bootstrap tools"></i>
          <i class="fa-brands fa-node tools"></i>
          

          {/* <h5>Tools</h5> */}
          <i class="fa-brands fa-github tools"></i>
          <i class="fa-solid fa-code tools"></i>
          
          <i class="fa-brands fa-css3-alt tools"></i>
          

          <h5>Others</h5>
            <ul>
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