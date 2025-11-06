import "./index.scss";
import arrowUpUrl from "../../assets/arrow-up.svg";
import arrowDownUrl from "../../assets/arrow-down.svg";
import { useEffect, useState } from "react";
import DefaultAvatar from "../../assets/default-avatar.svg";
import ContactForm from "../ContactForm/ContactForm";

const Contact = ({ data, onDeleteContactCb, onEditContactCb }) => {
  const [contact, setContact] = useState(data);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  useEffect(() => {
    // console.log(contact);
  });

  function handleToggleContactDetails(e) {
    e.preventDefault();
    if (!isEditFormVisible) {
      setIsCardExpanded(!isCardExpanded);
    }
  }

  function handleShowEditForm(e) {
    e.preventDefault();
    setIsEditFormVisible(true);
  }

  function handleHideEditForm(e) {
    e.preventDefault();
    setIsEditFormVisible(false);
  }

  function handleEditContact(contact) {
    console.log(contact);
    setContact(contact);
    setIsEditFormVisible(false);
    onEditContactCb(contact);
  }

  function handleDeleteContact(e) {
    e.preventDefault();

    onDeleteContactCb(contact);
  }

  return (
    <div className="contact-container">
      <header className="contact-header-container">
        <img
          src={
            contact.avatar
              ? typeof contact.avatar === "string"
                ? contact.avatar
                : URL.createObjectURL(contact.avatar)
              : DefaultAvatar
          }
          alt={contact.firstName}
        />
        <h4>
          {contact.firstName} {contact.lastName}
        </h4>
        <img
          className="contact-header-arrow"
          src={isCardExpanded ? arrowUpUrl : arrowDownUrl}
          style={{ height: 30, width: 30 }}
          onClick={handleToggleContactDetails}
        />
      </header>
      {isCardExpanded && !isEditFormVisible && (
        <div className="contact-togglable">
          <section className="contact-content-container">
            <div>
              <strong>First name:</strong> <span>{contact.firstName}</span>
            </div>
            <div>
              <strong>Last name:</strong> <span>{contact.lastName}</span>
            </div>
            <div>
              <strong>Address:</strong> <span>{contact.address}</span>
            </div>
            <div>
              <strong>Phone number:</strong> <span>{contact.phone}</span>
            </div>
          </section>
          <div className="contact-controlls-container">
            <button className="danger-button" onClick={handleDeleteContact}>
              DELETE
            </button>
            <button className="primary-button" onClick={handleShowEditForm}>
              EDIT
            </button>
          </div>
        </div>
      )}

      {isEditFormVisible && (
        <ContactForm
          onSubmitCb={handleEditContact}
          handleCancel={handleHideEditForm}
          contact={contact}
        />
      )}
    </div>
  );
};

export default Contact;
