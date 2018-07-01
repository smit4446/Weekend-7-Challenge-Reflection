import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <Link to='/feelings'><button>Get Started!</button></Link>
      </div>
    );
  }
}

export default HomePage;
