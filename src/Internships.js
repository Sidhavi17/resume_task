import React from "react";

const Internships = ({ internships }) => {
  return (
    <div className="internships">
      <h2>Internships:</h2>
      {internships.map((item, index) => {
        const { organisation, duration, team_size, project_scope, role } = item;
        return (
          <div key={index} className="internship-item">
            <p className="blue-para">Organisation: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{organisation}</p>
            <p className="blue-para">Duration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{duration} days</p>
            <p className="blue-para">Team size: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{team_size}</p>
            <p className="blue-para">Project scope: &nbsp;&nbsp;&nbsp;{project_scope}</p>
            <p className="blue-para">Role: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{role}</p>
          <br/></div>
        );
      })}
    </div>
  );
};

export default Internships;
