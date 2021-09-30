import React, { useState, useEffect } from 'react';
import Header from './Header';
import RollButton from './RollButton';
import Dice from './Dice';
import ScoringCategories from './ScoringCategories';
import TotalScore from './TotalScore';
import { getTotalScore, setTotalScore } from './helpers/helpers';

//ako selektujem sve kocice - button disabled
// nakon sto selektujem kategoriju rollam ponovo

const DICE_NUM = 5
setTotalScore(0);

const Game = () => {

  const [dice, setDice] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [areAllDiceLocked, setAreAllDiceLocked] = useState(false);
  const [rollsLeft, setRollsLeft] = useState(3);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(require('./data/categories'));
    rollDiceValue();
    rollAnimation();
  }, []);

  const rollDiceValue = () => {
    const diceArray = [];
    let checkLocked = false;
    for (let x = 0; x < DICE_NUM; x++) {
      if (dice[x] && dice[x].isLocked) {
        diceArray.push(dice[x]);
        checkLocked = true;
      } else {
        diceArray.push({
          id: String(DICE_NUM + '-' + x),
          isLocked: false,
          value: Math.floor(Math.random() * 6 + 1)
        });
        checkLocked = false;
      }
    }
    setAreAllDiceLocked(checkLocked);
    setIsRolling(false);
    setDice(diceArray);
    setRollsLeft(rollsLeft > 0 ? rollsLeft - 1 : 0);
  };

  const rollAnimation = () => {
    setIsRolling(true);
    setTimeout(rollDiceValue, 1000);
  };
  const toggleFreeze = (id) => {
    let lockedDice = [];
    let checkLocked = false;
    for (const die of dice) {
      if (die.id === id && !isRolling && rollsLeft > 0) {
        die.isLocked = !die.isLocked;
      }
      lockedDice.push(die);
    }
    lockedDice.forEach((die) => {
      checkLocked = die.isLocked;
    });
    setAreAllDiceLocked(checkLocked);
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
        areAllDiceLocked={areAllDiceLocked}
      />
      <ScoringCategories dice={dice} categories={categories} />
      <div className='total'>
        <TotalScore totalScore={getTotalScore()} />
      </div>
    </div>
  );
};

export default Game;
