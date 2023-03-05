import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <div>
        <Navbar fixed="top" >
      <Container>
        <Navbar.Brand href="#home">Pet Finder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar1
