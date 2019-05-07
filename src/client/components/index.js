import React, { Component } from 'react'
import Carousel from './carousel';
class Index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container-full">
        <Carousel />
      </div>
    )
  }
}

export default Index;