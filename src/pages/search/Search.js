import React from 'react';
import PropTypes from 'prop-types';
import Socket from '../../socket';
import {Container, InputGroup, Form, Button, Row, Col, ListGroup} from 'react-bootstrap';
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
        this.setState({users});
      })
    })
    this.setState({user: ''});
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
  query(textSearch) {
    // TODO: emit query via Socket based on text
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
                <ListGroup.Item key={index} onClick={() => this.handleUser(user)} action>{user.firstName}  {user.lastName}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            {this.state.user ? (
              <div>
                <p>First Name: {this.state.user.firstName}</p>
                <p>First Name: {this.state.user.lastName}</p> 
                <p>Location: {this.state.user.location}</p>
                <p>Learning Targets: {this.state.user.learningTargets.join()}</p>
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