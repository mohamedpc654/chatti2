import React, { useState } from "react";
import ChatListItems from "./ChatListItems";
import trois from "../../assets/chatlist/trois2.png";
import search from "../../assets/chatlist/search2.png";
import "./ChatList.css";

const ChatList = () => {
  const allChatUsers = [
    {
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/347401489_1680344465813356_2367628926995975538_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dsynjf__EgkAX9jU1Wp&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAyz7-kaOSRi9gxd0fuL6qaYrQzjvVLVN3LkMt-G7h4EA&oe=6561DA5E",

      id: 1,
      name: "Mohamed Azaiz",
      active: true,
      isOnline: true,
    },

    {
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/363329809_667884358577869_7038351947479680353_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rb31oygdtqMAX8mSTHn&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCqCtFl_Vz-54PbXoPSrMRQ-jM_N3gFXDrLZ7BRjrn3Fg&oe=6562154D",
      id: 3,
      name: "Houssem ",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-1/392865317_1361683591446312_9046470558124441215_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pBw9uoLRg0sAX9sh5_X&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCO4TnP5he0NZOY2eHbMr64TwiV-k0GB9BRrav7zFK4UA&oe=65618F6B",
      id: 4,
      name: "Eyaa",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/403731625_851823440283608_1828828202972389835_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nQ_VNF4ePDIAX_rUOs9&_nc_ht=scontent.ftun8-1.fna&oh=00_AfA-0XDRWQDXpfFKZPafK-NVxqXpg0QD0R-Kl_0HkFJV5g&oe=6562A9A6",
      id: 5,
      name: "Assia",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/376803298_856430952758785_7164394013845783739_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yIs01RWH2EIAX8MAa97&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCtLvw39QjuQRyzZWpsqbH8cKTVrKCwYuvbWA_Rznx0ZA&oe=6561FA78",
      id: 6,
      name: "Amine",
      active: false,
      isOnline: true,
    },

    {
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/345614776_207673392034446_3625958973823036530_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O8j_SgdLJNIAX93KcwC&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBxfyxNCea1MJfEPd10GHSk1ddsu0Vxy3-8n38e2dmVrQ&oe=65615A2E",
      id: 9,
      name: "Anis",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/311566854_635651014852622_5850571388868441201_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NmD8yUZOuUAAX8KUDV8&_nc_ht=scontent.ftun8-1.fna&oh=00_AfB7igdBx8siOgzeLomg3UM1agyvadwX4PEJEGe256gBwQ&oe=6561E32B",
      id: 10,
      name: "Yacine",
      active: false,
      isOnline: false,
    },
  ];

  const [allChats, setAllChats] = useState(allChatUsers);
  const [searchInput, setSearchInput] = useState("");
// fonction pour filtre la recherche avec le nom
  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const filteredChats = allChatUsers.filter((user) =>
      user.name.toLowerCase().includes(searchInput)
    );
    setAllChats(filteredChats);
    setSearchInput(searchInput);
  };

  return (
    <div className="main__chatlist">
      <button className="btn">
        <span>New conversation</span>
      </button>
      <div className="chatlist__heading">
        <h2>Chats</h2>
        <button className="btn-nobg">
          <img src={trois} alt="" />
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input
            type="text"
            placeholder="Search Here"
            value={searchInput}
            onChange={handleSearch}
            required
          />
          <button className="search-btn">
            <img src={search} alt="" />
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {allChats.map((item, index) => (
          <ChatListItems
            name={item.name}
            key={item.id}
            animationDelay={index + 1}
            active={item.active ? "active" : ""}
            isOnline={item.isOnline ? "active" : ""}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
