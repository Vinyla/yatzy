import React from "react";

const TotalScore = ({ totalScore }) => {
  return (
    <div className='total-score'>
      <h3>Total Score:</h3>
      <span>{totalScore ? totalScore : 0}</span>
    </div>
  );
};

export default TotalScore;