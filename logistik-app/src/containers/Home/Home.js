import React, { Component } from 'react';
import Media from "react-media";
import { Typography } from '@material-ui/core';

import './Home.scss';
import Backdrop from '../../components/atoms/Backdrop/Backdrop'
import Modal from '../../components/atoms/ModalSecond/ModalSecond';
import MyCarousel from "../../components/molecules/Carousel/MyCarousel";

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
            <Media
                queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 1199px)",
                    large: "(min-width: 1200px)"
                }}
            >
                { matches => (
                    <div className="Home">
                        <h2  className= {matches.large ? "Headline" : (matches.medium || matches.small) ?  "Headline_Mobile" : null } >
                            Container-Logistik von ihrer besten Seite
                        </h2>
            
            
                        <MyCarousel/>
            
                        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
                        { this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} />  : null }
        
                    </div>
                )}
            </Media>
        );
    }
}

export default Home;