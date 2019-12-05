import React, { Component } from 'react';

import { Typography } from '@material-ui/core';
import styles from './Home.scss';
import Backdrop from '../../components/atoms/Backdrop/Backdrop'
import Modal from '../../components/atoms/ModalSecond/ModalSecond';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Background_2 from "../../assets/carousel/background_4.JPG";
import Background_3 from "../../assets/carousel/background_5.JPG";


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
                <Typography variant="h6"> Here is HOMEPAGE und CArousel!!</Typography>
                <Carousel   showThumbs={false}
                          showStatus={false}
                        >
                        <div className="my-slide secondary">
                            <h2>
                                It's just a couple of new styles...
                            </h2>
                            <img src={Background_2} width="200px" alt="Background_2" />
                        </div>
                        
                        <div className="my-slide content">
                            <img src={Background_3} width="200px" alt="Background_3" />
                        </div>
                    
                </Carousel>
    
                 <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
                { this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} />  : null }
              
                
            </div>
        );
    }
}

export default Home;