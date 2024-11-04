import { useEffect, useState } from "react";
import "./../../scss/cv/freelance.scss";
import { getOldEmployment } from "../../services/old-employment";

const Entreprise = () => {
  const [oldEmploymentData, setOldEmploymentData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const oldEmploymentFetch = async () => {
      const responseOk = await getOldEmployment();
      if (responseOk) {
        setOldEmploymentData(responseOk);
      } else {
        setError(true);
      }
    };
    oldEmploymentFetch();
  }, []);

  const dropDown = () => {
    const chevronUpSalary = document.querySelector(".salary");
    const freelanceContent = document.querySelector(".entreprise");
    const left = document.getElementById("left-content");
    const leftImgBg = document.querySelector(".left img");
    chevronUpSalary.classList.toggle("rotation");
    freelanceContent.classList.toggle("visible");
    leftImgBg.setAttribute("style", `height:${left.offsetHeight}px !important`);
  };

  if (error) return <h2>Erreur</h2>;

  return (
    <div className="freelance">
      <div className="freelance_dropdown" onClick={dropDown}>
        <h2>
          Emplois salariés <span>avant 2008</span>
        </h2>
        <i className="fa-solid fa-chevron-up salary" onClick={dropDown}></i>
      </div>
      <div className="freelance_content entreprise">
        <hr />
        {oldEmploymentData.map((job, index) => {
          const logo = "./img/freelance-old/" + job.logo;
          return (
            <div className="freelance_content_job" key={index}>
              <div className="freelance_content_job_header">
                <h3>
                  {job.poste}: <span>{job.name}</span>
                </h3>
                <img src={logo} alt={job.logo} />
              </div>
              <code>{job.date}</code>&nbsp;&nbsp;
              <code>{job.city}</code>
              <div className="freelance_content_job_text">
                <ul>
                  {job.missions.map((mission, index) => {
                    return <li key={index}>{mission}</li>;
                  })}
                </ul>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Entreprise;
