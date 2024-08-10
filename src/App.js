import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Router>
      <Header />
      <MainLayout>
        <Container>
          <AppRouter />
        </Container>
      </MainLayout>
      <Footer />
    </Router>
  );
}

export default App;
