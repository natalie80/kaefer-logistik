import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

import  './ModalTrigger.scss';

const ModalTrigger = (props) => {

    return (
        <p className="Margin-Bottom">
            {props.awesomeIcon ? <FontAwesomeIcon icon={faAngleDoubleRight} color="weith"/> : null}
            <a
                ref={props.buttonRef}
                onClick={props.showModal}
                className="Link"
            >
                <span className="FooterLink">{props.triggerText}</span>
            </a>
        </p>
    );
};

export default ModalTrigger;