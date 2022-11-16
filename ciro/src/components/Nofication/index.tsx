import React from "react";
import './styles.css';
import phone from  '../../images/phone.jpeg';
import dropPin from  '../../images/dropPin.png';
import greenDot from  '../../images/greenDot.png';

function Notification({ notification }) {
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
        <div>{notification.notificationBody}</div>
        {notification.notificationSource && <div className="notificationSource"><a href={notification.notificationSource}>Source</a></div>}
      </div>
    </div>
  );
}

export default Notification;
