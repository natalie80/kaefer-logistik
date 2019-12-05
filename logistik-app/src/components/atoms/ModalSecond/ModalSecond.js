import React from "react";

import styles from  "./ModalSecond.css";
import { Transition } from "react-transition-group";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";


const animatioTiming = {
    enter: 200,
    exit: 4000
};

const modalSecond = props => {

  return (
      <Transition
          in={props.show}
          timeout={animatioTiming}
          mountOnEnter
          unmountOnExit
      >
          { state => {
              const cssClasses = [
                  styles.Modal,
                  state === "entering"
                      ? styles.ModalOpen
                      : state === "exiting"
                      ? styles.ModalClosed : null
              ];
             return (
                 <div className={cssClasses.join(' ')}>
                    <h4>Here is Modal</h4>
                     <div>
                     
                     </div>
                    <button className={styles.Button} onClick={props.closed}>
                      Dismiss
                    </button>
                     <button
                         className={styles.CloseButton}
                         onClick={props.closed}
                     >
                         <FontAwesomeIcon icon={faWindowClose} color="gray"  className="fa-2x"/>
                     </button>
                </div>
             )
          }}
      </Transition>
  );
};

export default modalSecond;
