import ContactsList from '../../components/contacts-list/contacts-list';
import { useAppSelector } from '../../hooks';
import { Users } from '../../types/types';
import ContactInfo from '../../components/contact-item/contact-info';
import Search from '../../components/contacts-search/search';

type ContactsScreenProps = {
  contacts: Users;
}

export default function ContactsScreen({ contacts }: ContactsScreenProps): JSX.Element {
  const { currentContact } = useAppSelector((state) => state);
  // const dispatch = useAppDispatch();

  // const { error, loading, contacts } = useAppSelector((state) => state.contacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div className='page-info'>
      <div className='contacts container'>
        <div className='contacts__main'>
          <h3 className='contacts__title container__title'>Список контактов</h3>
          <div className='contacts__username'>Пользователь: </div>
          <form className="contacts__form form">

            <Search />

          </form>

          {/* {loading && <p className='contacts__loading-text'>Loading...</p>}
          {error && <p className='contacts__loading-error'>{error}</p>} */}

          <ContactsList contacts={contacts}/>

        </div>
        <div className='contacts__info'>
          <h3 className='contacts__info-title'>Информация о контакте</h3>
          <div>

            {currentContact.name ? <ContactInfo contact={currentContact} /> : ''}

          </div>
        </div>
      </div>
    </div>
  );
}
