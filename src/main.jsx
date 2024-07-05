import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Achievements from './Component/Achievements.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [{
      path:'/about',
      element: <About/>,
      children:[]
    },{
      path:'/contact',
      element: <Contact/>,
      children:[]
    },{
      path:'/experience',
      element: <About/>,
      children:[]
    },{
      path:'/achievements',
      element: <Achievements/>,
      children:[]
    }
  ]
  }, 
  {
    path:'about',
    element: <About/>,
    children:[]
  },
  {
    path:'contact',
    element: <Contact/>,
    children:[]
  },
  {
    path:'about',
    element: <About/>,
    children:[]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
