import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Link to='/'>
                    <Navbar.Brand>ShopyingX</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"><span><i className="fas fa-cart-arrow-down mr-1"></i></span>Card</Nav.Link>
                      
                        <NavDropdown title="User" id="basic-nav-dropdown" className='float-right'>
                            <NavDropdown.Item href="#action/3.1"><i className="fas fa-user mr-1"></i>Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1"><i className="fas fa-sign-out-alt mr-1"></i>Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
