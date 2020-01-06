import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Services.scss';

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <h2  className="Headline">Container-Logistik –  ein Partner, alle Leistungen</h2>
                <div>
                    <h4 className="Subheadline">Willkommen beim professionellen und kompetenten Partner für </h4>
                    <ul>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <span>nationale und internationale Containertransporte in ganz Europa (Nah- und Fernverkehr), insbesondere für den Fernverkehr zu/von deutschen Nordhäfen</span></li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>One Way-Verkehr sowie Rundläufe vom Nordhafen bis zum Westhafen</p></li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>Standard-Containertransporte (demnächst: Kombi- und ADR-Transporte)</p></li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>45-Fuß-Containertransporte</p></li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>temperaturgeführte Reefer-Container/Genset</p></li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>sichere Zwischenlagerung für Container (auch für temperaturempfindliche Güter)</p></li>
                    </ul>
                    <h4 className="Subheadline">Verlassen Sie sich auf </h4>
                    <ul>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>zuverlässige Durchführung</p> </li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>hohe Flexibilität</p> </li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>hohe Termintreue</p> </li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>kurze Kommunikationswege</p> </li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>sehr gute Erreichbarkeit, 24 Stunden – 365 Tage</p> </li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>moderne Multifunktionschassis für jeden Seecontainer</p> </li>
                        <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>moderne Fahrzeugausstattung</p> </li>
                    </ul>
                    <ul>
                        <li>
                            und noch vieles mehr...
                        </li>
                    </ul>
                
                    <p><a  className="ContactLink"  href="/contact">Wir freuen uns auf Ihre Kontaktaufnahme.</a></p>
                </div>
            </div>
        );
    }
}

export default Services;