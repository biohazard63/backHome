import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const MessageList = ({ conversationId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = () => {
            console.log('fetchMessages called');
            const db = firebase.firestore();
            const messagesCollection = db.collection('MsgUser')
                .where('conversationId', '==', conversationId)
                .orderBy('timestamp');  // Sort the messages by timestamp
            const unsubscribe = messagesCollection.onSnapshot(snapshot => {
                const fetchedMessages = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                console.log('Fetched messages in MessageList', fetchedMessages);
                setMessages(fetchedMessages);
            });

            // Clean up the listener when the component unmounts
            return unsubscribe;
        };

        return fetchMessages();
    }, [conversationId]);

    return (
        <ul>
            {Array.isArray(messages) && messages.length > 0 ? (
                messages.map((message) => (
                    <li key={message.id}>
                        <h3>{message.userId}</h3>
                        <p>{message.message}</p>
                    </li>
                ))) : (
                <p>No messages found.</p>
            )}
        </ul>
    );
};

export default MessageList