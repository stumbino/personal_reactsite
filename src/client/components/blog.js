import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import BlogCard from './blog-card';
import ApprovalCard from './approval-card';
import faker from 'faker';
import axios from 'axios';
import BlogForm from './blog-form';
class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      //{ title: 'green', imageData:{ThumbnailImage} }, {title: 'yellow', imageData: {ThumbnailImage}}, { title: 'blue', imageData:{ThumbnailImage} }, { title: 'white', imageData:{ThumbnailImage} }
        items: []
      };
  }
  getAll = async () =>{
    await axios.get('/api/blog/getAllBlogs')
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
          console.log(this.state.items);
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
          <h1>Hello World!</h1>
          <BlogForm />
          <BlogCard items={this.state.items} />
        </div>
      <ApprovalCard />
      </div>
    )
 
  }
}
export default Blog;
