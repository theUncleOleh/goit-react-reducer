import React from 'react';
import Feedback from '../components/Feedback';

export default function App() {
  return <Feedback />;
}


  // handleClick = key => {
  //   this.setState(prevState => {
  //     return { [key]: prevState[key] + 1 };
  //   });
  // };
  // handleGoodClick = () => {
  //   this.setState(prevState => {
  //     return { good: prevState.good + 1 };
  //   });
  // };

  // handleNeutralClick = () => {
  //   this.setState(prevState => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };

  // handleBadClick = () => {
  //   this.setState(prevState => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  


  // render() {
  //   const keys = Object.keys(this.state);
  //   return (
  //     <section className={s.section}>
  //       <h2 className={s.title}>Please leave feedback</h2>
  //       <Controls
  //         onLeaveFeedback={e => this.handleClick(e)}
  //         options={keys}

  //         // onGood={this.handleGoodClick}
  //         // onNeutral={this.handleNeutralClick}
  //         // onBad={this.handleBadClick}
  //       />
  //       <Statistics
  //         good={this.state.good}
  //         neutral={this.state.neutral}
  //         bad={this.state.bad}
  //         total={this.countTotalFeedback()}
  //         percentage={this.countPositiveFeedbackPercentage()}
  //       />
  //     </section>
  //   );
  // }


