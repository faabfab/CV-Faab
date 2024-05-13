import leftBg from "./../../scss/cv/img/left-bg.png";
import "./../../scss/cv/left.scss";
import LeftContact from "./LeftContact";
import LeftPict from "./LeftPict";

const Left = ({ user }) => {
  return (
    <div className="left" id="left-content">
      <img src={leftBg} className="left_bg" alt="" />
      <LeftPict pict={user.pict} birthdate={user.birthdate} city={user.city} />
      <LeftContact email={user.email} tel={user.tel} />
    </div>
  );
};

export default Left;
