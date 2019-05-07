import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import BlogCard from './blog-card';
import ApprovalCard from './approval-card';
import faker from 'faker';
import axios from 'axios';
const URL = require('../config/key').rootRoute;
import BlogForm from './blog-form';
import BlogDetails from './blog-details';
class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      //{ title: 'green', imageData:{ThumbnailImage} }, {title: 'yellow', imageData: {ThumbnailImage}}, { title: 'blue', imageData:{ThumbnailImage} }, { title: 'white', imageData:{ThumbnailImage} }
        items: []
      };
  }
  getAll = async () =>{
    await axios.get(URL + '/api/blog/getAllBlogs')
      .then(res => {
        const persons = res.data;
        persons.map(res => {
            const item = res.items;
            this.setState(prevState => ({
              items: [
                  ...prevState.items,
                  {fullname: res.fullname,
                    email: res.email,
                    description: res.description,
                    gender: res.gender
                  }
                  ]
            }))
          })
      })
      .catch(err => {
        console.log(err);
      })
  }
  componentDidMount(){
    this.getAll();
  }
  // <img src={faker.image.avatar()} />
  render() {
    return (
      <div>
        <div className="container-full">
          <h1>Blog</h1>
          <BlogDetails />
          <h1>Add Comments:</h1>
          <BlogForm />
          <BlogCard items={this.state.items} />
        </div>
      </div>
    )
 
  }
}
export default Blog;
