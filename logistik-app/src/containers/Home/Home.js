import React, { Component } from 'react';

import './Home.scss';
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
                <h1  className="Headline Animated-Text">
                    Container-Logistik von ihrer besten Seite
                </h1>


                <MyCarousel/>

            </div>
        );
    }
}

export default Home;