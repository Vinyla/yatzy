const sum = (dice) => {
  return dice.reduce((previous, current) => previous + current);
};

const occurences = (dice) => {
  const map = new Map();

  for (let die of dice) {
    map.set(die, (map.get(die) || 0) + 1);
  }

  const occurences = [];

  for (const value of map.values()) {
    occurences.push(value);
  }

  return occurences;
};

const getNumberOfOccurences = (dice, value) => {
  return dice.filter((dieValue) => dieValue === value).length;
};

const totalOneNumber = {
  evaluate: (dice, value) => {
    return value * getNumberOfOccurences(dice, value);
  }
};

const sumDistro = {
  evaluate: (dice, count) => {
    return occurences(dice).some((counter) => counter >= count) ? sum(dice) : 0;
  }
};

const fullHouse = {
  evaluate: (dice, score) => {
    const die = new Set(dice);

    return (die.size >= 4 && (!die.has(1) || die.has(6))) ||
      !die.has(1, 2) ||
      !die.has(5, 6) ||
      !die.has(1, 6)
      ? score
      : 0;
  }
};

fullHouse.evaluate([1, 1, 2, 2, 2], 25);
