import { store } from '../store/index';
import { TIMEOUT_SHOW_ERROR } from './../const/const';
import { setError, setDataLoadedStatus, updateContacts, choiceContact } from './action';
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

export const deleteContact = createAsyncThunk<void, Contact, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'deleteContact',
  async (contact, { dispatch, getState}) => {
    const { contacts, currentContact } = getState();
    const current = contacts.findIndex((item) => item.id === contact.id);
    dispatch(updateContacts([...contacts.slice(0, current), ...contacts.slice(current + 1)]));
    if (currentContact && currentContact.id === contact.id) {
      dispatch(choiceContact({currentContact: null}));
    }

    // await api.get(APIRoute.Contacts);
  },
);

// export const checkAuthAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'checkAuth',
//   async (_arg, { dispatch, extra: api }) => {
//     await api.get(APIRoute.Users);
//     try {
//       await api.get(APIRoute.Users);
//       dispatch(requireAuthorization(AuthorizationStatus.Auth));
//     } catch {
//       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//     }
//   },
// );

// export const loginAction = createAsyncThunk<void, AuthData, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'fetchUsers',
//   async (_arg, { dispatch, extra: api }) => {
//     const { data } = await api.get<Users>(APIRoute.Users);
//     dispatch(setUsers(data));
// saveToken(token);
// dispatch(requireAuthorization(AuthorizationStatus.Auth));
// dispatch(redirectToRoute(AppRoute.Contacts));
//   },
// );
