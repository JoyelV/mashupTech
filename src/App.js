import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeSelector from './components/ThemeSelector';
import EkokartPage from './themes/ekomart/EkokartPage';
import MarketProPage from './themes/marketpro/MarketProPage';
import ElectroPage from './themes/electro/ElectroPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeSelector />} />
        <Route path="/ekomart" element={<EkokartPage />} />
        <Route path="/marketpro" element={<MarketProPage />} />
        <Route path="/electro" element={<ElectroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
