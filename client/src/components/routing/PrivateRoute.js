import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
//     <Route {...rest} render={props => !isAuthenticated && !loading ? (<Navigate to='/login' />) : (<Component {...props} />)} />
// );


const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    !isAuthenticated && !loading ? (
        <Navigate to="/login" />
    ) : (
        <Component {...rest} />
    )
);


PrivateRoute.propTypes = {
    // auth: PropTypes.object.isRequired,
    component: PropTypes.elementType.isRequired,
    auth: PropTypes.shape({
        isAuthenticated: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired
    }).isRequired,


};
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute);
