import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={inputFilterChange} />
    </label>
  );
};
