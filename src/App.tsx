import { Routes, Route } from 'react-router-dom';
import AuthScreen from './pages/auth/auth';
import ContactsScreen from './pages/contacts/contacts';

export default function App(): JSX.Element {
  return (
    <div className="page-main">
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/contacts" element={<ContactsScreen />} />
      </Routes>
    </div>
  );
}
