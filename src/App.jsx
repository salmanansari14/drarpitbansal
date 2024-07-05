import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet }
// import { BrowserRouter, createBrowserRouter, Outlet, Route, Router, Routes }
 from 'react-router-dom'
import Head from './Component/Head.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'
import Achievements from './Component/Achievements.jsx'
import Treatements from './Component/Treatements.jsx'

function App() {
  
  return (
    <>
    <Head/>
    {/* <About/> */}
    {/* <Achievements/> */}
    {/* <About/> */}
    <Outlet/>
    <Treatements/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App