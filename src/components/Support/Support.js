import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class Support extends Component {

  constructor() {
    super();
    this.state = (
      {support: ''}
    )
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState(
      {support: event.target.value}
    )
  }

  handleClick = (event) => {
    console.log('in handleClick', this.state); 
    // event.preventDefault();
    this.sendToRedux(this.state); 
  }

  sendToRedux() {
    console.log('in sendToRedux'); 
    const data = this.state.support;
    const action = {type: 'ADD_SUPPORT', payload: data};
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className="App">
          <div>
          <div>
            <h3>How well are you being supported?</h3>
          </div>
          <div onChange={this.handleChange}>
            <input onChange={this.handleChange} name="number" type="radio" value={1}/><label>1</label>
            <input onChange={this.handleChange} name="number" type="radio" value={2}/><label>2</label>
            <input onChange={this.handleChange} name="number" type="radio" value={3}/><label>3</label>
            <input onChange={this.handleChange} name="number" type="radio" value={4}/><label>4</label>
            <input onChange={this.handleChange} name="number" type="radio" value={5}/><label>5</label>
          </div>
          <br/>
          <div>
            <button><Link onClick={this.handleClick} to='/comments'>NEXT</Link></button>
          </div>
          </div>
   
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Support);
