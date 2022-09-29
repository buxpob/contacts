import { Users } from './../../types/types';
import { AppDispatch } from '../index';
import axios from '../../axios/index';
import { contactsSlice } from '../slices/contacts';

export const fetchContacts = (count = 5) => async (dispatch: AppDispatch) => {
  try {
    dispatch(contactsSlice.actions.fetching());
    const response = await axios.get<Users>('contacts', {
      params: { count }
    });
    dispatch(contactsSlice.actions.fetchSuccess(
      response.data
    ));
  } catch (e) {
    dispatch(contactsSlice.actions.fetchError(e as Error));
  }
};
