import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Quizdetails from './Components/Quizdetails/Quizdetails';
import Statistics from './Components/Statistics/Statistics';
import Main from './layouts/Main';
import About from './Components/About/About';

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
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/Topic',
          element: <Topics></Topics>
        },
        {
         path: '/About',
         element: <About></About>
        }
        
      ]

    },
       { path: '*',
         element: <div><h2 className='mt-5'>404 ! This route not found</h2></div> 
        }
  ])
  return (
    <div className="App">

      <RouterProvider router={router} ></RouterProvider>
     
    </div>
  );
}

export default App;
