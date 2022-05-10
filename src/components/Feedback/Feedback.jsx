import { useReducer, useEffect } from 'react';

import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
function countFeedback(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };
    case 'bad':
      return { ...state, bad: state.bad + action.payload };
    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };
    default:
      throw new Error('aaaaaaaaaaaaaaaaaaaaaaaaa');
  }
}
// function init(state) {
//   const localStorage = JSON.parse(window.localStorage.getItem(state));
//   return {
//     ...state,
//     ...localStorage,
//   };
// }
export default function Feedback() {
  const [state, dispatch] = useReducer(
    countFeedback,
    {
      good: 0,
      bad: 0,
      neutral: 0,
    }
    // init
  );
  // return (
  //   <div className={s.container}>
  //     <p>{state.good}</p>
  //     <p>{state.bad}</p>
  //     <p>{state.neutral}</p>
  //     <button
  //       className={s.button}
  //       onClick={() => dispatch({ type: 'good', payload: 1 })}
  //     >
  //       good
  //     </button>
  //     <button
  //       className={s.button}
  //       onClick={() => dispatch({ type: 'bad', payload: 1 })}
  //     >
  //       bad
  //     </button>
  //     <button
  //       className={s.button}
  //       onClick={() => dispatch({ type: 'neutral', payload: 1 })}
  //     >
  //       neutral
  //     </button>
  //   </div>
  // );
  // const [good, setGood] = useState(0);
  // const [bad, setBad] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const options = ['good', 'bad', 'neutral'];
  // const handleClick = option => {
  //   // const option = event.target.textContent;
  //   switch (option) {
  //     case 'good':
  //       setGood(prevState => prevState + 1);
  //       break;
  //     case 'bad':
  //       setBad(prevState => prevState + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(prevState => prevState + 1);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('state', JSON.stringify(state));
  // }, [state]);

  // useEffect(() => {
  //   const localStorage = JSON.parse(window.localStorage.getItem(state));
  // });

  const handleClick = option => {
    dispatch({ type: option, payload: 1 });
  };
  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / (state.good + state.neutral));
  };
  const total = countTotalFeedback();
  const keys = Object.keys(state);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="there is no feedback"></Notification>
        )}
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
