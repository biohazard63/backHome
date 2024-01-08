import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const MessageList = ({ conversationId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const db = firebase.firestore();
            const messagesCollection = db.collection('MsgUser');
            const messagesSnapshot = await messagesCollection.where('conversationId', '==', conversationId).get();

            const fetchedMessages = messagesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })); // map over the docs in the snapshot to create a new array of message objects
            setMessages(fetchedMessages);
        };

        fetchMessages();
    }, [conversationId]);

    return (
        <ul>
            {Array.isArray(messages) && messages.map((message) => (
                <li key={message.id}>
                    <h3>{message.userId}</h3>
                    <p>{message.message}</p>
                </li>
            ))}
        </ul>
    );
};

export default MessageList;