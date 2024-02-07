import React, { useContext, useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

// modules
import { firebaseAuth } from '../Configuration/Firebase'
import { UserContext } from '../App'





const NavbarComponent = ( ) => {

    // website brand name.
    // SwiftStay, BookHaven, Coast Hotels, SnapStay, RoomRover
    const brand_name = 'SwiftStay'

    // for navigation.
    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext( UserContext )


    // effect to show current user.
    useEffect(() => {
        // console.log('from navbar, current user is')
        // console.log( currentUser )

    }, [ currentUser ])


    // function sign out user.
    const SignOutUser = async ( ) => {
        let existingUser = firebaseAuth.currentUser
        if( existingUser ) {
            await firebaseAuth.signOut()
            // console.log('user signed out')
            setCurrentUser( null ) 
        } 
        else {
            // console.log('no current user is logged in')
        }
    
    }
    
    

    return (
        <>
            <Navbar collapseOnSelect bg='light' variant='light' expand='lg'>
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')} className='navbar-brand'>
                        {/* <img src={ skyscanner_1 } alt='' width={ 120 } /> */}
                        <h3 className='navbar-brand'>{ brand_name }</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='redponsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link onClick={() => navigate('/fetch-all-rooms')} className='nav-link-text'> Hotels </Nav.Link>
                            <Nav.Link onClick={() => navigate('/help-contact-us')} className='nav-link-text'> Contact Us </Nav.Link>
                            <Nav.Link onClick={() => navigate('/help-about-us')} className='nav-link-text'> About Us</Nav.Link>
                            <Nav.Link className='nav-link-text-help' onClick={() => navigate('/help')}> Help </Nav.Link>
                        </Nav>

                        <Nav className='ms-auto'>
                            {
                                currentUser ? 
                                <>
                                    <NavDropdown title={ currentUser.displayName } id='nav-dropdown'>
                                        <NavDropdown.Item eventKey='4.1'>View profile</NavDropdown.Item>
                                        <NavDropdown.Item eventKey='4.2'>Booking history</NavDropdown.Item>
                                    </NavDropdown>
                                    <Button variant='custom' className='navbar-login-btn' onClick={ SignOutUser }> Sign out </Button>
                                </>
                                :
                                <>
                                    <Nav.Link className='nav-link-button'>                                    
                                        <Button variant='custom' className='navbar-login-btn' onClick={() => navigate('/login')}> Login </Button>
                                    </Nav.Link>

                                    <Nav.Link className='nav-link-button'>                                    
                                        <Button variant='custom' className='navbar-signup-btn' onClick={() => navigate('/sign-up')}> Register </Button>
                                    </Nav.Link>

                                    {/* <Nav.Link className='nav-link-button'>                                    
                                        <Button variant='custom' className='navbar-login-btn' onClick={ SignOutUser }> Sign out </Button>
                                    </Nav.Link> */}

                                </>
                            }

                                {/* <Nav.Link className='nav-link-text-help' onClick={() => navigate('/help')}> Help </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}


export default NavbarComponent