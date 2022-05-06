import React, { Component } from 'react';
import './../../styles/NavBar/NavBar.css';
import logo from './../../assets/images/logo/altiroVoy_Logo-sin-Fondo.png';
import CartWidget from './../Widget/CartWidget';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     useParams,
//   } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


function NavBar(props) {
  return (
    <div>
        <div className="row">
            <div className="col-md-12">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#">
                    
                    <img
                        src={logo}
                        alt="Sample Brand Logo"
                        width="35"
                        className="align-top d-inline-block"
                        height="35"
                    />
                    AltiroVoy
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                    <Nav.Link href="#action2">Nosotros</Nav.Link>
                    <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                    <NavDropdown.Item>

                        <NavLink to='/category/Poleras' className={nav => nav.isActive ? 'nav-active' : ''}>Poleras</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to='/category/Zapatillas' className={nav => nav.isActive ? 'nav-active' : ''}>Zapatillas</NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <NavLink to='/category/temporada' className={nav => nav.isActive ? 'nav-active' : ''}>
                            De temporada
                        </NavLink>
                    </NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>
                </Nav>
                <Navbar.Brand href="#"> <CartWidget/></Navbar.Brand>
                {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        </div>
    </div>
  )
}

export default NavBar