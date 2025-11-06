import "./index.scss";
import arrowUpUrl from "../../assets/arrow-up.svg";
import arrowDownUrl from "../../assets/arrow-down.svg";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
const Contact = ({ contact }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEditVisible(true);
  }

  return (
    <div className="contact-container">
      <header className="contact-header-container">
        <img src={contact.avatar} alt={contact.firstName} />
        <h4>{contact.firstName}</h4>
        <img
          className="contact-header-arrow"
          src={isExpanded ? arrowUpUrl : arrowDownUrl}
          style={{ height: 24, width: 24 }}
          onClick={handleToggle}
        />
      </header>
      {isExpanded && !isEditVisible && (
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
            <button className="primary-button" onClick={handleEdit}>
              EDIT
            </button>
          </div>
        </div>
      )}

      {isEditVisible && <ContactForm />}
    </div>
  );
};

export default Contact;
