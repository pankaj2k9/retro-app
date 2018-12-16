import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './datePicker.css';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Retros from './components/Retros/Retros';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Retros} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
