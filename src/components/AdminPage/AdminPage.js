import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

    constructor(){
        super();
        this.state = {
            feedback:[]
        }
    }

    componentDidMount(){
        this.getFeedback();
      }

    getFeedback(){
        axios.get('/feedback').then((response)=> {
            console.log(response.data);
            this.setState({feedback: response.data});
            console.log('in getFeedback', this.state);
        }).catch((error) => {
            console.log(error);
            alert('something went wrong');   
        })     
    }

    render() {
        return (
        <div className="App">
        <table>
            <thead>
                <tr>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Supported?</th>
                <th>Comment</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.feedback.map((item,i) =>
                <tr key={i}>
                    <td>{item.feeling}</td>
                    <td>{item.understanding}</td>
                    <td>{item.support}</td>
                    <td>{item.comments}</td>
                    <td><button>Delete</button></td>
                </tr>)}
            </tbody>
        </table>
        </div>
        );
    }
}

export default Admin;