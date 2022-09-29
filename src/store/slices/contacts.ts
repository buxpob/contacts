import { Users } from '../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ContactsState = {
  loading: boolean;
  error: string;
  contacts: Users;
}

const initialState: ContactsState = {
  loading: false,
  error: '',
  contacts: []
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<Users>) {
      state.loading = false;
      state.contacts = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export default contactsSlice.reducer;
