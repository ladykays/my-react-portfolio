import React, { Component } from "react";
import Project from "../Project/Project.js";
import projects from "./projects.json";
import Row from 'react-bootstrap/Row';

class ProjectGallery extends Component {
  render() {
    return (
      <section className="container">
        {/* Sets up a grid with 1 col on extra small 2 on medium and 3 on large screens with a gutter of 4 */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* Maps through the array of projects in the json file*/}
          { projects.map((project, index) => {
            return (
              <Project
                key={project.id} /* Used to uniquely identify each project in the list */
                id={index}
                title={project.title}
                description={project.description}
                deployedURL={project.deployedURL}
                githubRepo={project.githubRepo}
                image={project.image}
              />
            )
          })}
        </Row>
      </section>
    )
  }
};

export default ProjectGallery;
