import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Notification from './components/Nofication/index.tsx';

const notificationsApi = "https://turing-hopper.herokuapp.com/api/notifications/ac6afe60-46d0-4f5a-9f5a-2eb9e26cbd9f";

function App() {
  const [notifications, setNotifications] = useState([]);

  const fetchNotications = async () => {
    const response = await axios.get(notificationsApi);
    setNotifications(response.data);
  }
  useEffect(() => {
    console.log("SWHATAFS")
    fetchNotications();
  }, [])

  return (
    <div>
      {
        notifications.map((nofication) => {
          return <Notification key={nofication.id} notification={nofication} />
        })
      }
    </div>
  );
}

export default App;
