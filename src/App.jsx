import './App.css'
import Navbar from './component/Navbar'
import Project from './component/Pages/Project'
import Home from './component/Pages/Home'
import Skills from './component/Pages/Skills'
import Contact from './component/Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Common/Footer'
import Certificates from './component/Pages/Certificates'
import Animation from './component/Common/Animation'

function App() {
  return (
    <div className='min-h-screen w-screen  flex flex-col'>
      <Animation/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
