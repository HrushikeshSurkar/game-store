import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameArea from "./Components/GameArea/GameArea";
import GameControls from "./Components/GameControls/GameControls";

const CodeCraft = () => {
  return (
    <div className="p-4">
      <Row className="text-center p-4">
        <h1>Code Craft</h1>
      </Row>
      <Row>
        <Col className="game-area">
          <GameArea />
        </Col>
        <Col className="game-controls">
          <GameControls />
        </Col>
      </Row>
    </div>
  );
};

export default CodeCraft;
