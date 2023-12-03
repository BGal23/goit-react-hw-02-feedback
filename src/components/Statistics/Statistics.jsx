import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total } = this.props;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
      </ul>
    );
  }
}
