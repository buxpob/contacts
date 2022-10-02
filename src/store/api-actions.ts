import { store } from '../store/index';
import { TIMEOUT_SHOW_ERROR } from './../const/const';
import { setError, setDataLoadedStatus, updateContacts, choiceContact, editContact, isEditContact } from './action';
import { Contacts, Contact } from './../types/types';
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
    const { inputSearchText } = getState();
    const { data } = await api.get<Contacts>(`${APIRoute.Contacts}?q=${inputSearchText}`);

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
      dispatch(choiceContact({
        username: '',
        nickname: '',
        email: '',
        avatar: '',
        id: ''
      }));
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
    dispatch(editContact({ ...currentContact, ...contact }));
    dispatch(isEditContact(true));
  },
);
