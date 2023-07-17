// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 'id-1', contact: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', contact: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', contact: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', contact: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(contact, number) {
//         return {
//           payload: {
//             contact,
//             id: nanoid(),
//             number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },

//     filterContact(state, action) {
//       return state.filter(item =>
//         item.contact.toLowerCase().includes(action.payload.toLowerCase())
//       );
//     },
//   },
// });

// export const { addContact, deleteContact, filterContact } =
//   contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
