import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import BlogCard from './blog-card';
import ApprovalCard from './approval-card';
import faker from 'faker';
class Blog extends Component {
  render() {
    return (
      <div>
        <div className="container-full">
          <h1>Hello World!</h1>
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
