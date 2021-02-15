import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    return (
        <Navbar className="navBar" fixed="top" bg="primary" variant="dark">
            <Navbar.Brand href="#home">Top Albums On ITunes</Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>

                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
