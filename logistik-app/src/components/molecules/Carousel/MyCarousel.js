import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import './MyCarousel.scss';

// Images
import Container_1  from "../../../assets/carousel/container_1.jpg";
import Container_2  from "../../../assets/carousel/container_2.jpg";
import Digitization  from "../../../assets/carousel/digitization_1.jpg";
import Logistics  from "../../../assets/carousel/logistics_1.jpg";

class MyCarousel extends Component {
    render() {
        return (
      
            <Carousel className="MyCarousel" showArrows={true} showThumbs={false} showStatus={false} style={{width: '400px'}}>
                <div>
                    <img src="https://static.wixstatic.com/media/c879fd_49abba32d27c47428434d368dc5f71a2~mv2_d_3000_1708_s_2.jpg/v1/fill/w_1920,h_1093,al_b,q_85,usm_0.66_1.00_0.01/c879fd_49abba32d27c47428434d368dc5f71a2~mv2_d_3000_1708_s_2.webp" />
                    <p className="legend"> Sichere Zwischenlagerung für Container </p>
                </div>
                <div>
                    <img src={Logistics} />
                    <p className="legend">Nationale und internationale Containertransporte in ganz Europa</p>
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/c879fd_6eab8d37869d4af585f80583f9be181d~mv2_d_3000_1708_s_2.jpg/v1/fill/w_1920,h_1093,al_c,q_85,usm_0.66_1.00_0.01/c879fd_6eab8d37869d4af585f80583f9be181d~mv2_d_3000_1708_s_2.webp" />
                    <p className="legend">24 Stunden Serviceauskunft +49 (4221) 288 40 50 </p>
                </div>
                <div>
                    <img src={Digitization} />
                </div>
                <div>
                    <img src={Container_1} />
                    <p className="legend">45-Fuß-Containertransporte</p>
                </div>
            </Carousel>
        );
    }
}

export default MyCarousel;