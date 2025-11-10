import JohnAvatar from "../assets/John.png";
import JaneAvatar from "../assets/Jane.png";

export const fetchContacts = async () => {
  try {
    // Add 1 sec delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialContacts;
  } catch (error) {
    throw Error("There was an error fetching the contacts", error);
  }
};

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
