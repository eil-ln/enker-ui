import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

import {Container, Form, Button, Row, Col, Image} from 'react-bootstrap';

/**
 * Component for Login Page
 */
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state);
  }

  handleEmailChange = event => {
    this.setState({ 
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }


  render() {
    // TODO: use to redirect if user not logged in
    if (this.props.user) {
      return (
        <Redirect to={{
          pathname: '/profile',
        }} />
      )
    }

    return (
      <Container className="mt-5">
        <Row>
          <Col className="mx-auto" xs={10} sm={10} md={7} >
            <Image width="100%" src="https://newsroom.aua.am/files/2017/08/american-times_tumo-center-logo-2.png" alt="Tumo Logo"/>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} required/>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required/>
              </Form.Group>

              <a href="./signup">Sign Up!</a>

              <Form.Group controlId="formChecbox">
                <Form.Check type="checkbox" label="Remember password" />
              </Form.Group>

              <Button className="mx-auto" variant="primary" type="submit">
                Submit
              </Button> 
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}
