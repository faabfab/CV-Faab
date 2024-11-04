import { useEffect, useState } from "react";
import "./../../scss/cv/freelance.scss";
import { getOldFreelanceWork } from "../../services/old-freelance-works";

const FreelanceContent = () => {
  const [oldFreelanceData, setOldFreelanceData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const oldFreelanceFetch = async () => {
      const responseOk = await getOldFreelanceWork();
      if (responseOk) {
        setOldFreelanceData(responseOk);
      } else {
        setError(true);
      }
    };
    oldFreelanceFetch();
  }, []);

  const dropDown = () => {
    const chevronUp = document.querySelector(".free");
    const freelanceContent = document.querySelector(".freelance_content");
    const left = document.getElementById("left-content");
    const leftImgBg = document.querySelector(".left img");
    chevronUp.classList.toggle("rotation");
    freelanceContent.classList.toggle("visible");
    leftImgBg.setAttribute("style", `height:${left.offsetHeight}px !important`);
  };

  if (error) return <h2>Erreur</h2>;
  return (
    <div className="freelance">
      <div className="freelance_dropdown" onClick={dropDown}>
        <h2>
          Travaux freelance <span>depuis 2008</span>
        </h2>
        <i className="fa-solid fa-chevron-up free"></i>
      </div>
      <div className="freelance_content">
        <hr />
        {oldFreelanceData.map((freelanceItem, index) => {
          const logo = freelanceItem.vignette;
          return (
            <div className="freelance_content_job" key={index}>
              <div className="freelance_content_job_header">
                <h3>
                  Développeur: <span>{freelanceItem.site}</span>
                </h3>
                <img src={logo} alt={freelanceItem.site} />
              </div>
              <code>{freelanceItem.date}</code>&nbsp;&nbsp;
              <code>{freelanceItem.location}</code>
              <div className="freelance_content_job_text">
                <div className="freelance_content_job_text_link">
                  <p>
                    <b>{freelanceItem.description}</b> :
                  </p>
                  <a
                    href={freelanceItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
                <ul>
                  {freelanceItem.work.map((work, index) => {
                    return <li key={index}>{work}</li>;
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

export default FreelanceContent;
