import { useState, ChangeEvent } from 'react';
// import axios from 'axios';
// import validator from 'validator';
// import { URL_CONTACTS, URL_USERS } from '../../constants/url';

export default function AuthScreen(): JSX.Element {

  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='page-info'>
      <div className='authorization container'>

        <h1 className='authorization__title'>Авторизация</h1>
        <form className='authorization__form form'>
          <div className='authorization__item form__item'>
            <label className='authorization__item-label form__item-label' htmlFor='firstname'></label>
            <input className='authorization__item-input form__item-input' onChange={fieldChangeHandle} value={formData.name} name='name' id='name' placeholder='Введите имя' maxLength={20} type='text' required />
            <p className='authorization__clue-name'>{}Введите имя</p>
          </div>

          <div className='authorization__item form__item'>
            <label className='authorization__item-label form__item-label' htmlFor='password' ></label>
            <input className='authorization__item-input form__item-input' onChange={fieldChangeHandle} value={formData.password} name='password' id='password' placeholder='Введите пароль' maxLength={20} type='password' required />
            <p className='authorization__clue-password'>Введите пароль</p>
          </div>

          <div className='authorization__item authorization__buttons form__item'>
            <button className='authorization__button' type='submit'>вход</button>
            <a className='authorization__link' href='/'>регистрация</a>
          </div>

        </form>
      </div>
    </div>
  );
}
