import React, {Component} from 'react';

import { Container, Form, Button } from 'react-bootstrap';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.learningTargets = ["Animation", "Game Development", "Filmmaking", "Web Development"]
    this.locations = ["Yerevan",  "Gyumri", "Stepnakert", "Dilijan"]
    this.state = {
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      learningTargets: [],
      location: this.locations[0]
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange(type, value) {
    if (type === "learningTargets") {
      const valueAsArray = Array.from(value); // Convert HTMLCollections to Array
      const learningTargets = valueAsArray.filter(v => v.selected).map(v => v.value); // Filter and map to option value
      this.setState({
        learningTargets,
      })
    } else {
      this.setState({
        [type]: value
      });
    }
    
  }
  render() {
    return (
      <Container>
        <Form className="mt-5" onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => { this.handleChange("email", e.target.value) }} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control onChange={(e) => { this.handleChange("firstName", e.target.value) }} type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control onChange={(e) => { this.handleChange("lastName", e.target.value) }} type="text" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Passowrd</Form.Label>
            <Form.Control onChange={(e) => { this.handleChange("password", e.target.value) }} type="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group controlId="formLearningTarget">
            <Form.Label>Learning Targets</Form.Label>
            <Form.Control onChange={(e) => { this.handleChange("learningTargets", e.target.options) }} as="select" multiple>
              {
                this.learningTargets.map(target => 
                  <option key={target}>{target}</option>
                )
              }
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control value={this.state.location} onChange={(e) => { this.handleChange("location", e.target.value) }} as="select">
              {
                this.locations.map(location => 
                  <option key={location}>{location}</option>
                )
              }
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </Container>      
    )
  }
}

export default Signup;
