// import { ChangeEvent, FormEvent, useRef } from 'react';
import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppRoute } from '../../const/const';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { loginAction } from '../../store/api-actions';
// import { AuthData } from '../../types/types';

export default function AuthScreen(): JSX.Element {
  // const { users } = useAppSelector((state) => state);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // const onSubmit = (authData: AuthData) => {
  //   dispatch(loginAction(authData));
  // };

  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();

  //   if (loginRef.current !== null && passwordRef.current !== null) {
  //     onSubmit({
  //       login: loginRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //   }
  // };

  return (
    <div className='page-info'>
      <div className='authorization container'>

        <h1 className='authorization__title'>Авторизация</h1>
        <form
          className='authorization__form form'
          action=''
          // onSubmit={handleSubmit}
        >
          <div className='authorization__item form__item'>
            <label className='authorization__item-label form__item-label' htmlFor='firstname'></label>
            <input
              ref={loginRef}
              className='authorization__item-input form__item-input'
              name='name'
              id='name'
              placeholder='Введите имя'
              maxLength={20}
              type='text'
              required
            />
            <p className='authorization__clue-name'>{}Введите имя</p>
          </div>

          <div className='authorization__item form__item'>
            <label className='authorization__item-label form__item-label' htmlFor='password' ></label>
            <input
              ref={passwordRef}
              className='authorization__item-input form__item-input'
              name='password'
              id='password'
              placeholder='Введите пароль'
              maxLength={20}
              type='password'
              required
            />
            <p className='authorization__clue-password'>Введите пароль</p>
          </div>

          <div className='authorization__item authorization__buttons form__item'>
            <button
              className='authorization__button'
              type='submit'
              // onClick={() => navigate(AppRoute.Contacts)}
            >вход
            </button>
            <span className='authorization__link'>регистрация</span>
          </div>

        </form>
      </div>
    </div>
  );
}
