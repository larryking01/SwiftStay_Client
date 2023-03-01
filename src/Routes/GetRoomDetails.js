import React from 'react'
import { useParams } from 'react-router-dom'





const GetRoomDetails = () => {

  const params = useParams()


  return (

    <div>
      GetRoomDetails
      <h2>{ params.room_id }</h2>
    </div>

  )
}




export default GetRoomDetails