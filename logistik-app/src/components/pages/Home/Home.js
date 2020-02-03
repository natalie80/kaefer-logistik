import React, { useEffect } from 'react';

import './Home.scss';
import MyCarousel from "../../molecules/Carousel/MyCarousel";

const Home = () => {

    useEffect ( () => {
        document.title = "Logistikdienstleister für Transport in Delmenhorst | Käfer Logistik";
    }, []);


    return (
        <div className="Home">
            <h1  className="Headline Animated-Text">
                Container-Logistik von ihrer besten Seite
            </h1>

            <MyCarousel/>

        </div>
    );
};

export default Home;