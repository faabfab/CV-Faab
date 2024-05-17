const LeftPict = ({ pict, city, cp }) => {
  return (
    <div className="left_content">
      <img src={pict} />
      <div className="left_content_location">
        {cp} {city}
      </div>
    </div>
  );
};

export default LeftPict;
