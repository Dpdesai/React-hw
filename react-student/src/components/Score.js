import React from "react";

function Score({ score }) {
  return (
    <div className="score-board">
      {score.map((item, id) => (
        <div key={id} className="score-info">
          <p>{item.date}</p>
          <p className="score">{item.score}</p>
        </div>
      ))}
    </div>
  );
}

export default Score;
