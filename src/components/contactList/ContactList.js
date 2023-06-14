import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ContactList({ filter, contacts, onDeleteContact }) {
  useEffect(() => {
    if (contacts !== undefined && contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <ul>
      {contacts[0] === undefined ? (
        <span
          style={{
            fontStyle: 'Italic',
            textAlign: 'center',
            display: 'block',
          }}
        >
          Your phonebook is empty
        </span>
      ) : filter === '' ? (
        contacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              onClick={() => {
                onDeleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map(contact => (
            <li key={contact.id}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                onClick={() => {
                  onDeleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          ))
      )}
    </ul>
  );
}
ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
