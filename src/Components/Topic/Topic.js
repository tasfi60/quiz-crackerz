import React from 'react';
import'./Topic.css';

const Topic = ({topic}) => {

    const {logo,name,total}= topic;

    // const handlequiz() => {
    //     onClick={ () => handlequiz(props.course)}
    // }

    return (
        <div className='topics'>
           <img src={logo} alt="" />
            <h2>{name}</h2>
            <p>Total Questions: {total}</p>
            <button  className='btn-container'>
                Start Quiz
            </button>
        </div>
    );
};

export default Topic;