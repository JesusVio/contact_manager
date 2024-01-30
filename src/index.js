import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const root = createRoot(document.getElementById("root"));

export default function Banner() {
  return <p className="banner">Contact Manager</p>;
}

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  //const [email, updateEmail] = useState("");

  const Add = () => {
    const inputName = window.prompt("Enter a name: ");
    if (inputName !== null) {
      const inputPhone = window.prompt("Enter a Phone Number: ");
      if (inputPhone !== null) {
        const newContact = { name: inputName, phone: inputPhone };
        setContacts([...contacts, newContact]);
      }
    }

    return (
      <div>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              Name: {contact.name} | Phone: {contact.phone}
            </li>
          ))}
        </ul>
        <button onClick={Add}>Add</button>
      </div>
    );
  };
}

root.render(
  <>
    <div>
      <Banner />
      <Contact />
    </div>
  </>
);
