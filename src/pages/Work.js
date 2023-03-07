import React from "react";
//import Project from "../components/Project/Project";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";
import Footer from "../layouts/Footer/Footer";
//my custom style for the header section
//import "./style.css";

function Work() {
  return (
    <>
      <section className="container">
        <h1 className="text-center heading">Work</h1>
        <ProjectGallery />
        <Footer />
      </section>
      

    </>
  )
}

export default Work;