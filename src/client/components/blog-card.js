import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Character from '../images/4x/man-glasses@4x.png';
import ThumbsUp from '../images/4x/thumb-up@4x.png';
import ThumbsDown from '../images/4x/thumb-down@4x.png';
const BlogCard = () => {
  return (
  <Card style={{ width: '20rem' }}>
    <Card.Body>
      <img className="card-img-top" src={Character} />
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <img className="card-img-top" src={ThumbsUp} />
      <img className="card-img-top" src={ThumbsDown} />
    </Card.Body>
  </Card>



  // <div className="card" >
  //   <img className="card-img-left" src={Character} alt="Card image" />
  //   <div className="card-body">
  //     <h4 className="card-title">John Doe</h4>
  //     <p className="card-text">Some example text.</p>
  //     <Link to="/about" className="btn btn-primary">See Profile</Link>
  //   </div>
  //   <img className="card-img-top" src={ThumbsUp} />
  //   <img className="card-img-top" src={ThumbsDown} />
  // </div>

  )
}

export default BlogCard;