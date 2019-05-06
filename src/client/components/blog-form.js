import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
class BlogForm extends Component {
    constructor(props){
        super(props);

        this.state = {
              name: "",
              gender: "",
              email: "",
              desc: "",
            }
            

        // this.handleFullName = this.handleFullName.bind(this);
        // this.handleGender = this.handleGender.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        // this.handleDesc = this.handleDesc.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: value
            }
          }),
          () => console.log(this.state.newUser)
        );
      }

    handleFullName(e){
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            })
        ),
        () => console.log(this.state.newUser);
    }
    handleSubmit(event){
        alert('A name was submitted ' + this.state.value);
        console.log(this.state.newUser);
        event.preventDefault();
    }

    handleChange(event) {
        console.log(event.target);
        this.setState({data: event.target.value});
    }
       updateState = (e) => {
        this.setState({[e.target.name]: e.target.value});
        }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container-full">
            <input type = "text" value = {this.state.name} name="name" onChange = {this.updateState} />
            <h4>{this.state.name}</h4>
                <Button variant="primary" type="submit" value="Submit">
                Submit
                </Button>
            </form>
        )
    }
}

export default BlogForm;