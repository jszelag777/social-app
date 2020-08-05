import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './Home';
import Login from './Login';
import LogOut from './LogOut';
import SignUp from './SignUp';
import Nav from './Nav';

class App extends Component {

  constructor(props){
    super(props);

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.state = {
        loginStatus: (this.user)?true:false
    };
}

changeLoginState = (action) => {
  this.setState(prevState => {
    return({
      loginStatus: action
    }); 
  });
}

  render(){

    console.log(this.state.login);
    return (
      <Router>
        <Nav logins={this.state.login}/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Login">
            {this.state.loginStatus ? <Redirect to="/" /> : <Login changeLoginState={this.changeLoginState}/>}
          </Route>
          <Route path="/SignUp"><SignUp /></Route>
          <Route path="/LogOut">
            {this.state.loginStatus ?  <LogOut changeLoginState={this.changeLoginState}/>: <Redirect to="/" />}
          </Route>
          
        </Switch>  
      </Router>
    );
  }
}

export default App;
