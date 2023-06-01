import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Rating from '@mui/material/Rating'
import { IoLocationSharp } from 'react-icons/io5'
import { FaTimesCircle } from 'react-icons/fa'
import { BsSearch, BsCheckCircleFill } from 'react-icons/bs'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

// font awesome icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


import trending_accra_marriott_cover from '../Media Files/trending_accra_marriott_cover.jpg'
import trending_kempinski_cover from '../Media Files/trending_kempinski_cover.jpg'
import trending_movenpick_cover from '../Media Files/trending_movenpick_cover.jpg'
import trending_mensvic_cover from '../Media Files/trending_mensvic_hotel.jpg'



const FetchAllRooms = () => {

  
  // local and online server urls
  // let local_server = 'http://127.0.0.1:8000'
  let online_server = 'https://hotel-finder-app-server-rest.onrender.com'



  // navigation.
  const navigate = useNavigate()

  // handling state.
  const [ allRoomsArray, setAllRoomsArray ] = useState([])
  const [ searchHotel, setSearchHotel ] = useState('')
  const [ fetchError, setFetchError ] = useState( false )
  const [ fetchErrorMessage, setFetchErrorMessage ] = useState( null )
  const [ isLoadingAllHotels, setIsLoadingAllHotels ] = useState( true )

  // state for pagination.
  const [firstItemIndex, setFirstItemIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([ ])
  const [pageCount, setPageCount] = useState(0) 
  const itemsPerPage = 4;


  // making certain component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
  


  // use effect to fetch all rooms.
  useEffect(() => {
    
    const FetchAllRooms = async () => {

      // setIsLoadingAllHotels( true )
      let response = await fetch(`${ online_server }/get/fetch-all-rooms`, {
        method: 'GET'
      })

      if ( response.status === 200 ) {
        let data = await response.json()
        setAllRoomsArray( data )
        setIsLoadingAllHotels( false )
        console.log( data )
        // console.log('all rooms array === ')
        // console.log( allRoomsArray )
      }
      
      else {
        console.log( `failure status is ${response.status} ` )
        setIsLoadingAllHotels( false )
        setFetchError( true )
        setFetchErrorMessage('Sorry, we could not load available hotels due to a poor internet connection. Please check your internet connection and reload the page.')
      }

    }

    FetchAllRooms()

  }, [ ])




  // effect to handle pagination
  useEffect(() => {
    const lastItemIndex = firstItemIndex + itemsPerPage;
    setCurrentItems(allRoomsArray.slice(firstItemIndex, lastItemIndex));
    setPageCount(Math.ceil(allRoomsArray.length / itemsPerPage));
  }, [ firstItemIndex, itemsPerPage, allRoomsArray ])


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allRoomsArray.length;
    setFirstItemIndex(newOffset);
  };


  // updating search hotel state.
  const UpdateSearchHotel = ( event ) => {
    setSearchHotel( event.target.value )

  }


  let trendingHotelsArray = [
    { coverImage: trending_accra_marriott_cover, hotelName: 'Accra Marriott Hotel', averagePrice: 3206 },
    { coverImage: trending_movenpick_cover, hotelName: 'Movempick Ambassador Hotel', averagePrice: 3000 },
    { coverImage: trending_kempinski_cover, hotelName: 'Kempinski Hotel', averagePrice: 3407 },
    { coverImage: trending_mensvic_cover, hotelName: 'Mensvic Grand Hotel', averagePrice: 2345 }

  ]



  return (
    <>
      <NavbarComponent />

        <div>
            <section className='find-perfect-hotel-section'>
              <h3 className='find-perfect-hotel-text'>Find the perfect hotel on Skyscanner.com</h3>
              <p className='from-budget-text'>From budget hotels to luxury rooms and everything in between </p>
            </section>

          
          <section className='fetch-all-rooms-search-tab-section'>
            <InputGroup>
              <Form.Control type='text' placeholder='search hotel by name, place or price' 
                className='search-hotel-textbox text-control-focus-style' onChange={ UpdateSearchHotel } value={ searchHotel }
              />
              <Button variant='custom' className='search-hotel-button' onClick={ ( ) => console.log( searchHotel )}><span><BsSearch /> Search</span></Button>
            </InputGroup>
          </section>


          <section>
            {
              isLoadingAllHotels === true ? 
                    <section className='fetch-all-hotels-loading-section'>
                      <FontAwesomeIcon icon={ faSpinner } size='2x' spinPulse className='mb-4' color='#808080' />
                      <p className='fetching-hotels-text'>fetching all hotels... please wait</p>
                    </section>

                  :

              fetchError === true ?
                  <section className='fetch-all-hotels-fetch-error-section'>
                    <h5 className='fetch-hotels-error-text'> { fetchErrorMessage } </h5>
                  </section>

                      :

                  <section className='fetch-all-rooms-main-section'>
                      <div>
                      {
                        currentItems.map(( rooms, index ) => {
                          return <Row md={ 3 } xs={ 1 } sm={ 1 } key={ index } className='fetch-all-hotels-row' onClick={() => navigate(`/get-room-details/${ rooms.room_number }/${ rooms._id }`) }>
                            <Col md={ 4 }>
                              <img src={ rooms.room_cover_photo_url } alt='' className='hotel-img'  />
                            </Col>

                            <Col md={ 5 } >
                              <h3 className='fetch-all-hotels-title'>{ rooms.room_number }</h3>
                              <p> <IoLocationSharp /> <span>{ rooms.room_location }</span></p>
                              <Rating name='read-only' value={ rooms.room_rating } readOnly /> <p></p>
                              <p className='room-rate-text'>GH<span>&#8373;</span>{ rooms.room_rate }</p>
                              <Button variant='custom' className='go-to-site-button'>More details</Button>
                            </Col>

                            <Col md={ 3 }>  
                              <p className='key-features-head'>Key Features Include:</p>
                              <p>Free cancellation: Yes <BsCheckCircleFill /></p>
                              <p>Refund: No <FaTimesCircle /></p>
                              <p>Free cancellation: Yes <BsCheckCircleFill /></p>
                              <p>Free cancellation: No <FaTimesCircle /></p>

                            </Col>

                          </Row>
                        })
                      }
                      </div>

                      <ReactPaginate
                          breakLabel="..."
                          previousLabel={ <RxDoubleArrowLeft /> }
                          nextLabel={ <RxDoubleArrowRight /> }
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={4}
                          pageCount={pageCount}
                          renderOnZeroPageCount={null}
                          containerClassName='pagination'
                          pageLinkClassName='page-num'
                          previousLinkClassName='page-num'
                          nextLinkClassName='page-num'
                          activeLinkClassName='active'
                      />

                      </section>
                }

        </section>


        <section className='trending-hotels-section'>
          <h4 className='trending-hotels-text'>Trending hotel destinations</h4>
          <p className='explore-popular-destinations-text'>Explore destinations currently popular with travelers from Ghana </p>
          <Row className='trending-hotels-row' md={ 4 } xs={ 1 }>
              {
                trendingHotelsArray.map(( hotel, index ) => (
                  <Col key={ index }>
                    <Card>
                      <Card.Img src={ hotel.coverImage } alt='' width={ 150 } height={ 200 } />
                    </Card>

                    <Card.Body>
                      <Card.Title>
                        <h5 className='trending-hotels-title'>{ hotel.hotelName }</h5>
                        <h6 className='trending-hotels-sub-text'>Avg. { hotel.averagePrice }.00 per night</h6>
                      </Card.Title>
                    </Card.Body>
                  
                  </Col>
                ))
              }
          </Row>
        </section>

        <section className='genius-travel-section'>
          <Row md={ 2 } xs={ 1 } className='mb-5'>
            <Col>
              <img className='genius-travel-img' src='https://r-cf.bstatic.com/static/img/genius/genius_landing_page/artworks/hotel@2x/c57b6f58a8cc0bd3c2d537cca7a21b50b3fddd5f.png' alt='' />
            </Col>

            <Col>
              <h3 className='genius-travel-text'>Discover the genius way to travel</h3>
              <p className='genius-meta-text'>Booking.com's loyalty program is simple.</p>
              <p className='genius-meta-text'>The more you book with us, the more travel rewards you'll get. Sign in or create an account</p>
              <Button variant='custom' className='genius-started-btn'>Get started</Button>
            </Col>
          </Row>

          <Row className='genius-travel-info-row' md={ 3 } xs={ 1 }>
            <Col>
              <h4 className='genius-travel-info-text'>Wide selection of hotels</h4> 
              <p className='genius-travel-info-text-meta'>Search, compare, and book hotels all over the world</p>
            </Col>

            <Col>
              <h4 className='genius-travel-info-text'>Verified guest reviews</h4> 
              <p className='genius-travel-info-text-meta'>Explore millions of verified hotel reviews written by other guests </p>
            </Col>

            <Col>
              <h4 className='genius-travel-info-text'>24/7 customer support</h4> 
              <p className='genius-travel-info-text-meta'>Count on Booking.com for help when you need it, wherever you might be </p>
            </Col>
          </Row>

        </section>


        </div>

        <section className='footer-gap'>
        </section>
      <Footer />
    </>
  )
}


export default FetchAllRooms