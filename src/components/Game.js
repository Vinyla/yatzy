import React, { useState, useEffect } from 'react';
import Header from './Header';
import RollButton from './RollButton';
import Dice from './Dice';
import ScoringCategories from './ScoringCategories';
import TotalScore from './TotalScore';
import { getTotalScore, setTotalScore } from './helpers/helpers';

const DICE_NUM = 5;
setTotalScore(0);

const Game = () => {
  const [dice, setDice] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [rollsLeft, setRollsLeft] = useState(3);

  useEffect(() => {
    rollAnimation();
  }, []);

  const rollDice = (reset) => {
    if (reset) {
      clearFreeze();
      setRollsLeft(2);
    } else {
      setRollsLeft(rollsLeft > 0 ? rollsLeft - 1 : 0);
    }

    const diceArray = [];
    for (let x = 0; x < DICE_NUM; x++) {
      if (dice[x] && dice[x].isLocked) {
        diceArray.push(dice[x]);
      } else {
        diceArray.push({
          id: String(DICE_NUM + '-' + x),
          isLocked: false,
          value: Math.floor(Math.random() * 6 + 1)
        });
      }
    }
    setIsRolling(false);
    setDice(diceArray);
  };

  const rollAnimation = (reset) => {
    setIsRolling(true);
    setTimeout(() => {
      rollDice(reset);
    }, 1000);
  };

  const toggleFreeze = (id) => {
    let lockedDice = [];
    for (const die of dice) {
      if (die.id === id && !isRolling && rollsLeft > 0) {
        die.isLocked = !die.isLocked;
      }
      lockedDice.push(die);
    }
    setDice(lockedDice);
  };

  const clearFreeze = () => {
    let lockedDice = [];
    for (const die of dice) {
      die.isLocked = false;
      lockedDice.push(die);
    }
    setDice(lockedDice);
  };

  return (
    <div className='game'>
      <Header />
      <Dice
        isRolling={isRolling}
        setIsRolling={setIsRolling}
        dice={dice}
        toggleFreeze={toggleFreeze}
      />
      <RollButton
        rollAnimation={rollAnimation}
        rollsLeft={rollsLeft}
        isRolling={isRolling}
      />
      <ScoringCategories dice={dice} rollAnimation={rollAnimation} />
      <div className='total'>
        <TotalScore />
      </div>
    </div>
  );
};

export default Game;
