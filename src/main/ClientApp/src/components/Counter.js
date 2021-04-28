import React, { Component } from 'react';
import App from '../App';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    debugger;
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {App.userName}</h1>
        <p aria-live="polite">Choose your opponent <strong></strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
