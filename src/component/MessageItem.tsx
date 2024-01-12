import React from 'react';

/**
 * Represents a message item component.
 *
 * @param {Object} props - The props object containing the message.
 * @param {Object} props.message - The message object.
 * @param {string} props.message.sender - The sender of the message.
 * @param {string} props.message.text - The text content of the message.
 * @returns {JSX.Element} - The rendered message item component.
 */
const MessageItem = ({ message }) => {
    console.log('Rendering MessageItem', message);

    return (
        <div>
            <p><strong>{message.sender}</strong>: {message.text}</p>
        </div>
    );
};

export default MessageItem;