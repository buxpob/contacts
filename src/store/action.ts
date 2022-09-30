import { User } from './../types/types';
import { createAction } from '@reduxjs/toolkit';

export const choiceContact = createAction<{currentContact: User}>('choiceContact');

export const choiceSearchText = createAction<{ inputSearchText: string }>('choiceSearchText');
