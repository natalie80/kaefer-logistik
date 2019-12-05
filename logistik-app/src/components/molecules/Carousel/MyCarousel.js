import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import Background_1  from "../../../assets/carousel/background_1.JPG";
import Background_2  from "../../../assets/carousel/background_4.JPG";
import Background_3  from "../../../assets/carousel/background_5.JPG";
import Background_4  from "../../../assets/carousel/strand_1.JPG";

/**class MyCarousel extends Component {
    render() {
        return (
            <Carousel className={styles.carousel} showArrows={true}>
                <div style={{ height: "200px"}}>
                    <img src={Background_1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div style={{ height: "200px", color: "#fff" }}>
                    <img src={Background_2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{ height: "200px", color: "#fff" }}>
                    <img src={Background_3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default MyCarousel; **/