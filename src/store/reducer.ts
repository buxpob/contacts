import { EMPTY_CONTACT } from './../const/const';
import { Contact, Contacts, Users } from './../types/types';
import { editCurrentContact, choiceSearchText, setDataLoadedStatus, updateContacts, editContactStatus, editCurrentContactStatus, editNewContactStatus, getUsers } from './action';
import { createReducer } from '@reduxjs/toolkit';

type InitialState = {
  isCurrentContact: boolean,
  currentContact: Contact,
  inputSearchText: string,
  contacts: Contacts,
  error: string | null,
  isDataLoaded: boolean,
  isEdit: boolean,
  isNewContact: boolean,
  users: Users,
}

const initialState: InitialState = {
  isCurrentContact: false,
  currentContact: EMPTY_CONTACT,
  inputSearchText: '',
  contacts: [],
  error: null,
  isDataLoaded: true,
  isEdit: false,
  isNewContact: false,
  users: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(editCurrentContact, (state, action) => {
      state.currentContact = action.payload;
    })
    .addCase(editCurrentContactStatus, (state, action) => {
      state.isCurrentContact = action.payload;
    })
    .addCase(choiceSearchText, (state, action) => {
      state.inputSearchText = action.payload;
    })
    .addCase(editContactStatus, (state, action) => {
      state.isEdit = action.payload;
    })
    .addCase(editNewContactStatus, (state, action) => {
      state.isNewContact = action.payload;
    })
    .addCase(getUsers, (state, action) => {
      state.users = action.payload;
    });
});
