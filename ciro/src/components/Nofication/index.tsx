import React from "react";
import './styles.css';

function Notification({ notification }) {
  return (
    <div className="notificationContainer">
      <div className="notificationHeader">
        <div className="test"><a href={notification.companyUrl}>{notification.companyName}</a></div>
      </div>
      <div className="notificationBody">
        <div className="notificationContactContainer">
          <div>{notification.companyPhone}</div>
          <div>{notification.companyAddress}</div>
        </div>
        <div className="boldText">What's new</div>
        <div>{notification.notificationBody}</div>
        {notification.notificationSource && <div><a href={notification.notificationSource}>Source</a></div>}
      </div>
    </div>
  );
}

export default Notification;
