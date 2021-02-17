import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <Navbar className="navBar" fixed="top" bg="primary" variant="dark">
            <Navbar.Brand onClick={refreshPage}>Top Albums On ITunes</Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>

                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
