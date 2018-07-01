import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class Comments extends Component {

  constructor() {
    super();
    this.state = (
      {comments: ''}
    )
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState(
      {comments: event.target.value}
    )
  }

  handleClick = (event) => {
    console.log('in handleClick', this.state); 
    // event.preventDefault();
    this.sendToRedux(this.state); 
  }

  sendToRedux() {
    console.log('in sendToRedux'); 
    const data = this.state.comments;
    const action = {type: 'ADD_COMMENTS', payload: data};
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className="App">
          <div>
          <div>
            <h3>Any comments you want to leave?</h3>
          </div>
          <div>
            <input onChange={this.handleChange} type="text" placeholder="Leave comment here."/>
          </div>
          <br/>
          <div>
            <button><Link onClick={this.handleClick} to='/thankyou'>NEXT</Link></button>
          </div>
          </div>
   
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comments);
