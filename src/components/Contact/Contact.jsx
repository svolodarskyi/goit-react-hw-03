import s from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';

const Contact = ({ name, number, id, onContactDeleted }) => {
  return (
    <div className={s.contactWrapper}>
      <div className={s.contacts}>
        <p className={s.contactName}>
          <span className={s.icon}>
            <IoPersonSharp />
          </span>

          {name}
        </p>
        <p className={s.contactPhone}>
          <span className={s.icon}>
            <FaPhoneAlt />
          </span>
          {number}
        </p>
      </div>
      <button className={s.deleteButton} onClick={() => onContactDeleted(id)}>
        <MdOutlineDelete className={s.deleteButtonIcon} />
      </button>
    </div>
  );
};

export default Contact;
