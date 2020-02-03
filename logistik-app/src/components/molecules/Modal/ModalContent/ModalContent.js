import  React from 'react';
import FocusTrap from "focus-trap-react";

import './ModalContent.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import Media from "react-media";

const ModalContent = (props) => {

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
                        onClick={props.onClickOutside}
                        onKeyDown={props.onKeyDown}
                    >
                        <div className= { (matches.large || matches.medium)? "ModalArea" :  matches.small ?  "ModalArea_Mobile" : null }  ref={props.modalRef}>
                            <button
                                ref={props.buttonRef}
                                aria-label="Close Modal"
                                aria-labelledby="close-modal"
                                className="ModalCloseButton"
                                onClick={props.closeModal}
                            >
                                <FontAwesomeIcon icon={faWindowClose} color="gray"  className="fa-2x"/>
                            </button>
                            <div className="ModalContent">{props.content}</div>
                        </div>
                    </div>
                )}
            </Media>
        </FocusTrap>

    );
}

export default ModalContent;