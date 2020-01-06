import React, {Component} from 'react';
import {connect} from 'react-redux';
import Media from "react-media";

import './Layout.scss';
import Logo from '../../components/molecules/Logo/Logo'
import Footer from '../../components/molecules/Footer/Footer';
import NavigationDesktop from '../../components/molecules/Navigation/NavigationDesktop/NavigationDesktop';
import SideDrawer from '../../components/molecules/Navigation/SideDrawerMobile/Sidedrawer';

class Layout extends Component {
    state = {
        showMobileNavigation: false
    };
    
    mobileNavigationClosedHandler = () => {
        this.setState({showMobileNavigation: false})
    };
    
    mobileNavigationToggleHandler = () => {
        this.setState((prevState) => {
            return { showMobileNavigation: !prevState.showMobileNavigation }
        })
    };
    
    render () {
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
                        <div className={(matches.large || matches.medium) ? "Content" : matches.small ?  "Content_Mobile" : null }>
                            <header className="Header">
                                <Logo />
                                <NavigationDesktop toggleHandler={this.mobileNavigationToggleHandler}  isAuth={this.props.isAuthenticated}/>
                            </header>
                            <SideDrawer closed={this.mobileNavigationClosedHandler}  open={this.state.showMobileNavigation} isAuth={this.props.isAuthenticated} />
                            <main className={matches.large ? "Main" : (matches.medium || matches.small) ?  "Main_Mobile" : null } >{this.props.children}</main>
                            <footer className="Footer">
                                <Footer isAuth={this.props.isAuthenticated}/>
                            </footer>
                        </div>
                    )}
                </Media>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.tokenId != null
    };
};

export default connect(mapStateToProps, null)(Layout);
