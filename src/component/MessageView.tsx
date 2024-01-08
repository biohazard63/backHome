import React from "react";
import { useParams } from "react-router-dom";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

// import firebase from "firebase/compat/app";

/**
 * Represents a message view component.
 * @return {ReactElement} - The rendered message view component.
 */
function MessageView() {
    let { id } = useParams();

    // Utilisez l'ID pour récupérer les messages de cette conversation
    const messages = []; // remplacez par vos données

    return (
        <div>
            <MessageList messages={messages} />
            <MessageInput />
        </div>
    );
}

export default MessageView;