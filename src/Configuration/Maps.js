import React from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'



// google maps styling.
const maps_styling = {
    width: '85vw',
    height: '80vh'
}


// default maps center.
const maps_center = {
    lat: 48.218967,
    lng: 11.623746
}



const Maps = () => {


    return (

        <LoadScript googleMapsApiKey='AIzaSyCxbWaMfg5IJP3b0i21cEeTVk5J_a_5w5A'>
            <GoogleMap center={ maps_center } zoom={ 9 } mapContainerStyle={ maps_styling }>
                <Marker position={ maps_center } title='Santiago Bernabeu Stadium' />
                <Marker position={ { lat: 48.218967, lng: 11.623746 } } title='Alianz Arena Stadium' />
            </GoogleMap>

        </LoadScript>

    )
}




export default React.memo( Maps )