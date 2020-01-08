import React from 'react';

import  './CompanyAddress.scss';
import OpenStreetMap from '../OpenStreetMap/OpenStreetMap';


const companyAddress = () => {
    return (
        <div className="CompanyAddress">
            <div>
                <h1 className="Headline">Ihr Weg zur Käfer Logistik</h1>

                <p>Ob Sie mit dem Auto oder Öffentlichen Verkehrsmitteln ankommen, unser Unternehmen <b>Käfer Logistik</b> am StellerStr 30A in Delmenhorst ist einfach zu erreichen. </p>
                <h3>Adresse</h3>
                <ul>
                    <li> Käfer Logistik GmbH</li>
                    <li> StellerStr 30A</li>
                    <li> 27755 Delmenhorst</li>
                </ul>
            </div>

            <div>
                <h3>Maps</h3>
                <OpenStreetMap/>
            </div>
        </div>
    )
};

export default companyAddress;