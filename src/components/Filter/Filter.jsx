import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterChange = e => {
    const value = e.target.value;
    dispatch(filterContact(value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={inputFilterChange} />
    </label>
  );
};
