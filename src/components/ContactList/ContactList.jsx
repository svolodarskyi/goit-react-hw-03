import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contactsProp, onContactDeleted }) => {
  return (
    <>
      <ul className={s.contactListWrapper}>
        {contactsProp.map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            onContactDeleted={onContactDeleted}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
