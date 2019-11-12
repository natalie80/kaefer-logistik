import React, {Component} from 'react';

import Hoc from '../hoc';
import styles from './Layout.scss';
import NavigationItems from '../../components/molecules/Navigation/NavigationItems'
import Logo from '../../components/molecules/Logo/Logo'
import Footer from '../../components/organisms/Footer/Footer';


class Layout extends Component {
    
    render () {
        return (
            <Hoc>
                <div className={styles.Content}>
                    <header className={styles.Header}>
                        <div className={styles.Logo}>
                            <Logo />
                        </div>
                        <nav className={styles.Navigation}>
                            <NavigationItems />
                        </nav>
                    </header>
                    <main className={styles.Main}>{this.props.children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </Hoc>
        );
    }
}


export default Layout;