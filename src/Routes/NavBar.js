import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import skyscanner_1 from '../Media Files/skyscanner_1.jpeg'
import Button from 'react-bootstrap/Button'






const NavbarComponent = ( ) => {



    return (
        <>
            <Navbar collapseOnSelect bg='light' variant='light' expand='lg'>
                <Container>
                    <Navbar.Brand>
                        <img src={ skyscanner_1 } alt='' width={ 120 } />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='redponsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#' className='nav-link-text'> Hotels </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Cars </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Flights </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Bundle + Save </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Cruises </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Experiences </Nav.Link>
                        </Nav>

                        <Nav className='ms-auto'>
                            <Nav.Link href='#' className='nav-link-text-help'> Help </Nav.Link>
                            <Nav.Link href='#' className='nav-link-button'>
                                <Button variant='primary'> Login </Button>
                            </Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </>
    )

}


export default NavbarComponent