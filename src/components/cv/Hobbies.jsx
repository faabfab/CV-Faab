import { useEffect, useState } from "react";
import "./../../scss/cv/hobbies.scss";

import { getUserHobbies } from "./../../services/user";

const Hobbies = () => {
  const [userHobbiesData, setUserHobbiesData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const userHobbiesFetch = async () => {
      const responseHobbiesOk = await getUserHobbies();
      if (responseHobbiesOk) {
        setUserHobbiesData(responseHobbiesOk);
      } else {
        setError(true);
      }
    };
    userHobbiesFetch();
  });

  if (error)
    return (
      <p>
        Une erreur est survenue lors de la récupération des centres
        d&apos;intérêts.
      </p>
    );

  return (
    <div className="hobbies">
      <hr />
      <h2>
        <i className="fa-solid fa-person-through-window"></i> Centres d’intérêts
      </h2>
      {userHobbiesData.map((hobbie, index) => {
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
