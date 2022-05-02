import React from "react";

const Summary = ({ summary,project_work }) => {
  return (
    <div>
     {summary.map((item, index) => {
        const { summ, project_work } = item;
        return (
          <div key={index} className="summary">
            <p className="blue-para">{summ}</p>
           <br/> <h2>Project Work</h2>
         <p className="blue-para">{project_work}</p>
             </div>
        );
      })}
    </div>
  );
};

export default Summary;
