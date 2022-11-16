import React from "react";

function Notification({ notification }) {
  return (
    <div>
        <div>{notification.companyName}</div>
        <div>{notification.companyPhone}</div>
        <div>{notification.companyAddress}</div>
        <div>What's new</div>
        <div>{notification.notificationBody}</div>
        <div><a href={notification.companyUrl}>Source</a></div>
    </div>
  );
}

export default Notification;
