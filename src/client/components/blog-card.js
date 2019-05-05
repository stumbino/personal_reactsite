import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Character from '../images/4x/man-glasses@4x.png';
import ThumbsUp from '../images/4x/thumb-up@4x.png';
import ThumbsDown from '../images/4x/thumb-down@4x.png';
const BlogCard = () => {
  return (
  <div className="card" >
    <img className="card-img-top" src={Character} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text.</p>
      <Link to="/about" className="btn btn-primary">See Profile</Link>
    </div>
    <img className="card-img-top" src={ThumbsUp} />
    <img className="card-img-top" src={ThumbsDown} />
  </div>

  )
}

export default BlogCard;