import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [message, setMessage] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
        console.log(data)
      });
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Hacker Phrase Generator</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{ message }</code>
        </p>
      </header>
    </div>
  );
}

export default App;
