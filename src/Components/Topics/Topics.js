import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Topics.css'

const Topics = () => {
   
    const[topic,setTopic] = useState([]);
    useEffect (() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setTopic(data.data))
},[]) 

    const navigate = useNavigate();

   function handleNavigate(id) {
    navigate(`/quiz/${id}`);
   }
   
    
    return (
        <div className='topics-area'>

        {
        topic.map(tname => 

            <div className='grid-tepmplate' key={tname.id}>
            <img src={tname.logo} alt="" />
            <h2>{tname.name}</h2>
            <p>Total Questions: {tname.total}</p>
            <button onClick={() => handleNavigate(tname.id)} className='btn-container'>
                Start Quiz
            </button>
            
            </div>
        )
        }

        </div>
    
        
    );
};

export default Topics;