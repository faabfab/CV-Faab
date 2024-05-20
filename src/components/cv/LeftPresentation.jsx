const LeftPresentation = ({ presentation }) => {
  return (
    <div className="left_content_presentation">
      <h2>
        <i className="fa-solid fa-circle-info"></i> Présentation
      </h2>
      <p>{presentation}</p>
    </div>
  );
};

export default LeftPresentation;
