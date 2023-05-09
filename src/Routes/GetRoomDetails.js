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


import Maps from '../Configuration/Maps'

// font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


import rooms_and_suites_1 from '../Media Files/Rooms And Suites/rooms_and_suites_1.webp'









const GetRoomDetails = () => {

  // local and online server urls
  // let local_server = 'http://127.0.0.1:8000'
  let online_server = 'https://hotel-finder-app-server-rest.onrender.com/'


  // for params
  const params = useParams()
  let booking_room_id = params.hotel_id

  // navigation
  const navigate = useNavigate()

  // for state.
  const [ selectedRoomDetailsObject, setselectedRoomDetailsObject ] = useState({})
  const [ fetchError, setFetchError ] = useState( false )
  const [ fetchErrorMessage, setFetchErrorMessage ] = useState( null )
  const [ isLoadingHotelDetails, setIsLoadingHotelDetails ] = useState( true )


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





  return (

    <div>
      <NavbarComponent />

      <section className='selected-room-details-section'>
        <h3 className='selected-room-name'> { params.hotel_name } </h3>
        <Rating name='read-only' value={ 4 } readOnly /> <h5>{ ReviewsArray.length + 1 } Reviews</h5>
        <p> <IoLocationSharp /> { selectedRoomDetailsObject.room_location }</p>
      </section>


      <div>

      {
      isLoadingHotelDetails === true ? 
          <section className='fetch-all-hotels-loading-section'>
            <FontAwesomeIcon icon={ faSpinner } size='3x' spinPulse className='mb-4' />
            <p className='fetching-hotels-text'>fetching details of { params.hotel_name } hotel... please wait</p>
          </section>

          :

      fetchError === true ?
          <section className='fetch-all-hotels-fetch-error-section'>
            <h5 className='fetch-hotels-error-text'> { fetchErrorMessage } </h5>
          </section>

          :

      <section>
      <section className='selected-room-checkin-dates'>
        <Form className='selected-room-details-destination-form'>
          <Row xs={ 1 } md={ 5 }>
            <Col className='selected-room-details-destination-column'>
              <Form.Control type='text' placeholder='Going to' className='selected-room-details-destination' />
            </Col>

            <Col className='selected-room-details-destination-column'>
              <StartDatePicker />
            </Col>

            <Col className='selected-room-details-destination-column'>
              <EndDatePicker />
            </Col>

            <Col className='selected-room-details-destination-column'>
              <Form.Control type='text' placeholder='2 adults, 1 room' className='selected-room-details-category' />
            </Col>

            <Col className='selected-room-details-destination-column'>
              <Button variant='custom' className='selected-room-details-search-hotel-button'>Search</Button>
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

        <div className='book-now-btn-row'>
          <Button variant='custom' className='book-now-button-last' onClick={ () => navigate(`/book-hotel/${ booking_room_id }`) }>Book Hotel Now</Button>
        </div>
      </section>


      <section className='selected-room-details-sub-section'>
        <h3 className='selected-room-details-sub-header'>Reviews</h3>
        {
          ReviewsArray.map(( review, index ) => (
              <div className='posted-reviews-wrapper-div' key={ index }>

                  <section className='reviewer-info'>
                      <div>
                        <img src={ review.reviewerImage } alt='' className='reviewer-info-img' width={ 80 } />
                      </div>
          
                      <div className='reviewer-info-name-date'>
                        <h5 className='reviewer-name'> { review.reviewerName } </h5>
                        <p className='review-date'>Wrote a review { review.reviewDate } @ { review.reviewTime } </p>
                      </div>
                  </section>

                  <section className='review-body'>
                      <Row>
                        <p className='review-body-text'>{ review.reviewBody }</p>
                      </Row>
                      <hr />
                  </section>

            </div>
  
            ))
        }

      <Button variant='custom' className='see-all-reviews-btn' onClick={ () => navigate(`/all-reviews/${ params.hotel_name }/${ params.hotel_id }`)} > 
          See all { ReviewsArray.length + 1 } reviews 
      </Button>


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