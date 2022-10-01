import { store } from '../../store';
import { deleteContact } from '../../store/api-actions';
import { Contact } from '../../types/types';

type ContactInfoProps = {
  contact: Contact,
};

export default function ContactInfo({ contact }: ContactInfoProps): JSX.Element {
  const { name, username, email, avatar } = contact;

  return (
    <>
      <div className='contact-info'>
        <p>{avatar}</p>
        <p>Имя: {name}</p>
        <p>Логин: {username}</p>
        <p>Email: {email}</p>
      </div>

      <button
        className='button-info__delete contact-info__button'
        type='button'
        onClick={() => {
          store.dispatch(deleteContact(contact));
        }}
      >
        Удалить контакт
      </button>

      <button
        className='button-info__edit contact-info__button'
        type='button'
      >
        Редактировать контакт
      </button>

      <button
        className='button-info__save contact-info__button'
        type='button'
      >
        Удалить контакт
      </button>
    </>
  );
}
