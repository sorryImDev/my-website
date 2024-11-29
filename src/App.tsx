import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlaygroundPage } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaygroundPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
