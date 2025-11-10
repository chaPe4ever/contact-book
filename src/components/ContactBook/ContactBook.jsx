import "./index.scss";
import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContactForm";

import { getAvatarFromPath, getUid } from "../../utils/utils";
import { fetchContacts } from "../../utils/api";

const ContactBook = () => {
  const [contacts, setContacts] = useState(null);
  const [isAddContactFromVisible, setIsAddContactFormVisible] = useState(false);

  useEffect(() => {
    const fetchContactsAsync = async () => {
      const contacts = await fetchContacts();
      setContacts(contacts);
    };
    fetchContactsAsync();
  }, []);

  function handleAddContactVisibility(e) {
    e.preventDefault();
    setIsAddContactFormVisible(!isAddContactFromVisible);
  }

  function handleAddNewContact(formData) {
    const newObj = {
      ...formData,
      id: getUid,
      avatar: getAvatarFromPath(formData.avatar),
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
        {!contacts ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>Contact Book</h1>
            {!isAddContactFromVisible && (
              <Button
                iconTxt="+"
                className="contact-book-add-button"
                onClick={handleAddContactVisibility}
              />
            )}
            {isAddContactFromVisible && (
              <ContactForm
                handleCancel={handleAddContactVisibility}
                onSubmitCb={handleAddNewContact}
                className="contact-book-add-form"
              />
            )}
            {contacts.map((contact) => (
              <Contact
                key={contact.id}
                data={contact}
                onDeleteContactCb={onDeleteContactCb}
                onEditContactCb={onEditContactCb}
                className="contact-book-contacts"
              />
            ))}
          </>
        )}
        )
      </div>
    </div>
  );
};

export default ContactBook;
