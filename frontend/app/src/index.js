import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SampleList from './components/SampleList'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Signin from './components/auth/signin'

ReactDOM.render(
  <Router>
  	<Switch>
  		<Route exact path="/" component={SampleList}/>
  		<Route exact path="/signin" component={Signin}/>
  	</Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
