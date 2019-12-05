import React from 'react';
import Media from "react-media";

import styles from './Staff.scss';
import DefaultImage from '../../../assets/staff/Default_Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMailBulk, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const staff = (props) => {
  return (
      <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
      }} >
          { matches => (
              <section key={props.key} className={(matches.large || matches.medium) ? styles.Staff_Container : styles.Staff_Container_Mobile }>
                  <div className={styles.Staff_Image} key={props.key}>
                      <img key={props.key} src={DefaultImage} alt=""/>
                  </div>
                  <div className={styles.Staff_Contact}>
                      <p key={props.key}> <b> {props.person_firstname} {props.person_surname} </b> </p>
                      <p key={props.key}> <FontAwesomeIcon icon={faPhoneAlt} color="gray"  /> {props.person_telefon}</p>
                      
                      { props.person_mobil && <p key={props.key}> <FontAwesomeIcon icon={faMobileAlt} color="gray" /> {props.person_mobil}</p> }
                      <p key={props.key}> <FontAwesomeIcon icon={faMailBulk} color="gray"/> {props.person_email}</p>
                  </div>
              </section>
          )}
      </Media>
  );
};


export default  staff;