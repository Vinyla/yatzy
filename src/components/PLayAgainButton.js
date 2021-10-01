import React from 'react';
import { getHighScore } from './helpers/helpers';

const PlayAgainButton = () => {
  const startNewGame = () => {
    window.location.reload();
  };
  return (
    <div className='newgame'>
      <h4>Your highscore is: {getHighScore()}</h4>
      <button onClick={startNewGame}>PlayAgain</button>
    </div>
  );
};

export default PlayAgainButton;
