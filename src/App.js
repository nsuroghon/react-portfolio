import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router  } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router >
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />

      </div>
    </Router>
  );
}

export default App;
