import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm({ contacts, handleValueChange }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const addContact = e => {
    e.preventDefault();

    const newContactName = name;

    let isContactExist = null;

    if (contacts[0] !== undefined) {
      isContactExist = contacts.some(
        contact => contact.name === newContactName
      );

      if (isContactExist) {
        alert(`${newContactName} is already in contacts.`);
        return;
      }
      const newContact = {
        name: name,
        number: number,
        id: nanoid(),
      };

      const newArray = [...contacts, newContact];

      handleValueChange(newArray);
    } else {
      const newContact = {
        name: name,
        number: number,
        id: nanoid(),
      };
      const newArray = [newContact, ...contacts];
      handleValueChange(newArray);
    }

    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <form onSubmit={addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Z\s'\\-]*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example: John, Anne-Marie, Charles O'Connell"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="number"
            pattern="[0-9+\- ]+"
            title="Phone number must consist of digits and can contain spaces, dashes, parentheses, and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
