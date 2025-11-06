import Button from "../Button/Button";
import "./index.scss";
import { useState } from "react";

const ContactForm = ({ onSubmitCb, handleCancel }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    const { name, value, files } = e.target;
    console.log(name, value, files);
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "file":
        // Allow only those types
        if (
          files[0].type === "image/jpeg" ||
          files[0].type === "image/png" ||
          files[0].type === "image/svg+xml"
        ) {
          setAvatarFile(files[0]);
        }

        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO Add validation

    const formData = new FormData(e.target);

    if (avatarFile) {
      formData.set("file", avatarFile);
    }

    onSubmitCb(Object.fromEntries(formData.entries()));
  }

  //   function onClearState

  return (
    <form onSubmit={handleSubmit} className="add-contact-container">
      <div className="contact-form-inputs-container">
        <input
          type="text"
          required
          name="firstName"
          value={firstName}
          placeholder="First name:"
          onChange={handleChange}
        />
        <input
          type="text"
          required
          name="lastName"
          value={lastName}
          placeholder="Last name:"
          onChange={handleChange}
        />
        <input
          type="text"
          required
          name="address"
          value={address}
          placeholder="Address:"
          onChange={handleChange}
        />
        <input
          type="tel"
          required
          name="phone"
          value={phone}
          placeholder="Phone number:"
          onChange={handleChange}
        />
      </div>

      <div className="choose-avatar-container">
        {!avatarFile && (
          <div>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <label htmlFor="file" className="primary-button">
              Choose Avatar
            </label>
          </div>
        )}

        {avatarFile && (
          <div className="chosen-avatar">
            <img
              src={URL.createObjectURL(avatarFile)}
              alt="Chosen avatar"
              style={{ display: "block" }}
            />
            <button type="button" onClick={() => setAvatarFile(null)}>
              X
            </button>
          </div>
        )}
      </div>

      <div className="add-contact-controlls-container">
        <button type="button" className="danger-button" onClick={handleCancel}>
          CANCEL
        </button>
        <button type="submit" className="positive-button">
          SAVE
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
