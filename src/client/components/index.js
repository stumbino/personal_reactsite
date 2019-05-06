import React, { Component } from 'react'
import Carousel from './carousel';
class Index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <Carousel />
      </div>
    )
  }
}

export default Index;