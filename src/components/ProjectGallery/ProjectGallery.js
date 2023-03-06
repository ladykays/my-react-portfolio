import React, { Component } from "react";
import Project from "../Project/Project";
import projects from "./projects.json";

class ProjectGallery extends Component {

  render() {
    return (
      <section className="container">
        { projects.map((project, index) => {
          return (
            <Project
             id={index}
             title={project.title}
             description={project.description}
             deployedURL={project.deployedURL}
             githubRepo={project.githubRepo}
             image={project.image}

            />
          )
        })}
      </section>
    )
  }

};

export default ProjectGallery;