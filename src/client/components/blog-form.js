import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const URL = require('../config/key').rootRoute;
import MaleCharacter from '../images/4x/man-glasses@4x.png';
import FemaleCharacter from '../images/4x/woman-business@4x.png';
class BlogForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            gender: "M",
            email: "",
            desc: "",
            message: ""
        }

    }
  /*
              


<form onSubmit={this.handleSubmit} className="container-full">
<input type = "text" value = {this.state.name} name="name" onChange = {this.updateState} />
<input type = "text" value = {this.state.email} name="email" onChange = {this.updateState}/>
Gender: M <input defaultChecked type ="radio" value ="M" name="gender" onChange = {this.updateState}/> 
        F<input type="radio" value="F" name="gender" onChange = {this.updateState} />
<textarea value = {this.state.desc} name="desc" onChange={this.updateState}></textarea>
<h4>{this.state.name}</h4>
    <Button variant="primary" type="submit" value="Submit">
    Submit
    </Button>
</form>

*/
    updateState = (e) => {
    this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        console.log(this.state.gender);
        console.log(URL);
        axios.post(URL +'/api/blog/postBlog', {
            fullname:this.state.name,
            email: this.state.email,
            description: this.state.desc,
            gender: this.state.gender
        }).then(response => {
            this.setState({message: response.data.message})
        })

        
        e.preventDefault();
    }
    
    render() {
        return (
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
                <Form.Group as={Row} controlId="gender">
                    <Form.Label column sm="2">
                    Gender
                    </Form.Label>
                    <Col sm="10">
                        <Form.Check inline label="M" type="radio" value="M" name="gender" onChange = {this.updateState} defaultChecked />
                        <Form.Check inline label= "F" type="radio" value="F" name="gender" onChange={this.updateState} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="desc">
                        <Form.Label column sm="2">Desc</Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows="3" name="desc" onChange={this.updateState} value= {this.state.desc} />
                        </Col>
                </Form.Group>
                <Button variant="primary" type="submit" value="Submit">
                    Submit
                </Button>
                <h3> {this.state.message} </h3>
            </Form>
            


        )
    }
}

export default BlogForm;