import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Sidebar from './Components/Sidebar Section/Sidebar';
import Body from './Components/Body Section/Body';
import SendVideo from './Components/SendVideo/SendVideo';
import VideoResult from './Components/VideoResult/VideoResult';
import Feedback from './Components/Feedback/Feedback';
import Register from './Components/Register/Register';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Sidebar />

        <Routes>
          <Route path='/' element={<Body />} /> 
          <Route path='/sendvideo' element={<SendVideo />} />
          <Route path='/videoresult' element={<VideoResult />} /> 
          <Route path='/feedback' element={<Feedback />} /> 
          <Route path='/register' element={<Register />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App;
