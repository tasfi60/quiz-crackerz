import logo from '../../images/bg.jpg'
import Card from 'react-bootstrap/Card';
import './Home.css';
import Topic from '../Topic/Topic'
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const topics = useLoaderData();
   
    return (
        <div>
            <div>

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
            </div>

            <div className='topic-container'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic} ></Topic>)
                }
            </div>


        </div>

  
          );
};

export default Home;