import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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








const FetchAllRooms = () => {

  
  // local and online server urls
  // let local_server = 'http://127.0.0.1:8000'
  let online_server = 'https://hotel-finder-app-server-rest.onrender.com/'


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



  return (
    <>
      <NavbarComponent />

        <div>
          <section className='fetch-all-rooms-search-tab-section'>
            <InputGroup>
              <Form.Control type='text' placeholder='search hotel by name, place or price' 
                className='search-hotel-textbox' onChange={ UpdateSearchHotel } value={ searchHotel }
                 />
              <Button variant='custom' className='search-hotel-button' onClick={ ( ) => console.log( searchHotel )}><span><BsSearch /> Search</span></Button>
            </InputGroup>
          </section>


          <section>
            {
              isLoadingAllHotels === true ? 
                    <section className='fetch-all-hotels-loading-section'>
                      <FontAwesomeIcon icon={ faSpinner } size='3x' spinPulse className='mb-4' />
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
                          return <Row md={ 3 } xs={ 1 } sm={ 1 } key={ index } className='fetch-all-hotels-row' onClick={() => navigate(`/get-room-details/${ rooms._id }`) }>
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


        </div>

        <section className='footer-gap'>
        </section>
      <Footer />
    </>
  )
}


export default FetchAllRooms