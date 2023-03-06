import React from "react";
import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./project.css";
import "../../index.css";

const styles = {
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

function Project(props) {
  //initialize state variables
  const [isDeployedBtnHovered, setIsDeployedBtnHovered] = useState(false);
  const [isRepoBtnHovered, setIsRepoBtnHovered] = useState(false);

  const handleDeployedBtnMouseOver = () => {
    setIsDeployedBtnHovered(true);
  };

  const handleDeployedBtnMouseOut = () => {
    setIsDeployedBtnHovered(false);
  };

  const handleRepoBtnMouseOver = () => {
    setIsRepoBtnHovered(true);
  };

  const handleRepoBtnMouseOut = () => {
    setIsRepoBtnHovered(false);
  };

  return (
    <Col>
      <Card className="h-100 border-0 m3 p-2 shadow">
        <CardImg variant="top" src={process.env.PUBLIC_URL + props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div style={styles.btnContainer}>
            <Button
              className="btn projectBtn deployedBtn"
              style={{
                backgroundColor: isDeployedBtnHovered ? "#067338" : "#730641",
                color: "white",
                margin: "0 10px",
                border: "none",
              }}
              variant="warning"
              size="sm"
              href={props.deployedURL}
              target={"_blank"}
              onMouseOver={handleDeployedBtnMouseOver}
              onMouseOut={handleDeployedBtnMouseOut}
            >
              Deployed Site
            </Button>
            <Button
              className="btn projectBtn repoBtn"
              style={{
                backgroundColor: isRepoBtnHovered ? "#067338" : "#730641",
                color: "white",
                margin: "0 10px",
                border: "none",
              }}
              variant="info"
              size="sm"
              href={props.githubRepo}
              target={"_blank"}
              onMouseOver={handleRepoBtnMouseOver}
              onMouseOut={handleRepoBtnMouseOut}
            >
              GitHub Repository
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}


export default Project;
