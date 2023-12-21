import React from 'react';
import ConversationItem from './ConversationItem';

/**
 * Represents a component that renders a list of conversations.
 *
 * @typedef {Function} ConversationList
 * @param {Object} props - The props for the ConversationList component.
 * @param {Function} props.onConversationClick - The callback function that is called when a conversation is clicked.
 * @returns {JSX.Element} - The rendered ConversationList component.
 */
const ConversationList = ({ onConversationClick }) => {
    const conversations = [
        { id: 1, name: 'User 1', lastMessage: 'Hello' },
        { id: 2, name: 'User 2', lastMessage: 'Hi' },
        { id: 3, name: 'User 3', lastMessage: 'Hey' },
    ];

    return (
        <div>
            {conversations.map(conversation => (
                <ConversationItem
                    key={conversation.id}
                    conversation={conversation}
                    onConversationClick={onConversationClick}
                />
            ))}
        </div>
    );
};

export default ConversationList;