import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignUpWidget from './components/SignUpWidget';
import Home from './components/Home';
import SignInWidget from './components/SignInWidget';

class App extends Component {
  
  handleClick(e){
    console.log('Hello this is a click');
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <hr className="mb5"/>
          <Route path="/home" exact={true} component={Home}></Route>
          <Route path="/signup" exact={true} component={SignUpWidget}></Route>
          <Route path="/signin" exact={true} component={SignInWidget}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
