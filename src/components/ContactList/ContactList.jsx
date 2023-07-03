import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const isLoading = useSelector(selectIsLoading);

  const handleDelete = e => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteContact(id));
    console.log(dispatch(deleteContact(id)));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const button = () => console.log(dispatch(getContacts()));

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contactsFilter.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={handleDelete} type="button" data-id={contact.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={button} type="button">
        LOG
      </button>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  handleDelete: PropTypes.func,
};

export default ContactList;
