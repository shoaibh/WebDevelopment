import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link
                        to=""
                        onClick={this.onLogoutClick.bind(this)}
                        className="nav-link"
                    >
                        <img
                            className="rounded-circle"
                            src="https://image.ibb.co/b0m3QT/default-avatar.png"
                            alt={user.name}
                            style={{ width: '25px', marginRight: '5px' }}
                            title="Your image"
                        />{' '}
                        Logout
          </Link>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Sign Up
          </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
          </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{ backgroundColor: '#242729' }}>


                <Link className="navbar-brand" to="/">
                    Virtual Classroom
          </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mobile-nav"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profiles">
                                {' '}
                                Profile
                </Link>
                        </li>
                    </ul>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
