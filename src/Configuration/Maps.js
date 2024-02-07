import React from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'



// google maps styling.
const maps_styling = {
    width: '85vw',
    height: '80vh'
}


// default maps center.
const maps_center = {
    lat: 5.607005,
    lng: -0.171879
}



const Maps = () => {

    
    return (

        <LoadScript googleMapsApiKey='AIzaSyD9PYNRBguf86JNhplo75DhSibdbjcQhPE'>
            <GoogleMap center={ maps_center } zoom={ 14 } mapContainerStyle={ maps_styling }>
                <Marker position={ { lat: 5.607005, lng: -0.171879 } } title='Accra Marriott Hotel' />
            </GoogleMap>
        </LoadScript>

    )
}




export default React.memo( Maps )