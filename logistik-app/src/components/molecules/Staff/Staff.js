import React from 'react';
import Media from "react-media";
import Mailto from 'react-protected-mailto';

import  './Staff.scss';
import DefaultImage from '../../../assets/staff/Default_Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMobileAlt, faAt } from '@fortawesome/free-solid-svg-icons'

const Staff = (props) => {
  return (
      <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
      }} >
          { matches => (
              <section className={(matches.large || matches.medium) ? "Staff_Container" : "Staff_Container_Mobile" }>
                  <div className="Staff_Image">
                      <img src={DefaultImage} alt={props.person_surname}/>
                  </div>
                  <div className="Staff_Contact">
                      <p className="StaffName" > <b> {props.person_firstname} {props.person_surname} </b> </p>
                      <p className="Person_Email"> <FontAwesomeIcon icon={faPhoneAlt} color="gray"  /> <Mailto  tel={props.person_telefon}/></p>
                      
                      { props.person_mobil && <p className="Person_Email"> <FontAwesomeIcon icon={faMobileAlt} color="gray" />  <Mailto  tel={props.person_mobil}/> </p> }
                      <p className="Person_Email"> <FontAwesomeIcon icon={faAt} color="gray"/> <Mailto  email={props.person_email} />  </p>
                  </div>
              </section>
          )}
      </Media>
  );
};


export default  Staff;