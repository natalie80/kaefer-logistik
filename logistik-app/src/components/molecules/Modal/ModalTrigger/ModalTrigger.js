import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

import  './ModalTrigger.scss';

class ModalTrigger extends  Component {
    render() {
        return (
            <p className="Margin-Bottom">
                {this.props.awesomeIcon ? <FontAwesomeIcon icon={faAngleDoubleRight} color="weith"/> : null}
                <a
                    ref={this.props.buttonRef}
                    onClick={this.props.showModal}
                    className="Link"
                >
                    <span className="FooterLink">{this.props.triggerText}</span>
                </a>
            </p>
        );
    }
}

export default ModalTrigger;