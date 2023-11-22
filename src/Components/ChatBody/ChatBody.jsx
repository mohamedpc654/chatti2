import ChatContent from '../ChatContent/ChatContent';
import ChatList from '../ChatList/ChatList';

import UserProfile from '../UserProfile/UserProfile';
import './ChatBody.css'
function ChatBody() {
  return <div className="main__ChatBody">
    
    <ChatList/>
    <ChatContent/>
    <UserProfile/> 
    
  </div>;
}

export default ChatBody;
