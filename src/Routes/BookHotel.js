import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import { FaCcAmex } from 'react-icons/fa'
import { SiVisa } from 'react-icons/si'
import { SiMastercard } from 'react-icons/si'
import { FaCcDiscover } from 'react-icons/fa'
import { BsPaypal } from 'react-icons/bs'
import { BsShieldCheck } from 'react-icons/bs'
import Carousel from 'react-grid-carousel'
import Rating from '@mui/material/Rating'
import Button from 'react-bootstrap/Button'








const BookHotel = ( ) => {

    
    // setting up state.
    const [ bookingHotelObject, setBookingHotelObject ] = useState({ })

    // url params
    const params = useParams()


    // making certain component always displays from top on initial render.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
    

    useEffect(() => {
        console.log( params.room_id )
    }, [])


    // useEffect to fetch the booking hotel.
    useEffect(() => {
        const fetchBookingHotel = async () => {
            let response = await fetch(`https://hotel-finder-app-server-rest.onrender.com/get/room-details/${ params.room_id }`, {
                method: 'GET'
            })
            
            if( response.ok ) {
                let data = await response.json()
                setBookingHotelObject({ ...data })
                console.log( bookingHotelObject )
            }
        }

        fetchBookingHotel()

    }, [ ])






    return (
        <div>
            <NavbarComponent />

            <section className='book-hotel-wrapper-section'>
                <Row>
                    <Col>
                        <h4>{ bookingHotelObject.room_number }</h4> <br />
                        <h6 className='booking-hotel-extra-details'>Sign in to book faster and collect 21 stamps with this stay. Then you'll get two reward* nights</h6>
                    </Col>
                </Row>


                <Row xs={ 1 } md={ 2 }>

                    {/* Hotel details column */ }
                    <Col className='mb-5'>
                        <div className='booking-hotel-summary-div'>
                            <h4 className='booking-hotel-name'>{ bookingHotelObject.room_number } </h4> 
                            <h4> <Rating value={ bookingHotelObject.room_rating } readOnly name='read-only' /> </h4>
                            <p className='booking-hotel-extra-details'>located at accra</p>
                            <hr />

                            <section>
                                <Carousel rows={ 1 } cols={ 1 } loop>
                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_cover_photo_url } width='100%' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_1 } width='100%' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_2 } width='100%' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_3 } width='100%' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_4 } width='100%' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_5 } width='100%' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_6 } width='100%' alt='' />
                                    </Carousel.Item>

                                </Carousel>
                            </section>

                            <Row>
                                <Col>
                                    <h5 className='section-sub-header'>Check-in</h5>
                                    <p className='booking-hotel-extra-details'>Friday, March 24 2023</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>Check-out</h5>
                                    <p className='booking-hotel-extra-details'>Tuesday, April 18 2023</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h5 className='section-sub-header'>Guests</h5>
                                    <p className='booking-hotel-extra-details'>2 adults</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>Stay</h5>
                                    <p className='booking-hotel-extra-details'>1 night</p>
                                </Col>
                                <hr />
                            </Row>

                            {
                                <>
                                <h5 className='section-sub-header'>Summary of features</h5>
                                <Row md={ 4 }>
                                    {
                                        Object.keys( bookingHotelObject ).length > 0 ?
                                            bookingHotelObject.room_features.map(( feature, index ) => (
                                                <Col key={ index }>
                                                    <div className='book-room-features'>
                                                        { feature }
                                                    </div>
                                                </Col>
                                            ))
                                        :
                                            null
                                    }
                                </Row>
                                </>
                            }
                            
                            <hr />


                            <Row>
                                <h5 className='section-sub-header'>Pricing</h5>

                                <Col>
                                    <h6 className='booking-hotel-extra-details'>1 night</h6>

                                    <h6 className='booking-hotel-extra-details'>Taxes and fees</h6>

                                    <h3 className='section-sub-header'>Total</h3>

                                </Col>

                                <Col>
                                    <h6 className='booking-hotel-extra-details'>GH<span>&#8373;</span>100.00</h6>

                                    <h6 className='booking-hotel-extra-details'>GH<span>&#8373;</span>14.76</h6>

                                    <h3 className='section-sub-header'>GH<span>&#8373;</span>114.76</h3>
                                </Col>
                            </Row>
                            <hr />


                            <Row>
                                <section>
                                    <h3 className='section-sub-header'>Non refundable</h3>
                                    <p className='booking-hotel-extra-details'>If you cancel or don't attend your hotel booking, you'll not be refunded any of your original payment.</p>
                                </section>
                            </Row>
                            <hr />


                            <Row>
                                <section>
                                    <h3 className='section-sub-header'>Instant confirmation</h3>
                                    <p className='booking-hotel-extra-details'>Your booking will be confirmed instantly by Logo. You'll get a confirmation email right after.</p>
                                </section>
                            </Row>


                        </div>
                    
                    </Col>
                    {/* End of hotel details column */ }




                    {/*Payment details column */ }
                    <Col className='details-section mb-5'>
                    <div className='details-section-sub-div'>
                    <h4 className='section-sub-header'>Step 1: Your Details</h4>
                        <Form>
                            <Form.Group>
                                {/* <Form.Label>First name*</Form.Label> */}
                                <Form.Control type='text' placeholder='First Name' className='form-control-no-text' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Last Name' className='form-control-no-text' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Email Address' className='form-control-no-text' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Mobile Number' className='form-control' />
                                <Form.Text>We'll only contact you in an emergency</Form.Text>
                            </Form.Group>

                            {/* <h5>Check this box if you would not like to receive Hotels.com special deals email newsletter that contains great hotel promotions. </h5> */}
                        </Form>
                        </div>
                        <hr />


                        <div className='details-section-sub-div'>
                            <h4 className='section-sub-header'>Step 2: Payment Details</h4>
                            <Form>
                                <Form.Group className='form-control-no-text'>
                                    <Form.Text className='card-types-accepted-header'>Card types accepted:</Form.Text>
                                    <div className='accepted-cards-div'>
                                        <SiVisa className='accepted-card-style' size={ 25 } /> 
                                        <SiMastercard className='accepted-card-style' size={ 25 } /> 
                                        <FaCcAmex className='accepted-card-style' size={ 25 }/> 
                                        <FaCcDiscover className='accepted-card-style' size={ 25 }/> 
                                        <BsPaypal className='accepted-card-style' size={ 25 }/> 
                                    </div>
                                    <Form.Text>Your card issuer may charge a fee.</Form.Text>
                                </Form.Group>


                                <Form.Group className='form-control-no-text'>
                                    <Form.Control type='text' placeholder='Name on card' />
                                    <Form.Text>Enter your name exactly as it appears on the card.</Form.Text>
                                </Form.Group>

                                <Form.Group className='form-control-no-text'>
                                    <Form.Control type='email' placeholder='Booking email' />
                                    <Form.Text>We’ll send your booking confirmation to this email address. Make sure it’s correct.</Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type='text' placeholder='Card number'  className='form-control-no-text'/>
                                </Form.Group>

                                <Form.Control type='text' placeholder='Expiry date' className='form-control-no-text' />

                                <Form.Group className='form-control-no-text'>
                                    <Form.Control type='text' placeholder='Security dode' />
                                    <Form.Text>The 3 digits at the back of the card.</Form.Text>
                                </Form.Group>

                                <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>

                                <Button variant='custom' className='book-button'>Book</Button>

                            </Form>

                        </div>
                        <hr />
                    </Col>

                    {/* End of payment details column */ }
                    
                </Row>

            </section>


            <section className='footer-gap'>
            </section>

            <Footer />
        </div>
    )
}



export default BookHotel