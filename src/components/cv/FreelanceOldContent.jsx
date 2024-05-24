import "./../../scss/cv/freelance.scss";

const FreelanceContent = ({ freelanceOld }) => {
  const dropDown = () => {
    const chevronUp = document.querySelector(".fa-chevron-up");
    const freelanceContent = document.querySelector(".freelance_content");
    chevronUp.classList.toggle("rotation");
    freelanceContent.classList.toggle("visible");
  };

  return (
    <div className="freelance">
      <div className="freelance_dropdown">
        <h2>
          Freelance works <span>depuis 2008</span>
        </h2>
        <i className="fa-solid fa-chevron-up" onClick={dropDown}></i>
      </div>
      <div className="freelance_content">
        {freelanceOld.map((freelanceItem, index) => {
          return <p key={index}>{freelanceItem.site}</p>;
        })}
      </div>
    </div>
  );
};

export default FreelanceContent;
