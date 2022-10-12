import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




import './Quizdetails.css'

const Quizdetails = () => {

    const quess = useLoaderData().data; 

    const handleoption = (cans,ans) => {

        if(cans === ans)
        {
            toast.success('Correct Answer!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });

        }
        else
        {
            toast.success('Wrong Answer!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });
        }
       
               

    }
    
    return (

        <div>
            <FontAwesomeIcon icon="fa-Eye" />
            
            <h3>Quiz Topic: {quess.name}</h3>
           {
            quess.questions.map((ques,i) =>  
                <div className='ques-container'>
                     <FontAwesomeIcon icon="coffee" size="xs" />
                     <h4>Ques: {i+1}  {ques.question.slice(3,-4)}</h4>
                    <div className='option-container'>
                    {
                        ques.options.map(q => <p><input type="radio" value="Male" name="gender" onClick={()=> handleoption(ques.correctAnswer,q)}/>{q}</p>)
                    } 
                     <ToastContainer/>
                    </div>
                    
                      
                </div>

            )          
            
           }
        </div>
    );
};

export default Quizdetails;