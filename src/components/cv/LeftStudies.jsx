const LeftStudies = ({ userStudiesData }) => {
  return (
    <div className="left_content_studies">
      <h3>
        <i className="fa-solid fa-graduation-cap"></i> Etudes, formations
      </h3>
      <ul>
        {userStudiesData.map((study, index) => {
          return (
            <li key={index}>
              {study.name}
              <br />
              <span>
                {study.establishment} - {study.city}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftStudies;
