import { useAppDispatch } from '../../hooks/index';
import { choiceContact } from '../../store/action';
import { User } from '../../types/types';

type ContactItemProps = {
  contact: User;
};

export default function ContactItem({ contact }: ContactItemProps): JSX.Element {
  const { name } = contact;
  const dispatch = useAppDispatch();

  return (
    <div className='contact-item'>
      <p className='contact-item-name'
        onClick={() => dispatch(choiceContact({currentContact: contact}))}
      >
        {name}
      </p>
    </div>
  );
}
