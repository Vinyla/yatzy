import React from 'react';
import Category from './Category';

const ScoringCategories = (props) => {
  return (
    <div className='categories'>
      {props.categories &&
        props.categories.map((category, i) => {
          return (
            <Category
              name={category.name}
              description={category.description}
              score={category.score}
              key={'cat' + '-' + i}
              dice={props.dice}
            />
          );
        })}
    </div>
  );
};

export default ScoringCategories;
