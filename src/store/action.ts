import { AppRoute } from './../const/const';
import { Contact, Contacts, Users } from './../types/types';
import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const/const';

export const choiceContact = createAction<{ currentContact: Contact | null}>('choiceContact');

export const choiceSearchText = createAction<{ inputSearchText: string }>('choiceSearchText');

export const updateContacts = createAction<Contacts>('changeContacts');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

export const setError = createAction<string | null>('setError');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const setUsers = createAction<Users | null>('getUsers');

export const deleteContactItem = createAction<string>('deleteContact');
