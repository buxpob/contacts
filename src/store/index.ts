import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './slices/contacts';

const rootReducer = combineReducers({
  contacts: contactsReducer
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
