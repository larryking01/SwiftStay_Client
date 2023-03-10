import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavbarComponent from './NavBar'
import Footer from './Footer'








const GetRoomDetails = () => {

  // for params
  const params = useParams()

  // for state.
  const [ selectedRoomDetailsArray, setSelectedRoomDetailsArray ] = useState({})

  // use effect hook to fetch details of selected room.
  useEffect(() => {
    // async function to fetch data.
    const fetchData = async () => {
      let response = await fetch(`http://127.0.0.1:8000/get/room-details/${ params.room_id }`, {
        method: 'GET'
      })
      
      if ( response.ok ) {
        console.log( response )
        let data = await response.json()
        console.log( data )
        // setSelectedRoomDetailsArray( data )
        // console.log( selectedRoomDetailsArray )
        // setSelectedRoomDetailsArray(currentState => ( { currentState, ...data }) )
        // console.log( selectedRoomDetailsArray )

      }

      else {
        throw new Error('failed to fetch hotel details due to error')
      }

    }

    fetchData()

  }, [ ])





  return (

    <div>
      <NavbarComponent />

      <section className='selected-room-extra-pics-grid'>
        {/* {
          selectedRoomDetailsArray.map(( room ) => (
            <h3>{ room.room_number }</h3>
          ))
        } */}

      </section>



      <section style={{ marginBottom: '20%' }}>
          { params.room_id }
      </section>

      <Footer />
    </div>

  )
}



export default GetRoomDetails