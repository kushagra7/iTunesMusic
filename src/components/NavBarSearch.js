import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarSearch = () => {
    return (
        <Navbar className="navBar" fixed="top" bg="primary" variant="dark">
            <Navbar.Brand href="#home">Top Albums On ITunes</Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <section className='search'>
                        <form>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Search Albums'
                                autoFocus></input>
                        </form>
                    </section>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarSearch
