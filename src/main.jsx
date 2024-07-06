import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Achievements from './Component/Achievements.jsx'
import AdvanceLaparoscopy from './Pages/AdvanceLaparoscopy.jsx'
import GeneralSurgery from './Pages/GeneralSurgery.jsx'
import BariaticAndWeightLoss from './Pages/BariaticAndWeightLoss.jsx'
import BreastClinic from './Pages/BreastClinic.jsx'
import SurgicalOncology from './Pages/SurgicalOncology.jsx'
import LaserInGeneral from './Pages/LaserInGeneral.jsx'
import NavigationB from './Component/NavigationB.jsx'
import Footer from './Component/Footer.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
        children: []
      },
      {
        path: '/contact',
        element: <Contact />,
        children: []
      }, {
        path: '/experience',
        element: <About />,
        children: []
      }, {
        path: '/achievements',
        element: <Achievements />,
        children: []
      }
    ]
  },
  {
    path: '/advanceLaparoscopy',
    element: <AdvanceLaparoscopy />,
    children: []
  },
  {
    path: '/generalSurery',
    element: <GeneralSurgery />,
    children: []
  },
  {
    path: '/lasersurgery',
    element: <LaserInGeneral />,
    children: []
  },
  {
    path: '/bariaticweightloss',
    element: <BariaticAndWeightLoss />,
    children: []
  },
  {
    path: '/breastclinic',
    element: <BreastClinic />,
    children: []
  },
  {
    path: '/surgicaloncology',
    element: <SurgicalOncology />,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationB/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
