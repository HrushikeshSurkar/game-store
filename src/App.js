import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Router>
      <Container>
        <AppRouter />
      </Container>
    </Router>
  );
}

export default App;
