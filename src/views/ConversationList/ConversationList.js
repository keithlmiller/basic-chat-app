import React, { useContext } from 'react';
import ConversationListItem from './ConversationListItem';
import { UserContext } from '../../ChatApp';

function ConversationList({conversations}) {
    const handleSelect = (convoId) => {
        // TODO with more time: handle multiple conversations
        console.log('handleSelect convoId', convoId)
    }

    const currentUser = useContext(UserContext)

    return (
        <div className='conversations'>
            {conversations.map(convo => 
                <ConversationListItem 
                    toUsernames={convo.usersIds.filter(id => id !== currentUser)} 
                    onSelect={() => handleSelect(convo.id)}
                />
            )}
            
            <ConversationListItem 
                onSelect={() => handleSelect('')}
                isEmpty={true} 
            />
        </div>
);
}

export default ConversationList;
