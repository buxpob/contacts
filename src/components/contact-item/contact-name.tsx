import { useAppDispatch } from '../../hooks/index';
import { choiceContact } from '../../store/action';
import { Contact } from '../../types/types';

type ContactItemProps = {
  contact: Contact,
};

export default function ContactItem({ contact }: ContactItemProps): JSX.Element {
  const { username } = contact;
  const dispatch = useAppDispatch();

  return (
    <div className='contact-item'>
      <p className='contact-item-name'
        onClick={() => dispatch(choiceContact(contact))}
      >
        {username}
      </p>
    </div>
  );
}
