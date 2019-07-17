import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: use --> import {Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';

/**
 * Component for Login Page
 */
export default class Login extends Component {
  // constructor(props) {
    // TODO: set state and form handlers
  // }
  render() {
    // TODO: use to redirect if user not logged in
    // if (this.props.user) {
    //   return (
    //     <Redirect to={{
    //       pathname: '/profile',
    //     }} />
    //   )
    // }
    return (
      <Container className="mt-3">
        <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-6 mx-auto my-5">
              <form>
                <img
                  width="100%"
                  src="https://newsroom.aua.am/files/2017/08/american-times_tumo-center-logo-2.png"
                  alt="Tumo"
                />
                <div className="form-label-group text-left my-4">
                  <label className="text-left" htmlFor="inputEmail">
                    Email address:{" "}
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                  />
                </div>

                <div className="form-label-group text-left">
                  <label htmlFor="inputPassword">Password: </label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-ld btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>`
      </Container>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}
