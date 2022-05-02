import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div className="certifications">
      <div>
        <h2>Certifications</h2>
        {certifications.map((certificate, index) => {
          return (
            <div key={index} className="certificate-item">
              <p className="blue-para para-margin">{certificate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
