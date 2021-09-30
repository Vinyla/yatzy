

const getTotalScore = () => {
 localStorage.getItem("total_score")
}

const setTotalScore = (score) => {
 localStorage.setItem("total_score", score);
}


const scoringValues = {
  Ones: 1,
  Twos: 2,
  Threes: 3,
  Fours: 4,
  Fives: 5,
  Sixes: 6
};


module.exports = {
  getTotalScore,
  setTotalScore,
  scoringValues
};

