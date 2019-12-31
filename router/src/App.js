import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "./css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <Router>
              {/* Menu */}
         <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
           {/* Nội dung */}
           <Route path="/home" exact component={Home}/>
           <Route path="/about" exact component={About}/>
      </div>
      </Router>
    );
  }
}

export default App;
