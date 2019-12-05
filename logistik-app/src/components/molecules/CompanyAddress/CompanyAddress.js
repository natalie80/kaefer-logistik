import React from 'react';
import {GoogleMap, Marker, withScriptjs, withGoogleMap}  from 'react-google-maps';

import styles from './CompanyAddress.scss';


const companyAddress = (props) => {
    const defaultProps = {
        center: {
            lat: 53.0198123,
            lng: 8.6497334
        },
        key: 'AIzaSyCwlm6UBxrN5-ZWHM4XB_NRb4aLjAYe8mA',
        zoom: '8',
        styles: {
            width: '100%',
            height: '100%'
        }
    };
    
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 53.0198123, lng: 8.6497334 }}
        >
            <Marker position={{ lat: 53.0198123, lng: 8.6497334}} />
        </GoogleMap>
    ));
    
    return (
        <div className={styles.CompanyAddress}>
            <div>
                <h3>Anfahrt</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo consequat.</p>
                <h3>Adresse</h3>
                <ul>
                    <li> Käfer Logistik GmbH</li>
                    <li> StellerStr 30A</li>
                    <li> 27755 Delmenhorst</li>
                </ul>
            </div>
            <div>
                <h3>Google Maps</h3>
                <div style={{ height: '100%', width: '100%' }}>
    
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwlm6UBxrN5-ZWHM4XB_NRb4aLjAYe8mA&v=3"
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '400px' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </div>
            </div>
    
    </div>
    )
};



export default companyAddress;