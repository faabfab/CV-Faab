const LeftSocials = ({ links }) => {
  return (
    <div className="left_content_studies">
      <h3>
        <i className="fa-solid fa-link"></i> Liens
      </h3>
      {links.map((link, index) => {
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
