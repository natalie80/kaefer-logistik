import React, { Component } from 'react';

import './Home.scss';
import Backdrop from '../../components/atoms/Backdrop/Backdrop'
import Modal from '../../components/atoms/ModalSecond/ModalSecond';
import MyCarousel from "../../components/molecules/Carousel/MyCarousel";

class Home extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false
    };

    componentDidMount() {
        document.title = "Logistikdienstleister für Transport in Delmenhorst | Käfer Logistik";
    }

        showModal = () => {
        this.setState({modalIsOpen: true});
    };
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    };
    
    
    render() {
        return (
            <div className="Home">
                <h1  className="Headline">
                    Container-Logistik von ihrer besten Seite
                </h1>


                <MyCarousel/>

                <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
                { this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} />  : null }

            </div>
        );
    }
}

export default Home;