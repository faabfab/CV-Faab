const LeftPict = ({ pict, city, birthdate }) => {
  return (
    <div className="left_content">
      <img src={pict} />
      <div className="left_content_location">
        {birthdate} | {city}
      </div>
    </div>
  );
};

export default LeftPict;
