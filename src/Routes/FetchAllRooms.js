import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Rating from '@mui/material/Rating'
import { IoLocationSharp } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'







const FetchAllRooms = () => {

  // navigation.
  const navigate = useNavigate()

  // handling state.
  const [ allRoomsArray, setAllRoomsArray ] = useState([])
  const [ searchHotel, setSearchHotel ] = useState('')

  // use effect to fetch all rooms.
  useEffect(() => {
    const fetchAllRooms = async () => {
      let response = await fetch('http://127.0.0.1:8000/get/fetch-all-rooms', {
        method: 'GET'
      })

      if ( response.ok ) {
        let data = await response.json()
        console.log( data )
        setAllRoomsArray( data )
        console.log('all rooms array === ')
        console.log( allRoomsArray )
      }

    }

    fetchAllRooms()

  }, [ ])




  return (
    <>
      <NavbarComponent />

        <div>
          <section className='fetch-all-rooms-search-tab-section'>
            <InputGroup>
              <Form.Control type='text' placeholder='search hotel by name, place or price' 
                className='search-hotel-textbox' onChange={( event ) => { setSearchHotel( event.target.value ); console.log( searchHotel ) }} 
                value={ searchHotel } />
              <Button variant='custom' className='search-hotel-button'><span><BsSearch /> Search</span></Button>
            </InputGroup>
          </section>

          <section className='fetch-all-rooms-main-section'>
          {
            allRoomsArray.map(( rooms, index ) => {
              return <Row key={ index } className='fetch-all-hotels-row' onClick={() => navigate(`/get-room-details/${ rooms._id }`) }>
                <Col>
                  <img src={ rooms.room_cover_photo_url } alt='' className='hotel-img'  />
                </Col>

                <Col md={ 4 }>
                  <h3 className='fetch-all-hotels-title'>{ rooms.room_number }</h3>
                  <Rating name='read-only' value={ rooms.room_rating } readOnly /> <p></p>
                  <span> <IoLocationSharp /> <span>Located 2 miles from the airport</span> </span>
                </Col>

                <Col md={ 4 }>
                  <h5>Lowest Price</h5>
                  <h4>GH<span>&#8373;</span>{ rooms.room_rate}</h4>
                  <p>All taxes and fees included</p>
                  {/* <p>Free cancellation</p> */}
                  <Button variant='custom' className='go-to-site-button'>More details</Button>
                </Col>

              </Row>
            })
          }
          </section>


          <section>

          </section>


        </div>

        <section className='footer-gap'>
        </section>
      <Footer />
    </>
  )
}


export default FetchAllRooms