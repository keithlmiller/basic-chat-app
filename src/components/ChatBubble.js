import React from 'react';
import './ChatBubble.scss';

function ChatBubble({ isCurrentUser, timeStamp, content }) {
    return (
        <div className={`chat-bubble ${isCurrentUser ? 'chat-bubble__current' : ''}`}>
            <div className='chat-bubble__content'>
                {content}
            </div>
        </div>
    );
}

export default ChatBubble;
