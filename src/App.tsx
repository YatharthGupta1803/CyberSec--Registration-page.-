import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import MatrixRain from './components/MatrixRain';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      {/* Animated background */}
      <MatrixRain />
      
      {/* Main content */}
      <div className="content">
        <Hero />
        <About />
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Cybersecurity Club. All systems secured.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;