import s from './FeedbackOption.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button
          key={option}
          className={s.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

// FeedbackOptions.propTypes = {
//   options
// }
