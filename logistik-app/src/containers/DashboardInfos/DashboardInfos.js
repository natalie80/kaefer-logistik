import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Spinner from '../../components/atoms/Spinner/Spinner'
import Dashboard from "../../components/molecules/Dashboard/Dashboard";
import styles from "../../components/molecules/Dashboard/Dashboard.scss";


class DashboardInfos extends Component {
    
    componentDidMount () {
        console.log('DashboardInfos -> token', this.props.tokenId);
        this.props.onFetchInfos(this.props.tokenId);
    }
    
    render() {
        console.log('-- DB Bilder -> images:: ', this.props.dashboardInfos.images);
        console.log('-- DB Bilder -> info_text:: ', this.props.dashboardInfos.info_text);
        
        let dashboard_images = this.props.dashboardInfos.images;
        let dashboard_text = this.props.dashboardInfos.info_text;
        
        return (
          <div className={styles.Dashboard}>
              <div>
                  <h3>Herzlich Willkommen zur euren Dashboard</h3>
                  <p>Lorem ipsum dolor sit ametat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd takimata</p>
              </div>
    
              <Dashboard
                  dashboard_img={dashboard_images}
                  dashboard_text={dashboard_text}
              />
              
          </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        dashboardInfos: state.dashboard.dashboardInfos,
        loading: state.dashboard.loading,
        tokenId: state.auth.tokenId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchInfos: (token) => dispatch(actions.fetchDashboardInfos(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps )(DashboardInfos);