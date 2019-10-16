import React from 'react';
import './ConversationList.scss';

function ConversationListItem({ onSelect, toUsernames = [], timeStamp = '', isEmpty }) {
  return (
        <div className='conversation-list-item' onClick={onSelect}>
            {isEmpty ? (
                <div className='conversation-list-item__new'>Start New Conversation</div>
            ) : (
                <div>
                    Chat with: {toUsernames.join(', ')}
                    
                    {/* TODO if more time: {timeStamp} */}
                </div>
            )}
            
        </div>
  );
}

export default ConversationListItem;
