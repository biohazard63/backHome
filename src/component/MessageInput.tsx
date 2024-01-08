import React, { useState } from 'react';

/**
 * Represents a component that allows users to input and submit messages.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Function} props.onMessageSubmit - The callback function to be called when a message is submitted.
 * @returns {JSX.Element} The message input form.
 */
const MessageInput = ({ onMessageSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() === '') return;
        onMessageSubmit(message);
        setMessage('');
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};
// import firebase from "firebase/compat/app";
export default MessageInput;