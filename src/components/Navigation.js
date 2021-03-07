import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Route, BrowserRouter as Router, Link  } from "react-router-dom";
import About from "./pages/About";
import '../App.css';

const Navigation = () => {
    return (
    <Router>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="link" to="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" to="link-1">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>  
    </Router>
    )
}

export default Navigation
