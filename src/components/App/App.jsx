import { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import data from './data.json';

export class App extends Component {
  state = { ...data };

  handleClick = event => {
    if (event.target.type === 'button') {
      const name = event.target.innerText.toLowerCase();
      this.setState({
        [name]: this.state[name] + 1,
      });
    }
    this.countTotalFeedback(this.state);
  };

  countTotalFeedback = state => {
    this.setState({ total: state.good + state.neutral + state.bad });
    console.log(this.state);
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions buttonClick={this.handleClick} />
        <Section title="Statistics" />
        <Notification message="There is no feedback" />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total > 0 ? total : 0}
        />
      </div>
    );
  }
}
