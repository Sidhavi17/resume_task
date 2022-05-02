import React from "react";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project">
      <h2>Project Details</h2>
      {project.map((item, index) => {
        const { title, duration, team, technology, role } = item;
        return (
          <div key={index} className="">
            <p className="blue-para">Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{title}</p>
            <p className="blue-para">Duration:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{duration} year</p>
            <p className="blue-para">Team-size:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{team}</p>
            <p className="blue-para">Technology:&nbsp;&nbsp;{technology}</p>
            <p className="blue-para">Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetails;
