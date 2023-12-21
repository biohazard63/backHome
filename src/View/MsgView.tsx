import React, { useState } from 'react';

import ConversationList from '../component/ConversationList';
import MessageList from '../component/MessageList';

/**
 * MsgView represents a message view component in a chat application.
 *
 * @component
 * @example
 * ```jsx
 * <MsgView />
 * ```
 */
const MsgView: React.FC = () => {
    const [currentConversation, setCurrentConversation] = useState(null);

    const handleConversationClick = (conversationId) => {
        // a changer si vous avez vos propres donnees de conversation
        const conversationData = {
            id: conversationId,
            messages: [
                { id: 1, sender: 'User'+conversationId, text: 'Hi'},
            ],
        }
        setCurrentConversation(conversationData);
    };

    return (
        <div>
            <h1>Message</h1>
            <div>
                <ConversationList onConversationClick={handleConversationClick} />
                <div>
                    {currentConversation && <MessageList messages={currentConversation.messages} />}
                </div>
            </div>
        </div>
    );
};

export default MsgView;