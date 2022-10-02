import { Contact, Contacts, Users } from './../types/types';
import { AuthorizationStatus } from '../const/const';
import { choiceContact, choiceSearchText, setDataLoadedStatus, updateContacts, isEditContact, editContact } from './action';
import { createReducer } from '@reduxjs/toolkit';

type InitialState = {
  currentContact: Contact,
  inputSearchText: string,
  contacts: Contacts,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean,
  users: Users | null,
  isEdit: boolean
}

const initialState: InitialState = {
  currentContact: {
    username: '',
    nickname: '',
    email: '',
    avatar: '',
    id: ''
  },
  inputSearchText: '',
  contacts: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: true,
  users: [],
  isEdit: true
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(choiceContact, (state, action) => {
      state.currentContact = action.payload;
    })
    .addCase(choiceSearchText, (state, action) => {
      state.inputSearchText = action.payload;
    })
    .addCase(isEditContact, (state, action) => {
      state.isEdit = action.payload;
    })
    .addCase(editContact, (state, action) => {
      state.currentContact = action.payload;
    });
  // .addCase(requireAuthorization, (state, action) => {
  //   state.authorizationStatus = action.payload;
  // })
  // .addCase(setUsers, (state, action) => {
  //   state.users = action.payload;
  // })
});

