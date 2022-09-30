import { User } from '../../types/types';

type ContactInfoProps = {
  contact: User;
};

export default function ContactInfo({ contact }: ContactInfoProps): JSX.Element {
  const { name, username, email, avatar } = contact;

  return (
    <div>
      <p>{avatar}</p>
      <p>Имя: {name}</p>
      <p>Login: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
}
