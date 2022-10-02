import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { isEditContact } from '../../store/action';
import { deleteContactAction } from '../../store/api-actions';
import ContactInfoEdit from './contact-edit';

export default function ContactInfo(): JSX.Element {
  const { currentContact, isEdit } = useAppSelector((state) => state);
  const { username, nickname, email, avatar, id } = currentContact;

  const dispatch = useAppDispatch();

  return (
    <>
      {isEdit
        ?
        <>
          <p>{avatar}</p>
          <p>Имя:<br />{username}</p>
          <p>Login:<br />{nickname}</p>
          <p>Email:<br />{email}</p>

          <button
            className='button-info__edit contact-info__button'
            type='button'
            onClick={() => dispatch(isEditContact(false))}
          >
            Редактировать контакт
          </button>

        </>
        : <ContactInfoEdit contact={currentContact}/>}

      <button
        className='button-info__delete contact-info__button'
        type='button'
        onClick={() => {
          store.dispatch(deleteContactAction(id));
          dispatch(isEditContact(true));
        }}
      >
        Удалить контакт
      </button>
    </>
  );
}
