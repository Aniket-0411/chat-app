import { useState } from 'react'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Register from './Components/Register'
import Login from './Components/Login'
import Chat from './Components/Chat'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/" exact element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
