import "./index.scss";
import arrowUpUrl from "../../assets/arrow-up.svg";
import arrowDownUrl from "../../assets/arrow-down.svg";
import { useState } from "react";
const Contact = ({ contact }) => {
  const [iseExpanded, setIsExpanded] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setIsExpanded(!iseExpanded);
  }

  return (
    <div className="contact-container">
      <header className="contact-header-container">
        <img src={contact.avatar} alt={contact.firstName} />
        <h4>{contact.firstName}</h4>
        <img
          className="contact-header-arrow"
          src={iseExpanded ? arrowUpUrl : arrowDownUrl}
          style={{ height: 24, width: 24 }}
          onClick={handleToggle}
        />
      </header>
      {iseExpanded && (
        <div className="contact-togglable">
          <section className="contact-content-container">
            <div>
              <strong>Address:</strong> <span>{contact.address}</span>
            </div>
            <div>
              <strong>Phone number:</strong> <span>{contact.phone}</span>
            </div>
          </section>
          <div className="contact-controlls-container">
            <button className="danger-button">DELETE</button>
            <button className="primary-button">EDIT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
