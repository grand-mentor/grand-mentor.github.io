import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Head from './Head';
import Welcome from './Welcome'
import App from './App'
import Contact from './Contact'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Head} />
        <Route exact path = "/" component = {Welcome} />
        <Route exact path = "/start" component = {App} />   
        <Route exact path = "/contact" component = {Contact} />   
      </div>
    );
  }
}

export default Home;
