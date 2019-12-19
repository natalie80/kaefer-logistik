import React  from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow }  from 'react-google-maps';

const googlemaps = () => {
   //const [selectedMarker, setSelectedMarker] = useState(null);
   
  return (
      <React.Fragment>
          <div style={{ height: '100%', width: '100%' }}>

              <GoogleMap
                    defaultZoom={7}
                    defaultCenter={{ lat: 53.017570, lng: 8.654980 }}
              >
                  <Marker position={{ lat: 53.017570, lng: 8.654980}} />
                 
              </GoogleMap>
          </div>
      </React.Fragment>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(googlemaps));

export default function Map () {
    return (
        <div style={{ height: '50vh'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCOPw4NrvRZ-qDAOfn4YOVk7OXj_NKSujg`}
                loadingElement={<div style={{height: "100%"}} />}
                containerElement={<div style={{height: "100%"}}  />}
                mapElement={<div style={{height: "100%"}}  />}
            />
        </div>
    );
}