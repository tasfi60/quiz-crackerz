import logo from '../../images/bg.jpg'
import Card from 'react-bootstrap/Card';
import './Home.css';
import Quiz from '../Quiz/Quiz';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const quizs = useLoaderData();
   
    return (
        <div>
            <div>

                  <Card className="bg-dark text-dark fw-bolder">
                    <Card.Img className='bg-img' src={logo} alt="" />
                    <Card.ImgOverlay>
                     <Card.Title className='fs-4 fw-bold'>Welcome to the world of Quiz</Card.Title>
                     <Card.Text className='text-container'>
                       Quiz-Ace is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events. No app install is required.
                       <p>Play A Quiz & increase Knowledge</p>
                     </Card.Text>
                    </Card.ImgOverlay>
                   </Card>
            </div>

            <div className='topic-container'>
                {
                    quizs.data.map(quiz => <Quiz key={quiz.id} quiz ={quiz} ></Quiz>)
                }
            </div>


        </div>

  
          );
};

export default Home;