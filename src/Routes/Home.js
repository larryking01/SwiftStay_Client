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


import StartDatePicker from './StartDatePicker.js'
import EndDatePicker from './EndDatePicker.js'






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
          <Form className='intro-choice-form'>
              <Row xs={ 1 } md={ 5 } /*className='form-header-div'*/>
                <Col className='intro-choice-options'> <FaHotel /> <h6 className='intro-choice-text'>Hotels</h6> </Col>
                <Col className='intro-choice-options'> <MdFlight /> <h6 className='intro-choice-text'>Flights</h6> </Col>
                <Col className='intro-choice-options'> <SiCashapp /> <h6 className='intro-choice-text'>Bundle & Save</h6> </Col>
                <Col className='intro-choice-options'> <IoCarSport /> <h6 className='intro-choice-text'>Cars</h6> </Col>
                <Col className='intro-choice-options'> <MdDirectionsBoat /> <h6 className='intro-choice-text'>Cruises</h6> </Col>
              </Row>

            <Row className='intro-form-row'>
              <Col>
                  <Form.Control type='text' placeholder='Where to?' />
              </Col>
            </Row>

            <Row className='intro-form-row'>
              <Col>
                <StartDatePicker />
              </Col>

              <Col>
                <EndDatePicker />
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant='primary' type='submit' style={{ width: '100%'}}>Find your hotel</Button>
              </Col>

              <Col>
                <Button variant='primary' type='submit' style={{ width: '100%'}}>Search flight</Button>
              </Col>
            </Row>

          </Form>
        </section>

        <section className='plan-staycation-section'>
            <h3 className='plan-staycation-text'><strong>Plan your next staycation</strong></h3>
        </section>

      <section className='main-hotels-section'>
        <Row xs={ 1 } md={ 4 } className='main-hotels-section-row'>
            {
              roomsArray.map(( room, index ) => (
                <Col key={ index } onClick={() => navigate(`get-room-details/${ room._id }`)}>
                  <Card className='cover-page-card-style'>
                    <Card.Img src={ room.room_cover_photo_url } alt='' className='hotel-card-img' />
                    <Card.Body>
                        <Card.Title>{ room.room_number }</Card.Title>
                        <Card.Subtitle>{ room.room_rate }</Card.Subtitle>
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

      <Footer />

    </div>
  )
}

export default Home