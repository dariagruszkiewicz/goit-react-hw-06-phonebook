import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('Contacts:')) || []);
  }, []);

  const addNewContact = (contact, number) => {
    const name = contacts.map(item => item.contact);
    if (name.includes(contact)) {
      alert(`${contact} is alredy in contacts.`);
    } else {
      setContacts([
        ...contacts,
        {
          contact,
          id: nanoid(),
          number: number,
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem('Contacts:', JSON.stringify(contacts));
  }, [contacts]);

  const filtredContacts = () => {
    const filtredNames = contacts.filter(item =>
      item.contact.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredNames;
  };

  const inputFilterChange = e => {
    const value = e.target.value;
    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));

    localStorage.removeItem(id);
  };

  const filteredContacts = filtredContacts();

  return (
    <div className={css.wrapper}>
      <h1>Phonebooks</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={inputFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
