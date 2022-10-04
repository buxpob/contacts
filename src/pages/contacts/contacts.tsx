import ContactsList from '../../components/contacts-list/contacts-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ContactInfo from '../../components/contact-item/contact-info';
import Search from '../../components/contacts-search/contacts-search';
import { store } from '../../store';
import { fetchContactsAction } from '../../store/api-actions';
import { editCurrentContactStatus, editCurrentContact, editContactStatus, editNewContactStatus } from '../../store/action';
import { AppRoute, EMPTY_CONTACT } from '../../const/const';
import { getUserSessionStorage, removeUserSessionStorage } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/error-message/error-message';

store.dispatch(fetchContactsAction());

export default function ContactsScreen(): JSX.Element {
  const { isCurrentContact } = useAppSelector((state) => state);

  const user = getUserSessionStorage();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const newContactClickHandler = () => {
    dispatch(editNewContactStatus(true));
    dispatch(editCurrentContactStatus(true));
    dispatch(editContactStatus(true));
    dispatch(editCurrentContact(EMPTY_CONTACT));
  };

  const exitClickHandler = () => {
    navigate(AppRoute.Login);
    removeUserSessionStorage();
    dispatch(editNewContactStatus(false));
    dispatch(editCurrentContactStatus(false));
    dispatch(editContactStatus(false));
    dispatch(editCurrentContact(EMPTY_CONTACT));
  };

  return (
    <div className='page-info'>
      <ErrorMessage />
      <div className='contacts container'>
        <div className='contacts__main'>
          <h3 className='contacts__title container__title'>Список контактов</h3>
          <div className='contacts__main-user'>
            <div className='contacts__username'>Пользователь: {user}</div>
            <button
              className='contacts__main-exit'
              type='button'
              onClick={exitClickHandler}
            >Выход
            </button>
          </div>
          <form className="contacts__form form">

            <Search />

          </form>

          <button
            className='new-contact-button'
            type='button'
            onClick={newContactClickHandler}
          >Создать новый контакт
          </button>

          <ContactsList />

        </div>
        <div className='contacts__info'>
          <h3 className='contacts__info-title'>Информация о контакте</h3>
          <div>

            {isCurrentContact && <ContactInfo />}

          </div>
        </div>
      </div>
    </div>
  );
}
