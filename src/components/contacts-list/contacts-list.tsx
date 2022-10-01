import { Contact } from '../../types/types';
import ContactItem from '../contact-item/contact-name';
import { useAppSelector } from '../../hooks';
import Loading from '../loading/loading';

export default function ContactsList(): JSX.Element {
  const { isDataLoaded, contacts } = useAppSelector((state) => state);

  return (
    <div className='contacts-list'>
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
