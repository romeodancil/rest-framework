import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Signin from './components/auth/signin'
import Register from './components/auth/register'
import Dashboard from './components/Dashboard'
import ChangePassword from './components/auth/changePassword'
import ForgotPassword from './components/auth/forgotPassword'
import ConfirmPassword from './components/auth/confirmPassword'

ReactDOM.render(
  <Router>
  	<Switch>
  		<Route exact path="/" component={Dashboard}/>
  		<Route exact path="/change-password" component={ChangePassword}/>
  		<Route exact path="/signin" component={Signin}/>
  		<Route exact path="/register" component={Register}/>
  		<Route exact path="/password-reset" component={ForgotPassword}/>
      <Route path="/password-reset/confirm/:token" component={ConfirmPassword}/>
  	</Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
