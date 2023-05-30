import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import background_4 from '../Media Files/background_4.jpg'
import trip_dotcom from '../Media Files/trip.com_logo.png'
import booking_dotcom from '../Media Files/booking.com_logo.png'
import hyatt_dotcom from '../Media Files/hyatt.com_logo.jpg'
import hotels_dotcom from '../Media Files/hotels.com_logo.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel'
import Rating from '@mui/material/Rating'
import StartDatePicker from '../Configuration/StartDatePicker.js'
import EndDatePicker from '../Configuration/EndDatePicker.js'

// font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


import rooms_and_suites_1 from '../Media Files/Rooms And Suites/rooms_and_suites_1.webp'
import rooms_and_suites_2 from '../Media Files/Rooms And Suites/rooms_and_suites_2.jpg'
import rooms_and_suites_3 from '../Media Files/Rooms And Suites/rooms_and_suites_3.jpg'
import rooms_and_suites_4 from '../Media Files/Rooms And Suites/rooms_and_suites_4.webp'


import ScrollToTop from  '../Configuration/ScrollToTop'
import { UserContext } from '../App'










const Home = () => {

  // local and online server urls
  // let local_server = 'http://127.0.0.1:8000'
  let online_server = 'https://hotel-finder-app-server-rest.onrender.com'

  

  // setting up state.
  const [ roomsArray, setRoomsArray ] = useState([ ])
  const [ loadingHotels, setIsLoadingHotels ] = useState( true )
  const [ fetchError, setFetchError ] = useState( false )
  const [ fetchErrorMessage, setFetchErrorMessage ] = useState( null )

  // for navigation.
  const navigate = useNavigate()

  // retrieving user info from context.
  const { user } = useContext( UserContext )

  // making certain component always displays from top on initial render.
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   })

  // })



  // fetching all rooms
  useEffect(() => {
    console.log( `type of rooms array == ${ typeof roomsArray }`)

    const fetchHotels = async () => {

      // setIsLoadingHotels( true )
      let response = await fetch(`${ online_server }/get/fetch-all-rooms`, {
        method: 'GET'
      })

      if ( response.status === 200 ) {
        let data = await response.json()
        setRoomsArray( data )
        setIsLoadingHotels( false )
        console.log( `success status is ${response.status} ` )
        console.log( fetchError )
        console.log( `rooms Array === ${ roomsArray }` )

      }
      else {
        console.log( `failure status is ${response.status} ` )
        setIsLoadingHotels( false )
        setFetchError( true )
        setFetchErrorMessage('Sorry, we could not load available hotels due to a poor internet connection. Please check your internet connection and reload the page.')
        console.log( fetchError )
        console.log('failed to load hotels due to error')
      }
      
    }

      fetchHotels()

  }, [ ])



  // array to hold pictures for rooms and suites.
  let rooms_and_suites_pictures_array = [
    { src: rooms_and_suites_1 },
    { src: rooms_and_suites_2 },
    { src: rooms_and_suites_3 },
    { src: rooms_and_suites_4 }

  ]


  return (
    <div>

      <NavbarComponent />

      <main className='main-content'>
        
        <section className='get-away'>
          <h3 className='get-away-text'><strong>Get away for a while</strong></h3>
          <h6 className='get-away-details-text'>Whether for business, vacation or pleasure, Skyscanner can help you find the best hotel for your needs right here.</h6>
        </section>

        <section className='place-to-stay'>
          <h3><strong className='save-big-text'>Find your place to stay { user } </strong></h3>
        </section>

        <section className='intro-background'>
          <img src={ background_4 } alt='background' className='intro-background-img' />

        <section className='intro-form'>
          <Row>
            <h6 className='intro-form-catch-phrase'>Easy to book, hard to say goodbye to</h6>
          </Row>

          <Form.Group className='mb-3' controlId='formBasicText'>
            {/* <Form.Label style={{ color: 'blue'}}>Where do you want to stay?</Form.Label> */}
            <Form.Control type='text' placeholder='Enter a hotel, city, address....' className='destination-textbox' />
          </Form.Group>

          <Row xs={ 1 } md={ 2 }>
            <Col className='mb-3'>
              <StartDatePicker />
            </Col>

            <Col className='mb-3'>
              <EndDatePicker />
            </Col>
          </Row>

          <Row xs={ 1 } md={ 2 }>
            <Col className='mb-3'>
              <Form.Control className='number-of-guests-textbox' type='text' placeholder='1 room, 2 guests' />
            </Col>

            <Col className='mb-3'>
              <Button variant='custom' className='find-hotel-button'>Find your hotel</Button>
            </Col>
          </Row>
        </section>

        </section> 


        <section className='world-of-hotels-section'>
            <h4 className='world-of-hotels-text'>A whole world of hotels</h4>
            <p className='book-perfect-hotel-text'>Book the perfect room in the best hotel, wherever you're heading</p>
        </section>


        <section className='plan-staycation-section'>
            <h3 className='plan-staycation-text'><strong>Plan your next staycation</strong></h3>
        </section>

      <section className='main-hotels-section'>
        {
          loadingHotels === true ? 
              <div className='loading-hotels-div-style'>
                <FontAwesomeIcon icon={ faSpinner } size='2x' spinPulse className='mb-4' color='#808080' />
                <p className='fetching-hotels-text'>fetching available hotels... please wait</p>
              </div>

            :

            fetchError === true ?
                <section className='fetch-hotels-error-section'>
                  <h5 className='fetch-hotels-error-text'> { fetchErrorMessage } </h5>
                </section>

              :

          <>
            <Row xs={ 1 } md={ 4 } className='main-hotels-section-row'>
                {
                  roomsArray.map(( room, index ) => (
                    <Col key={ index }>
                      <Card className='cover-page-card-style' onClick={() => navigate(`/get-room-details/${ room.room_number }/${ room._id }`)}>
                        <Card.Img src={ room.room_cover_photo_url } alt='' className='hotel-card-img' />
                        <Card.Body>
                            <Card.Title className='card-title'>
                              <section className='mb-3'>{ room.room_number }</section>

                              <section>
                                <Rating name="read-only" value={ room.room_rating } readOnly />
                              </section>

                            </Card.Title>
                            
                            <Card.Subtitle className='card-subtitle'>
                              <div>
                                <section className='card-room-location'>
                                  <IoLocationSharp /> <h6 className='location-detail'>Accra</h6>
                                </section>

                                <section className='card-room-rate'>
                                  GH<span>&#8373;</span>{ room.room_rate }
                                </section>
                              </div>
                            </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))

                }
            </Row>


            <Row xs={ 1 } >
                <div className='view-all-hotels-text-div' onClick={() => navigate('fetch-all-rooms')}>
                    <Button variant='custom' className='view-all-hotels-btn'>View all hotels <BsArrowRight size={ 20 } /> </Button>
                </div>
            </Row>
          </>

          }

      </section>
      </main>


      <section className='get-best-prices-section'>
        <h4 className='get-best-prices-text'><strong>Get the best prices from top hotel providers</strong></h4>
        <Row xs={ 1 } md={ 4 }>
          <Col>
            <img src={ trip_dotcom } alt='' className='best-prices-img' />
          </Col>

          <Col>
            <img src={ booking_dotcom } alt='' className='best-prices-img' />
          </Col>

          <Col>
            <img src={ hotels_dotcom } alt='' className='best-prices-img' />
          </Col>

          <Col>
            <img src={ hyatt_dotcom } alt='' className='best-prices-img' />
          </Col>

          {/* <Col>
            <img src={ }
          </Col> */}
        </Row>
      </section>

      <section className='extra-info-section'>
          <Row xs={ 1 } md={ 2 } className='extra-info-row'>
              <Col>
                  <Carousel>
                    {
                      rooms_and_suites_pictures_array.map(( picture, index ) => (
                        <Carousel.Item key={ index }>
                          <img src={ picture.src } alt='' className='extra-info-img' />
                        </Carousel.Item>
                      ))
                    }
                  </Carousel>
              </Col>

              <Col className='extra-info-text-col'>
                  <h3 className='extra-info-title'>Rooms & Suites</h3>
                  <div className='extra-info-details'>
                  <h4>Whether you’re traveling alone or with company,</h4> 
                  <h4>one of our rooms is definitely tailored for your needs.</h4>
                  <h4>All rooms are equipped with the necessary amenities, and the decor simply speaks for itself. </h4>
                  </div>
              </Col>
          </Row>

          <Row xs={ 1 } md={ 2 } className='extra-info-row'>
              <Col className='extra-info-text-col'>
                  <h3 className='extra-info-title'>Restaurants</h3>
                  <div className='extra-info-details'>
                  <h4>Whether you’re traveling alone or with company,</h4> 
                  <h4>one of our rooms is definitely tailored for your needs.</h4>
                  <h4>All rooms are equipped with the necessary amenities, and the decor simply speaks for itself. </h4>
                  </div>
              </Col>

              <Col>
                  <Carousel>
                    {
                      rooms_and_suites_pictures_array.map(( picture, index ) => (
                        <Carousel.Item key={ index }>
                          <img src={ picture.src } alt='' className='extra-info-img' />
                        </Carousel.Item>
                      ))
                    }
                  </Carousel>
              </Col>
          </Row>

          <Row xs={ 1 } md={ 2 } className='extra-info-row'> 
              <Col>
                  <Carousel>
                    {
                      rooms_and_suites_pictures_array.map(( picture, index ) => (
                        <Carousel.Item key={ index }>
                          <img src={ picture.src } alt='' className='extra-info-img' />
                        </Carousel.Item>
                      ))
                    }
                  </Carousel>
              </Col>

              <Col className='extra-info-text-col'>
                  <h3 className='extra-info-title'>Meetings & Events</h3>
                  <div className='extra-info-details'>
                  <h4>Whether you’re traveling alone or with company,</h4> 
                  <h4>one of our rooms is definitely tailored for your needs.</h4>
                  <h4>All rooms are equipped with the necessary amenities, and the decor simply speaks for itself. </h4>
                  </div>
              </Col>
          </Row>


          <Row xs={ 1 } md={ 2 } className='extra-info-row'>
              <Col className='extra-info-text-col'>
                  <h3 className='extra-info-title'>Special Deals</h3>
                  <div className='extra-info-details'>
                  <h4>Whether you’re traveling alone or with company,</h4> 
                  <h4>one of our rooms is definitely tailored for your needs.</h4>
                  <h4>All rooms are equipped with the necessary amenities, and the decor simply speaks for itself. </h4>
                  </div>
              </Col>

              <Col>
                  <Carousel>
                    {
                      rooms_and_suites_pictures_array.map(( picture, index ) => (
                        <Carousel.Item key={ index }>
                          <img src={ picture.src } alt='' className='extra-info-img' />
                        </Carousel.Item>
                      ))
                    }
                  </Carousel>
              </Col>
          </Row>

      </section>

      <Footer />

      <ScrollToTop />

    </div>
  )
}

export default Home