// src/App.js
// src/App.js
import { HashRouter as Router, Route } from 'react-router-dom'
import POPOSList from './POPOSList.js';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Footer from './Footer.js' ;
import About from './About'
import POPOSDetails from './POPOSDetails'
function App() {
  return (
    <Router>
    <div className="App">

      <Title />

      <Route exact path="/" component={POPOSList}/>
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={POPOSDetails} />

      <Footer />
    </div>
  </Router>
  );
}

  export default App;
