import { useEffect, useState } from "react";
import "./../../scss/cv/front-end-formations.scss";
import {
  getAllFrontProjects,
  getFrontFormation,
} from "../../services/front-formation";

const Content = () => {
  const [formationsData, setFormationsData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const formationFetch = async () => {
      const responseOk = await getFrontFormation();
      if (responseOk) {
        setFormationsData(responseOk);
      } else {
        setError(true);
      }
    };
    formationFetch();
  }, []);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsFetch = async () => {
      const responseOk = await getAllFrontProjects();
      if (responseOk) {
        setProjects(responseOk);
      } else {
        setError(true);
      }
    };
    projectsFetch();
  }, []);

  if (error) return <h2>Erreur</h2>;

  return (
    <div className="formations">
      <h2>Formations Front-end</h2>
      {formationsData.map((formation, index) => {
        return (
          <div className="formations_formation" key={index}>
            <h3>
              {formation.name}
              <span> - {formation.organisme}</span>
            </h3>
            <hr />
            <div className="formations_formation_projets">
              {projects.map((projet, index) => {
                const logo = "./img/front-end/" + projet.logo;
                return (
                  <div
                    className="formations_formation_projets_projet"
                    key={index}
                  >
                    <div className="formations_formation_projets_projet_header">
                      <h4>{projet.projectName}</h4>
                      <img src={logo} alt={projet.projectName} />
                    </div>
                    <h5>{projet.title} :</h5>
                    <ul>
                      {projet.objectifs.map((objectif, index) => {
                        return <li key={index}>{objectif}</li>;
                      })}
                    </ul>
                    <div className="formations_formation_projets_projet_links">
                      <a
                        href={projet.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a
                        href={projet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
