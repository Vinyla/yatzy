import React from 'react';
import { getTotalScore } from './helpers/helpers';

const TotalScore = () => {
  return (
    <div className='total-score'>
      <h3>Total Score:</h3>
      <span>{getTotalScore()}</span>
    </div>
  );
};

export default TotalScore;
