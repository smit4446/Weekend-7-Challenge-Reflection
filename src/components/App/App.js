import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import HomePage from '../HomePage/HomePage';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../AdminPage/AdminPage';
import 'typeface-roboto';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <div>
            <Route exact path = '/' component = {HomePage}/>
            <Route exact path = '/feelings' component = {Feelings}/>
            <Route exact path = '/understanding' component = {Understanding}/>
            <Route exact path = '/support' component = {Support}/>
            <Route exact path = '/comments' component = {Comments}/>
            <Route exact path = '/thankyou' component = {ThankYou}/>
            <Route exact path = '/admin' component = {Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
