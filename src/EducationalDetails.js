import React from "react";

const Education = ({ education }) => {
  return (
    <div className="educational-details">
      <h2 className="education-heading">Educational Details</h2>
      {education.map((item, index) => {
        const { school_college_name, standard, year, aggregate, location, completion_year } = item;
        return (
          <div key={index}>
            <h3>{school_college_name}</h3>
            <h4>{standard},{year}</h4>
            <p className="white-para para-margin">{completion_year}</p>
            <p className="white-para para-margin">Aggregate cgpa-{aggregate}</p>
            <p className="white-para para-margin">{location}</p><br/>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
