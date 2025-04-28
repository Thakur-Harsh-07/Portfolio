import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Project from './component/Pages/Project'
import Home from './component/Pages/Home'
import Skills from './component/Pages/Skills'
import Contact from './component/Pages/Contact'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './component/Common/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='min-h-screen w-screen text-white flex flex-col'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
