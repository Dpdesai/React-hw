import React from "react";
import Score from "./Score";

function Students({ data }) {
  return (
    <div className="student-data">
      {data.map((item, index) => (
        <div key={index} className="student-info">
          <h3>{item.name}</h3>
          <p>{item.bio}</p>
          <Score score={item.scores} />
        </div>
      ))}
    </div>
  );
}

export default Students;
