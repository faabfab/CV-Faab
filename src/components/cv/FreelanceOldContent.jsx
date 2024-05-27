import "./../../scss/cv/freelance.scss";

const FreelanceContent = ({ freelanceOld }) => {
  const dropDown = () => {
    const chevronUp = document.querySelector(".free");
    const freelanceContent = document.querySelector(".freelance_content");
    const left = document.getElementById("left-content");
    const leftImgBg = document.querySelector(".left img");
    chevronUp.classList.toggle("rotation");
    freelanceContent.classList.toggle("visible");
    leftImgBg.setAttribute("style", `height:${left.offsetHeight}px !important`);
  };

  return (
    <div className="freelance">
      <div className="freelance_dropdown">
        <h2>
          Travaux freelance <span>depuis 2008</span>
        </h2>
        <i className="fa-solid fa-chevron-up free" onClick={dropDown}></i>
      </div>
      <div className="freelance_content">
        <hr />
        {freelanceOld.map((freelanceItem, index) => {
          const logo = "./img/freelance-old/" + freelanceItem.vignette;
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
