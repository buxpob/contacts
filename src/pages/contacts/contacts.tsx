import { useState, ChangeEvent, useEffect } from 'react';
import { fetchContacts } from '../../store/actions/contactsActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import ContactItem from '../../components/contact-item/card';
import { User } from '../../types/types';

export default function ContactsScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const { error, loading, contacts } = useAppSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);


  return (
    <div className='page-info'>

      <div className='contacts container'>

        <div>

          <h2 className='contacts__title container__title'>Список контактов</h2>

          <form className="contacts__form form">
            <div className='contacts__filter form__item'>
              <label className='contacts__filter-label form__item-label' htmlFor="filter">Фильтр:</label>
              <input className='contacts__filter-input form__item-input' name="filter" id="filter" placeholder='Введите имя' maxLength={20} type="text" />
              {/* <button className='contacts__filter-button' type='button'></button> */}
            </div>

            <div className='contacts__search form__item'>
              <label className='contacts__search-label form__item-label' htmlFor="search">Поиск:</label>
              <input className='contacts__search-input form__item-input' name="search" id="lastname" placeholder='Введите имя' maxLength={20} type="text" />
            </div>

            {/* <div className="authorization__item authorization__buttons form__item">
              <button className='authorization__buttons-element' type="submit">выход</button>
            </div> */}

          </form>

          {loading && <p className='contacts__loading-text'>Loading...</p>}
          {error && <p className='contacts__loading-error'>{error}</p>}

          <div className='contacts-list'>
            {contacts.map((contact: User) => <ContactItem contact={contact} key={contact.id}/>)}
          </div>
        </div>
        <div className='contacts__info'>
          <h3 className='contacts__info-title'>Информация о контакте</h3>
        </div>
      </div>
    </div>
  );
}
