import { Component } from 'react';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class FeedbackOptions extends Component {
  state = { ...state };

  handleClick = event => {
    const name = event.target.innerText.toLowerCase();
    this.setState({
      state: event.target.innerText.toLowerCase() === name && (state.good += 1),
    });
    console.log(state);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div name={this.state} onClick={this.handleClick}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}
