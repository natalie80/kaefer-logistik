import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from '../../store/axios-instance';

import './Services.scss';
import Hoc from "../Contact/Contact";

class Services extends Component {

    state = {
        servicesInfo: []
    };

    componentDidMount() {

        document.title = "Container Logistik – ein Partner und alle Leistungen | Kaefer Logistik";

        axios.get('/services.json')
            .then(res => {
                console.log('Here is services: ', res.data);

                this.setState({servicesInfo: res.data});
            })
            .catch(err => {
                console.log('ERROR');
                this.setState({});
            });
    }


    render() {

        return (
            <div className="Services">
                {
                    <React.Fragment>
                        <h1 className="Headline">{this.state.servicesInfo.headline}</h1>

                    <div>
                        <h2 className="Subheadline">{this.state.servicesInfo.subheadline_1}</h2>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <span>nationale und internationale Containertransporte in ganz Europa (Nah- und Fernverkehr), insbesondere für den Fernverkehr zu/von deutschen Nordhäfen</span></li>
                            <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>One Way-Verkehr sowie Rundläufe vom Nordhafen bis zum Westhafen</p></li>
                            <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>Standard-Containertransporte (demnächst: Kombi- und ADR-Transporte)</p></li>
                            <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>45-Fuß-Containertransporte</p></li>
                            <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>temperaturgeführte Reefer-Container/Genset</p></li>
                            <li> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>sichere Zwischenlagerung für Container (auch für temperaturempfindliche Güter)</p></li>
                        </ul>
                        <h2 className="Subheadline">{this.state.servicesInfo.subheadline_2} </h2>
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
                </React.Fragment>
                }
            </div>
        );
    }
}

export default Services;