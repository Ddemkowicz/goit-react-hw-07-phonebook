import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    number: '',
  });

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (existingContact) {
      alert(`"${values.name}" in already in contacts.`);
    } else {
      dispatch(addContact(values));
      setValues({ name: '', number: '' });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Phonebook</h1>
      <div className={css.ContactFrom}>
        <label className={css.label}>Name: </label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label}>Number: </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={values.number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleNameChange: PropTypes.func,
  handleNumberChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
};

export default ContactForm;
