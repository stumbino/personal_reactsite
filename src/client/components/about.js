import React, { Component } from 'react'
import ProfileImage from '../images/portfolio/Billy.png';
import { Image, Col, Row } from 'react-bootstrap';
class About extends Component {
  render() {
    return (
      <div className="container-full">
        <h1> About </h1>
      <Row>
      <Col> <Image src={ProfileImage} height="80%" width="80%" thumbnail /></Col>
      <Col><p>My name is William Stumbo, and I am a graduate of Computer Information Technology at IUPUI. I am a diligent and dedicated worker who is passionate about new trends in the field of technology and delving into these innovative ideas. Throughout my career so far, I have accomplished an understanding for a variety of programming languages and used these to develop my abilities as a website and application creator. In this process, I use responsive HTML, CSS, JavaScript, and Spring Core. 

Beginning in the summer of 2015, I studied .NET framework at Eleven Fifty Academy. The following summer, I programmed applications in NodeJs and Angular as an intern at Salesforce. This gave me the opportunity to learn about applications (Rest API's) and to work with real-world data. In college I actively participated in meetings as a member of the Purdue Engineering Student Council. After graduating in June 2018, I began working for Infosys as a software engineer. In this position, I assist clients by developing applications for them. Every day I aspire to create programs and software that are robust, intuitive, and most of all, beneficial to people. I have a love for learning, a passion for inspiring others, and a desire to make great things happen for the future of technology.
      </p>
      <a target="_blank" href="https://github.com/stumbino">Github</a>
      <a target="_blank" href="https://teamtreehouse.com/williamstumbo">Teamtreehouse</a>
      <a target="_blank" href="https://cs.iupui.edu/~wstumbo/"><h3>PersonalSiteV.1</h3></a>
      </Col>
      </Row>
        
       
      </div>
    )
  }
}
export default About;
