import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <div>
        <h2>Skills</h2>
        {skills.map((skill, index) => {
          const {type,skills} = skill;
          return (
            <div key={index} className="skill-item">
              <h3>{type}</h3>
                {skills.map((item,index)=>{
                  return <p className="white-para para-margin" key={index}>{item}</p>
                })}<br/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
