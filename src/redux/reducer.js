import { combineReducers } from 'redux';

// import { statusFilters } from './constans';

const contactsInitialState = [
  { id: 'id-1', contact: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', contact: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', contact: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', contact: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];

    case 'contacts/deleteContact':
      return state.filter(item => item.id !== action.payload);

    case 'filter/setFilter':
      return state.filter(item =>
        item.contact.toLowerCase().includes(action.payload.toLowerCase())
      );

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
