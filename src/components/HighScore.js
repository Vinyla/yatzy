import React from 'react';
import { getHighScore } from './helpers/helpers';

const HighScore = () => {
  return (
    <div className='total-score'>
      <h3>High Score:</h3>
      <span>{getHighScore()}</span>
    </div>
  );
};

export default HighScore;
