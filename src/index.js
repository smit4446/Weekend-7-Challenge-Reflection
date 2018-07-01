import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
    if(action.type === 'ADD_FEELING') {
        console.log(`in feedbackReducer`, action);
        return {...state, feeling: action.payload}
    }
    else if(action.type === 'ADD_UNDERSTANDING') {
        console.log(`in feedbackReducer`, action);
        return {...state, understanding: action.payload}
    }
    else if(action.type === 'ADD_SUPPORT') {
        console.log(`in feedbackReducer`, action);
        return {...state, support: action.payload}
    }
    else if(action.type === 'ADD_COMMENTS') {
        console.log(`in feedbackReducer`, action);
        return {...state, comments: action.payload}
    }
    else if(action.type === 'RETURN_TO_HOMEPAGE') {
        console.log('in feedbackReducer', action);
        return action.payload;   
    }
    else if(action.type === 'CLEAR_FEEDBACK') {
        console.log('in feedbackReducer', action);
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
  
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
