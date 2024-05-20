import "./../../scss/cv/competences.scss";

const Competences = ({ competences }) => {
  return (
    <div className="les-competences">
      <h2>
        <i className="fa-solid fa-code"></i> Compétences
      </h2>

      {competences.map((competence, i) => {
        return (
          <div key={i} className="competences">
            <h3>{competence.name}</h3>
            {competence.elements.map((element, index) => {
              return (
                <div key={index} className="competences_elements">
                  <p>{element.type}</p>
                  {element.list.map((item, index) => {
                    const src =
                      "https://img.shields.io/badge/" +
                      item.name +
                      "-eeeeee?logo=" +
                      item.badge;
                    return <img key={index} alt="Static Badge" src={src} />;
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
