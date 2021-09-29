import React, { useState } from 'react';
import Category from './Category';
import TotalScore from './TotalScore';

const ScoringCategories = () => {
  const [isCategory, setIsCategory] = useState([]);
  return (
    <div>
      <div className='categories'>
        <div>
          <Category name='Ones' description='1 point per 1' score='' />
          <Category name='Twos' description='2 point per 2' score='' />
          <Category name='Threes' description='3 point per 3' score='' />
          <Category name='Fours' description='4 point per 4' score='' />
          <Category name='Fives' description='5 point per 5' score='' />
          <Category name='Sixes' description='6 point per 6' score='' />
        </div>
        <div>
          <Category
            name='Three of Kind'
            description='Sum all dice if 3 are the same'
            score=''
          />
          <Category
            name='Four of Kind'
            description='Sum all dice if 4 are the same'
          />
          <Category
            name='Full House'
            description='25 points for full house'
            score=''
          />
          <Category
            name='Small Straight'
            description='30 points for small straight'
            score=''
          />
          <Category
            name='Large Straight'
            description='40 points for large straight'
            score=''
          />
          <Category
            name='Yahtzee'
            description='30 points for yahtzee'
            score=''
          />
        </div>
      </div>
      <div className='total'>
        <Category name='Chance' description='Sum of all dice' score='' />
      </div>
      <div className='total'>
        <TotalScore />
      </div>
    </div>
  );
};

export default ScoringCategories;
