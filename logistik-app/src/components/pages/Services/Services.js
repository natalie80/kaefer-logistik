import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import axios from '../../../store/axios-instance';
import './Services.scss';

const Services = () => {

    const [ servicesInfo, setServicesInfo ] = useState([]);

    const fetchData = async () => {
        const result = await axios('services.json');

        setServicesInfo(result.data);

    };

    useEffect (() => {
        document.title = "Container Logistik – ein Partner und alle Leistungen | Kaefer Logistik";

        fetchData();

    }, []);


    return (
        <div className="Services">
            {
                <React.Fragment>
                    <h1 className="Headline">{servicesInfo.services && servicesInfo.services.headline}</h1>

                    <div>
                        <h2 className="Subheadline">{servicesInfo.services && servicesInfo.services.subheadline_1}</h2>

                        <ul>
                            {
                                servicesInfo.services && servicesInfo.services.services_infos_1.map((value, key) => (
                                    <li key={'service_info_1_'+key}> <FontAwesomeIcon icon={faCheck} transform="shrink-3" color="gray" /> <p>{value}</p></li>
                                ))
                            }

                        </ul>
                        <h2 className="Subheadline">{servicesInfo.services && servicesInfo.services.subheadline_2} </h2>
                        <ul>
                            {
                                servicesInfo.services && servicesInfo.services.services_infos_2.map((value, key)=> (
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
};

export default Services;