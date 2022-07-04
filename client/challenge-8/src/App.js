import React from 'react';
import logo from './logo.svg';
import './css/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CHALLENGE CHAPTER 8
        </p>
        <a
          className="App-link"
          href="http://localhost:4000/api-docs"
        >
          Open Documentation
        </a>
        <a
          className="App-link"
          href="http://localhost:3000/api/v1/players"
        >
          Open Dashboard
        </a>
      </header>
    </div>
  );
}

export default App;
