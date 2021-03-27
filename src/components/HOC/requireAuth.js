import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';

const requireAuth = (ChildComponent) => {

    const ComposedComponent = (props) => {

        useEffect(() => {
            if(!props.auth) props.history.push('/');
        });

        return (
            <ChildComponent {...props}/>
        );
    };

    const mapStateToProps = (state) => {
        return {auth: state.auth.authenticated};
    }

    return connect(mapStateToProps, actions)(ComposedComponent);
}

export default requireAuth;