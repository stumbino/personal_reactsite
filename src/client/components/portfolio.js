import React, { Component } from 'react'
import Thumbnail from './thumbnail';
// import PortfolioImage from '../images/4x/img-stack@4x.png';
import ThumbnailImage from '../images/2x/img-stack@2x.png';
import ThumbnailButtonGroup from './thumbnail-button-group';
import axios from 'axios';
class Portfolio extends Component {

  constructor(props){
    super(props);
    this.state = {
      //{ title: 'green', imageData:{ThumbnailImage} }, {title: 'yellow', imageData: {ThumbnailImage}}, { title: 'blue', imageData:{ThumbnailImage} }, { title: 'white', imageData:{ThumbnailImage} }
        items: [{title: '', imageData: ''}]
      };
  }
  getAll(){
    axios.get('/api/dashboard/getAllThumbnails')
      .then(res => {
        const persons = res.data
        persons.map(res => {
          console.log(res);
          this.setState( {
            items: [
              {title: res.title,
                imageData:{ThumbnailImage}}
            ]
          })
        })
       
        console.log(this.state);
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
