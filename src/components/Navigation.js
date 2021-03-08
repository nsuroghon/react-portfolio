import React from 'react'
import Nav from 'react-bootstrap/Nav'
// import { Route, BrowserRouter as Router } from "react-router-dom";
// import About from "./pages/About";
import '../App.css';

const Navigation = () => {
    return (
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="link" href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Navigation
