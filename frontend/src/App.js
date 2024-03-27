import React from 'react';
import MarkdownDisplay from './components/MarkdownDisplay';
import './App.css'; // Import a CSS file for styling

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src="AI-NEWS.jpeg" alt="AI News Logo" className="logo" />
      </div>
      <MarkdownDisplay />
    </div>
  );
}

export default App;