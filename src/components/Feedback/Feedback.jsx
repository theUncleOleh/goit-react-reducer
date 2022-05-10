import React, { useState } from 'react';

// import s from './Feedback.module.css';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = ['good', 'bad', 'neutral'];

  const handleClick = option => {
    // const option = event.target.textContent;

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral));
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
        <Notification message="there is no feedback"></Notification>
      </Section>
    </div>
  );
}

/* // class OldFeedback extends React.Component { */

//   //  constructor () {
//   //      super ()

//   //      this.state = {
//   //         good: 0,
//   //         neutral: 0,
//   //         bad: 0
//   //       }
//   //  }
//   //  static defaultProps = {
//   //    total: 0,
//   //    positiveFeedback: 0,
//   //  }
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

// countPositiveFeedbackPercentage = () => {
//   return Math.round(
//     (this.state.good * 100) / (this.state.good + this.state.neutral)
//   );
// };

// }

Feedback.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.string,
  positivePercentage: PropTypes.string,
};
