import React, { useContext, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import skyscanner_1 from '../Media Files/skyscanner_1.jpeg'
import Button from 'react-bootstrap/Button'

import { UserContext } from '../App'








const NavbarComponent = ( ) => {


    // for navigation.
    const navigate = useNavigate()

    const userObject = useContext( UserContext )


    return (
        <>
            <Navbar collapseOnSelect bg='light' variant='light' expand='lg'>
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')} className='navbar-brand'>
                        <img src={ skyscanner_1 } alt='' width={ 120 } />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='redponsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#' className='nav-link-text'> Hotels </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Cars </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Flights </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Bundle + Save </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Rewards </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> Experiences </Nav.Link>
                            <Nav.Link href='#' className='nav-link-text'> { userObject.user ? userObject.user.email : ' '} </Nav.Link>

                        </Nav>

                        <Nav className='ms-auto'>
                            <Nav.Link className='nav-link-text-help' onClick={() => navigate('/help')}> Help </Nav.Link>
                            <Nav.Link className='nav-link-button' onClick={() => navigate('/login')}>
                                <Button variant='custom' className='navbar-login-btn'> Login </Button>
                            </Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </>
    )

}


export default NavbarComponent