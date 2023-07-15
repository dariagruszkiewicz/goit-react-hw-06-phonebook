import { nanoid } from 'nanoid';

export const addContact = (contact, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      contact,
      id: nanoid(),
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: {
      id,
    },
  };
};
