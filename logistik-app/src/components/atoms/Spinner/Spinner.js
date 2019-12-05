import  React from 'react';
import styles from './Spinner.scss';

const spinner = () => (
    <div className={styles.Loader}> Loading...
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default spinner;
