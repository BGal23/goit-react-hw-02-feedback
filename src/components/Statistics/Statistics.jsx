import { Component } from 'react';
import state from '../Feedback/state.json';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad } = state;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    );
  }
}
