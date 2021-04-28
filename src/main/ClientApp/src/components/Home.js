import React, { Component } from 'react';
import App from '../App';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props){
    super(props);
    this.state = {username : ''}
    this.getUserName();
  }

  async getUserName() {
    const response = await fetch(App.baseUrl + '/isUserLogged');
    debugger;
    const data = await response.json();
    /*
    if(!data.name)
      alert('please enter yourr name');
    else
    alert('Hello, ' + data.name);
    */
    //this.setState({ forecasts: data, loading: false });
  }

  async setUserName() {
    let name = this.state.username;
    // const response = await fetch(App.baseUrl + '/setUsername?name=' + name);
    // const data = await response.json();
    App.userName = name;
    this.props.history.push("/fetch-data");
  }


  buttonOkClick = (event) => { 
    debugger;
    this.setUserName();
  }

  inputTextChanged = (event) => {
    this.setState({username: event.target.value});
  }

  render () {
    return (
      <div>
        <h1>Hello,</h1>
        <h4>Name yourself, adventurer</h4>
        <input type="text" onChange={this.inputTextChanged} />
        <br /> <br />
        <button value="XXX" className="btn btn-primary" onClick={this.buttonOkClick.bind(this, 123)}>Ok</button>
      </div>
    );
  }
}
