import React, { Component } from 'react';

import { Typography } from '@material-ui/core';
import styles from './Home.scss';
import Backdrop from '../../components/atoms/Backdrop/Backdrop'
import Modal from '../../components/atoms/ModalSecond/ModalSecond';

import "react-responsive-carousel/lib/styles/carousel.min.css";


class Home extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false
    };
    
    showModal = () => {
        this.setState({modalIsOpen: true});
    };
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    };
    
    
    render() {
        return (
            <div className={styles.Home}>
                <Typography variant="h6"> Container-Logistik von ihrer besten Seite</Typography>
               
                
                
    
                 <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
                { this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} />  : null }
                
            </div>
        );
    }
}

export default Home;