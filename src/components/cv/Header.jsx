import "./../../scss/cv/header.scss";
import headerBg from "./../../scss/cv/img/header-bg.png";
import subheaderBg from "./../../scss/cv/img/subheader-bg.png";

function Header({ user }) {
  return (
    <header>
      <div className="header_bg">
        <img src={headerBg} width="794px" height="107px" />
      </div>
      <div className="header_text">
        <h1>
          {user.firstname} {user.lastname}
        </h1>
        <h2>{user.title}</h2>
      </div>
      <div className="header_bottom">
        <img src={subheaderBg} width="794px" height="13px" />
        <div className="header_bottom_text">
          Pour en savoir plus consultez le site:&nbsp;
          <a href={user.url} target="_blank" rel="noopener noreferrer">
            {user.url}
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
