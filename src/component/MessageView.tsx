import React from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const MessageView = () => {
    let { id: conversationId } = useParams();

    console.log('MessageView rendering for conversationId', conversationId);

    const onMessageSubmit = async (messageText) => {
        console.log('New message submitted:', messageText);

        // Save the message to Firestore
        const db = firebase.firestore();
        try {
            const docRef = await db.collection('MsgUser').add({
                message: messageText,
                conversationId: conversationId,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),  // Add a timestamp
            });
            console.log("Message written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding message:", error);
        }
    };


    return (
        <div>
            <MessageList conversationId={conversationId} />
            <MessageInput onMessageSubmit={onMessageSubmit} />
        </div>
    );
};

export default MessageView;