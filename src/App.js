import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Post from './components/Posts/Posts';
import Products from './components/Products/Products';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
   {path: '/', element: <Main></Main>, children:[
    { path: '/', element: <Home></Home>},
    { path: '/home', element: <Home></Home>},
    { path:'products', element: <Products></Products>},
    { 
      path:'friends', 
      loader: async () =>{
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
      element: <Friends></Friends>
    },
    {
      path:'/friend/:friendId',
      loader: async({params}) =>{
        // console.log(params.freiendId)
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetails></FriendDetails>
    },
    {
      path: 'posts',
      loader: async() =>{
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
      element: <Post></Post>
    }
   ]},
   
    { path:'about', element: <About></About>},
    {path: '*', element: <div>This Route not found 404!!!</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
