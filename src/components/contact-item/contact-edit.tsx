import { ChangeEvent, useState } from 'react';
import { EMPTY_CONTACT } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { editCurrentContactStatus, editNewContactStatus, editCurrentContact, editContactStatus } from '../../store/action';
import { addContactAction, editContactAction, fetchContactsAction } from '../../store/api-actions';
import { Contact } from '../../types/types';

type ContactInfoEditProps = {
  contact: Contact,
}

export default function ContactInfoEdit({ contact }: ContactInfoEditProps): JSX.Element {
  const { isNewContact } = useAppSelector((state) => state);
  const { username, nickname, email, avatar, id } = contact;

  const dispatch = useAppDispatch();

  const [ formData, setFormData ] = useState({
    username,
    nickname,
    email,
    avatar,
    id
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const editContactHandle = () => {
    store.dispatch(editContactAction(formData));
  };

  const deleteContactHandle = () => {
    dispatch(editCurrentContact(EMPTY_CONTACT));
    dispatch(editContactStatus(false));
    dispatch(editCurrentContactStatus(false));
    dispatch(editNewContactStatus(false));
  };

  const addContactHandle = () => {
    store.dispatch(addContactAction(formData));
    store.dispatch(fetchContactsAction());
  };

  return (
    <form>
      <div className='contact-info'>
        <label htmlFor='avatar'></label>
        <input
          className='contact-info__input'
          type='text'
          name='avatar'
          value={formData.avatar}
          onChange={fieldChangeHandle}
          placeholder='место для фотографии'
        />

        <label htmlFor="username">Имя:</label>
        <input
          className='contact-info__input'
          type='text'
          name='username'
          value={formData.username}
          onChange={fieldChangeHandle}
          placeholder='Введите имя контакта'
        />

        <label htmlFor='nickname'>Nickname:</label>
        <input
          className='contact-info__input'
          type='text'
          name='nickname'
          value={formData.nickname}
          onChange={fieldChangeHandle}
          placeholder='Введите nickname контакта'
        />

        <label htmlFor='email'>Email:</label>
        <input
          className='contact-info__input'
          type='text'
          name='email'
          value={formData.email}
          onChange={fieldChangeHandle}
          placeholder='Введите email контакта'
        />
      </div>

      {!isNewContact
        ?
        <button
          className='button-info__save contact-info__button'
          type='button'
          onClick={editContactHandle}
        >
        Сохранить контакт
        </button>
        :
        <>
          <button
            className='button-info__save contact-info__button'
            type='button'
            onClick={addContactHandle}
          >
          Добавить контакт
          </button>

          <button
            className='button-info__save contact-info__button'
            type='button'
            onClick={deleteContactHandle}
          >
          Удалить контакт
          </button>
        </>}
    </form>

  );
}
