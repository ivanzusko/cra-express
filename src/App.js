import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Just testing stuff
  const ping = () => {
    window.fetch('/ping')
      .then(data => {
        console.log("Test ping: ", data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => ping()}>Test Ping</button>
      </header>
    </div>
  );
}

export default App;
