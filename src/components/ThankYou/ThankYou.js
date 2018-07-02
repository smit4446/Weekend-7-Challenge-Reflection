import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class ThankYou extends Component {

  componentDidMount(){
    this.sendFeedbackToServer(this.props.reduxStore.feedbackReducer);
}

  sendFeedbackToServer = () => {
    const feedback = this.props.reduxStore.feedbackReducer;
    console.log(this.props);
    axios.post('/feedback', feedback).then ((response) => {
      console.log('posted to server');
      const action = {type: 'CLEAR_FEEDBACK', payload: ''};
      this.props.dispatch(action);
    }).catch((error)=>{
      console.log(error);
      alert('Something went wrong!');
    })
  }

  handleClick = (event) => {
    console.log('in handleClick');
  }
  

  render() {
    return (
      <div className="App">
          <div>
          <div>
            <h3>Thank you!</h3>
          </div>
          <div>
            <button onClick={this.handleClick}><Link to='/'>Leave New Feedback</Link></button>
          </div>
          </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ThankYou);
