import React, {Component} from 'react';

import styles from './ModalTrigger.scss';

class ModalTrigger extends  Component {
    render() {
        return (
            <a
                ref={this.props.buttonRef}
                onClick={this.props.showModal}
                className={styles.Link}
            >
                {this.props.triggerText}
            </a>
        );
    }
}

export default ModalTrigger;