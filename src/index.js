import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const root = createRoot(document.getElementById("root"));

export default function Banner() {
  return <p className="banner">Contact Manager</p>;
}

function Contact() {
  const [contacts, setContacts] = useState([]);

  const Add = () => {
    const inputName = window.prompt("Enter a name: ");
    if (inputName !== null) {
      const inputPhone = window.prompt("Enter a Phone Number: ");
      if (inputPhone !== null) {
        const newContact = { name: inputName, phone: inputPhone };
        setContacts([...contacts, newContact]);
      }
    }
  };

  const Delete = () => {
    const deletePhone = window.prompt("Enter Phone Number to DELETE: ");
    if (deletePhone) {
      const updatedContacts = contacts.filter(
        (contact) => contact.phone !== deletePhone
      );
      setContacts(updatedContacts);
    }
  };

  const Update = () => {
    const updatePhone = window.prompt("Enter Phone to Update");
    if (updatePhone) {
      const newNumber = window.prompt("Enter New Number: ");
      if (newNumber !== null) {
        const updatedContacts = contacts.map((contact) =>
          contact.phone === updatePhone
            ? { ...contact, phone: newNumber }
            : contact
        );
        setContacts(updatedContacts);
      }
    }
  };

  return (
    <div>
      <ol className="list">
        {contacts.map((contact, index) => (
          <li key={index}>
            Name: {contact.name} | Phone: {contact.phone}
          </li>
        ))}
      </ol>
      <div className="button-container">
        <button className="button" onClick={Add}>
          Add
        </button>
        <button className="button" onClick={Delete}>
          Delete
        </button>
        <button className="button" onClick={Update}>
          Update
        </button>
      </div>
    </div>
  );
}

root.render(
  <>
    <div className="body">
      <Banner />
      <Contact />
    </div>
  </>
);
