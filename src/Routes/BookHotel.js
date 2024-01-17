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

    // setting up state.
    const [ bookingHotelObject, setBookingHotelObject ] = useState({ })
    const [ bookingCustomerFirstName, setBookingCustomerFirstName ] = useState('')
    const [ bookingCustomerLastName, setBookingCustomerLastName ] = useState('')
    const [ bookingCustomerEmail, setBookingCustomerEmail ] = useState('')
    const [ bookingCustomerNumber, setBookingCustomerNumber ] = useState('')
    const [ customerPaymentCardName, setPaymentCardName ] = useState('')
    const [ customerPaymentBookingEmail, setPaymentBookingEmail ] = useState('')
    const [ customerPaymentCardNumber, setPaymentCardNumber ] = useState('')
    const [ customerPaymentCardSecurityCode, setCustomerPaymentCardSecurityCode ] = useState('')
    const [ bookingFieldsErrorStatus, setBookingFieldsErrorStatus ] = useState( false )
    const [ showBookingConfirmPage, setShowBookingConfirmPage ] = useState( false )
    const [ bookingFieldsErrorMessage, setBookingFieldsErrorMessage ] = useState('')
    const [ paymentMethod, setPaymentMethod ] = useState('')
    const [ visaPaymentSelected, setVisaPaymentSelected ] = useState( false )
    const [ masterCardPaymentSelected, setMasterCardPaymentSelected ] = useState( false )
    const [ payPalPaymentSelected, setPaypalPaymentSelected ] = useState( false )
    const [ mobileMoneyPaymentSelected, setMobileMoneyPaymentSelected ] = useState( false )
    const [ cardExpiryMonth, setCardExpiryMonth ] = useState('')
    const [ cardExpiryYear, setCardExpiryYear ] = useState('')


    // url params
    const params = useParams()

    // setting up reference.
    const confirmReference = useRef( null )
    const detailsSectionRef = useRef( null )

    // getting check-in and check-out dates via useContext.
    const { startDateValue, 
            setStartDateValue, 
            endDateValue, 
            setEndDateValue,
            numberOfAdultVisitors, 
            numberOfChildVisitors, 
            numberOfRooms,
            customerLengthOfStay 
           } = useContext( UserContext )

    // effect hook to fetch start date value from local storage
    useEffect(() => {
        let localStorageStartDateValue = JSON.parse( window.localStorage.getItem( 'startDateValue' ) )
        console.log(`localStorageStartDateValue = ${ localStorageStartDateValue }`)
        setStartDateValue( localStorageStartDateValue )

    }, [ startDateValue ,setStartDateValue ])

    // effect hook to fetch end date value from local storage
    useEffect(() => {
        let localStorageEndDateValue = JSON.parse( window.localStorage.getItem( 'endDateValue' ) )
        console.log(`localStorageEndDateValue = ${ localStorageEndDateValue }`)
        setEndDateValue( localStorageEndDateValue )

    }, [ endDateValue ,setEndDateValue ])

    // making certain component always displays from top on initial render.
    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     })
    // })
    

    useEffect(() => {
        console.log(`start date === ${ startDateValue }`)
        console.log( `end date === ${ endDateValue }`)
    }, [ startDateValue, endDateValue, setStartDateValue, setEndDateValue ])

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


    // scrolling details section ref into view.
    const ScrollDetailsSectionRefIntoView = ( ) => {
        setTimeout(() => {
            detailsSectionRef.current.scrollIntoView({
                behavior: 'smooth'
            })

        }, 1000)
    }


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


    const UpdateCustomerPaymentCardSecurityCode = ( event ) => {
        setCustomerPaymentCardSecurityCode( event.target.value )
    }

    const ResetAllSelectedPaymentMethods = ( ) => {
        setVisaPaymentSelected( false )
        setMasterCardPaymentSelected( false )
        setPaypalPaymentSelected( false )
        setMobileMoneyPaymentSelected( false )
    }


    const UpdateCustomerSelectedPaymentMethod = ( event ) => {
        ResetPaymentRelatedInputs()
        setPaymentMethod( event.target.value )
    }


    const UpdateCardExpiryMonth = ( event ) => {
        setCardExpiryMonth( event.target.value )
    }

    const ResetPaymentRelatedInputs = ( ) => {
     setPaymentCardName('')
     setPaymentBookingEmail('')
     setPaymentCardNumber('')
     setCustomerPaymentCardSecurityCode('')

    }


    const UpdateCardExpiryYear = ( event ) => {
        setCardExpiryYear( event.target.value )
    }



    // effect hook to log value of selected payment immediately
    useEffect(() => {
        console.log(`payment method === ${ paymentMethod }`)

        if ( paymentMethod === 'VISA' ) {
            ResetAllSelectedPaymentMethods()
            setVisaPaymentSelected( true )
        }
        else if ( paymentMethod === 'MASTERCARD') {
            ResetAllSelectedPaymentMethods()
            setMasterCardPaymentSelected( true )
        }
        else if ( paymentMethod === 'PAYPAL') {
            ResetAllSelectedPaymentMethods()
            setPaypalPaymentSelected( true )
        }
        else if( paymentMethod === 'MOBILE MONEY'){
            ResetAllSelectedPaymentMethods()
            setMobileMoneyPaymentSelected( true )
        }
        else {
            ResetAllSelectedPaymentMethods()
        }
    }, [ paymentMethod ])


    // scrolling confirm booking reference into view.
    const ScrollConfirmBookingIntoView = ( ) => {
        setTimeout(() => {
            confirmReference.current.scrollIntoView({
                behavior: 'smooth'
            })

        }, 1000)
    }


    const HandleBookHotelAction = ( ) => {
        if( bookingCustomerFirstName.length < 1 || bookingCustomerLastName.length < 1 || 
            bookingCustomerEmail.length < 1 || bookingCustomerNumber.length < 1 || 
            customerPaymentCardName.length < 1 || customerPaymentBookingEmail.length < 1 || 
            customerPaymentCardNumber.length < 1 || customerPaymentCardSecurityCode.length < 1  )
        {
            setBookingFieldsErrorStatus( true )
            setBookingFieldsErrorMessage('One or more fields is(are) empty. All fields are required')
        }
        else if ( cardExpiryMonth === '' || cardExpiryMonth === '-- Select --') {
            setBookingFieldsErrorStatus( true )
            setBookingFieldsErrorMessage('Card expiry date is required')
        }
        else if ( cardExpiryYear === '' || cardExpiryYear === '-- Select --') {
            setBookingFieldsErrorStatus( true )
            setBookingFieldsErrorMessage('Card expiry year is required')
        }
        else {
            if( paymentMethod ===  '' || paymentMethod === '-- Select --') {
                setBookingFieldsErrorStatus( true )
                setBookingFieldsErrorMessage('Please select a valid payment method')
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
                console.log(`customer card security code: ${ customerPaymentCardSecurityCode }`)
                console.log(`customer payment method === ${ paymentMethod }`)
                console.log(`card expiry month = ${ cardExpiryMonth }`)
                console.log(`card expiry year = ${ cardExpiryYear }`)

                setShowBookingConfirmPage( true )
                ScrollConfirmBookingIntoView()
            }

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
                            <h4> <Rating value={ 4 } readOnly name='read-only' /> </h4>
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

                            <Row md={ 2 } xs={ 1 }>
                                <Col>
                                    <h5 className='section-sub-header'>Check-in <span className='booking-checkin-date-format'>(mm-dd-yyyy)</span></h5>
                                    <p className='booking-hotel-extra-details'>{ startDateValue }</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>Check-out <span className='booking-checkin-date-format'>(mm-dd-yyyy)</span></h5>
                                    <p className='booking-hotel-extra-details'>{ endDateValue }</p>
                                </Col>
                            </Row>


                            <Row md={ 2 } xs={ 1 }>
                                <Col>
                                    <h5 className='section-sub-header'>No. Of Adults</h5>
                                    <p className='booking-hotel-extra-details'>{ numberOfAdultVisitors }</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>No. Of Children</h5>
                                    <p className='booking-hotel-extra-details'>{ numberOfChildVisitors }</p>
                                </Col>
                            </Row>



                            <Row md={ 2 } xs={ 1 }>
                                <Col>
                                    <h5 className='section-sub-header'>No. Of Rooms Booked</h5>
                                    <p className='booking-hotel-extra-details'>{ numberOfRooms }</p>
                                </Col>

                                <Col>
                                    <h5 className='section-sub-header'>Length Of Stay</h5>
                                    <p className='booking-hotel-extra-details'>{ customerLengthOfStay } nights</p>
                                </Col>
                                <hr />
                            </Row>



                            {
                                <>
                                <h5 className='section-sub-header'>Summary of features</h5>
                                <Row md={ 4 } xs={ 1 }>
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


                            <Row md={ 2 } >
                                <h5 className='section-sub-header'>Pricing</h5>

                                <Col>
                                    <h6 className='booking-hotel-extra-details'>1 night</h6>

                                    <h6 className='booking-hotel-extra-details'>Taxes and fees</h6>

                                    <h3 className='section-sub-header'>Total</h3>

                                </Col>

                                <Col>
                                    <h6 className='booking-hotel-extra-details'>GH<span>&#8373;</span> { bookingHotelObject.room_rate }</h6>

                                    <h6 className='booking-hotel-extra-details'>GH<span>&#8373;</span> 14.76</h6>

                                    <h3 className='section-sub-header'>GH<span>&#8373;</span> 9854.76</h3>
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
                    <Col className='details-section mb-5' ref={ detailsSectionRef } >
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

                                <Form.Group className='mb-5'>
                                    <Form.Text>Select payment method to proceed with your booking*</Form.Text>
                                    <Form.Select aria-label='select payment method' 
                                        className='form-control text-control-focus-style specify-cursor'
                                        onChange={ UpdateCustomerSelectedPaymentMethod }
                                        value={ paymentMethod } >
                                        <option value='-- Select --'>-- Select --</option>
                                        <option value='VISA'>VISA</option>
                                        <option value='MASTERCARD'>MASTERCARD</option>
                                        <option value='PAYPAL'>PAYPAL</option>
                                        <option value='MOBILE MONEY'>MOBILE MONEY</option>
                                    </Form.Select>
                                </Form.Group>

                                { visaPaymentSelected && 
                                    <section>
                                        <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
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

                                        <Row className='form-control-no-text'>
                                            <Form.Text>Expiration Date *</Form.Text>
                                            <Col>
                                                <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryMonth }
                                                    value={ cardExpiryMonth }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                                                    <option value='01 - January'>01 - January</option>
                                                    <option value='02 - February'>02 - February</option>
                                                    <option value='03 - March'>03 - March</option>
                                                    <option value='04 - April'>04 - April</option>
                                                    <option value='05 - May'>05 - May</option>
                                                    <option value='06 - June'>06 - June</option>
                                                    <option value='07 - July'>07 - July</option>
                                                    <option value='08 - August'>08 - August</option>
                                                    <option value='09 - September'>09 - September</option>
                                                    <option value='10 - October'>10 - October</option>
                                                    <option value='11 - November'>11 - November</option>
                                                    <option value='12 - December'>12 - December</option>
                                                </Form.Select>
                                            </Col>

                                            <Col>
                                            <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryYear }
                                                    value={ cardExpiryYear }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                                                    <option value='2023'>2023</option>
                                                    <option value='2024'>2024</option>
                                                    <option value='2025'>2025</option>
                                                    <option value='2026'>2026</option>
                                                    <option value='2027'>2027</option>
                                                    <option value='2028'>2028</option>
                                                    <option value='2029'>2029</option>
                                                    <option value='2030'>2030</option>
                                                    <option value='2031'>2031</option>
                                                    <option value='2032'>2032</option>
                                                    <option value='2033'>2033</option>
                                                    <option value='2034'>2034</option>
                                                    <option value='2035'>2035</option>
                                                    <option value='2036'>2036</option>
                                                    <option value='2037'>2037</option>
                                                    <option value='2038'>2038</option>
                                                    <option value='2039'>2039</option>
                                                    <option value='2040'>2040</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
        
                                        <Form.Group className='form-control-no-text'>
                                            <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                                            <Form.Text>The 3 digits at the back of the card.</Form.Text>
                                        </Form.Group>
        
                                        <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>
        
                                        <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
                                        <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p>
                                    </section>

                                    }



                                { masterCardPaymentSelected && 
                                    <section>
                                        <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
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

                                        <Row className='form-control-no-text'>
                                            <Form.Text>Expiration Date *</Form.Text>
                                            <Col>
                                                <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryMonth }
                                                    value={ cardExpiryMonth }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                                                    <option value='01 - January'>01 - January</option>
                                                    <option value='02 - February'>02 - February</option>
                                                    <option value='03 - March'>03 - March</option>
                                                    <option value='04 - April'>04 - April</option>
                                                    <option value='05 - May'>05 - May</option>
                                                    <option value='06 - June'>06 - June</option>
                                                    <option value='07 - July'>07 - July</option>
                                                    <option value='08 - August'>08 - August</option>
                                                    <option value='09 - September'>09 - September</option>
                                                    <option value='10 - October'>10 - October</option>
                                                    <option value='11 - November'>11 - November</option>
                                                    <option value='12 - December'>12 - December</option>
                                                </Form.Select>
                                            </Col>

                                            <Col>
                                            <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryYear }
                                                    value={ cardExpiryYear }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                                                    <option value='2023'>2023</option>
                                                    <option value='2024'>2024</option>
                                                    <option value='2025'>2025</option>
                                                    <option value='2026'>2026</option>
                                                    <option value='2027'>2027</option>
                                                    <option value='2028'>2028</option>
                                                    <option value='2029'>2029</option>
                                                    <option value='2030'>2030</option>
                                                    <option value='2031'>2031</option>
                                                    <option value='2032'>2032</option>
                                                    <option value='2033'>2033</option>
                                                    <option value='2034'>2034</option>
                                                    <option value='2035'>2035</option>
                                                    <option value='2036'>2036</option>
                                                    <option value='2037'>2037</option>
                                                    <option value='2038'>2038</option>
                                                    <option value='2039'>2039</option>
                                                    <option value='2040'>2040</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
        
                                        <Form.Group className='form-control-no-text'>
                                            <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                                            <Form.Text>The 3 digits at the back of the card.</Form.Text>
                                        </Form.Group>
        
                                        <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>
        
                                        <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
                                        <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p>
                                    </section>

                                    }



                                { payPalPaymentSelected && 
                                    <section>
                                        <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
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

                                        <Row className='form-control-no-text'>
                                            <Form.Text>Expiration Date *</Form.Text>
                                            <Col>
                                                <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryMonth }
                                                    value={ cardExpiryMonth }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                                                    <option value='01 - January'>01 - January</option>
                                                    <option value='02 - February'>02 - February</option>
                                                    <option value='03 - March'>03 - March</option>
                                                    <option value='04 - April'>04 - April</option>
                                                    <option value='05 - May'>05 - May</option>
                                                    <option value='06 - June'>06 - June</option>
                                                    <option value='07 - July'>07 - July</option>
                                                    <option value='08 - August'>08 - August</option>
                                                    <option value='09 - September'>09 - September</option>
                                                    <option value='10 - October'>10 - October</option>
                                                    <option value='11 - November'>11 - November</option>
                                                    <option value='12 - December'>12 - December</option>
                                                </Form.Select>
                                            </Col>

                                            <Col>
                                            <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryYear }
                                                    value={ cardExpiryYear }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                                                    <option value='2023'>2023</option>
                                                    <option value='2024'>2024</option>
                                                    <option value='2025'>2025</option>
                                                    <option value='2026'>2026</option>
                                                    <option value='2027'>2027</option>
                                                    <option value='2028'>2028</option>
                                                    <option value='2029'>2029</option>
                                                    <option value='2030'>2030</option>
                                                    <option value='2031'>2031</option>
                                                    <option value='2032'>2032</option>
                                                    <option value='2033'>2033</option>
                                                    <option value='2034'>2034</option>
                                                    <option value='2035'>2035</option>
                                                    <option value='2036'>2036</option>
                                                    <option value='2037'>2037</option>
                                                    <option value='2038'>2038</option>
                                                    <option value='2039'>2039</option>
                                                    <option value='2040'>2040</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
        
                                        <Form.Group className='form-control-no-text'>
                                            <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                                            <Form.Text>The 3 digits at the back of the card.</Form.Text>
                                        </Form.Group>
        
                                        <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>
        
                                        <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
                                        <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p>
                                    </section>

                                    }



                                { mobileMoneyPaymentSelected && 
                                    <section>
                                        <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
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

                                        <Row className='form-control-no-text'>
                                            <Form.Text>Expiration Date *</Form.Text>
                                            <Col>
                                                <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryMonth }
                                                    value={ cardExpiryMonth }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                                                    <option value='01 - January'>01 - January</option>
                                                    <option value='02 - February'>02 - February</option>
                                                    <option value='03 - March'>03 - March</option>
                                                    <option value='04 - April'>04 - April</option>
                                                    <option value='05 - May'>05 - May</option>
                                                    <option value='06 - June'>06 - June</option>
                                                    <option value='07 - July'>07 - July</option>
                                                    <option value='08 - August'>08 - August</option>
                                                    <option value='09 - September'>09 - September</option>
                                                    <option value='10 - October'>10 - October</option>
                                                    <option value='11 - November'>11 - November</option>
                                                    <option value='12 - December'>12 - December</option>
                                                </Form.Select>
                                            </Col>

                                            <Col>
                                            <Form.Select aria-label='card expiry month' 
                                                    className='form-control text-control-focus-style specify-cursor'
                                                    onChange={ UpdateCardExpiryYear }
                                                    value={ cardExpiryYear }
                                                    >
                                                    <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                                                    <option value='2023'>2023</option>
                                                    <option value='2024'>2024</option>
                                                    <option value='2025'>2025</option>
                                                    <option value='2026'>2026</option>
                                                    <option value='2027'>2027</option>
                                                    <option value='2028'>2028</option>
                                                    <option value='2029'>2029</option>
                                                    <option value='2030'>2030</option>
                                                    <option value='2031'>2031</option>
                                                    <option value='2032'>2032</option>
                                                    <option value='2033'>2033</option>
                                                    <option value='2034'>2034</option>
                                                    <option value='2035'>2035</option>
                                                    <option value='2036'>2036</option>
                                                    <option value='2037'>2037</option>
                                                    <option value='2038'>2038</option>
                                                    <option value='2039'>2039</option>
                                                    <option value='2040'>2040</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
        
                                        <Form.Group className='form-control-no-text'>
                                            <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                                            <Form.Text>The 3 digits at the back of the card.</Form.Text>
                                        </Form.Group>
        
                                        <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>
        
                                        <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
                                        <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p>
                                    </section>

                                    }

                            </Form>

                        </div>
                        <hr />
                    </Col>

                    {/* End of payment details column */ }
                    
                </Row>
            </section>


            {
                showBookingConfirmPage &&
                    <section> 
                        <div className='book-hotel-confirmation-section' ref={ confirmReference } >
                            <h4 className='confirm-booking-header mb-4'>Confirm your booking details for { params.hotel_name }</h4>
                            <div className='booking-confirmation-div'>
                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Check-in date</h5>
                                        <p>{ startDateValue }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Check-out date</h5>
                                        <p>{ endDateValue }</p>
                                    </Col>
                                </Row>
                                <hr />


                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Number of adults</h5>
                                        <p>{ numberOfAdultVisitors }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Number of children</h5>
                                        <p>{ numberOfChildVisitors }</p>
                                    </Col>
                                </Row>
                                <hr />



                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Number of rooms booked</h5>
                                        <p>{ numberOfRooms }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Length of stay</h5>
                                        <p>2</p>
                                    </Col>
                                </Row>
                                <hr />



                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Room features</h5>
                                        {
                                            <>
                                            <Row md={ 3 }>
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

                                        </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Pricing</h5>
                                        <Row>
                                            <Col>
                                                <p>1 night</p>
                                            </Col>

                                            <Col>
                                                <p>GH<span>&#8373;</span> { bookingHotelObject.room_rate }</p>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p>Tax ( 12% )</p>
                                            </Col>

                                            <Col>
                                                <p>GH<span>&#8373;</span> 12.00</p>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p>Total per night</p>
                                            </Col>

                                            <Col>
                                                <p>GH<span>&#8373;</span> 112.00 * ( 4 nights )</p>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <p>Total cost of stay</p>
                                            </Col>

                                            <Col>
                                                <p>GH<span>&#8373;</span> 9824.00</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <hr />



                                <Row className='confirm-booking-details-row mb-4'>
                                    <Col md={ 5 }>
                                        <h5 className='booking-hotel-detail-header'>Refund policy</h5>
                                        <p>
                                            If you cancel or don't attend your hotel booking, you'll not be 
                                            refunded any of your original payment.
                                        </p>
                                    </Col>
                                </Row>
                                <hr />



                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your first name</h5>
                                        <p>{ bookingCustomerFirstName }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your last name</h5>
                                        <p>{ bookingCustomerLastName }</p>
                                    </Col>
                                </Row>
                                <hr />



                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your contact email</h5>
                                        <p>{ bookingCustomerEmail }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your mobile number</h5>
                                        <p>{ bookingCustomerNumber }</p>
                                    </Col>
                                </Row>
                                <hr />



                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your selected payment method</h5>
                                        <p>{ paymentMethod }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your name on card</h5>
                                        <p>{ customerPaymentCardName }</p>
                                    </Col>
                                </Row>
                                <hr />

                                    

                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your card number</h5>
                                        <p>{ customerPaymentCardNumber }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your card expiration month</h5>
                                        <p>{ cardExpiryMonth }</p>
                                    </Col>
                                </Row>
                                <hr />



                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your card expiration year</h5>
                                        <p>{ cardExpiryYear }</p>
                                    </Col>

                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your security code</h5>
                                        <p>{ customerPaymentCardSecurityCode }</p>
                                    </Col>
                                </Row>
                                <hr />


                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <h5 className='booking-hotel-detail-header'>Your booking email</h5>
                                        <p>{ customerPaymentBookingEmail }</p>
                                    </Col>
                                </Row>
                                <hr />


                                <Row className='confirm-booking-details-row mb-4' md={ 2 } xs={ 1 }>
                                    <Col>
                                        <Button variant='custom' className='confirm-booking-details-btn'>I confirm booking details. Complete my booking now</Button>
                                    </Col>

                                    <Col>
                                        <Button variant='custom' className='edit-booking-details-btn' onClick={ ScrollDetailsSectionRefIntoView }>
                                            I want to edit my booking information
                                        </Button>
                                    </Col>
                                </Row>
                                

                            </div>
                        </div>
                    </section>
            }



            <section className='footer-gap'>
            </section>

            <Footer />
        </div>
    )
}



export default BookHotel