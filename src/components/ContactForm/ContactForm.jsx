import "./index.scss";
import { useState } from "react";
import FloatingInput from "../Input/FloatingInput";
import { getAvatarFromPath } from "../../utils/utils";

const ContactForm = ({
  onSubmitCb,
  handleCancel,
  contact = {},
  className = "",
}) => {
  const [firstName, setFirstName] = useState(contact.firstName ?? "");
  const [lastName, setLastName] = useState(contact.lastName ?? "");
  const [address, setAddress] = useState(contact.address ?? "");
  const [phone, setPhone] = useState(contact.phone ?? "");
  const [avatarFile, setAvatarFile] = useState(contact.avatar);

  function handleChange(e) {
    e.preventDefault();
    const { name, value, files } = e.target;
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
        } else {
          alert(
            "The type of file you've selected is not suported. Please provide one of: jpeg, png or svg"
          );
        }

        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Add extra validation check if required

    const formData = new FormData(e.target);

    if (avatarFile) {
      formData.set("avatar", avatarFile);
    }

    const formObj = Object.fromEntries(formData.entries());

    onSubmitCb({ id: contact.id, ...formObj });
    clearFields();
  }

  function clearFields() {
    setFirstName(null);
    setLastName(null);
    setAddress(null);
    setPhone(null);
    setAvatarFile(null);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`add-contact-container ${className}`}
    >
      <div className="contact-form-inputs-container">
        <FloatingInput
          label="First name:"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
        />

        <FloatingInput
          label="Last name:"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />

        <FloatingInput
          label="Address:"
          name="address"
          value={address}
          onChange={handleChange}
        />

        <FloatingInput
          label="Phone number:"
          name="phone"
          type="tel"
          value={phone}
          onChange={handleChange}
          required
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
              src={getAvatarFromPath(avatarFile)}
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
