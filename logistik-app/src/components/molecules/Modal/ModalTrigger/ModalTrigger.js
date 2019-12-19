import React, {Component} from 'react';

import  './ModalTrigger.scss';

class ModalTrigger extends  Component {
    render() {
        return (
            <a
                ref={this.props.buttonRef}
                onClick={this.props.showModal}
                className="Link"
            >
                {this.props.triggerText}
            </a>
        );
    }
}

export default ModalTrigger;