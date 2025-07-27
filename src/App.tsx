import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import WowSpace from './components/WowSpace';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/wow-space" element={<WowSpace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
