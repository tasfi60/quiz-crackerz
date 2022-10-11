import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quizdetails.css'

const Quizdetails = () => {

    const quess = useLoaderData().data; 
    
    return (

        <div>
            <h3>Quiz Topic: {quess.name}</h3>
           {
            quess.questions.map((ques,i) =>  
                <div className='ques-container'>
                     <h4>Ques: {i+1}  {ques.question.slice(3,-4)}</h4>
                    <div className='option-container'>
                    {
                        ques.options.map(q => <p><input type="radio" value="Male" name="gender" />{q}</p>)
                    } 
                    </div>
                    
                      
                </div>

            )          
            
           }
        </div>
    );
};

export default Quizdetails;