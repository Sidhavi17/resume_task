import React from "react";
import PersonalDetails from "./PersonalDetails";
import EducationalDetails from "./EducationalDetails";
import Achievements from './Achievements';
import Skills from "./Skills";
import ProjectDetails from './ProjectDetails'
import Internships from "./Internships";
import Summary from "./Summary";
import Certifications from "./Certifications";
import data from "./data";

function App() {
  const {
    name,
    qualification,
    phoneno,
    address,
    emailid,
    linkedinid,
    education,
    project,
    summary,
    skills,
    certifications,
    internships,
    achievements,
  } = data;
  return (
    <main>
      <section className="container-1">
        <div className="main-section">
          <h1>{name}</h1>
          <p>{qualification}</p>
        </div>
        <PersonalDetails
          phoneno={phoneno}
          address={address}
          emailid={emailid}
          linkedinid={linkedinid}
        />
         <Summary 
          summary={summary} 
          />
        <EducationalDetails education={education} />
        <Skills skills={skills} />
      </section>
      <section className="container-2">
        <Internships internships={internships} />
        <ProjectDetails project={project}/>
        <Certifications certifications={certifications} />
        <Achievements achievements={achievements} />
      </section>
    </main>
  );
}

export default App;
