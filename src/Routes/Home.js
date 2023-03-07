import React, { useEffect, useState } from 'react'
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
import { FaHotel } from 'react-icons/fa'
import { MdFlight, MdDirectionsBoat } from 'react-icons/md'
import { IoCarSport } from 'react-icons/io5'
import { SiCashapp } from 'react-icons/si'
import { BsArrowRight } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel'

import Rating from '@mui/material/Rating'
import StartDatePicker from './StartDatePicker.js'
import EndDatePicker from './EndDatePicker.js'


import background_2 from '../Media Files/background_2.jpg'
import rooms_and_suites_1 from '../Media Files/Rooms And Suites/rooms_and_suites_1.webp'
import rooms_and_suites_2 from '../Media Files/Rooms And Suites/rooms_and_suites_2.jpg'
import rooms_and_suites_3 from '../Media Files/Rooms And Suites/rooms_and_suites_3.jpg'
import rooms_and_suites_4 from '../Media Files/Rooms And Suites/rooms_and_suites_4.webp'







const Home = () => {

  // setting up state.
  const [ roomsArray, setRoomsArray ] = useState([ ])

  // for navigation.
  const navigate = useNavigate()

  // fetching all rooms
  useEffect(() => {
    fetch('http://localhost:8000/get/fetch-all-rooms', {
      method: 'GET'
    })
    .then( response => response.json())
    .then( data => { setRoomsArray( data ); console.log( `rooms Array === ${ roomsArray }` )})

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
        <article>
          <h3><strong className='save-big-text'>Save big on your next hotel</strong></h3>
        </article>

        <section className='intro-background'>
          <img src={ background_4 } alt='background' className='intro-background-img' />
        </section>

        <section className='intro-form'>
          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Where do you want to stay?</Form.Label>
            <Form.Control type='text' placeholder='Enter destination or hotel name' className='destination-textbox' />
          </Form.Group>

          <Row className='mb-3' xs={ 1 } md={ 2 }>
            <Col>
              <StartDatePicker />
            </Col>

            <Col>
              <EndDatePicker />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant='custom' className='find-hotel-button'>Find your hotel</Button>
            </Col>
          </Row>
        </section>

        <section className='plan-staycation-section'>
            <h3 className='plan-staycation-text'><strong>Plan your next staycation</strong></h3>
        </section>

      <section className='main-hotels-section'>
        <Row xs={ 1 } md={ 4 } className='main-hotels-section-row'>
            {
              roomsArray.map(( room, index ) => (
                <Col key={ index }>
                  <Card className='cover-page-card-style'>
                    <Card.Img src={ room.room_cover_photo_url } alt='' className='hotel-card-img' onClick={() => navigate(`get-room-details/${ room._id }`)} />
                    <Card.Body>
                        <Card.Title className='card-title'>{ room.room_number }</Card.Title>
                        
                        <Card.Subtitle className='card-subtitle'>
                          <div>
                            <section className='card-room-location'>
                              <IoLocationSharp /> <h6 className='location-detail'>Accra</h6>
                            </section>
                            <section className='card-room-rate'>
                              GH<span>&#8373;</span>{ room.room_rate }
                            </section>

                            <section>
                              <Rating name="read-only" value={ 3 } readOnly />
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
          <Col>
            <div className='view-all-hotels-text-div'>
              <h5>View all hotels</h5>
              <BsArrowRight size={ 20 } className='view-all-hotels-arrow'/>
            </div>
          </Col>

        </Row>


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

    </div>
  )
}

export default Home