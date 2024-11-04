/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import "./../../scss/cv/competences.scss";
import {
  getUserCompetence,
  getUserCompetenceElementAll,
  readItems,
} from "../../services/user";

const Competences = () => {
  const [userCompetencesData, setUserCompetencesData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const userCompetencesFetch = async () => {
      const responseOk = await getUserCompetence();
      if (responseOk) {
        setUserCompetencesData(responseOk);
      } else {
        setError(true);
      }
    };
    userCompetencesFetch();
  }, []);

  const [userCompetenceElementData, setUserCompetenceElementData] = useState(
    []
  );

  useEffect(() => {
    const userCompetenceElementFetch = async () => {
      const responseOk = await getUserCompetenceElementAll();
      if (responseOk) {
        setUserCompetenceElementData(responseOk);
      } else {
        setError(true);
      }
    };
    userCompetenceElementFetch();
  }, []);

  const [items, setItem] = useState([]);
  useEffect(() => {
    const itemsFetch = async () => {
      const responseOk = await readItems();
      if (responseOk) {
        setItem(responseOk);
      } else {
        setError(true);
      }
    };
    itemsFetch();
  }, []);

  if (error) return <h2>Error</h2>;

  // TODO: Intégrer les couleurs des badges
  // BUG: Corriger langages pour back-end intégrer PHP et SQL
  return (
    <div className="les-competences">
      <h2>
        <i className="fa-solid fa-code"></i> Compétences
      </h2>

      {userCompetencesData.map((competence, i) => {
        return (
          <div key={i} className="competences">
            <h3>{competence.name}</h3>
            {competence.elements.map((element, index) => {
              return (
                <div key={index} className="competences_elements">
                  {userCompetenceElementData.map((el, i) => {
                    if (el._id === element) {
                      return (
                        <div key={i}>
                          <p>{el.title}</p>
                          {el.list.map((item, i) => {
                            return (
                              <span key={i} className="competences_elements">
                                {items.map((it, i) => {
                                  if (it._id === item) {
                                    const src =
                                      "https://img.shields.io/badge/" +
                                      it.itemName +
                                      "-eeeeee?logo=" +
                                      it.badge +
                                      "&logoColor=" +
                                      it.logoColor;
                                    return (
                                      <img
                                        key={i}
                                        alt="Static Badge"
                                        src={src}
                                      />
                                    );
                                  }
                                })}
                              </span>
                            );
                          })}
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Competences;
