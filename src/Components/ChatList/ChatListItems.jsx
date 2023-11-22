import React from "react";
import Avatar from "./Avatar";

const ChatListItems = (props) => {
  const selectChat = (e) => {
    const parentChildren = Array.from(e.currentTarget.parentNode.children);
    parentChildren.forEach((child) => child.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${props.active ? props.active : ""} `}
    >
      <Avatar
        image={props.image }
        isOnline={props.isOnline}
      />

      <div className="userMeta">
        <p>{props.name}</p>
        <span className="activeTime">32 mins ago</span>
      </div>
    </div>
  );
};

export default ChatListItems;
