import bBg from "./../../scss/cv/img/black-bg.png";

const LeftContact = ({ email, tel }) => {
  return (
    <div className="left_content_contact">
      <h2>
        <i className="fa-solid fa-address-card"></i> Contact
      </h2>
      <div className="left_content_contact_items">
        <div className="left_content_contact_items_item">
          <img src={bBg} alt="" width="150px" height="26px" />
          <div className="left_content_contact_items_item_global">
            <i className="fa-solid fa-envelope"></i>
            <span className="left_content_contact_items_item_title">
              {email}
            </span>
          </div>
        </div>
        <div className="left_content_contact_items_item">
          <img src={bBg} alt="" width="150px" height="26px" />
          <div className="left_content_contact_items_item_global">
            <i className="fa-solid fa-phone"></i>
            <span className="left_content_contact_items_item_title">{tel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContact;
