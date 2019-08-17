import React from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './Die';

function App() {
  return (<div className="App" >
    <Die face="five" />
    <Die face="three" />
    <Die face="four" />
    <Die face="one" />
  </div>
  );
}

export default App;
