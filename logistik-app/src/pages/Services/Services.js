import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from '../../store/axios-instance';

import './Services.scss';

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
                        <h1 className="Headline">{this.state.servicesInfo.services && this.state.servicesInfo.services.headline}</h1>

                    <div>
                        <h2 className="Subheadline">{this.state.servicesInfo.services && this.state.servicesInfo.services.subheadline_1}</h2>
                        <ul>
                            {
                                this.state.servicesInfo.services && this.state.servicesInfo.services.services_infos_1.map((value, key) => (
                                    <li key={'service_info_1_'+key}> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>{value}</p></li>
                                ))
                            }

                        </ul>
                        <h2 className="Subheadline">{this.state.servicesInfo.services && this.state.servicesInfo.services.subheadline_2} </h2>
                        <ul>
                            {
                                this.state.servicesInfo.services && this.state.servicesInfo.services.services_infos_2.map((value, key)=> (
                                    <li key={'service_info_2_'+key}> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>{value}</p></li>
                                ))
                            }
                        </ul>

                        <p className="Sentence-More"> und noch vieles mehr... </p>

                        <p><a  className="ContactLink"  href="/contact">Wir freuen uns auf Ihre Kontaktaufnahme.</a></p>
                    </div>
                </React.Fragment>
                }
            </div>
        );
    }
}

export default Services;