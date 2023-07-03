const setContacts = contacts => {
  try {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } catch (error) {
    alert(`Error: ${error}`);
  }
};

const getContscts = () => {
  try {
    return JSON.parse(localStorage.getItem('contacts'));
  } catch (error) {
    alert(`Error: ${error}`);
  }
};

const Storage = {
  setContacts,
  getContscts,
};
export default Storage;
