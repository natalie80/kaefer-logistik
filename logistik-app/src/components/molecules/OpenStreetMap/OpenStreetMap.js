import React  from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap }  from 'react-google-maps';

const openStreetMap = () => {
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

    withScriptjs(withGoogleMap(openStreetMap));

export default function Map () {
    return (
        <div>
            <iframe width='100%' height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.635017871856691%2C53.013905416265885%2C8.663341999053957%2C53.02528999622052&amp;layer=mapnik&amp;marker=53.01959808174852%2C8.649179935455322"
                    style={{border: '1px solid black'}}></iframe>
            <br/>
            <small>
                <a href="https://www.openstreetmap.org/?mlat=53.0196&amp;mlon=8.6492#map=16/53.0196/8.6492">Größere Karte anzeigen</a>
            </small>
        </div>
    );
}