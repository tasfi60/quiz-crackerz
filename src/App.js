import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Questions from './Components/Questions/Questions';
// import Quiz from './Components/Quiz/Quiz';
import Quizdetails from './Components/Quizdetails/Quizdetails';
import Statistics from './Components/Statistics/Statistics';

// import Statistic from './Components/Statistics/Statistics';
// import Blog from './Components/Blog/Blog';
// import About from './Components/About/About';
// import Quizdetails from './Components/Quizdetails/Quizdetails';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children : [
        {
          path: '/',
          loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:id',
          loader: async ({params}) => {
               return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                
           },
          element: <Quizdetails></Quizdetails>
        },
        {
          path:'/questions',
          element: <Questions></Questions>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        
        // {
        //   path: '/About',
        //   element: <About></About>
        // },
        // {
        //   path: '/quiz/:quizId',
        //   loader: async ({params}) => {
        //                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        //   },
        //   element: <Quizdetails></Quizdetails>
        // }

      ]

    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router} ></RouterProvider>
     
    </div>
  );
}

export default App;
