

import './App.css'
import Header from './components/Header'
import {  Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {

  return (
    <>
    <Header/>
    <Routes>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
   </Routes>
    </>
  )
}

export default App
