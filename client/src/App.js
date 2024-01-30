
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import Home from "./pages/Home"

import Navbar from "./pages/Navbar"
import Admin from "./pages/Admin" 

function App(){
  return <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Register/>}></Route>
      <Route path = "login" element = {<Login/>}></Route>
      <Route path = "register" element = {<Register/>}></Route>
      <Route path="home" element= {<Home/>}></Route>
      <Route path='admin' element={<Admin />} />
    </Routes>
    </BrowserRouter>
  </div>
}

export default App