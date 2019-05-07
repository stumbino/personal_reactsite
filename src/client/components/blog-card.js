import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import MaleCharacter from '../images/4x/man-glasses@4x.png';
import FemaleCharacter from '../images/4x/woman-business@4x.png';
import ThumbsUp from '../images/4x/thumb-up@4x.png';
import ThumbsDown from '../images/4x/thumb-down@4x.png';
const BlogCard = (props) => {
  console.log(props);
  const { items } = props;
  const check = items.length > 1;
  let count = 0;

  let changeImage = (item)=>{
    console.log(item.gender);
    if(item.gender == "M"){
      return ( <img className="card-img-top" src={MaleCharacter} />)
    }else if(item.gender =="F"){
      return ( <img className="card-img-top" src={FemaleCharacter} />)
    }else{
      return ( <img className="card-img-top" src={MaleCharacter} />)
    }
  }
  
  return (
    <div className="dashboard">
      {(check && items.map((item) =>{ 
                count++;
                if(count <= 8){
                   return (
                   
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                      {changeImage(item)}
                      <Card.Title>{item.fullname}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{item.email}</Card.Subtitle>
                      <Card.Text>
                      {item.description}
                      </Card.Text>
                      <img className="card-img-top" src={ThumbsUp} />
                      <img className="card-img-top" src={ThumbsDown} />
                    </Card.Body>
                </Card>
                   
                   )
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