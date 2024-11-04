import React, { useEffect, useState } from "react";
import Header from "./../components/cv/Header";
import Left from "../components/cv/Left";
import FormationFrontEnd from "../components/cv/FormationFrontEnd";
import Entreprise from "../components/cv/Entreprise";
import "./../scss/cv/cv.scss";
import Competences from "../components/cv/Competences";
import Hobbies from "../components/cv/Hobbies";
import FreelanceOldContent from "../components/cv/FreelanceOldContent";

// Importing All data from a service to simulate asynchronous calls.
import { getUser, getUserLinks, getUserStudies } from "./../services/user";

function Cv() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const userFetch = async () => {
      const responseOk = await getUser();
      if (responseOk) {
        setUserData(responseOk);
      } else {
        setError(true);
      }
    };
    userFetch();
  }, []);

  const [userLinksData, setUserLinksData] = useState([]);

  useEffect(() => {
    const userLinksFetch = async () => {
      const responseLinksOk = await getUserLinks();
      if (responseLinksOk) {
        setUserLinksData(responseLinksOk);
      } else {
        setError(true);
      }
    };
    userLinksFetch();
  }, []);

  const [userStudiesData, setUserStudiesData] = useState([]);

  useEffect(() => {
    const userStudiesFetch = async () => {
      const responseStudiesOk = await getUserStudies();
      if (responseStudiesOk) {
        setUserStudiesData(responseStudiesOk);
      } else {
        setError(true);
      }
    };
    userStudiesFetch();
  }, []);

  if (!error) {
    return (
      <React.StrictMode>
        <div className="a4">
          <Header user={userData} />
          <div className="container">
            <Left
              userData={userData}
              userLinksData={userLinksData}
              userStudiesData={userStudiesData}
            />
            <div className="container_content">
              <FormationFrontEnd />
              <FreelanceOldContent />
              <Entreprise />
            </div>
            <div className="container_competences">
              <Competences />
              <Hobbies />
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
  return <h2>Erreur</h2>;
}

export default Cv;
