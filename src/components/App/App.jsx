import { Section } from '../Section/Section';
import { FeedbackOptions } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions />
      <Section title="Statistics" />
      <Notification message="There is no feedback" />
      <Statistics />
    </div>
  );
};
