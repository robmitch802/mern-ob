import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <Container >
        <Navbar fixed="top" bg="dark" variant="dark" expand="md" collapseOnSelect={"true"} >
            <Navbar.Brand>
                <Link to="/">
                    <img alt="diversity committee logo" 
                    src="../img/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/>
                    &nbsp;
                    <span className="d-sm-none">OB/GYN Diversity</span>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto body-text body-text-20" >
                    <Link to={ROUTES.HOME} className="nav-link body-text-20" >Home</Link>
                    <Link to={ROUTES.NEWS} className="nav-link body-text-20" >News</Link>
                    <Link to={ROUTES.RESOURCES} className="nav-link body-text-20" >Resources</Link>
                    <Link to={ROUTES.MEETINGS} className="nav-link body-text-20" >Meetings</Link>
                    <Link to={ROUTES.INEQUITY} className="nav-link body-text-20" >Inequity Inbox</Link>
                    <Link to={ROUTES.ADMIN} className="nav-link body-text-20" >Admin</Link>
                    <Link to={'/'} className="nav-link body-text-20" >Sign Out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
)

export default Navigation;