import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

import { Typography } from '@material-ui/core';
import styles from './Home.scss';


class Home extends Component {
    render() {
        return (
            <div className={styles.Home}>
               <div  variant="h4">
                   Here is HOME!
                   <Typography variant="h6">Responsive h3</Typography>
               </div>
                <Button className={styles.Button} variant="contained" color="primary"> CLICK ME</Button>
            </div>
        );
    }
}

export default Home;