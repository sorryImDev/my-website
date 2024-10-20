import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import  { LandingPage}  from './pages';

const  App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
