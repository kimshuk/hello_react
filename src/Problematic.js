import React, { Component } from 'react';

const Problematic = () => {
  throw new Error('버그가 나타났다!');
  return <div />;
};

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>Value: {this.state.number}</div>
        {this.state.number === 4 && <Problematic />}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
