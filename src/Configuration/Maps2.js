import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";



const Maps2 = ({ selectedRoomLatitude, selectedRoomLongitude }) => {

  let map_center = { lat: selectedRoomLatitude, lng: selectedRoomLongitude }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD9PYNRBguf86JNhplo75DhSibdbjcQhPE',
  });

  const center = useMemo(() => ( map_center ), []);

  return (
    <div className="map-parent">
      { !isLoaded ? 
        (
          <h1>Loading...</h1>
         ) 
        : 
        (
          <GoogleMap
            mapContainerClassName="map-container"
            center={ center }
            zoom={ 17 }
          >
            <Marker 
                position={ map_center }
            />
          </GoogleMap>
      )}
    </div>
  );
};



export default Maps2;