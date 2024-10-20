import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import IntegratedPage from './Pages/IntegratedPage.tsx';
import "./Styles/global.css"
import LoginPage from './Pages/Login/LoginPage.tsx';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<IntegratedPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;