import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
  }
  }
  updateState = (e) => {
    this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        console.log(this.state.gender);
        
        e.preventDefault();
    }
  render() {
    return (
      <div className="container-full">
          <h1> Contact </h1>
        <Form onSubmit={this.handleSubmit}>
             <Form.Group as={Row} controlId="name">
                <Form.Label column sm="2">
                Name
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="name" value = {this.state.name} name="name" onChange = {this.updateState}  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="email">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="example@gmail.com"value = {this.state.email} name="email" onChange = {this.updateState} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="message">
                    <Form.Label column sm="2">Message</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows="3" name="message" onChange={this.updateState} value= {this.state.message} />
                    </Col>
            </Form.Group>
            <Button variant="primary" type="submit" value="Submit">
                Submit
            </Button>
        </Form>
        
      </div>

    )
}
}


export default Contact;