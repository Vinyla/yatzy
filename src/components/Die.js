import React from 'react';

const Die = (props) => {
  const getImageSrc = (number) => {
    if (!props.value) {
      return `/images/1.png`;
    } else return `/images/${number}.png`;
  };

  let dieClass = 'die' + (props.isRolling && !props.locked ? ' die-roll' : '');

  if (props.locked) {
    dieClass += ' die-selected ';
  }

  return (
    <div>
      <img
        onClick={() => props.toggleFreeze(props.id)}
        className={dieClass}
        src={getImageSrc(props.value)}
        alt='pic'
      />
    </div>
  );
};

export default Die;
