import s from './SearchBox.module.css';
import { IoMdSearch } from 'react-icons/io';

const SearchBox = ({ onSearchName }) => {
  return (
    <div className={s.searchBox}>
      <input
        onChange={e => onSearchName(e.target.value)}
        className={s.input}
        placeholder="Find contacts by name"
        type="text"
        name="name"
      />
      <IoMdSearch className={s.iconSearch} />
    </div>
  );
};

export default SearchBox;
