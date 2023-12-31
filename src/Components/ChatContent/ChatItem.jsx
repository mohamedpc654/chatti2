import React from "react";
import Avatar from "../ChatList/Avatar";

const ChatItem = (props) => {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div className="chat__item__content">
        <div className="chat__msg">{props.msg}</div>
        <div className="chat__meta">
          <span>2 mins ago</span>
          <span>Send 1.03PM</span>
        </div>
      </div>
      <Avatar isOnline="active" image={props.image} />
    </div>
  );
};

export default ChatItem;
