import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
    return (
      <Router>
         
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/Home" element={<Home/>} />
         
          
        </Routes>
      </Router>
      
    );
  }
  
  export default App;