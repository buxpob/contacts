import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { contacts } from './mock/mock';
import AuthScreen from './pages/auth/auth';
import ContactsScreen from './pages/contacts/contacts';

export default function App(): JSX.Element {

  return (
    <div className="page-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthScreen />} />
          <Route path="/contacts" element={<ContactsScreen contacts={contacts}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
