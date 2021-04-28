import React, { Component } from 'react';
import App from '../App';
export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { opponents: [], loading: true };
  }

  componentDidMount() {
    this.getOpponents();
  }

  static renderOpponentTable(opponents) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th> */}
          </tr>
        </thead>
        <tbody>
          {opponents.map(opponent =>
            <tr key={opponent}>
              <td>{opponent}</td>
            </tr>
          )}
        </tbody>
      </table>
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
      </div>
    );
  }

  async getOpponents() {
    debugger;
    const response = await fetch(App.baseUrl + '/getOpponentsList?name=' + App.userName);
    const data = await response.json();
    this.setState({ opponents: data, loading: false });
  }
}
