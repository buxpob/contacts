import { Users, User } from '../../types/types';
import ContactItem from '../contact-item/contact-name';
import { useAppSelector } from '../../hooks';

type ContactsListProps = {
  contacts: Users;
};

export default function ContactsList({ contacts }: ContactsListProps): JSX.Element {
  const { inputSearchText } = useAppSelector((state) => state);

  const filterContacts = (contact: User) => contact.name.toLowerCase().includes(inputSearchText.toLowerCase());

  return (
    <div className='contacts-list'>
      {contacts.filter(filterContacts).map((contact: User) => (
        <div
          key={contact.id}
        >
          <ContactItem contact={contact} />
        </div>))}
    </div>
  );
}
