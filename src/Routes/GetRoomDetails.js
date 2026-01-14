import { useState, useEffect, useRef, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Rating from '@mui/material/Rating'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlinePets } from 'react-icons/md'
import { MdEmojiFoodBeverage } from 'react-icons/md'
import { IoMdInformationCircle } from 'react-icons/io'
import { MdPayment } from 'react-icons/md'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcPaypal } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { BiMinus, BiPlus } from 'react-icons/bi'

// font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// modules
import { UserContext } from '../App'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import StartDatePicker from '../Configuration/StartDatePicker'
import EndDatePicker from '../Configuration/EndDatePicker'
// import Maps from '../Configuration/Maps'
import Maps2 from '../Configuration/Maps2'
// import rooms_and_suites_1 from '../Media Files/Rooms And Suites/rooms_and_suites_1.webp'






const GetRoomDetails = () => {

  const { server_url } = useContext( UserContext )

  const params = useParams()
  let booking_room_id = params.hotel_id
  let hotel_name = params.hotel_name

  const navigate = useNavigate()

  const reviewRef = useRef( null )
  const dateDurationRef = useRef( null )


  // for state.
  const [ selectedRoomDetailsObject, setselectedRoomDetailsObject ] = useState({})
  const [ fetchError, setFetchError ] = useState( false )
  const [ fetchErrorMessage, setFetchErrorMessage ] = useState( null )
  const [ isLoadingHotelDetails, setIsLoadingHotelDetails ] = useState( true )
  const [ allReviewsArray, setAllReviewsArray ] = useState([ ])
  const [ isLoadingReviews, setIsLoadingReviews ] = useState( true )
  const [ reviewsError, setReviewsError ] = useState( false )
  const [ reviewsErrorMessage, setReviewsErrorMessage ] = useState( null )
  const [ reviewerEmail, setReviewerEmail ] = useState('')
  const [ reviewBody, setReviewBody ] = useState('')
  const [ reviewerEmailError, setReviewerEmailError ] = useState( false )
  const [ reviewBodyError, setReviewBodyError ] = useState( false )
  const [ postingReview, setPostingReview ] = useState( false )
  const [ reviewFeedback, setReviewFeedback ] = useState('')
  const [ showGuestExtraDetails, setShowGuestExtraDetails ] = useState( false )
  const [ bookingDatesNull, setBookingDatesNull ] = useState( false )


  // destructuring user booking hotel extra info.
  const { numberOfAdultVisitors, setNumberOfAdultVisitors,
          numberOfChildVisitors, setNumberOfChildVisitors,
          numberOfRooms, setNumberOfRooms, 
          startDateValue, endDateValue, startDateMilliseconds, 
          endDateMilliseconds, setCustomerLengthOfStay,
          
         } = useContext( UserContext )







  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [ ])


  // fetch details of selected room.
  useEffect(() => {
    // async function to fetch data.
    const FetchData = async () => {
      let response = await fetch(`${ server_url }/get/room-details/${ params.hotel_name }/${ params.hotel_id }`, {
        method: 'GET'
      })
      
      if ( response.status === 200 ) {
        let data = await response.json()
        setselectedRoomDetailsObject({ ...data }) 
        console.log('selected room data is')
        console.log( data )
        setTimeout(() => {
          setIsLoadingHotelDetails( false )
        }, 1000 )

      }

      else {
        setIsLoadingHotelDetails( false )
        setFetchError( false )
        setFetchErrorMessage('Sorry, we could not load available hotels due to a poor internet connection. Please check your internet connection and reload the page.')
      }

    }

    FetchData()

  }, [ ])



    // effect hook to fetch all reviews.
    useEffect(() => {
      const FetchAllReviews = async ( ) => {
          let response = await fetch(`${ server_url }/get/fetch-reviews/${ params.hotel_name }/${ params.hotel_id }`)
          
          if( response.status === 200 ) {
              let data =  await response.json()
              setAllReviewsArray( data )
              setTimeout(() => {
                  setIsLoadingReviews( false )
              }, 1000 )
          }
          else if ( response.status === 404 ) {
              setTimeout(() => {
                  setIsLoadingReviews( false )
              }, 1000 )
          }
          else {
              setIsLoadingReviews( false )
              setReviewsErrorMessage('failed to fetch reviews....')
          }
      }

      FetchAllReviews()

  }, [ ])



  // good to know contents array.
  const goodToKnowArray = [
    { icon: <MdOutlinePets size={ 30 } />, feature: 'Pets', description: 'Pets are not allowed.', visaIcon: '', masterCardIcon: '', paypalIcon: ''},
    { icon: <MdEmojiFoodBeverage size={ 30 } />, feature: 'Breakfast', description: 'Breakfast available.', visaIcon: '', masterCardIcon: '', paypalIcon: ''},
    { icon: <IoMdInformationCircle size={ 30 } />, feature: 'Important information from the hotel', description: 'Please note that parking is available offsite at a discounted rate. When booking 6 rooms or more, different policies and additional supplements will apply.', visaIcon: '', masterCardIcon: '', paypalIcon: ''},
    { icon: <MdPayment size={ 30 } />, feature: 'Accepted payment methods', description: 'The hotel accepts the following payment methods:', visaIcon: <FaCcVisa size={ 30 } />, masterCardIcon: <FaCcMastercard size={ 30 } />, paypalIcon: <FaCcPaypal size={ 30 } /> }

  ]




  // updating reviewer email state
  const HandleReviewerEmailUpdate = ( event ) => {
    setReviewerEmailError( false )
    setReviewerEmail( event.target.value )
  }


  // updating review body state
  const HandleReviewBodyUpdate = ( event ) => {
      setReviewBodyError( false )
      setReviewBody( event.target.value )
  }


    // handling post review
    const HandlePostReview = async ( ) => {

      if ( reviewerEmail.length < 1 || reviewBody.length < 1 ) {
          if( reviewerEmail.length < 1 ) {
              setReviewerEmailError( true )
          }
          else {
              setReviewerEmailError( false )
          }

          if( reviewBody.length < 1 ) {
              setReviewBodyError( true )
          }
          else {
              setReviewBodyError( false )
          }
      }

      else {
          // actually posting the review.
          setPostingReview( true )
          let response = await fetch(`${ server_url }/post/post-review/${ params.hotel_name }/${ params.hotel_id }`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  user_email: reviewerEmail,
                  review_body: reviewBody,
                  reviewed_hotel_name: params.hotel_name,
                  reviewed_hotel_id: params.hotel_id
              })
          })

          if ( response.status === 200 ) {
              setReviewerEmail('')
              setReviewBody('')
              setPostingReview( false )
              setReviewFeedback('your review has been posted successfully...')
              setTimeout(() => {
                  setReviewFeedback('')
              }, 5000)
          }
          else {
              setPostingReview( false )
              setReviewFeedback('failed to post your review due to an error...')
              setTimeout(() => {
                  setReviewFeedback('')
              }, 5000)

          }

      }

  }


  // calculate length of stay
  const CalculateLengthOfStay = ( checkInDate, checkOutDate ) => {
    let lengthOfStay = checkOutDate.getTime() - checkInDate.getTime()
    lengthOfStay = Math.floor( lengthOfStay / ( 1000 * 60 * 60 * 24 )) 
    return lengthOfStay
}


  // handle book room operation.
  const HandleBookHotelRoom = ( ) => {
    if( startDateValue === null || endDateValue === null ) {
      setBookingDatesNull( true )
      alert('You have to enter both check-in and check-out dates to book hotel...')
      dateDurationRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else {
      setBookingDatesNull( false )
      let durationOfStay = CalculateLengthOfStay( startDateMilliseconds, endDateMilliseconds )
      if( durationOfStay < 0 ) {
        alert('Check-out date must be later than Check-in date')
        dateDurationRef.current.scrollIntoView({
          behavior: 'smooth'
        })
  
      }
      else {
         setCustomerLengthOfStay( durationOfStay )
         window.localStorage.setItem('length_of_stay', durationOfStay.toString())
         window.localStorage.setItem('number_of_adult_visitors', numberOfAdultVisitors.toString())
         window.localStorage.setItem('number_of_child_visitors', numberOfChildVisitors.toString())
         window.localStorage.setItem('number_of_booked_rooms', numberOfRooms.toString())
         navigate(`/book-hotel/${ hotel_name }/${ booking_room_id }`)
    }

    }
  }




  return (

    <div>
      <NavbarComponent />

      <section className='selected-room-details-section'>
        <h3 className='selected-room-name'> { params.hotel_name } </h3>
        <Rating name='read-only' value={ 4 } readOnly /> 
        <p> <IoLocationSharp /> { selectedRoomDetailsObject.room_location }</p>
        {
          allReviewsArray.length > 0 ? 
              allReviewsArray.length === 1 ?
              <h5>{ allReviewsArray.length } review </h5>
              :
              <h5> { allReviewsArray.length } Reviews </h5>
          :
          <h5>No reviews yet</h5>
        }
      </section>


      <div>

      {
        isLoadingHotelDetails === true ? 
          <section className='fetch-all-hotels-loading-section'>
            <FontAwesomeIcon icon={ faSpinner } size='2x' spinPulse className='mb-4' color='#808080' />
            <p className='fetching-hotels-text'>fetching details of { params.hotel_name }... please wait</p>
          </section>

          :

      fetchError === true ?
          <section className='fetch-all-hotels-fetch-error-section'>
            <h5 className='fetch-hotels-error-text'> { fetchErrorMessage } </h5>
          </section>

          :

      <section ref={ dateDurationRef }>
      {
        bookingDatesNull === true ?
          <p className='start-date-end-date-null-message'>
            Check-in and Check-out dates are both required.
          </p>
          :
          null
      }

      <section className='selected-room-checkin-dates'>
        <Form className='selected-room-details-destination-form'>
          <Row xs={ 1 } md={ 3 }>
            <Col className='selected-room-details-destination-column'>
              <StartDatePicker />
            </Col>

            <Col className='selected-room-details-destination-column'>
              <EndDatePicker />
            </Col>

            <Col className='selected-room-details-destination-column'>
              <Form.Control type='text' className='selected-room-details-category text-control-focus-style specify-cursor'
                  placeholder={ numberOfAdultVisitors + ' adult(s). ' + numberOfChildVisitors + ' child(ren). '  + numberOfRooms + ' room(s)'  }
                  value={ `${ numberOfAdultVisitors } ${ numberOfAdultVisitors === 1 ? ' adult' : ' adults'} * ${ numberOfChildVisitors } ${ numberOfChildVisitors === 1 ? ' child' : ' children'} * ${ numberOfRooms } ${ numberOfRooms === 1 ? ' room' : ' rooms'}`}
                  onClick={ () => setShowGuestExtraDetails( !showGuestExtraDetails )}
               />

              {
                showGuestExtraDetails === true ? 
                  <Form className='selected-room-details-extra-guest-details-form mt-3'>
                      <Row className='selected-room-details-extra-guest-details-row mb-2'>
                        <Col>
                          <h6>Adults</h6>
                        </Col>

                        <Col>
                          <Row className='selected-room-details-extra-guest-info-row'>
                            <Col>
                              <BiMinus color='#5a50eb' className='selected-room-details-extra-guest-info-icon'
                                  onClick={ ( ) => { 
                                    if( numberOfAdultVisitors === 0 ) {
                                      setNumberOfAdultVisitors( 0 )
                                    }
                                    else {
                                      setNumberOfAdultVisitors( numberOfAdultVisitors - 1 ) 
                                    }
                                  } }
                              />
                            </Col>

                            <Col>
                              { numberOfAdultVisitors }
                            </Col>

                            <Col>
                              <BiPlus color='#5a50eb' className='selected-room-details-extra-guest-info-icon'
                                onClick={ ( ) => setNumberOfAdultVisitors( numberOfAdultVisitors + 1 ) }/>
                            </Col>

                          </Row>
                        </Col>

                      </Row>


                      <Row className='selected-room-details-extra-guest-details-row mb-2'>
                        <Col>
                          <h6>Children</h6>
                        </Col>

                        <Col>
                          <Row className='selected-room-details-extra-guest-info-row'>
                            <Col>
                              <BiMinus color='#5a50eb' className='selected-room-details-extra-guest-info-icon'
                                  onClick={() => {
                                    if( numberOfChildVisitors === 0 ) {
                                      setNumberOfChildVisitors( 0 )
                                    }
                                    else {
                                      setNumberOfChildVisitors( numberOfChildVisitors - 1 )
                                    }
                                  }} />
                            </Col>
                            
                            <Col>
                              { numberOfChildVisitors }
                            </Col>

                            <Col>
                              <BiPlus color='#5a50eb' className='selected-room-details-extra-guest-info-icon'
                                  onClick={ () => { setNumberOfChildVisitors( numberOfChildVisitors + 1 )}} />
                            </Col>


                          </Row>
                        </Col>

                      </Row>


                      <Row className='selected-room-details-extra-guest-details-row mb-4'>
                        <Col>
                          <h6>Rooms</h6>
                        </Col>

                        <Col>
                          <Row className='selected-room-details-extra-guest-info-row'>
                            <Col>
                              <BiMinus color='#5a50eb' className='selected-room-details-extra-guest-info-icon'
                                  onClick={() => { 
                                    if( numberOfRooms === 0 ) {
                                      setNumberOfRooms( 0 )
                                    }
                                    else {
                                      setNumberOfRooms( numberOfRooms - 1 )
                                    }
                                  }} />
                            </Col>
                            
                            <Col>
                              { numberOfRooms }
                            </Col>

                            <Col>
                              <BiPlus color='#5a50eb' className='selected-room-details-extra-guest-info-icon'
                                onClick={ ( ) => { setNumberOfRooms( numberOfRooms + 1 ) }} />
                            </Col>

                          </Row>
                        </Col>

                      </Row>

                      <Row className='selected-room-details-extra-guest-details-row'>
                          <Button variant='custom' onClick={ () => setShowGuestExtraDetails( false )}
                            className='selected-room-details-extra-guest-details-done-btn'>Done</Button>
                      </Row>


                  </Form>

                  :

                  null

              }

            </Col>

          </Row>
        </Form>
      </section>


      {/* <section className='selected-room-extra-pics-grid'>
        <Carousel cols={ 4 } rows={ 2 } gap={ 7 } loop 
          responsiveLayout={[
            {
              breakpoint: 400,
              cols: 1,
              rows: 1,
              gap: 5,
              loop: true,
              autoplay: 1200
            }
        ]}>
          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_1 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_2 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_3 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_4 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_5 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_6 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_7 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_8 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_9 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_2 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_3 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_4 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_5 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_6 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_7 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='selected-room-detail-grid-pic' src={ selectedRoomDetailsObject.room_extra_photo_url_8 } alt='' />
          </Carousel.Item>

        </Carousel>

      </section> */}

      <section className='book-now-section'>
        <Button variant='custom' className='book-now-button-first' onClick={ HandleBookHotelRoom }>Book Now</Button>
      </section>


      <section className='selected-room-details-headers'>
        <Row md={ 5 } xs={ 3 }>
          <Col>
            Description
          </Col>

          <Col>
            Amenities
          </Col>

          <Col>
            Location
          </Col>

          <Col>
            Reviews
          </Col>

          <Col>
            <h5 className='selected-room-details-price-text'>GH<span>&#8373;{ selectedRoomDetailsObject.room_rate }</span></h5>
          </Col>

        </Row>
        <hr />
      </section>

      <section className='selected-room-details-sub-section'>
          <h3 className='selected-room-details-sub-header srd-padding-bottom'>Good to know</h3>
          {
            goodToKnowArray.map(( feature, index ) => (
              <div className='selected-room-details-good-to-know-div'>
                <Row key={ index } className='selected-room-details-good-to-know-div-row'>
                  <Col>
                    { feature.icon }
                  </Col>

                  <Col md={ 4 } className='hotel-feature-header'>
                    { feature.feature }
                  </Col>

                  <Col md={ 6 }>
                    { feature.description }
                    <p>{ feature.visaIcon } { feature.masterCardIcon } { feature.paypalIcon } </p>
                  </Col>
                </Row>
                <hr />
              </div>
            ))
          }
      </section>

      
      <section className='selected-room-details-sub-section'>
          <h3 className='selected-room-details-sub-header'>Hotel Description</h3>
          <p>
              { 
                selectedRoomDetailsObject ? 
                    selectedRoomDetailsObject.room_description ?
                        selectedRoomDetailsObject.room_description
                        :
                        null
                :
                null

              }
          </p>
      </section>


      <section className='selected-room-details-sub-section'>
        <h3 className='selected-room-details-sub-header'>Hotel Amenities</h3>
        <Row xs={ 3 } md={ 6 }>
          { 
             selectedRoomDetailsObject ? 
                selectedRoomDetailsObject.room_features ?
                  selectedRoomDetailsObject.room_features.map(( feature, index ) => (
                    <Col key={ index }>
                        <div className='selected-room-features-amenities-div'>
                            <h5>{ feature }</h5>
                        </div>
                    </Col>
                  ))
                  :
                    <h3>failed to load hotel feaatures...</h3>
            :
            <h3>couldn't fetch selected room details...</h3>
            
          }
        </Row>
      </section>


      <section className='selected-room-details-sub-section'>
        <h3 className='selected-room-details-sub-header'>Our Location</h3>
        {/* <Maps /> */}
      
          <Maps2 
            selectedRoomLatitude={ selectedRoomDetailsObject.room_latitude }
            selectedRoomLongitude={ selectedRoomDetailsObject.room_longitude }
          />
        

        <div className='book-now-btn-row'>
          <Button variant='custom' className='book-now-button-last' onClick={ HandleBookHotelRoom }>Book Hotel Now</Button>
        </div>
      </section>


      <section className='selected-room-details-sub-section'>
        <h3 className='selected-room-details-sub-header'>Reviews</h3>
        {
          allReviewsArray.map(( review, index ) => (
              <div className='posted-reviews-wrapper-div' key={ index }>

                  <section className='reviewer-info'>
                      <div>
                        <BsPersonFill size={ 30 } />
                      </div>
          
                      <div className='reviewer-info-name-date'>
                        <h5 className='reviewer-name'> { review.user_email } </h5>
                        <p className='review-date'>Wrote a review { review.review_date } @ { review.review_time } </p>
                      </div>
                  </section>

                  <section className='review-body'>
                      <Row>
                        <p className='review-body-text'>{ review.review_body }</p>
                      </Row>
                      <hr />
                  </section>

            </div>
  
            ))
        }

      {
        allReviewsArray.length > 0 ?
          <Button variant='custom' className='see-all-reviews-btn' onClick={ () => navigate(`/all-reviews/${ params.hotel_name }/${ params.hotel_id }`)} > 
            See all { /*allReviewsArray.length */ } reviews
          </Button>
          :
          <p>No reviews submitted yet. Be the first to submit one right below..</p>

      }
      </section>


      <section className='get-room-details-review-section' >
        <h5 className='get-room-details-post-review-header'>Post a review</h5>
          <Form>
              <Form.Control type='email' placeholder='Your email *' className={ reviewerEmailError === true ? 'review-email-control-error text-control-focus-style mb-4' : 'review-email-control text-control-focus-style mb-4' } onChange={ HandleReviewerEmailUpdate } value={ reviewerEmail }/>

              <FloatingLabel style={{ color: 'gray' }} controlId='floatingTextarea' label='Review body *' className='mb-4'>
                  <Form.Control as='textarea' placeholder='' style={{ height: 150 }} className={ reviewBodyError === true ? 'review-body-text-area-error text-control-focus-style' : 'review-body-text-area text-control-focus-style' } onChange={ HandleReviewBodyUpdate } value={ reviewBody } />
              </FloatingLabel>

              <Row>
                  <Col>
                      <Button variant='custom' className='get-room-details-post-review-btn' onClick={ HandlePostReview } >Post review</Button>
                  </Col>

                  <Col md={ 7 }>
                      <p className='posting-review-icon mt-4'>{ postingReview === true ? <FontAwesomeIcon icon={ faSpinner } spinPulse size='2x' className='mb-2' /> : null }</p>
                      <p className='review-feedback-text'>{ reviewFeedback.length > 1 ? reviewFeedback : '' }</p>
                  </Col>
              </Row>

          </Form>
      </section>



      </section>

      }

      </div>

      <section className='footer-gap'>
      </section>

      <Footer />
    </div>

  )
}



export default GetRoomDetails