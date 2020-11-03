import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Container } from 'react-bootstrap';
// import { AuthUserContext } from '../Session';
// import SignOutLink from '../SignOut';

import * as ROUTES from '../../constants/routes';

const Footer = () => (
    <Container >
         <div>
                <hr />
                <Nav className="justify-content-center" >
                    <Nav.Item>
                        <Link className="footer-text nav-link" to={ROUTES.HOME}>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="footer-text nav-link" to={ROUTES.NEWS}>News</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="footer-text nav-link" to={ROUTES.RESOURCES}>Resources</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="footer-text nav-link" to={'/'}>Sign Out</Link>
                    </Nav.Item>
                </Nav>
            </div>
    </Container>

)

export default Footer;