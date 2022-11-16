import React, { useState, useCallback, useEffect } from "react";
import './styles.css';
import phone from  '../../images/phone.jpeg';
import dropPin from  '../../images/dropPin.png';
import greenDot from  '../../images/greenDot.png';

function Notification({ notification }) {
  const [shown, setShown] = useState(false);

  // Contrived function for showing and hiding notification.
  // With real endpoint, would just hide after 60 seconds, don't need to check if time has passed.
  const checkDate = useCallback(() => {
    const currentDate = new Date();
    const notificationDate = new Date(notification.timestamp);

    if (notificationDate > currentDate) {
      setTimeout(() => {
        checkDate();
      }, 3000);
      return;
    }

    setShown(true);
    setTimeout(() => {
      setShown(false);
    }, 60 * 1000);
  }, [notification]);

  useEffect(() => {
    checkDate();
  }, [checkDate])

  if (!shown) {
    return null;
  }

  return (
    <div className="notificationContainer">
      <div className="notificationHeader">
        <div className="test">
          <img height={10} src={greenDot} alt="greenDot"/>
          <a href={notification.companyUrl}>{notification.companyName}</a>
        </div>
      </div>
      <div className="notificationBody">
        <div className="notificationContactContainer">
          <div><img height={10} src={phone} alt="phone"/>{notification.companyPhone}</div>
          <div><img height={10} src={dropPin} alt="dropPin"/>{notification.companyPhone}</div>
          <div>{notification.companyAddress}</div>
        </div>
        <div className="boldText">What's new</div>
        <div>
          <div>{notification.notificationBody}</div>
        </div>
        {notification.notificationSource && <div className="notificationSource"><a href={notification.notificationSource}>Source</a></div>}
      </div>
    </div>
  );
}

export default Notification;
