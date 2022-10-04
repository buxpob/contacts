import { useEffect } from 'react';
import { Contact } from '../../types/types';
import { useAppSelector } from '../../hooks';
import ContactItem from '../contact-item/contact-name';
import Loading from '../loading/loading';
import { store } from '../../store';
import { fetchContactsAction } from '../../store/api-actions';

export default function ContactsList(): JSX.Element {
  const { isDataLoaded, contacts, inputSearchText } = useAppSelector((state) => state);

  useEffect(() => {
    store.dispatch(fetchContactsAction());
  }, [inputSearchText]);

  return (
    <div className='contacts-list'>
      {contacts.length < 1 && !isDataLoaded && <p className='contacts-list__empty'>Контактов нет</p>}
      {isDataLoaded ? <Loading /> : ''}
      {contacts.map((contact: Contact) => (
        <div
          key={contact.id}
        >
          <ContactItem contact={contact} />
        </div>))}
    </div>
  );
}
