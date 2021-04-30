import React, { Component } from 'react';
import App from '../App';
export class FetchData extends Component {
  static displayName = FetchData.name;
  static _this;
  constructor(props) {
    super(props);
    this.state = { opponents: [], loading: true };
    FetchData._this = this;

    FetchData._this.interval = setInterval(function(){ 
      FetchData._this.isGotOpponents();
     }, 3000);
  }

  async isGotOpponents() {
    
    const response = await fetch(App.baseUrl + '/isGotOpponent?name=' + App.userName);
    const data = await response.json();
    console.log(data)
    if(!data.name)
      return;
    App.opponentName = data.name;
    clearInterval(FetchData._this.interval);
    FetchData._this.props.history.push("/counter");
    
  }

  static handleClick(name) {
    App.opponentName = name;
    FetchData._this.props.history.push("/counter");
    fetch(App.baseUrl + '/startBattle?name=' + App.userName + '&opponentName=' + App.opponentName);
  }

  componentDidMount() {
    this.getOpponents();
  }

  static renderOpponentTable(opponents) {
    return (
      <div>
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {opponents.map(opponent =>
            <tr key={opponent}>
              <td><button className="btn btn-primary" onClick={() => {debugger; this.handleClick(opponent);} }>{opponent}</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="btn btn-primary" valie='XXX' onClick={this.buttonOppClick}>Ok</button>
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderOpponentTable(this.state.opponents);

    return (
      <div>
        <h1 id="tabelLabel" >Hello {App.userName}</h1>
        <p>Choose your opponent</p>
        {contents}
        <hr />
      </div>
    );
  }

  async getOpponents() {
    const response = await fetch(App.baseUrl + '/getOpponentsList?name=' + App.userName);
    const data = await response.json();
    //const data = ['One', 'Two', 'three'];
    this.setState({ opponents: data, loading: false });
  }
}
