import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlaygroundPage } from './pages';
import LandingPage from './pages/landing-page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/pg" element={<PlaygroundPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
