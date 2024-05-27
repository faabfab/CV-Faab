import "./../../scss/cv/freelance.scss";

const Entreprise = ({ jobsOld }) => {
  const dropDown = () => {
    const chevronUpSalary = document.querySelector(".salary");
    const freelanceContent = document.querySelector(".entreprise");
    const left = document.getElementById("left-content");
    const leftImgBg = document.querySelector(".left img");
    chevronUpSalary.classList.toggle("rotation");
    freelanceContent.classList.toggle("visible");
    leftImgBg.setAttribute("style", `height:${left.offsetHeight}px !important`);
  };

  return (
    <div className="freelance">
      <div className="freelance_dropdown">
        <h2>
          Emplois salariés <span>avant 2008</span>
        </h2>
        <i className="fa-solid fa-chevron-up salary" onClick={dropDown}></i>
      </div>
      <div className="freelance_content entreprise">
        <hr />
        {jobsOld.map((job, index) => {
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
