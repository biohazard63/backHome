import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

import ConversationList from "../component/ConversationList";
import MessageList from "../component/MessageList";
import UserSearch from "../component/UserSearch";

const MsgView: React.FC = () => {
    const [currentConversation, setCurrentConversation] = useState(null);
    const [foundUsers, setFoundUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const handleUserSearch = async (userToFind: string) => {
        const db = firebase.firestore();
        const usersCollection = db.collection("users");
        const foundUsersSnapshot = await usersCollection
            .orderBy("name")
            .startAt(userToFind)
            .endAt(`${userToFind}\uf8ff`)
            .get();

        const fetchedUsers = foundUsersSnapshot.docs.map(doc => doc.data());

        setFoundUsers(fetchedUsers);
    };

    const handleConversationClick = (conversationId: number) => {
        const conversationData = {
            id: conversationId,
            messages: [
                { id: 1, sender: "User" + conversationId, text: "Hi" }
            ]
        };
        setCurrentConversation(conversationData);
    };
    const startConversationWithUser = async (user: any) => {
        if (!user || user.uid === undefined || !currentUser) {
            // Si personne n'est connecté, vous pouvez choisir de rediriger l'utilisateur vers la page de connexion
            // ou vous pouvez gérer l'absence d'utilisateur connecté de la meilleure façon pour votre application
            console.error('L\'utilisateur, l\'ID de l\'utilisateur, ou currentUser est indéfini(');
            return;
        }

        const db = firebase.firestore();
        const conversationsCollection = db.collection('MsgUser');

        const newConversation = {
            users: [currentUser.uid, user.uid],
            messages: [],
        };

        const newConversationRef = await conversationsCollection.add(newConversation);

        const newConversationSnapshot = await newConversationRef.get();
        const newConversationData = {id: newConversationSnapshot.id, ...newConversationSnapshot.data()};

        // Définir la nouvelle conversation comme la conversation actuelle
        setCurrentConversation(newConversationData);
    };

    useEffect(() => {
        // Récupérez l'utilisateur actuellement connecté avec Firebase Auth
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                console.log("Pas d'utilisateur connecté");
            }
        });

        return () => unregisterAuthObserver(); // Méthode de nettoyage pour unsubscribe l'observer
    }, []);

    return (
        <div>
            <h1>Message</h1>
            <UserSearch onSearch={handleUserSearch} />

            {foundUsers.map(user => (
                <div key={user.uid}>
                    <p>{user.name}</p>
                    <button onClick={() => startConversationWithUser(user)}>Commencer une conversation</button>
                </div>
            ))}

            <div>
                <ConversationList onConversationClick={handleConversationClick} />
                <div>
                    {currentConversation && <MessageList messages={currentConversation.messages}/>}
                </div>
            </div>
        </div>
    );
}

export default MsgView;

