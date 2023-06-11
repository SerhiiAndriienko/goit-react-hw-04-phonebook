import { useState, useEffect } from 'react';
import './App.css';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getFromStorage = JSON.parse(localStorage.getItem('contacts'));
    if (getFromStorage) {
      setContacts(getFromStorage);
    }
  }, []);

  const filterChange = filterValue => {
    setFilter(filterValue);
  };

  const handleValueChange = array => {
    setContacts(array);
  };

  const onDeleteContact = contactId => {
    const newArray = contacts.filter(contact => contact.id !== contactId);
    handleValueChange(newArray);
    if (newArray.length === 0) {
      localStorage.removeItem('contacts');
    }
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        contacts={contacts}
        handleValueChange={handleValueChange}
      ></ContactForm>

      <h2>Contacts</h2>
      <Filter filter={filter} filterChange={filterChange}></Filter>
      <ContactList
        filter={filter}
        contacts={contacts}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </div>
  );
}
