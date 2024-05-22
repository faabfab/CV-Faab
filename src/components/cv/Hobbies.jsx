import "./../../scss/cv/hobbies.scss";

const Hobbies = ({ userHobbies }) => {
  console.log(userHobbies);
  return (
    <div className="hobbies">
      <hr />
      <h2>
        <i className="fa-solid fa-person-through-window"></i> Centres d’intérêts
      </h2>
      {userHobbies.map((hobbie, index) => {
        const iconClass = `fa-solid ${hobbie.icon}`;
        return (
          <div className="hobbies_hobbie" key={index}>
            <i className={iconClass}></i>
            <p>
              {hobbie.name}
              <br />
              <span>{hobbie.text}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Hobbies;
