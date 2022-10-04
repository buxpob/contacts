import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { editContactStatus } from '../../store/action';
import { deleteContactAction } from '../../store/api-actions';
import ContactInfoEdit from './contact-edit';

export default function ContactInfo(): JSX.Element {
  const { currentContact, isEdit, isNewContact } = useAppSelector((state) => state);
  const { username, nickname, email, info, id } = currentContact;

  const dispatch = useAppDispatch();

  const deleteContactClickHandler = () => {
    store.dispatch(deleteContactAction(id));
    dispatch(editContactStatus(true));
  };

  return (
    <>
      {!isEdit
        ?
        <>

          <p>Имя:<br />{username}</p>
          <p>Login:<br />{nickname}</p>
          <p>Email:<br />{email}</p>
          <p>Заметки:<br />{info}</p>

          <button
            className='button-info__edit contact-info__button'
            type='button'
            onClick={() => dispatch(editContactStatus(true))}
          >
            Редактировать контакт
          </button>

        </>
        : <ContactInfoEdit contact={currentContact}/>}

      {!isNewContact
        &&
        <button
          className='button-info__delete contact-info__button'
          type='button'
          onClick={deleteContactClickHandler}
        >
          Удалить контакт
        </button>}
    </>
  );
}
