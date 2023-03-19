import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import NavbarComponent from './NavBar'
import Footer from './Footer'







const BookHotel = ( ) => {

    // url params
    const params = useParams()

    useEffect(() => {
        console.log( params.room_id )
    }, [])


    return (
        <div>
            <NavbarComponent />

            <section className='book-hotel-wrapper-section'>
                <Row>
                    <Col>
                        <h4>Hilton Miami Airport Blue Lagoon</h4> <br />
                        <h4>Sign in to book faster and collect 21 stamps with this stay. Then you'll get two reward* nights</h4>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <h4>Step 1: Your Details</h4>
                        <Form>
                            <Form.Group>
                                {/* <Form.Label>First name*</Form.Label> */}
                                <Form.Control type='text' placeholder='First Name' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Last Name' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Email Address' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Mobile Number' />
                            </Form.Group>

                            <h5>Check this box if you would not like to receive Hotels.com special deals email newsletter that contains great hotel promotions. </h5>
                        </Form>
                    </Col>
                </Row>


                <Row>
                    <h4>Step 2: Room Details</h4>
                    <Col>
                        
                    </Col>

                </Row>

            </section>

            <section className='footer-gap'>
            </section>

            <Footer />
        </div>
    )
}



export default BookHotel