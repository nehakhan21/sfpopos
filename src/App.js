// src/App.js
// src/App.js

import POPOSList from './POPOSList.js';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Footer from './Footer.js' ;
function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
    </div>
  );
}

  export default App;
