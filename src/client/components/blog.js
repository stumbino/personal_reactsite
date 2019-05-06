import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import BlogCard from './blog-card';
import ApprovalCard from './approval-card';
import faker from 'faker';
import BlogForm from './blog-form';
class Blog extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container-full">
          <h1>Hello World!</h1>
          <BlogForm />
          <Button variant="primary">Submit</Button>
          <img src={faker.image.avatar()} />
          <BlogCard />
        </div>
      <ApprovalCard />
      </div>
    )
 
  }
}
export default Blog;
