import { Component } from 'react';
import state from './state.json';

export class FeedbackOptions extends Component {
  state = { ...state };

  handleClick = event => {
    if (event.target.type === 'button') {
      const name = event.target.innerText.toLowerCase();
      this.setState({
        state:
          event.target.innerText.toLowerCase() === name && (state[name] += 1),
      });
    }

    console.log(state);
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
    );
  }
}
