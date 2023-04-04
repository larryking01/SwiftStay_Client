import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Carousel from 'react-grid-carousel'
import Rating from '@mui/material/Rating'
import StartDatePicker from './StartDatePicker'
import EndDatePicker from './EndDatePicker'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlinePets } from 'react-icons/md'
import { MdEmojiFoodBeverage } from 'react-icons/md'
import { IoMdInformationCircle } from 'react-icons/io'
import { MdPayment } from 'react-icons/md'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcPaypal } from 'react-icons/fa'


import Maps from './Maps'












const GetRoomDetails = () => {

  // for params
  const params = useParams()
  let booking_room_id = params.room_id

  // navigation
  const navigate = useNavigate()

  // for state.
  const [ selectedRoomDetailsObject, setselectedRoomDetailsObject ] = useState({})


  // use effect hook to fetch details of selected room.
  useEffect(() => {
    // async function to fetch data.
    const fetchData = async () => {
      let response = await fetch(`https://hotel-finder-app-server-rest.onrender.com/get/room-details/${ params.room_id }`, {
        method: 'GET'
      })
      
      if ( response.ok ) {
        console.log( response )
        let data = await response.json()
        console.log( data )
        setselectedRoomDetailsObject({ ...data }) 
        setTimeout(() => {
          console.log( selectedRoomDetailsObject )
        }, 5000)

      }

      else {
        throw new Error('failed to fetch hotel details due to error')
      }

    }

    fetchData()

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





  return (

    <div>
      <NavbarComponent />

      <section className='selected-room-details-section'>
        <h3 className='selected-room-name'> { selectedRoomDetailsObject.room_number } </h3>
        <Rating name='read-only' value={ 4 } readOnly />
        <p> <IoLocationSharp /> Labadi - Accra - Ghana.</p>
      </section>

      <section className='selected-room-checkin-dates'>
        <Form>
          <Row xs={ 1 } md={ 5 }>
            <Col>
              <Form.Control type='text' placeholder='Going to' className='selected-room-details-destination' />
            </Col>

            <Col>
              <StartDatePicker />
            </Col>

            <Col>
              <EndDatePicker />
            </Col>

            <Col>
              <Form.Control type='text' placeholder='2 adults, 1 room' className='selected-room-details-category' />
            </Col>

            <Col>
              <Button variant='primary' className='selected-room-details-search-hotel-button'>Search</Button>
            </Col>
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
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_1 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_2 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_3 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_4 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_5 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_6 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_7 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_8 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_9 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_2 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_3 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_4 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_5 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_6 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_7 } alt='' />
          </Carousel.Item>

          <Carousel.Item>
            <img width={ 300 } src={ selectedRoomDetailsObject.room_extra_photo_url_8 } alt='' />
          </Carousel.Item>

        </Carousel>

      </section>

      <section className='book-now-section'>
        <Button variant='custom' className='book-now-button-first' onClick={ () => navigate(`/book-hotel/${ booking_room_id }`) }>Book Now</Button>
      </section>


      <section className='selected-room-details-headers'>
        <Row md={ 5 } xs={ 1 }>
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
          <p>Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place, 
             WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and 
             offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star 
             Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of 
             Edinburgh and offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star Ten Hill Place,             WorldHotels Distinctive is owned by the Royal College of Surgeons of Edinburgh and 
             offers free WiFi. Just 0.5 miles from Edinburgh Waverley Rail Station, this 4-star 
             Ten Hill Place, WorldHotels Distinctive is owned by the Royal College of Surgeons of 
             Edinburgh and offers free WiFi.
          </p>

      </section>


      <section className='selected-room-details-sub-section'>
        <h3 className='selected-room-details-sub-header'>Hotel Amenities</h3>
        <Row xs={ 3 } md={ 6 }>
          { 
             selectedRoomDetailsObject ? 
                selectedRoomDetailsObject.room_features ?
                  selectedRoomDetailsObject.room_features.map(( feature, index ) => (
                    <Col>
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

        <div className='book-now-btn-row'>
          <Button variant='custom' className='book-now-button-last'>Book Hotel Now</Button>
        </div>
      </section>


      <section className='selected-room-details-sub-section'>
        <h3 className='selected-room-details-sub-header'>Reviews</h3>
      </section>







      <section className='footer-gap'>

      </section>
      <Footer />
    </div>

  )
}



export default GetRoomDetails