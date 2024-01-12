import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import ConversationItem from './ConversationItem';

const ConversationList = ({ onConversationClick }) => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            console.log('fetchConversations called');
            const db = firebase.firestore();
            const conversationsCollection = db.collection('MsgUser'); // Ensure this matches your collection name
            const conversationsSnapshot = await conversationsCollection.get();

            const fetchedConversations = conversationsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            console.log('Fetched conversations in ConversationList', fetchedConversations);

            setConversations(fetchedConversations);
        };

        fetchConversations();
    }, []);

    return (
        <div>
            {conversations.length > 0 ? (
                conversations.map(conversation => (
                    <ConversationItem
                        key={conversation.id}
                        conversation={conversation}
                        onConversationClick={onConversationClick}
                    />
                ))) : (
                <p>No conversations found.</p>
            )}
        </div>
    );
}
export default ConversationList;