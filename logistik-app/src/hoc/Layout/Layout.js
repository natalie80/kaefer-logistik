import React, { useState } from 'react';
import {connect} from 'react-redux';
import Media from "react-media";
import { withRouter } from "react-router-dom";

import './Layout.scss';
import Logo from '../../components/molecules/Logo/Logo'
import Footer from '../../components/pages/Footer/Footer';
import NavigationDesktop from '../../components/molecules/Navigation/NavigationDesktop/NavigationDesktop';
import SideDrawer from '../../components/molecules/Navigation/SideDrawerMobile/Sidedrawer';

const Layout = (props) => {
    const [ showMobileNavigation, setShowMobileNavigation ] = useState(false);

    const mobileNavigationClosedHandler = () => {
       // this.setState({showMobileNavigation: false})
        setShowMobileNavigation(false);
    };
    
    const mobileNavigationToggleHandler = () => {
        setShowMobileNavigation((prevState) => {
            return  !prevState.showMobileNavigation
        })
    };

        const url = props.location.pathname.split('/');

    return (
        <React.Fragment>

            <Media
                queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 1199px)",
                    large: "(min-width: 1200px)"
                }}
            >
                { matches => (
                    <div className={
                        (url[1] === '' || url[1] === 'protection') ? 'Content_Homepage'
                            : (matches.large || matches.medium) ? "Content"
                            : matches.small ?  "Content_Mobile"
                                : null
                    }>
                        <header className="Header">
                            <Logo />
                            <NavigationDesktop toggleHandler={mobileNavigationToggleHandler}  isAuth={props.isAuthenticated}/>
                        </header>
                        <SideDrawer closed={mobileNavigationClosedHandler}  open={showMobileNavigation} isAuth={props.isAuthenticated} />
                        <main className={matches.large ? "Main" : (matches.medium || matches.small) ?  "Main_Mobile" : null } >{props.children}</main>
                        <footer className="Footer">
                            <Footer isAuth={props.isAuthenticated}/>
                        </footer>
                    </div>
                )}
            </Media>

        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.tokenId != null
    };
};

export default withRouter(connect(mapStateToProps, null)(Layout));
