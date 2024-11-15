import {  Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Edit from './components/Edit'
import Add from './components/Add'
import Home from './components/Home'

function App() {
  

  return (
    <>
     
     <Routes>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/add' element={<Add/>}/> 
      <Route path='/edit/:id' element={<Edit/>}/> 
      <Route path='/' element={<Home/>}/> 
     </Routes>
     <Footer/>
    </>
  )
}

export default App
