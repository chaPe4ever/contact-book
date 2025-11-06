import "./index.scss";
import arrowUpUrl from "../../assets/arrow-up.svg";
import arrowDownUrl from "../../assets/arrow-down.svg";
import { useState } from "react";
const Contact = ({ contact }) => {
  const [iseExpanded, _] = useState(false);
  return (
    <div className="contact-container">
      <header className="contact-header-container">
        <img src={contact.avatar} alt={contact.firstName} />
        <h4>{contact.firstName}</h4>
        <img
          src={iseExpanded ? arrowDownUrl : arrowUpUrl}
          style={{ height: 24, width: 24 }}
        />
      </header>
      <section className="contact-content-container"></section>
      <div className="contaact-controlls-container"></div>
    </div>
  );
};

export default Contact;
