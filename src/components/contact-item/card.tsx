import { User } from '../../types/types';

type ContactItemProps = {
  contact: User;
};

export default function ContactItem({ contact }: ContactItemProps): JSX.Element {
  const { id, name } = contact;

  return (
    <div className='contact-item'>
      <p>{name}</p>
    </div>
  );
}
