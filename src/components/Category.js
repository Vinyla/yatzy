import React, { useState } from 'react';
import Rules from './Rules';
import Score from './Score';

const Category = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const setScoreValue = () => {
    setIsChecked(true);
  };

  const names = {};
  return (
    <div onClick={setScoreValue} className='category'>
      <p>{props.name}</p>
      {!isChecked && <Rules description={props.description} />}
      {isChecked && <Score />}
    </div>
  );
};

export default Category;
