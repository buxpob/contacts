import { Contact, Contacts, Users } from './../types/types';
import { AuthorizationStatus } from '../const/const';
import { choiceContact, choiceSearchText, requireAuthorization, setUsers, setDataLoadedStatus, updateContacts } from './action';
import { createReducer } from '@reduxjs/toolkit';

type InitialState = {
  currentContact: Contact | null,
  inputSearchText: string,
  contacts: Contacts,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean,
  users: Users | null,
}

const initialState: InitialState = {
  currentContact: null,
  // {
  //   name: '',
  //   username: '',
  //   email: '',
  //   avatar: '',
  //   id: ''
  // },
  inputSearchText: '',
  contacts: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: true,
  users: [],
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
    })
    .addCase(updateContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUsers, (state, action) => {
      state.users = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
  // .addCase(deleteContact, (state, action) => {
  //   state.contacts = action.payload;
  // });
});
