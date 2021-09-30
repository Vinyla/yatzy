import React, { useState } from 'react';
import {
  scoringValues,
  sumCategoriesSimple,
  setTotalScore
} from './helpers/helpers';
import Rules from './Rules';
import Score from './Score';

const Category = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const onCategoryClick = (event) => {
    event.preventDefault();

    console.log(event.target.id);

    setIsChecked(true);

    setTotalScore(
      sumCategoriesSimple(props.dice, scoringValues[event.target.id])
    );
  };

  let onClick = 'category' + (isChecked ? ' onClick' : '');
  return (
    <div id={props.name} onClick={onCategoryClick} className={onClick}>
      <p>{props.name}</p>
      {!isChecked && <Rules description={props.description} />}
      {isChecked && <Score score={props.score} />}
    </div>
  );
};

export default Category;
