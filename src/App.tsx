import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage';
import EventPage from './pages/EventPage';
import PlazaPage from './pages/PlazaPage';
import StoryPage from './pages/StoryPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:type" element={<MenuPage />} />

        <Route path="/play/event/:type" element={<EventPage />} />
        <Route path="/play/plaza" element={<PlazaPage />} />

        <Route path="/story/:type" element={<StoryPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App