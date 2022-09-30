import { choiceContact, choiceSearchText } from './action';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  currentContact: {
    name: '',
    username: '',
    email: '',
    avatar: '',
    id: ''
  },
  inputSearchText: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(choiceContact, (state, action) => {
      const { currentContact } = action.payload;

      state.currentContact = currentContact;
    })
    .addCase(choiceSearchText, (state, action) => {
      const { inputSearchText } = action.payload;

      state.inputSearchText = inputSearchText;
    });
});
