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

function App() {
  
  return (
    <>
     {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"
            element={<Head/>}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Head/>
      <Navbar/>
      <About/> */}
    <Head/>
    {/* <About/> */}
    <Achievements/>
    <Outlet/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App