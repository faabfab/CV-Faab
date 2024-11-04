import leftBg from "./../../scss/cv/img/left-bg.png";
import "./../../scss/cv/left.scss";
import LeftContact from "./LeftContact";
import LeftPict from "./LeftPict";
import LeftPresentation from "./LeftPresentation";
import LeftSocials from "./LeftSocials";
import LeftStudies from "./LeftStudies";

const Left = ({ userData, userLinksData, userStudiesData }) => {
  return (
    <div className="left" id="left-content">
      <img src={leftBg} className="left_bg" alt="" />
      <LeftPict pict={userData.pict} cp={userData.cp} city={userData.city} />
      <LeftContact email={userData.email} tel={userData.tel} />
      <LeftPresentation presentation={userData.presentation} />
      <LeftStudies userStudiesData={userStudiesData} />
      <LeftSocials userLinksData={userLinksData} />
    </div>
  );
};

export default Left;
