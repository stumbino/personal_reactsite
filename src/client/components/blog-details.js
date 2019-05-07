
import { Card, Button } from 'react-bootstrap';
import React from 'react'
import Github from '../images/4x/logo-github@4x.png';
const BlogDetails = () => {
  return (
    <div>
     <Card>
        <Card.Header>Developed Version 1 of a new Portfolio site that utilizes React Framework</Card.Header>
        <Card.Body>
            <Card.Title>React Full Stack application for Portfolio</Card.Title>
            <Card.Text>
            Designed and developed a react MERN stack application.  This utilized technologies like webpack2, babel, and react. I started out on this project designing and developing a color palette that I would use to build my application off of. Once project was built I put the project on AWS lamda + amazon gateway for the backend and the front end on an s3 bucket.  I then pointed the bucket to a domain attached to amazon's route 53 service.
            </Card.Text>
            <Button variant="primary">Github Project <img src={Github} className="link-icon" /></Button>
        </Card.Body>
    </Card>

      <Card>
        <Card.Header>Participated in Infosys Global Hackathon</Card.Header>
        <Card.Body>
            <Card.Title>Hackathon</Card.Title>
            <Card.Text>
            Participated in a hackathon that dealt with coding for 6 hrs.  Our team decided to create a react project where we designed and developed an application from scratch.  Our idea was to create an event application where it would be a system that would display all the events in Indianapolis which included MEETUPS in the Indianapolis area.  The application has a custom logo, a design and uses react and redux.
            </Card.Text>
            <Button variant="primary">Github Project<img src={Github} className="link-icon" /></Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default BlogDetails
