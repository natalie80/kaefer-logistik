import React from 'react';

import  './CompanyAddress.scss';
import GoogleMaps from '../GoogleMaps/GoogleMaps';


const companyAddress = (props) => {
    return (
        <div className="CompanyAddress">
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
                <GoogleMaps></GoogleMaps>
            </div>
    
    </div>
    )
};

export default companyAddress;