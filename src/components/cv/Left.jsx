import leftBg from "./../../scss/cv/img/left-bg.png";
import "./../../scss/cv/left.scss";
import LeftContact from "./LeftContact";
import LeftPict from "./LeftPict";
import LeftPresentation from "./LeftPresentation";
import LeftSocials from "./LeftSocials";
import LeftStudies from "./LeftStudies";

const Left = ({ user }) => {
  return (
    <div className="left" id="left-content">
      <img src={leftBg} className="left_bg" alt="" />
      <LeftPict pict={user.pict} cp={user.cp} city={user.city} />
      <LeftContact email={user.email} tel={user.tel} />
      <LeftPresentation presentation={user.presentation} />
      <LeftStudies studies={user.studies} />
      <LeftSocials links={user.links} />
    </div>
  );
};

export default Left;
