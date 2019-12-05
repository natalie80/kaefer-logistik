import React, {Component}  from 'react';
import {connect} from 'react-redux';

import * as actions from "../../store/actions";

class Logout extends Component {
    componentDidMount () {
        this.props.onLogout();
    }

    render () {
        return (
            <div></div>
        );
    }
};

const mapStateToProps = state => {
    return {

    };
};


const mapDispatchToProps = dispatch => {
     return {
        onLogout: () => dispatch(actions.logout())
     };
};


export default connect(mapStateToProps,mapDispatchToProps)(Logout);