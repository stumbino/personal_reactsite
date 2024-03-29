import React, { Component } from 'react'
import Thumbnail from './thumbnail';
import ThumbnailButtonGroup from './thumbnail-button-group';
import axios from 'axios';
const URL = require('../config/key').rootRoute;
class Portfolio extends Component {

  constructor(props){
    super(props);
    this.state = {
      //{ title: 'green', imageData:{ThumbnailImage} }, {title: 'yellow', imageData: {ThumbnailImage}}, { title: 'blue', imageData:{ThumbnailImage} }, { title: 'white', imageData:{ThumbnailImage} }
        items: []
      };
  }
  getAll(){
    axios.get(URL + '/api/dashboard/getAllThumbnails')
      .then(res => {
        const persons = res.data;
        persons.map(res => {
            const item = res.items;
            this.setState(prevState => ({
              items: [
                  ...prevState.items,
                  {title: res.title,
                    imageData:res.imageUrl}
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

  render() {
    return (
      <div className="container-full">
        <h1>Portfolio</h1>
        <ThumbnailButtonGroup/>
        <Thumbnail items={this.state.items} />
      </div>
    )
  }
}
export default Portfolio;
