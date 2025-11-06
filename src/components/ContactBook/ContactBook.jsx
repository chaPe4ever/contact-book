import { useState } from "react";

import "./index.scss";
import JohnAvatar from "../../assets/John.png";
import JaneAvatar from "../../assets/Jane.png";
import DefaultAvatar from "../../assets/default-avatar.svg";
import Contact from "../Contact/Contact";
import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContactForm";

import { v4 as uuidv4 } from "uuid";

const unique_id = uuidv4();

const initialContacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "Bahnhofstrasse 2, Zurich",
    phone: "0791112233",
    avatar: JohnAvatar,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    address: "Dorfplatz 5, Basel",
    phone: "0791112244",
    avatar: JaneAvatar,
  },
];

const ContactBook = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [isAddContactFromVisible, setIsAddContactFormVisible] = useState(false);

  function handleAddContactVisibility(e) {
    e.preventDefault();
    setIsAddContactFormVisible(!isAddContactFromVisible);
  }

  function handleAddNewContact(formData) {
    console.log(formData);
    const newObj = {
      ...formData,
      id: unique_id,
      avatar: formData.avatar
        ? typeof formData.avatar === "string"
          ? formData.avatar
          : URL.createObjectURL(formData.avatar)
        : DefaultAvatar,
    };
    setContacts([...contacts, newObj]);
    setIsAddContactFormVisible(!isAddContactFromVisible);
  }

  function onDeleteContactCb(contactToDelete) {
    setContacts([
      ...contacts.filter((contact) => contactToDelete.id !== contact.id),
    ]);
  }

  function onEditContactCb(contactToEdit) {
    setContacts(
      contacts.map((contact) =>
        contact.id === contactToEdit.id ? contactToEdit : contact
      )
    );
  }

  return (
    <div className="contact-book-container">
      <div className="contact-book-content">
        <h1>Contact Book</h1>

        {!isAddContactFromVisible && (
          <div
            className="contact-book-add-button"
            onClick={handleAddContactVisibility}
          >
            <Button iconTxt="+" />
          </div>
        )}

        {isAddContactFromVisible && (
          <div className="contact-book-add-form">
            <ContactForm
              handleCancel={handleAddContactVisibility}
              onSubmitCb={handleAddNewContact}
            />
          </div>
        )}

        {contacts.map((contact) => (
          <div className="contact-book-contacts">
            <Contact
              key={contact.id}
              data={contact}
              onDeleteContactCb={onDeleteContactCb}
              onEditContactCb={onEditContactCb}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactBook;
