import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Represents a single item in a conversation list.
 * @param {Object} props - The props for the ConversationItem component.
 * @param {Object} props.conversation - The conversation object.
 * @param {string} props.conversation.id - The ID of the conversation.
 * @param {string} props.conversation.name - The name of the conversation.
 * @param {string} props.conversation.lastMessage - The last message in the conversation.
 * @returns {JSX.Element} The rendered ConversationItem component.
 */
const ConversationItem = ({ conversation }) => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`/MsgView/conversation/${conversation.id}`);
    };

    return (
        <div onClick={handleClick}>
            <h2>{conversation.name}</h2>
            <p>{conversation.lastMessage}</p>
        </div>
    );
};

export default ConversationItem;