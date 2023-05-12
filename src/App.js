import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Banner from './Components/Banner.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
    </BrowserRouter>
  )
}

export default App