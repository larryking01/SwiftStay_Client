import React, { useState, useEffect, useContext, useRef } from 'react'
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
import { IoLocationSharp } from 'react-icons/io5'

import { UserContext } from '../App'










const BookHotel = ( ) => {

    // url params
    const params = useParams()


    // setting up reference.
    const confirmReference = useRef( null )


    // getting check-in and check-out dates via useContext.
    const { startDateValue, endDateValue, numberOfAdultVisitors, numberOfChildVisitors, numberOfRooms } = useContext( UserContext )


    // making certain component always displays from top on initial render.
    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     })s
    // })
    

    useEffect(() => {
        console.log(`start date === ${ startDateValue }`)
        console.log( `end date === ${ endDateValue }`)
    }, [])


    // useEffect to fetch the booking hotel.
    useEffect(() => {
        const fetchBookingHotel = async () => {
            let response = await fetch(`https://hotel-finder-app-server-rest.onrender.com/get/room-details/${ params.hotel_name }/${ params.room_id }`, {
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


    
    // setting up state.
    const [ bookingHotelObject, setBookingHotelObject ] = useState({ })
    const [ bookingCustomerFirstName, setBookingCustomerFirstName ] = useState('')
    const [ bookingCustomerLastName, setBookingCustomerLastName ] = useState('')
    const [ bookingCustomerEmail, setBookingCustomerEmail ] = useState('')
    const [ bookingCustomerNumber, setBookingCustomerNumber ] = useState('')
    const [ customerPaymentCardName, setPaymentCardName ] = useState('')
    const [ customerPaymentBookingEmail, setPaymentBookingEmail ] = useState('')
    const [ customerPaymentCardNumber, setPaymentCardNumber ] = useState('')
    const [ customerPaymentCardExpiryDate, setPaymentCardExpiryDate ] = useState('')
    const [ customerPaymentCardSecurityCode, setCustomerPaymentCardSecurityCode ] = useState('')
    const [ bookingFieldsErrorStatus, setBookingFieldsErrorStatus ] = useState( false )
    const [ bookingFieldsErrorMessage, setBookingFieldsErrorMessage ] = useState('')




    // updating state values.
    const UpdateCustomerFirstName = ( event ) => {
        setBookingCustomerFirstName( event.target.value )
    }

    const UpdateCustomerLastName = ( event ) => {
        setBookingCustomerLastName( event.target.value )
    }

    const UpdateCustomerEmail = ( event ) => {
        setBookingCustomerEmail( event.target.value )
    }

    const UpdateCustomerNumber = ( event ) => {
        setBookingCustomerNumber( event.target.value )
    }


    // payment details
    const UpdateCustomerPaymentCardName = ( event ) => {
        setPaymentCardName( event.target.value )
    }

    const UpdateCustomerPaymentBookingEmail = ( event ) => {
        setPaymentBookingEmail( event.target.value )
    }

    const UpdateCustomerPaymentCardNumber = ( event ) => {
        setPaymentCardNumber( event.target.value )
    }

    const UpdateCustomerPaymentCardExpiryDate = ( event ) => {
        setPaymentCardExpiryDate( event.target.value )
    }

    const UpdateCustomerPaymentCardSecurityCode = ( event ) => {
        setCustomerPaymentCardSecurityCode( event.target.value )
    }


    // scrolling confirm booking reference into view.
    const ScrollConfirmBookingIntoView = ( ) => {
        setTimeout(() => {
            confirmReference.current.scrollIntoView({
                behavior: 'smooth'
            })

        }, 1000)
    }


    const HandleBookHotelAction = ( ) => {

        if( bookingCustomerFirstName.length < 1 || bookingCustomerLastName.length < 1 || bookingCustomerEmail.length < 1 || bookingCustomerNumber.length < 1 || customerPaymentCardName.length < 1 || customerPaymentBookingEmail.length < 1 || customerPaymentCardNumber.length < 1 || customerPaymentCardExpiryDate.length < 1 || customerPaymentCardSecurityCode.length < 1  ) {
            setBookingFieldsErrorStatus( true )
            setBookingFieldsErrorMessage('One or more fields is(are) empty. All fields are required')
        }
        else {
            setBookingFieldsErrorStatus( false )
            console.log(`customer first name: ${ bookingCustomerFirstName }`)
            console.log(`customer last name: ${ bookingCustomerLastName }`)
            console.log(`customer email: ${ bookingCustomerEmail }`)
            console.log(`customer number: ${ bookingCustomerNumber }`)
    
            console.log(`customer name on card: ${ customerPaymentCardName }`)
            console.log(`customer booking email: ${ customerPaymentBookingEmail }`)
            console.log(`customer card number: ${ customerPaymentCardNumber }`)
            console.log(`customer card expiry date: ${ customerPaymentCardExpiryDate }`)
            console.log(`customer card security code: ${ customerPaymentCardSecurityCode }`)

            ScrollConfirmBookingIntoView()
            }

    }






    return (
        <div>
            <NavbarComponent />

            <section className='book-hotel-wrapper-section'>
                <Row className='booking-hotel-name-row'>
                    <Col>
                        <h4 className='booking-hotel-name-primary'>{ bookingHotelObject.room_number }</h4> <br />
                        <h6 className='booking-hotel-extra-details mb-4'>Sign in and save up to 20% of the total booking costs with our members only deal.</h6>
                    </Col>
                </Row>


                <Row xs={ 1 } md={ 2 }>

                    {/* Hotel details column */ }
                    <Col className='mb-5'>
                        <div className='booking-hotel-summary-div'>
                            <h4 className='booking-hotel-features'> Hotel Features </h4> 
                            <h4> <Rating value={ bookingHotelObject.room_rating } readOnly name='read-only' /> </h4>
                            <p className='booking-hotel-extra-details'> <IoLocationSharp /> { bookingHotelObject.room_location }</p>
                            <hr />

                            <section>
                                <Carousel rows={ 1 } cols={ 1 } loop>
                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_cover_photo_url } className='book-hotel-grid-img mb-3' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_1 } className='book-hotel-grid-img mb-3' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_2 } className='book-hotel-grid-img mb-3' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_3 } className='book-hotel-grid-img mb-3' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_4 } className='book-hotel-grid-img mb-3' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_5 } className='book-hotel-grid-img mb-3' alt='' />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img src={ bookingHotelObject.room_extra_photo_url_6 } className='book-hotel-grid-img mb-3' alt='' />
                                    </Carousel.Item>

                                </Carousel>
                            </section>

                            <Row>
                                <Col>
                                    <h5 className='section-sub-header'>Check-in <span className='booking-checkin-date-format'>(mm-dd-yyyy)</span></h5>
                                    <p className='booking-hotel-extra-details'>{ startDateValue }</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>Check-out <span className='booking-checkin-date-format'>(mm-dd-yyyy)</span></h5>
                                    <p className='booking-hotel-extra-details'>{ endDateValue }</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h5 className='section-sub-header'>No. Of Adults</h5>
                                    <p className='booking-hotel-extra-details'>{ numberOfAdultVisitors }</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>No. Of Children</h5>
                                    <p className='booking-hotel-extra-details'>{ numberOfChildVisitors }</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h5 className='section-sub-header'>No. Of Rooms Booked</h5>
                                    <p className='booking-hotel-extra-details'>{ numberOfRooms }</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>Length Of Stay</h5>
                                    <p className='booking-hotel-extra-details'>43 nights</p>
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
                                                    <div className='book-room-features mb-3'>
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
                                <Form.Control type='text' placeholder='First Name *' className='form-control-no-text text-control-focus-style' onChange={ UpdateCustomerFirstName } value={ bookingCustomerFirstName } />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Last Name *' className='form-control-no-text text-control-focus-style' onChange={ UpdateCustomerLastName } value={ bookingCustomerLastName } />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Email Address *' className='form-control-no-text text-control-focus-style' onChange={ UpdateCustomerEmail } value={ bookingCustomerEmail } />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='text' placeholder='Mobile Number *' className='form-control text-control-focus-style' onChange={ UpdateCustomerNumber } value={ bookingCustomerNumber } />
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
                                    <Form.Control className='text-control-focus-style' type='text' placeholder='Name on card *' onChange={ UpdateCustomerPaymentCardName }  />
                                    <Form.Text>Enter your name exactly as it appears on the card.</Form.Text>
                                </Form.Group>

                                <Form.Group className='form-control-no-text'>
                                    <Form.Control className='text-control-focus-style' type='email' placeholder='Booking email *' onChange={ UpdateCustomerPaymentBookingEmail } />
                                    <Form.Text>We’ll send your booking confirmation to this email address. Make sure it’s correct.</Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type='text' placeholder='Card number *'  className='form-control-no-text text-control-focus-style' onChange={  UpdateCustomerPaymentCardNumber } />
                                </Form.Group>

                                <Form.Control type='text' placeholder='Expiry date (MM/YY) *' className='form-control-no-text text-control-focus-style' onChange={ UpdateCustomerPaymentCardExpiryDate } />

                                <Form.Group className='form-control-no-text'>
                                    <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                                    <Form.Text>The 3 digits at the back of the card.</Form.Text>
                                </Form.Group>

                                <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>

                                <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
                                <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p>

                            </Form>

                        </div>
                        <hr />
                    </Col>

                    {/* End of payment details column */ }
                    
                </Row>
            </section>



            <section className='booking-details-confirmation-section' ref={ confirmReference } >
                <h4>Confirm your booking details</h4>
            </section>


            <section className='footer-gap'>
            </section>

            <Footer />
        </div>
    )
}



export default BookHotel