import { ChangeEvent, useState } from 'react';
import { store } from '../../store';
import { editContactAction } from '../../store/api-actions';
import { Contact } from '../../types/types';

type ContactInfoEditProps = {
  contact: Contact,
}

export default function ContactInfoEdit({ contact }: ContactInfoEditProps): JSX.Element {
  const { username, nickname, email, avatar, id } = contact;

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

  const updateStateHandle = () => {
    store.dispatch(editContactAction(formData));
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
        />

        <label htmlFor="username">Имя:</label>
        <input
          className='contact-info__input'
          type='text'
          name='username'
          value={formData.username}
          onChange={fieldChangeHandle}
        />

        <label htmlFor='nickname'>Логин:</label>
        <input
          className='contact-info__input'
          type='text'
          name='nickname'
          value={formData.nickname}
          onChange={fieldChangeHandle}
        />

        <label htmlFor='email'>Email:</label>
        <input
          className='contact-info__input'
          type='text'
          name='email'
          value={formData.email}
          onChange={fieldChangeHandle}
        />
      </div>

      <button
        className='button-info__save contact-info__button'
        type='button'
        onClick={updateStateHandle}
      >
        Сохранить контакт
      </button>

    </form>

  );
}
