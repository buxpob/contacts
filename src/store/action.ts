import { Contact, Contacts, Users } from './../types/types';
import { createAction } from '@reduxjs/toolkit';

export const updateContacts = createAction<Contacts>('updateContacts');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const editCurrentContact = createAction<Contact>('editCurrentContact');

export const editCurrentContactStatus = createAction<boolean>('addCurrentContact');

export const choiceSearchText = createAction<string>('choiceSearchText');

export const editContactStatus = createAction<boolean>('isEditContact');

export const setError = createAction<string | null>('setError');

export const editNewContactStatus = createAction<boolean>('addNewContact');

export const getUsers = createAction<Users>('getUser');
