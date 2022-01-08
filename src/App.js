import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" />
          <Route path="/TvShows" />
          <Route path="/Movies" />
          <Route path="/myList" />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
