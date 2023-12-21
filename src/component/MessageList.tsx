import React from 'react';

/**
 * Represents a component for rendering a list of messages.
 * @param {object} props - The properties object.
 * @param {array} props.messages - An array of message objects. Default value is an empty array.
 * @returns {JSX.Element} - The rendered list of messages as a JSX element.
 */
const MessageList = ({ messages = [] }) => {  // assign a default value: an empty array
    return (
        <ul>
            {Array.isArray(messages) && messages.map((message) => (  // check if messages is an array before map over it
                <li key={message.id}>
                    <h3>{message.sender}</h3>
                    <p>{message.text}</p>
                </li>
            ))}
        </ul>
    );
};

export default MessageList;