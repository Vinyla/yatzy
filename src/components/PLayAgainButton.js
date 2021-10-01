import React from 'react';

const PlayAgainButton = () => {
  const startNewGame = () => {
    window.location.reload();
  };
  return (
    <div className='newgame'>
      <h4>End Game!</h4>
      <button onClick={startNewGame}>PlayAgain</button>
    </div>
  );
};

export default PlayAgainButton;
