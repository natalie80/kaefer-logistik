import  React, {Component} from 'react';
import FocusTrap from "focus-trap-react";

import './ModalContent.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

export class ModalContent extends Component {
    render() {
        return (
            <FocusTrap>
                <div
                    role="dialog"
                    tabIndex="-1"
                    aria-modal="true"
                    className="ModalCover"
                    onClick={this.props.onClickOutside}
                    onKeyDown={this.props.onKeyDown}
                >
                    <div className="ModalArea" ref={this.props.modalRef}>
                        <button
                            ref={this.props.buttonRef}
                            aria-label="Close Modal"
                            aria-labelledby="close-modal"
                            className="ModalCloseButton"
                            onClick={this.props.closeModal}
                        >
                            <FontAwesomeIcon icon={faWindowClose} color="gray"  className="fa-2x"/>
                        </button>
                        <div className="ModalContent">{this.props.content}</div>
                    </div>
                </div>
            </FocusTrap>
          
        );
    }
}

export default ModalContent;