import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const[quiz,setQuiz] = useState([]);
    useEffect (() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setQuiz(data.data))
},[]) 
    
    return (
        <div>

            <h3>Statistics Of Quiz</h3>


           <div className='stat-bar'>
            { 
            <BarChart width={450} height={400} data={quiz}>
            <Bar dataKey="total" fill="#8884d8"/>
            <XAxis dataKey="name" />
            <YAxis dataKey="total"/>
            <Tooltip />
            </BarChart>
                
            }
            
           </div>

        </div>
        
    );
};

export default Statistics;