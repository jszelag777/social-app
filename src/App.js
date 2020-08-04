import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Login from './Login';
import LogOut from './LogOut';
import SignUp from './SignUp';
import Nav from './Nav';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        login: false
    };
}

changeLoginState = (action) => {
  this.setState(prevState => {
    return({
      login: action
    }); 
  });
}

  render(){
    return (
      <Router>
        <Nav logins={this.state.login}/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Login"><Login changeLoginState={this.changeLoginState}/></Route>
          <Route path="/SignUp"><SignUp /></Route>
          <Route path="/LogOut"><LogOut /></Route>
        </Switch>  
      </Router>
    );
  }
}

export default App;
