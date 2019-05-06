import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Character from '../images/4x/man-glasses@4x.png';
import ThumbsUp from '../images/4x/thumb-up@4x.png';
import ThumbsDown from '../images/4x/thumb-down@4x.png';
const BlogCard = (props) => {
  console.log(props);
  const { items } = props;
  const check = items.length > 1;
  let count = 0;


  return (
    <div className="dashboard">
      {(check && items.map((item) =>{ 
                count++;
                console.log(check);
                if(count <= 8){
                   return (<div className="thumbnail-item">
                        <img className="thumbnail-image" key={count} src={Character} />
                        <div className="thumbnail-content2" key={count}>Hello{item.firstname}</div>
                    </div>
                   );
                }}
            ))}
    </div>
  )
  }
    
  // <div className="thumbnail-item">
  //             <img className="thumbnail-image" key={count} src={ThumbnailImage} />
  //             <div className="thumbnail-content" key={item.title}>{item.title}</div>
  //         </div>

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


export default BlogCard;