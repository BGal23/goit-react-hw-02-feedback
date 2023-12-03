import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { buttonClick } = this.props;
    return (
      <div onClick={buttonClick}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
    );
  }
}
