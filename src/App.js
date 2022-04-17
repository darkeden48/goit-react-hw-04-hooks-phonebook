import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.some((el) => el.name === contact.name)) {
      alert(contact.name + " is already in contacts");
      return;
    }
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // const { contacts, filter } = this.state;
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    const data = window.localStorage.getItem("contacts");
    const localData = JSON.parse(data);
    console.log(localData);
    setContacts(localData);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   formSubmit = (contact) => {
//     const inputId = nanoid();
//     if (this.state.contacts.some((el) => el.name === contact.name)) {
//       alert(this.state.name + " is already in contacts");
//       return;
//     }
//     this.setState((prev) => ({
//       contacts: [...prev.contacts, { ...contact, id: inputId }],
//     }));
//     console.log(contact);
//   };

//   handleFilterChange = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   deleteContact = (id) => {
//     this.setState({
//       contacts: this.state.contacts.filter((contact) => contact.id !== id),
//     });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter)
//     );
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmit} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.handleFilterChange} />
//         <Contacts
//           contacts={filteredContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
// export default App;
