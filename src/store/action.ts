import { Contact, Contacts } from './../types/types';
import { createAction } from '@reduxjs/toolkit';
// import { AuthorizationStatus } from '../const/const';

export const updateContacts = createAction<Contacts>('updateContacts');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const choiceContact = createAction<Contact>('choiceContact');

export const choiceSearchText = createAction<string>('choiceSearchText');

export const isEditContact = createAction<boolean>('isEditContact');

export const editContact = createAction<Contact>('editContact');

export const setError = createAction<string | null>('setError');

// export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

// export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

// export const setUsers = createAction<Users | null>('getUsers');
