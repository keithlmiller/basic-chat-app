import React, { useState, useContext } from 'react';
import ChatBubble from '../../components/ChatBubble';
import { UserContext } from '../../ChatApp';
import './ConversationPage.scss';


function ConversationPage({userId, convoId, submitMessage, messages = []}) {
  const [newMessage, setNewMessage] = useState('');
  const currentUser = useContext(UserContext)

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    submitMessage({ convoId, message: newMessage })
    setNewMessage('')
    // TODO with more time: make chat page scroll so latest is always visible
  }

  return (
    <div className='conversation-page'>
      <div className='message-list'>
        {messages.map(message => <ChatBubble content={message.text} isCurrentUser={message.userId === currentUser} />)}
      </div>

        <form
            className='chat-input-area'
            onSubmit={handleSubmitMessage}
        >
          <textarea 
            className='chat-input'
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}>
          </textarea>
          {/* TODO with more time: make send with return keypress work */}
          <input className='send-message' type='submit' value='Send' />
        </form>
      
    </div>
  );
}

export default ConversationPage;
