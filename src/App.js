import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Topic from './Components/Topic/Topic';
import Statistic from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children : [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/Topic',
          element: <Topic></Topic>
        },
        {
          path: '/Statistics',
          element: <Statistic></Statistic>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: '/About',
          element: <About></About>
        }

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
