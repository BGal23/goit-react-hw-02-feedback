import { Component } from 'react';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class FeedbackOptions extends Component {
  state = { ...state };

  handleClick = event => {
    console.log(event.target);
  };
  render() {
    return (
      <div name={this.state} onClick={this.handleClick}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
    );
  }
}
