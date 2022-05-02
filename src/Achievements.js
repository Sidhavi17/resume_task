import React from "react";

const Achievements = ({ achievements }) => {
  return (
    <div className="achievements">
      <div>
        <h2>Achievements</h2>
        {achievements.map((achievement, index) => {
          return (
            <div key={index} className="achievement-item">
              <p className="blue-para para-margin">{achievement}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
