import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="success" className="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faHome}/></Navbar.Brand>
                    <Navbar.Brand href="#home">News HeadLine</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;