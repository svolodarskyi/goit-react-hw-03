import { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import initContacts from './initData.json';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

import { RiContactsBook3Line } from 'react-icons/ri';

const LOCAL_STORAGE_KEY = 'contacts';

const App = () => {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contacts, setContacts] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedData?.length) {
      return savedData;
    }
    return initContacts;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = searchVal => {
    if (searchVal.trim() === '') {
      setFilteredContacts([]);
      return;
    }
    setFilteredContacts(prev =>
      prev.filter(item =>
        item.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  const handleAddition = (values, action) => {
    const { name, number } = values;
    const newContact = {
      id: crypto.randomUUID(),
      name,
      number,
    };
    setContacts(prev => [...prev, newContact]);
    action.resetForm();
  };

  const handleDelition = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };
  return (
    <div className="container">
      <h1 className="title">
        <RiContactsBook3Line />
        Phonebook
      </h1>
      <ContactForm onContactAdded={handleAddition} />
      <SearchBox onSearchName={handleSearch} />
      <ContactList
        contactsProp={filteredContacts.length > 0 ? filteredContacts : contacts}
        onContactDeleted={handleDelition}
      />
    </div>
  );
};
export default App;
