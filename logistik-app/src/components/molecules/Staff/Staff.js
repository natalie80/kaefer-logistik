import React from 'react';

import styles from './Staff.scss';
import ImageKaefer from '../../../assets/staff/kaefer.jpg';
import DefaultImage from '../../../assets/staff/Default_Image.png'
import ImageHespe from '../../../assets/staff/hespe.jpg';
import ImageBibik from '../../../assets/staff/bibik.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMailBulk, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const staff = (props) => {
  
    
  return (
      <section key={props.key} className={styles.Staff_Container}>
          <div className={styles.Staff_Image}>
              <img src={DefaultImage} alt=""/>
          </div>
          <div className={styles.Staff_Contact}>
              
              <p key={props.key}> <b> {props.person_firstname} {props.person_surname} </b> </p>
              <p key={props.key}> <FontAwesomeIcon icon={faPhoneAlt} color="gray"  /> {props.person_telefon}</p>
              { props.persons_mobil  &&  <p key={props.key}> <FontAwesomeIcon icon={faMobileAlt} color="gray" /> {props.person_mobil}</p> }
              <p key={props.key}> <FontAwesomeIcon icon={faMobileAlt} color="gray" /> {props.person_mobil}</p>
              <p key={props.key}> <FontAwesomeIcon icon={faMailBulk} color="gray" /> {props.person_email}</p>
          </div>
      </section>
  );
};


export default  staff;