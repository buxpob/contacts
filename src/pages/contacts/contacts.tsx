import ContactsList from '../../components/contacts-list/contacts-list';
import { useAppSelector } from '../../hooks';
import ContactInfo from '../../components/contact-item/contact-info';
import Search from '../../components/contacts-search/contacts-search';
import { store } from '../../store';
import { fetchContactsAction } from '../../store/api-actions';
import { useEffect } from 'react';

export default function ContactsScreen(): JSX.Element {
  const { inputSearchText, currentContact } = useAppSelector((state) => state);

  useEffect(() => {
    store.dispatch(fetchContactsAction());
  }, [inputSearchText]);

  return (
    <div className='page-info'>
      <div className='contacts container'>
        <div className='contacts__main'>
          <h3 className='contacts__title container__title'>Список контактов</h3>
          <div className='contacts__username'>Пользователь: </div>
          <form className="contacts__form form">

            <Search />

          </form>

          <ContactsList />

        </div>
        <div className='contacts__info'>
          <h3 className='contacts__info-title'>Информация о контакте</h3>
          <div>

            {currentContact.username && <ContactInfo />}

          </div>
        </div>
      </div>
    </div>
  );
}
