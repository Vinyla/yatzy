import React from 'react';

const RollButton = (props) => {
  return (
    <div>
      <button
        disabled={
          props.isRolling === true ||
          props.rollsLeft === 0 ||
          props.areAllDiceLocked
        }
        onClick={() => props.rollAnimation()}
        className='roll-button'
      >
        {props.rollsLeft} Rolls Left
      </button>
    </div>
  );
};

export default RollButton;
