import { useAppDispatch } from '../../hooks/index';
import { editCurrentContact, editCurrentContactStatus, editContactStatus, editNewContactStatus } from '../../store/action';
import { Contact } from '../../types/types';

type ContactItemProps = {
  contact: Contact,
};

export default function ContactItem({ contact }: ContactItemProps): JSX.Element {
  const { username } = contact;
  const dispatch = useAppDispatch();

  const choiseContactClickHandler = () => {
    dispatch(editCurrentContact(contact));
    dispatch(editContactStatus(false));
    dispatch(editCurrentContactStatus(true));
    dispatch(editNewContactStatus(false));
  };

  return (
    <div className='contact-item'>
      <p className='contact-item-name'
        onClick={choiseContactClickHandler}
      >
        {username}
      </p>
    </div>
  );
}
