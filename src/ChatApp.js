import React, { useState, useMemo } from 'react';
import ConversationList from './views/ConversationList/ConversationList';
import ConversationPage from './views/ConversationPage/ConversationPage';
import './ChatApp.scss';

const initialConversations = {
    ids: ['convo1'],
    conversationsById: {
        convo1: {
            id: 'convo1',
            usersIds: ['user1', 'user2'],
            messages: [],
        },
    }
}

const mockUsers = {
    ids: ['user1', 'user2'],
    usersById: {
        'user1': {
            convoIds: ['convo1']
        },
        'user2': {
            convoIds: ['convo1']
        }
    }
}

export const UserContext = React.createContext('');

function ChatApp({userId}) {
    const [conversations, setConversations] = useState(initialConversations);
    const [activeConvoId, setActiveConvoId] = useState(initialConversations.ids[0]);

    const addMessage = ({message, convoId}) => {
        if (conversations.conversationsById[convoId]) {
            const newConversations = {
                ...conversations,
                conversationsById: {
                    ...conversations.conversationsById,
                    [convoId]: {
                        ...conversations.conversationsById[convoId],
                        messages: [
                            ...conversations.conversationsById[convoId].messages,
                            { userId, text: message },
                        ]
                    }
                }
            }
            return setConversations(newConversations);
        }

    }

    const userConversations = useMemo(() => mockUsers.usersById[userId].convoIds.map(id => conversations.conversationsById[id]), [userId, conversations]);

    return (
        <UserContext.Provider value={userId}>
            <div className="chat-app">
                <header className='app-header'>
                    <h2>My Chat Application</h2>
                </header>
                <section className='app-content'>
                    <section className='conversation-list'>
                        <ConversationList
                            conversations={userConversations} 
                        />
                    </section>
                    <section className='conversation-view'>
                        <ConversationPage
                            submitMessage={addMessage}
                            messages={conversations.conversationsById[activeConvoId].messages}
                            convoId={activeConvoId}
                        />
                    </section>
                </section>
                
            </div>
        </UserContext.Provider>
    );
}

export default ChatApp;
