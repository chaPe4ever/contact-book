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

  function handleSubmit(formData) {
    console.log(formData);
    const newObj = {
      id: unique_id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      address: formData.address,
      avatar:
        formData.file && formData.file.size > 0
          ? URL.createObjectURL(formData.file)
          : DefaultAvatar,
    };
    console.log(newObj);
    setContacts([...contacts, newObj]);
    setIsAddContactFormVisible(!isAddContactFromVisible);
  }

  return (
    <div className="contact-book-container">
      <div className="contact-book-content">
        <h1>Contact Book</h1>

        <div
          className="contact-book-add-button"
          onClick={handleAddContactVisibility}
        >
          {!isAddContactFromVisible && <Button iconTxt="+" />}
        </div>
        <div className="contct-book-add-form">
          {isAddContactFromVisible && (
            <ContactForm
              handleCancel={handleAddContactVisibility}
              onSubmitCb={handleSubmit}
            />
          )}
        </div>

        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactBook;
