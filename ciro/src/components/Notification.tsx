import React from "react";

function Notification({ notification }) {
  return (
    <div>
        <div><a href={notification.companyUrl}>{notification.companyName}</a></div>
        <div>{notification.companyPhone}</div>
        <div>{notification.companyAddress}</div>
        <div>What's new</div>
        <div>{notification.notificationBody}</div>
        {notification.notificationSource && <div><a href={notification.notificationSource}>Source</a></div>}
    </div>
  );
}

export default Notification;
