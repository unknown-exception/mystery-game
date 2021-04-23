import { event } from 'jquery';
import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props){
    super(props);
    this.state = {username : ''}
  }

  buttonOkClick = (event) => {
    let name = this.state.username;
    alert('Ok, your username is:' + name);
  }

  inputTextChange = (event) => {
    let name = event.target.value;
    this.setState({username: name})
  }

  render () {
    return (
      <div>
       <h1>Hello</h1>
       <input type="text" onChange={this.inputTextChange}/>
       <br /><br />

       <button className="btn btn-primary" onClick={this.buttonOkClick}>Ok</button>
      </div>
    );
  }
}
