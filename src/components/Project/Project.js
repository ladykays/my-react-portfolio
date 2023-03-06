import React from "react";
import { CardImg } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Project(props) {
  return (
    <Col>
      <Card>
        {/* <CardImg variant="top" src={props.image} /> */}
        <CardImg variant="top" src={process.env.PUBLIC_URL + props.image} /> {/* Stored images in "public" folder so as to serve the images directly to the browser as it wouldn't work without this  */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Link href={props.deployedURL}>Deployed Version</Card.Link>
          <Card.Link href={props.githubRepo}>GitHub Repository</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Project;
