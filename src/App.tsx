import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App