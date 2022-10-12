import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons';
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





    const showcorrectans = (correct,i) => {
        
        toast.success(`Correct Ans is : ${correct}`, {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'
        });

      

    }

    
    
    return (

        <div className='container quiz-paper'>
            
            <h3 className='quiz-topic'>Quiz Topic: {quess.name}</h3>
           {
            quess.questions.map((ques,i) =>  
                 
                <div className='ques-container' key={ques.id}>
            
                    <p className='icon'>show : <FontAwesomeIcon onClick={() => showcorrectans(ques.correctAnswer)} icon={faEye} /></p>
                     <h4 className='Question'>Ques:{i+1}.  {ques.question.slice(3,-4)}</h4>
                    <div className='option-container' >
                    {
                        ques.options.map((q,i)=> <p><input type="radio" value="Male" name="gender" className='button' onClick={()=> handleoption(ques.correctAnswer,q)}/> {i+1}. {q}</p>)
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