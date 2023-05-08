import React,{ useState } from "react";
import form from "./Form.module.css";
import { nanoid } from "nanoid";

interface FormProps{
  onSubmit:(name:string,number:string)=>void;
};
// interface FormState{
//   name:string;
//   number:string;
// }

export default function Form({ onSubmit }:FormProps) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    // setName({ [event.currentTarget.name]: event.currentTarget.value });
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={form.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Имя
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameId}
          required
        />
      </label>
      <label htmlFor={numberId}>
        Номер
        <input
          type="tel"
          value={number}
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberId}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
