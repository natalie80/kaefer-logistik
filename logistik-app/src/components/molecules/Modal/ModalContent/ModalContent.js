import  React, {Component} from 'react';
import FocusTrap from "focus-trap-react";

import styles from './ModalContent.scss';
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
                    className={styles.ModalCover}
                    onClick={this.props.onClickOutside}
                    onKeyDown={this.props.onKeyDown}
                >
                    <div className={styles.ModalArea} ref={this.props.modalRef}>
                        <button
                            ref={this.props.buttonRef}
                            aria-label="Close Modal"
                            aria-labelledby="close-modal"
                            className={styles.CloseButton}
                            onClick={this.props.closeModal}
                        >
                            <FontAwesomeIcon icon={faWindowClose} color="gray"  className="fa-2x"/>
                        </button>
                        <div className={styles.ModalContent}>{this.props.content}</div>
                    </div>
                </div>
            </FocusTrap>
          
        );
    }
}

export default ModalContent;