import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path: '/login',
    element : <LoginForm/>
  },
  {
    path: '/register',
    element : <RegisterForm/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


