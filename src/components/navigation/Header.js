import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

const Header = (props) => {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <div>
                { props.authenticated ? null : <Link to="/signup">Signup</Link> }
                { props.authenticated ? null : <Link to="/signin">Signin</Link> }
                { props.authenticated ? <Link to="/signout">Sign Out</Link> : null }
                {props.authenticated ? <Link to="/feature">Feature</Link> : null }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);