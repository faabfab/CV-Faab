// import { useState, useEffect } from "react";
// import { getUserLinks } from "./../../services/user";

const LeftSocials = ({ userLinksData }) => {
  // const [userLinksData, setUserLinksData] = useState({});
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const userLinksFetch = async () => {
  //     const responseLinksOk = await getUserLinks();
  //     if (responseLinksOk) {
  //       setUserLinksData(responseLinksOk);
  //     } else {
  //       setError(true);
  //     }
  //   };
  //   userLinksFetch();
  // }, []);

  return (
    <div className="left_content_studies">
      <h3>
        <i className="fa-solid fa-link"></i> Liens
      </h3>
      {userLinksData.map((link, index) => {
        const src = `./img/links/${link.icon}`;

        return (
          <a href={link.url} key={index}>
            <img src={src} alt={link.name} />
          </a>
        );
      })}
    </div>
  );
};

export default LeftSocials;
