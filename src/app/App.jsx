//Libraries
import React from 'react'
import { Routes, Route } from 'react-router-dom'
//Components
import Home from '../views/home/Home'
//Style
import style from './App.module.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
    </Routes>
  )
}

export default App
