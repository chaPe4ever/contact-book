import { useState } from "react";

import "./index.scss";
import JohnAvatar from "../../assets/John.png";
import JaneAvatar from "../../assets/Jane.png";
import Contact from "../Contact/Contact";

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
  const [contacts, _] = useState(initialContacts);
  return (
    <div className="contact-book-container">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactBook;
