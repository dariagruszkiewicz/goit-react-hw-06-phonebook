import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';

const contactsInitialState = [
  { id: 'id-1', contact: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', contact: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', contact: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', contact: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
  [filterContact]: (state, action) => {
    return state.filter(item =>
      item.contact.toLowerCase().includes(action.payload.toLowerCase())
    );
  },
});
