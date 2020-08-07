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
import SignUp from './SignUp';
import Nav from './Nav';
import axios from 'axios';

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

getLogOutUser = (action) => {
  localStorage.removeItem('user');
  //this.user = JSON.parse(localStorage.getItem('user'));
  //const token = this.user.jwt_token;

  // let axiosConfig = {
  //   headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Authorization': 'Bearer ' + token
  //   }
  // };

  // axios.post(
  //   'https://akademia108.pl/api/social-app/user/logout', 
  //   JSON.stringify(newUser),
  //   axiosConfig)
  //   .then((req) => {     
  //       console.log(req.data);  
  //   }).catch((error) => {
  //       console.error(error);
  //   })

  this.setState(prevState => {
    return({
      loginStatus: action
    }); 
  });
  console.log(this.state.loginStatus);
} 

  render(){

    console.log(this.state.login);
    return (
      <Router>
        <Nav logins={this.state.login} getLogOutUser={this.getLogOutUser}/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Login">
            {this.state.loginStatus ? <Redirect to="/" /> : <Login changeLoginState={this.changeLoginState}/>}
          </Route>
          <Route path="/SignUp"><SignUp /></Route>
        </Switch>  
      </Router>
    );
  }
}

export default App;
