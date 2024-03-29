import React from "react";
import propTypes from "prop-types";
import c from "./Contacts.module.css";

type Cont ={
  id:string;
  name:string;
  number:string;
  }

interface ContactsProps{
  contacts:Cont[];
  deleteContact:(id:string)=>void;
}

function Contacts({ contacts, deleteContact }:ContactsProps) {
  return (
    <ul className={c.contacts_list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {number}</span>
          <button type="button" id={id} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: propTypes.array,
  deleteContact: propTypes.func,
};
export default Contacts;
