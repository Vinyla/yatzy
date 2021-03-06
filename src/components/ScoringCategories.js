import React, { useState, useEffect } from 'react';
import Category from './Category';
import {
  straight,
  sumSameKind,
  totalOneNumber,
  yathzee,
  fullHouse
} from './helpers/rules';
import { getHighScore, getTotalScore, setHighScore } from './helpers/helpers';
import PlayAgainButton from './PLayAgainButton';

const ScoringCategories = (props) => {
  const [round, setRound] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);

  const dice = props.dice.map((die) => {
    return die.value;
  });

  const incrementRound = () => {
    setRound(round + 1);
  };

  useEffect(() => {
    if (round > 12) {
      if (
        getHighScore() === null ||
        Number(getTotalScore()) > Number(getHighScore())
      ) {
        setHighScore(Number(getTotalScore()));
      }
      setPlayAgain(true);
      props.setRollsLeft(0);
    }
  }, [round, props.setIsRolling, props.setRollsLeft, props]);

  return (
    <div className='categories'>
      {playAgain && (
        <div>
          <PlayAgainButton />
        </div>
      )}
      <Category
        name='Ones'
        description='1 point per 1'
        score={totalOneNumber.evaluate(dice, 1)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Twos'
        description='2 point per 2'
        score={totalOneNumber.evaluate(dice, 2)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Threes'
        description='3 point per 3'
        score={totalOneNumber.evaluate(dice, 3)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Fours'
        description='4 point per 4'
        score={totalOneNumber.evaluate(dice, 4)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Fives'
        description='5 point per 5'
        score={totalOneNumber.evaluate(dice, 5)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Sixes'
        description='6 point per 6'
        score={totalOneNumber.evaluate(dice, 6)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Three of Kind'
        description='Sum all dice if 3 are the same'
        score={sumSameKind.evaluate(dice, 3)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Four of Kind'
        description='Sum all dice if 4 are the same'
        score={sumSameKind.evaluate(dice, 3)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Full House'
        description='25 points for full house'
        score={fullHouse.evaluate(dice, 25)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Small Straight'
        description='30 points for small straight'
        score={straight.evaluateSmall(dice, 30)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Large Straight'
        description='40 points for large straight'
        score={straight.evaluateLarge(dice, 40)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Yathzee'
        description='30 points for yathzee'
        score={yathzee.evaluate(dice, 30)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name='Chance'
        description='Sum of all dice'
        score={sumSameKind.evaluate(dice, 0)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />
    </div>
  );
};

export default ScoringCategories;
