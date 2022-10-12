import React from 'react';
import logo from '../../images/about.jpg';
import Card from 'react-bootstrap/Card';
import './About.css';

const About = () => {
    return (
        <div>

                  <Card className="bg-dark text-dark fw-bolder">
                    <Card.Img className='about-img' src={logo} alt="" />
                    <Card.ImgOverlay>
                     <Card.Title className='fs-2'>About Us</Card.Title>
                     <Card.Text>
                     We're on a mission to motivate every student through engaging on online quiz.It will also increase their particular knowledge.
                     <br /><br />
                     <h5 className='fw-bold'>Our Story</h5>
                     </Card.Text>
                     <Card.Text className='mb-5'>Tasfia Nuzhat founded Quizizz in 2020 while teaching remedial math at a school in Bangalore, India.Today, Quizizz supports millions of students in over 100 countries and has offices in Bangalore and Santa Monica, California.</Card.Text>
                    </Card.ImgOverlay>
                   </Card>

            
        </div>
    );
};

export default About;