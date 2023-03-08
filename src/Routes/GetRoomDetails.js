import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'








const GetRoomDetails = () => {

  // for params
  const params = useParams()

  // for state.
  const [ selectedRoomDetailsArray, setSelectedRoomDetailsArray ] = useState([])

  // use effect hook to fetch details of selected room.
  useEffect(() => {
      fetch(`http://127.0.0.1:8000/get/room-details/${ params.room_id }`, {
        method: 'GET'
      })
      .then( response => response.json())
      .then( data => { setSelectedRoomDetailsArray( {...data} ); console.log( selectedRoomDetailsArray ) })

  }, [ ])






  return (

    <div>
      <NavbarComponent />

      <section className='selected-room-extra-pics-grid'>

      </section>



      <section style={{ marginBottom: '20%' }}>
          { params.room_id }
      </section>

      <Footer />
    </div>

  )
}




export default GetRoomDetails