import React, { useState } from "react";
import "./ChatContent.css";
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem.jsx";
const ChatContent = () => {
  // Initial chat messages
  const [chat, setChat] = useState([
    {
      key: 1,
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/357492723_111695148642941_2163416847320970769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sHlbH5urMawAX-9brAq&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBFw81SiDTYwmMbLIL6aey5B6np1rw_5A4EikWnJPMwtQ&oe=656281F8",
      type: "",
      msg: "Ahla , wnk lbes",
    },
    {
      key: 2,
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/347401489_1680344465813356_2367628926995975538_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dsynjf__EgkAX9jU1Wp&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAyz7-kaOSRi9gxd0fuL6qaYrQzjvVLVN3LkMt-G7h4EA&oe=6561DA5E",
      type: "other",
      msg: "Cv Hmdlh ett?",
    },
    
    {
      key: 3,
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/357492723_111695148642941_2163416847320970769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sHlbH5urMawAX-9brAq&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBFw81SiDTYwmMbLIL6aey5B6np1rw_5A4EikWnJPMwtQ&oe=656281F8",
      type: "",
      msg: "hmdlhh , Echfma jdid hh?",
    },
    {
      key: 4,
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/347401489_1680344465813356_2367628926995975538_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dsynjf__EgkAX9jU1Wp&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAyz7-kaOSRi9gxd0fuL6qaYrQzjvVLVN3LkMt-G7h4EA&oe=6561DA5E",
      type: "other",
      msg: "hhh chyy",
    },
    
  ]);
//State  pour gérer le message d'entrée
  const [msg, setMsg] = useState("");
// Fonction scrolling to bottom when send a message
  const scrollToBottom = () => {
    const messagesEnd = document.getElementById("messagesEnd");
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };


  // Event handle for input change

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };

  // Event handle to send message with press on key "Entrée"
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };
 // Event handle for sending a message
 const handleSendClick = () => {
  if (msg.trim() !== "") {
    // Simulate sending your message
    setChat((prevChat) => [
      ...prevChat,
      {
        key: prevChat.length + 1,
        type: "me",
        msg: msg,
        image:
          "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/357492723_111695148642941_2163416847320970769_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sHlbH5urMawAX-9brAq&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBFw81SiDTYwmMbLIL6aey5B6np1rw_5A4EikWnJPMwtQ&oe=656281F8",
      },
    ]);

    // Simulate receiving a response after a delay
    setTimeout(() => {
      setChat((prevChat) => [
        ...prevChat,
        {
          key: prevChat.length + 2,
          type: "other",
          msg: "Dsi Forever hhh",
          image: "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/347401489_1680344465813356_2367628926995975538_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dsynjf__EgkAX9jU1Wp&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAyz7-kaOSRi9gxd0fuL6qaYrQzjvVLVN3LkMt-G7h4EA&oe=6561DA5E",
        },
      ]);
      scrollToBottom();
    }, 800);
    setMsg("");
    
  }
};


  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/347401489_1680344465813356_2367628926995975538_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dsynjf__EgkAX9jU1Wp&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAyz7-kaOSRi9gxd0fuL6qaYrQzjvVLVN3LkMt-G7h4EA&oe=6561DA5E"
            />
            <p>Mohamed Azaiz</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => (
            <ChatItem
              animationDelay={index + 2}
              key={itm.key}
              user={itm.type ? itm.type : "me"}
              msg={itm.msg}
              image={itm.image}
            />
          ))}
          <div id="messagesEnd" />
        </div>
      </div>

      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={msg}
            onKeyDown={onEnterPress}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={handleSendClick}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
