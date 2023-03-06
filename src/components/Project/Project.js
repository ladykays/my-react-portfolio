import React from "react";
import { CardImg } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./project.css";

function Project(props) {
  return (
    <Col>
      <Card className="h-100 border-0 m3 p-2 shadow" >
        {/* <CardImg variant="top" src={props.image} /> */}
        <CardImg 
          variant="top" 
          src={process.env.PUBLIC_URL + props.image} 
          /> {/* Stored images in "public" folder so as to serve the images directly to the browser as it wouldn't work without this  */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button 
            className="projectBtn deployedBtn"
            variant="warning" 
            size="sm"
            href={props.deployedURL} 
            target={"_blank"}
            > 
              Deployed Site
          </Button>
          <Button 
            className="projectBtn repoBtn"
            variant="info" 
            size="sm"
            href={props.githubRepo} 
            target={"_blank"}
            > 
              GitHub Repository
          </Button>
          
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Project;
