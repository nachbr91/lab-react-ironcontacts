import { useState } from 'react';
import './App.css';
import data from './contacts.json';
import Contact from './components/Contact/Contact';

function App() {
  const [contacts, setContacts] = useState(data.slice(0, 5));

  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return <Contact contact={contact} key={index + Date.now()} />;
          })}
        </tbody>
      </table>
      <contact />
    </div>
  );
}
export default App;
