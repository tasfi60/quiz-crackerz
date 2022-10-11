import React from 'react';
import {  useNavigate } from 'react-router-dom';
// import Questions from '../Questions/Questions';
import Quizdetails from '../Quizdetails/Quizdetails';
import'./Quiz.css';

const Quiz = ({quiz}) => {

    const {id,logo,name,total}= quiz;
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/quiz/${id}`);
    }

    return (
        <div className='topics'>
             
             <img src={logo} alt="" />
            <h2>{name}</h2>
            <p>Total Questions: {total}</p>
            <button onClick={handleNavigate} className='btn-container'>
                Start Quiz
            </button>
           {/* <div>
            <Quizdetails name={name}></Quizdetails>
           </div> */}
            
        </div>
    );
};

export default Quiz;