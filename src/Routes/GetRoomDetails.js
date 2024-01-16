import React, { useState, useEffect, useRef, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

import NavbarComponent from './NavBar'
import Footer from './Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Carousel from 'react-grid-carousel'
import Rating from '@mui/material/Rating'
import StartDatePicker from '../Configuration/StartDatePicker'
import EndDatePicker from '../Configuration/EndDatePicker'
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

import Maps from '../Configuration/Maps'
// import Maps2 from '../Configuration/Maps'


// font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


import rooms_and_suites_1 from '../Media Files/Rooms And Suites/rooms_and_suites_1.webp'









const GetRoomDetails = () => {

  // local and online server urls
  // let local_server = 'http://127.0.0.1:8000'
  let online_server = 'https://hotel-finder-app-server-rest.onrender.com'

  // for params
  const params = useParams()
  let booking_room_id = params.hotel_id
  let hotel_name = params.hotel_name

  // navigation
  const navigate = useNavigate()

  // setting up reference.
  const reviewRef = useRef( null )
  const dateDurationRef = useRef( null )


  // for state.
  const [ selectedRoomDetailsObject, setselectedRoomDetailsObject ] = useState({})
  const [ fetchError, setFetchError ] = useState( false )
  const [ fetchErrorMessage, setFetchErrorMessage ] = useState( null )
  const [ isLoadingHotelDetails, setIsLoadingHotelDetails ] = useState( true )

  // handling reviews state.
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
          startDateValue, endDateValue } = useContext( UserContext )





  const HandleSearchSubmit = ( ) => {
    console.log(`check in === ${ startDateValue }`)
    console.log(`check out === ${ endDateValue }`)
    console.log(`adults = ${ numberOfAdultVisitors }`)
    console.log(`children = ${ numberOfChildVisitors }`)
    console.log(`rooms = ${ numberOfRooms }`)
    
  }


  // making certain component always displays from top on initial render.
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // })


  // use effect hook to fetch details of selected room.
  useEffect(() => {
    // async function to fetch data.
    const FetchData = async () => {
      let response = await fetch(`${ online_server }/get/room-details/${ params.hotel_name }/${ params.hotel_id }`, {
        method: 'GET'
      })
      
      if ( response.status === 200 ) {
        console.log( `selected room success response is ${ response.status }` )
        let data = await response.json()
        setselectedRoomDetailsObject({ ...data }) 
        console.log('selected room data is')
        console.log( data )
        setTimeout(() => {
          setIsLoadingHotelDetails( false )
        }, 1000 )

      }

      else {
        console.log( `failure status is ${response.status} ` )
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
          let response = await fetch(`${ online_server }/get/fetch-reviews/${ params.hotel_name }/${ params.hotel_id }`)
          
          if( response.status === 200 ) {
              let data =  await response.json()
              setAllReviewsArray( data )
              setTimeout(() => {
                  setIsLoadingReviews( false )
              }, 1000 )
              console.log('all reviews fetched')
              console.log( data )
          }
          else if ( response.status === 404 ) {
              setTimeout(() => {
                  setIsLoadingReviews( false )
              }, 1000 )
              console.log('no reviews for this hotel yet')
          }
          else {
              setIsLoadingReviews( false )
              console.log('failed to fetch reviews......')
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
    // { icon: <MdOutlinePets size={ 30 } />, feature: 'Pets', description: 'Pets are not allowed.'},
    // { icon: <MdOutlinePets size={ 30 } />, feature: 'Pets', description: 'Breakfast available.'},
    // { icon: <MdOutlinePets size={ 30 } />, feature: 'Pets', description: 'Pets are not allowed.'}

  ]


  // reviews array.
  const ReviewsArray = [
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Quan', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Loretta Williams', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Ruth Ansah', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Nana Adwoa', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Joseph Dwamena', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Marian Amoah', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Kelvin Asante Debrah', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Deborah Terkper', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Aku Shika', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },
    { reviewerImage: rooms_and_suites_1, reviewerName: 'Richmond Ghanney Theophilus', reviewDate: '07/05/2023', reviewTime: '16:30', reviewBody: 'WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of' },

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
          let response = await fetch(`${ online_server }/post/post-review/${ params.hotel_name }/${ params.hotel_id }`, {
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
              console.log('review posted')
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
              console.log('failed to post review')
              setReviewFeedback('failed to post your review due to an error...')
              setTimeout(() => {
                  setReviewFeedback('')
              }, 5000)

          }

      }

  }


  // handle book room operation.
  const HandleBookHotelRoom = ( ) => {
    if( startDateValue === null || endDateValue === null ) {
      alert('you need to enter start date value and end date value')
      setBookingDatesNull( true )
      dateDurationRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else {
      setBookingDatesNull( false )
      navigate(`/book-hotel/${ hotel_name }/${ booking_room_id }`)
    }
  }




  return (

    <div>
      <NavbarComponent />

      <section className='selected-room-details-section'>
        <h3 className='selected-room-name'> { params.hotel_name } </h3>
        <Rating name='read-only' value={ 4 } readOnly /> <h5>{ allReviewsArray.length } Reviews</h5>
        <p> <IoLocationSharp /> { selectedRoomDetailsObject.room_location }</p>
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
      {/* <p className='check-in-dates-null-error-text'>Please input both check-in and check-out dates</p> */}
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

            {/* <Col className='selected-room-details-destination-column'>
              <Button variant='custom' onClick={ HandleSearchSubmit }
                className='selected-room-details-search-hotel-button'>
                  Submit
              </Button>
            </Col> */}
          </Row>
        </Form>
      </section>


      <section className='selected-room-extra-pics-grid'>
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

      </section>

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

                  <Col md={ 4 }>
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
        <Maps />
        {/* <Maps2 /> */}

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

      <Button variant='custom' className='see-all-reviews-btn' onClick={ () => navigate(`/all-reviews/${ params.hotel_name }/${ params.hotel_id }`)} > 
          See all { allReviewsArray.length } reviews 
      </Button>
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

      {/* <section className='css-try'>

      </section> */}
    



      <section className='footer-gap'>

      </section>

      <Footer />
    </div>

  )
}



export default GetRoomDetails