import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Data from './pages/Data'
import AddData from './pages/AddData'

import './styles/App.css'
import './styles/mediaquery.css'
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/data" element={<Data />} />
        <Route exact path="/add" element={<AddData />} />
        <Route exact path="/forgot" element={<ForgotPassword />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;