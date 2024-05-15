import React from "react";
import Header from "./../components/cv/Header";
import User from "./../datas/user.json";
import Left from "../components/cv/Left";
import Content from "../components/cv/Content";
import "./../scss/cv/cv.scss";
import Competences from "../components/cv/Competences";

function Cv() {
  return (
    <React.StrictMode>
      <div className="a4">
        <Header user={User} />
        <div className="container">
          <Left user={User} />
          <div className="container_content">
            <Content />
          </div>
          <div className="container_competences">
            <Competences />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Cv;
