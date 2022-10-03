import { store } from '../store/index';
import { TIMEOUT_SHOW_ERROR, EMPTY_CONTACT } from './../const/const';
import { setError, setDataLoadedStatus, updateContacts, editCurrentContact, editContactStatus, editCurrentContactStatus, getUsers } from './action';
import { Contacts, Contact, Users } from './../types/types';
import { APIRoute } from '../const/const';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchContactsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'fetchContacts',
  async (_arg, {dispatch, extra: api, getState}) => {
    const { inputSearchText, currentContact } = getState();
    const { data } = await api.get<Contacts>(`${APIRoute.Contacts}?q=${inputSearchText}`);

    if (!data.find((contact) => contact.id === currentContact.id)) {
      dispatch(editCurrentContact(EMPTY_CONTACT));
      dispatch(editCurrentContactStatus(false));
    }

    dispatch(setDataLoadedStatus(true));
    dispatch(updateContacts(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const deleteContactAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'deleteContact',
  async (id, { dispatch, extra: api, getState}) => {
    await api.delete<Contacts>(`${APIRoute.Contacts}/${id}`);

    const { contacts, currentContact } = getState();
    const current = contacts.findIndex((item) => item.id === id);
    dispatch(updateContacts([...contacts.slice(0, current), ...contacts.slice(current + 1)]));
    if (currentContact && currentContact.id === id) {
      dispatch(editCurrentContact(EMPTY_CONTACT));
      dispatch(editCurrentContactStatus(false));
    }
  },
);

export const editContactAction = createAsyncThunk<void, Contact, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'editContact',
  async (contact, { dispatch, extra: api, getState }) => {
    await api.put<Contact>(`${APIRoute.Contacts}/${contact.id}`, {...contact});

    const { contacts, currentContact } = getState();
    const current = contacts.findIndex((item) => item.id === contact.id);
    dispatch(updateContacts([...contacts.slice(0, current), contact, ...contacts.slice(current + 1)]));
    dispatch(editCurrentContact({ ...currentContact, ...contact }));
    dispatch(editContactStatus(false));
  },
);

export const addContactAction = createAsyncThunk<void, Contact, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'addContact',
  async (contact, {dispatch, extra: api, getState }) => {
    contact.id = `${contact.username}-${(Math.floor(Math.random() * 1000) + 1)}`;
    await api.post<Contact>(APIRoute.Contacts, contact);

    const { contacts } = getState();
    dispatch(updateContacts([...contacts, contact]));
  },
);

export const fetchUsersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchUsersAction',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Users>(APIRoute.Users);

    dispatch(getUsers(data));
  },
);
