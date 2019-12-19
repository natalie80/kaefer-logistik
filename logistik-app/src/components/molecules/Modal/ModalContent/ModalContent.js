import  React, {Component} from 'react';
import FocusTrap from "focus-trap-react";

import './ModalContent.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import Media from "react-media";

export class ModalContent extends Component {
    render() {
        return (
            <FocusTrap>
                <Media
                    queries={{
                        small: "(max-width: 599px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}
                >
                    { matches => (
                        <div
                            role="dialog"
                            tabIndex="-1"
                            aria-modal="true"
                            className="ModalCover"
                            onClick={this.props.onClickOutside}
                            onKeyDown={this.props.onKeyDown}
                        >
                            <div className= { (matches.large || matches.medium)? "ModalArea" :  matches.small ?  "ModalArea_Mobile" : null }  ref={this.props.modalRef}>
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
                    )}
                </Media>
            </FocusTrap>
          
        );
    }
}

export default ModalContent;