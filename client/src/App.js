import logo from './logo.svg';
import './App.css';
import Home from './Home/index';
import About from './About/About';
import Team from './Team/Team';
import Contact from './Contact/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

  
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/team">
              <Team/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
