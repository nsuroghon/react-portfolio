import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../App.css';

const Navigation = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="link" href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" eventKey="link-1">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Navigation
