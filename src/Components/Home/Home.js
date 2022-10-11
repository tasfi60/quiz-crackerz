import React from 'react';
import logo from '../../images/bg.jpg'
import Card from 'react-bootstrap/Card';
import './Home.css';

const Home = () => {
    return (

    <Card className="bg-dark text-dark fw-bolder">
      <Card.Img className='bg-img' src={logo} alt="" />
        <Card.ImgOverlay>
          <Card.Title className='fs-4'>Welcome to the world of Quiz</Card.Title>
          <Card.Text>
          Quiz-Ace is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events. No app install is required.
          </Card.Text>
          <Card.Text className='mb-5'>Play A Quiz & increase Knowledge</Card.Text>
        </Card.ImgOverlay>
    </Card>
        


    
  
    );
};

export default Home;