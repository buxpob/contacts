import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/error-message/error-message';
import { AppRoute } from '../../const/const';
import { useAppSelector } from '../../hooks';
import { saveUserSessionStorage } from '../../services/user';
import { store } from '../../store';
import { fetchUsersAction } from '../../store/api-actions';

store.dispatch(fetchUsersAction());

export default function AuthScreen(): JSX.Element {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const [errorData, setErrorData] = useState({
    isEmptyLogin: false,
    isEmptyPassword: false,
    isCorrectLogin: true,
    isCorrectPassword: true,
  });

  const { users } = useAppSelector((state) => state);

  const navigate = useNavigate();

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    name === 'login' && setErrorData({ ...errorData, isEmptyLogin: false });
    name === 'password' && setErrorData({ ...errorData, isEmptyPassword: false });
  };

  const AuthorizationSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.password === '') {
      setErrorData({ ...errorData, isEmptyPassword: true });
    }

    if (formData.login === '') {
      setErrorData({ ...errorData, isEmptyLogin: true });
    }

    const currentUser = users.find((user) => user.login === formData.login);

    if (!currentUser && (formData.login.length > 0) && (formData.password.length > 0)) {
      setErrorData({ ...errorData, isCorrectLogin: false });
    }

    if (currentUser && (formData.password.length > 0) && (currentUser.password !== formData.password)) {
      setErrorData({ ...errorData, isCorrectLogin: true, isCorrectPassword: false });
    }

    if (currentUser && (currentUser.password === formData.password)) {
      navigate(AppRoute.Contacts);
      saveUserSessionStorage(currentUser.login);
    }
  };

  return (
    <div className='page-info'>
      <ErrorMessage />
      <div className='authorization container'>

        <h1 className='authorization__title'>Авторизация</h1>
        <form
          className='authorization__form form'
          action=''
          onSubmit={AuthorizationSubmitHandler}
        >
          <div className='authorization__item form__item'>
            <label className='authorization__item-label form__item-label' htmlFor='login'></label>
            <input
              className='authorization__item-input form__item-input'
              name='login'
              id='login'
              placeholder='Введите логин'
              maxLength={20}
              type='text'
              value={formData.login}
              onChange={fieldChangeHandler}
            />
            {errorData.isEmptyLogin && <p className='authorization__clue-login'>Введите логин</p>}
            {!errorData.isCorrectLogin && <p className='authorization__clue-login'>Пользователь не найден</p>}


          </div>

          <div className='authorization__item form__item'>
            <label className='authorization__item-label form__item-label' htmlFor='password' ></label>
            <input
              className='authorization__item-input form__item-input'
              name='password'
              id='password'
              placeholder='Введите пароль'
              maxLength={20}
              type='password'
              value={formData.password}
              onChange={fieldChangeHandler}
            />
            {errorData.isEmptyPassword && <p className='authorization__clue-password'>Введите пароль</p>}
            {!errorData.isCorrectPassword && <p className='authorization__clue-login'>Неверный пароль</p>}
          </div>

          <div className='authorization__item authorization__buttons form__item'>
            <button
              className='authorization__button'
              type='submit'
            >вход
            </button>
            <span className='authorization__link'>регистрация</span>
          </div>

        </form>
      </div>
    </div>
  );
}
