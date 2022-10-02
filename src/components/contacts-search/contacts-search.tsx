import { useDebounce } from '../../hooks/debounced';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/index';
import { choiceSearchText } from '../../store/action';
import { DEBOUNCE_TIME } from '../../const/const';

export default function Search(): JSX.Element {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const debounced = useDebounce<string>(value, DEBOUNCE_TIME);

  useEffect(() => {
    dispatch(choiceSearchText(debounced));
  }, [debounced]);

  return (
    <div className='contacts__search form__item'>
      <label className='contacts__search-label form__item-label' htmlFor="search">Поиск:</label>
      <input
        className='contacts__search-input form__item-input'
        name='search'
        id='lastname'
        placeholder='Введите данные'
        type='text'
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </div>
  );
}
