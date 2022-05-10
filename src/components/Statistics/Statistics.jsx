import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.container}>
      <li className={s.item}> Good : {good}</li>
      <li className={s.item}>Neutral : {neutral}</li>
      <li className={s.item}>Bad : {bad}</li>
      <li className={s.item}> Total : {total}</li>
      <li className={s.item}> Positive persentage : {positivePercentage}</li>
    </ul>
  );
};

export default Statistics;
