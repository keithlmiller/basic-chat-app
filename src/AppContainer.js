import React, { useState } from 'react';
import ChatApp from './ChatApp';

const users = [ 'user1', 'user2' ];

function AppContainer() {
    const [currentUser, setCurrentUser] = useState('user1');

    return (
        <div className="app-container">
            <div className='intro'>
                (This section is for mocking multi-user functionality)
                Choose User:
                <select onChange={(e) => setCurrentUser(e.target.value)}>
                    {users.map(user => <option value={user}>{user}</option>)}
                </select>
            </div>
            
            <ChatApp userId={currentUser} />
        </div>
    );
}

export default AppContainer;
