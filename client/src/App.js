import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Data from './pages/Data'
import AddData from './pages/AddData'

import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route path="/data" element={<Data/>} />
        <Route path="/add" element={<AddData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;