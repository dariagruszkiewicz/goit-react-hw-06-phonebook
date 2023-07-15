// import { statusFilters } from './constans';

const initialState = {
  contacts: [],
  //   filters: { status: statusFilters.all },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [...state, action.payload];
    }
    case 'deleteContact': {
      return state.contacts.filter(item => item.id !== action.payload);
    }
    default:
      return state;
  }
};
