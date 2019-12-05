import React from 'react';
import Media from "react-media";

import styles from './Logo.scss';

const logo = () => (
    <Media
        queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}
    >
        { matches => (
            <div className={matches.large ? styles.Logo : (matches.medium || matches.small) ?  styles.Main_Mobile : null } >
                <img className={matches.small ? styles.Logo_Image_Mobile : styles.Logo_Image} src="https://static.wixstatic.com/media/c879fd_fbec38d5bbc24254b9550997e2d3e8a8~mv2.png/v1/fill/w_208,h_150,al_c,q_80,usm_0.66_1.00_0.01/Logo_Kaefer-Logistik.webp" alt=""/>
            </div>
        )}
    </Media>
);


export default logo;
