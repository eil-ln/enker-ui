import React from 'react';
import PropTypes from 'prop-types';
import Socket from '../../socket';
import {Container, InputGroup, Form, Button, Row, Col, ListGroup, Badge} from 'react-bootstrap';
// import { Socket } from 'dgram';

/**
 * React component to render search page
 */
class Search extends React.Component {
  constructor(props) {
    super(props)
    // TODO: set default state of list of users, and text search, event handler and socket connect 
    this.state = {
      users: [],
      user: '',
      query: ''
    }
  }

  componentDidMount() {
    // TODO: event handlers if user logged in or out, run query
  }

  handleSubmit(e) {
    e.preventDefault();
    Socket.connect(user => {
      user.emit("search", this.state.query, (users) => {
        const user = "";
        this.setState({users, user});
      })
    });
  }

  handleChange(query) {
    this.setState({
      query
    })
  }

  handleUser(user){
    this.setState({user});
  }

  onStudentLoggedIn() {
    // TODO: Socket event handler if user logged in - run query
  }

  onStudentLoggedOut() {
    // TODO: Socket event handler if user logged out - run query
  }

  onstartChat(withUser) {
    // TODO: event to invoke start-chat action via Socket, redirect to /network page
  }

  render() {
    return (
      <Container className="mt-5">
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control onChange={(e) => { this.handleChange(e.target.value) }} type="text" placeholder="Enter email" />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>

        <Row>
          <Col>
            <ListGroup>
              {this.state.users.map((user, index) => (
                <ListGroup.Item key={index} onClick={() => this.handleUser(user)} action>{user.firstName}  {user.lastName} {user.loggedIn ? <Badge variant="success">Logged In</Badge> : ""}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            {this.state.user ? (
              <div>
                First Name: {this.state.user.firstName} <br />
                Last Name: {this.state.user.lastName} <br />
                Location: {this.state.user.location} <br />
                Learning Targets: {this.state.user.learningTargets.join()}
              </div>
            ) : ""}
          </Col>
        </Row>

      </Container>
    )
  }
}

Search.propTypes = {
  startChat: PropTypes.func,
  currentUser: PropTypes.object,
};
export default Search;