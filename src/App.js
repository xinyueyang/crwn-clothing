import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/signin-and-signup/signin-and-signup.component';
import {auth } from './firebase/firebase.utils';
//import { render } from 'node-sass';
import React from 'react';


class App extends React.Component { 
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({ currentUser : user});
      console.log("current user: ", user);
    })
  }

  render()
  {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
      </div>
    
    );
  }
}

export default App;
