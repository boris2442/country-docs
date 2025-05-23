import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
// import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;