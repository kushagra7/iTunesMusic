import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/styles.css';

//functional component using es6 arrow function
const SongCard = () => {
    return (
        <Navbar className ="navBar" fixed="top" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Top Albums On ITunes</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Bruce Wayne</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default SongCard;