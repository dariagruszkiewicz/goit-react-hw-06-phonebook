import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  (contact, number) => {
    return {
      payload: {
        contact,
        id: nanoid(),
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const filterContact = createAction('contacts/filterContact');
